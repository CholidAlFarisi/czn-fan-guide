import asyncio
import base64
import json
import os
import subprocess
import time
import urllib.request
import websockets

async def run_full_suite():
    cmd = [
        r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe',
        '--headless=new',
        '--remote-debugging-port=9228',
        '--user-data-dir=C:/Users/mucha/AppData/Local/Temp/czn_edge_debug',
        '--disable-gpu',
        '--no-first-run',
        '--no-default-browser-check',
        '--window-size=1400,1200',
        'http://127.0.0.1:8000/teambuilder.html'
    ]
    proc = subprocess.Popen(cmd)
    time.sleep(3)

    ws_url = None
    for _ in range(10):
        try:
            req = urllib.request.urlopen('http://127.0.0.1:9228/json')
            data = json.loads(req.read().decode('utf-8'))
            for page in data:
                if 'teambuilder.html' in page.get('url', ''):
                    ws_url = page.get('webSocketDebuggerUrl')
                    break
            if ws_url:
                break
        except Exception:
            pass
        time.sleep(0.5)

    if not ws_url:
        print("Failed to get WebSocketDebuggerUrl")
        proc.kill()
        return

    try:
        async with websockets.connect(ws_url, max_size=25_000_000) as ws:
            msg_id = 1
            async def send_cmd(method, params=None):
                nonlocal msg_id
                m = {'id': msg_id, 'method': method, 'params': params or {}}
                msg_id += 1
                await ws.send(json.dumps(m))
                while True:
                    resp = await ws.recv()
                    r = json.loads(resp)
                    if r.get('id') == m['id']:
                        return r.get('result', {})
    
            await send_cmd('Page.enable')
            await send_cmd('Runtime.enable')
            await asyncio.sleep(2)
    
            os.makedirs('mockup', exist_ok=True)

            # 1. Capture 3-Columns Layout
            shot = await send_cmd('Page.captureScreenshot', {'format': 'png'})
            with open('mockup/preview_czn_columns_layout.png', 'wb') as f:
                f.write(base64.b64decode(shot['data']))
            print("Saved preview_czn_columns_layout.png")
    
            # 2. Test opening Equipment Modal
            res = await send_cmd('Runtime.evaluate', {
                'expression': 'openEquipModal(1, "EQUIP_WEAPON"); document.getElementById("modalEquipPicker").classList.contains("active");',
                'returnByValue': True
            })
            print("Equipment modal opened:", res.get('result', {}).get('value'))
            await asyncio.sleep(1)
    
            shot = await send_cmd('Page.captureScreenshot', {'format': 'png'})
            with open('mockup/preview_czn_equip_modal.png', 'wb') as f:
                f.write(base64.b64decode(shot['data']))
            print("Saved preview_czn_equip_modal.png")
    
            # Equip first weapon item and close modal
            await send_cmd('Runtime.evaluate', {
                'expression': '''(() => {
                    const item = document.querySelector("#equipPickerGrid .equipment-card-item");
                    if (item) item.click();
                })()'''
            })
            await asyncio.sleep(1)
    
            # 3. Test opening Card Browser
            res = await send_cmd('Runtime.evaluate', {
                'expression': 'openCardBrowser(1); document.getElementById("modalCardBrowser").classList.contains("active");',
                'returnByValue': True
            })
            print("Card Browser modal opened:", res.get('result', {}).get('value'))
            await asyncio.sleep(1)
    
            shot = await send_cmd('Page.captureScreenshot', {'format': 'png'})
            with open('mockup/preview_czn_card_browser.png', 'wb') as f:
                f.write(base64.b64decode(shot['data']))
            print("Saved preview_czn_card_browser.png")
    
            # Close Card Browser
            await send_cmd('Runtime.evaluate', {'expression': 'closeCardBrowser();'})
            await asyncio.sleep(0.5)
    
            # 4. Test Preview Showcase Modal
            res = await send_cmd('Runtime.evaluate', {
                'expression': 'openPreviewModal(); document.getElementById("modalPreview").classList.contains("active");',
                'returnByValue': True
            })
            print("Preview Showcase modal opened:", res.get('result', {}).get('value'))
            await asyncio.sleep(1)
    
            shot = await send_cmd('Page.captureScreenshot', {'format': 'png'})
            with open('mockup/preview_czn_preview_modal.png', 'wb') as f:
                f.write(base64.b64decode(shot['data']))
            print("Saved preview_czn_preview_modal.png")
    
            # Close Preview
            await send_cmd('Runtime.evaluate', {'expression': 'closePreviewModal();'})
            await asyncio.sleep(0.5)
    
            # 5. Test Export Code and Save Loadout
            res = await send_cmd('Runtime.evaluate', {
                'expression': '''(() => {
                    const code = exportTeamCode();
                    saveCurrentLoadout();
                    return { codePrefix: code.slice(0, 5), codeLen: code.length };
                })()''',
                'returnByValue': True
            })
            print("Export & Save result:", res.get('result', {}).get('value'))
    
            # 6. Test Combat Simulator Interaction
            res = await send_cmd('Runtime.evaluate', {
                'expression': '''(() => {
                    // Play first card in hand
                    simPlayCard(0);
                    return {
                        hp: simState.dummyHp,
                        totalDmg: simState.totalDamage,
                        tenacity: simState.dummyTenacity,
                        logLines: document.getElementById("simTerminalLog").children.length
                    };
                })()''',
                'returnByValue': True
            })
            print("Combat Sim test result:", res.get('result', {}).get('value'))
    
            # Scroll to combat simulator and capture screenshot
            await send_cmd('Runtime.evaluate', {
                'expression': 'window.scrollTo(0, 1100);'
            })
            await asyncio.sleep(1)
    
            shot = await send_cmd('Page.captureScreenshot', {'format': 'png'})
            with open('mockup/preview_czn_combat_verified.png', 'wb') as f:
                f.write(base64.b64decode(shot['data']))
            print("Saved preview_czn_combat_verified.png")
    
    finally:
        proc.kill()
        subprocess.run(['cmd.exe', '/c', 'taskkill /F /IM msedge.exe'], capture_output=True)

asyncio.run(run_full_suite())
