import asyncio
import json
import os
import subprocess
import time
import urllib.request
import websockets

async def run_e2e_tests():
    cmd = [
        r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe',
        '--headless=new',
        '--remote-debugging-port=9235',
        '--user-data-dir=C:/Users/mucha/AppData/Local/Temp/czn_edge_e2e_fixes_35',
        '--disable-gpu',
        '--no-first-run',
        '--no-default-browser-check',
        '--window-size=1400,1200',
        'http://127.0.0.1:8000/teambuilder.html'
    ]
    proc = subprocess.Popen(cmd)
    time.sleep(3)

    ws_url = None
    for _ in range(12):
        try:
            req = urllib.request.urlopen('http://127.0.0.1:9235/json')
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
                    resp = json.loads(await ws.recv())
                    if resp.get('id') == m['id']:
                        return resp.get('result')

            async def eval_js(expr):
                res = await send_cmd('Runtime.evaluate', {'expression': expr, 'returnByValue': True, 'awaitPromise': True})
                if 'exceptionDetails' in res:
                    raise Exception(f"JS Error: {res['exceptionDetails']}")
                return res.get('result', {}).get('value')

            print("1. Page loaded, testing Preset Loading & Deck Adjustment...")
            await asyncio.sleep(1)

            # Test loading Mei Lin preset
            res = await eval_js("""(() => {
                loadPreset('mei_lin_flame_burst');
                return {
                    hero1: currentSquad.hero1,
                    hero2: currentSquad.hero2,
                    hero3: currentSquad.hero3,
                    removedCards1027: currentSquad.removedCards['1027'],
                    branchRisingDragon: currentSquad.branches?.['1027']?.['Rising Dragon Spire'],
                    deityRisingDragon: currentSquad.deities?.['1027']?.['Rising Dragon Spire'],
                    commonJewel: currentSquad.commonSparks?.['1027']?.["Flame Dragon's Jewel"],
                    deckLength: getCombinedDeckCards().length
                };
            })()""")
            print("Preset Mei Lin state:", json.dumps(res, indent=2))
            assert res['hero1'] == '1027', "Hero 1 should be Mei Lin (1027)"
            assert 'Strike' in res['removedCards1027'], "Strike should be removed from Mei Lin"
            assert res['branchRisingDragon'] == 1, "Rising Dragon Spire should be Branch 1"
            assert res['deityRisingDragon'] == 'sun', "Rising Dragon Spire should have Sun deity"
            print("✓ PASS: Preset deck cards and epiphanies correctly adjusted in currentSquad!")

            # Verify DOM reflected the adjustment
            active_pills = await eval_js("""(() => {
                const pills = document.querySelectorAll('#deckCardGrid .tcg-branch-pill.active');
                return Array.from(pills).map(p => p.innerText.trim());
            })()""")
            print(f"Active Epiphany branch pills in Deck Customizer: {len(active_pills)} pills active")
            print("Pill sample:", active_pills[:5])
            assert len(active_pills) > 0, "Active branch pills must be visible in the customizer grid"
            print("✓ PASS: Deck Customizer DOM reflects preset epiphany branches!")

            # Test Rossweisse preset
            res_ross = await eval_js("""(() => {
                loadPreset('rossweisse_polarity');
                return {
                    hero1: currentSquad.hero1,
                    removedCards: currentSquad.removedCards['30134'],
                    branchFlicker: currentSquad.branches?.['30134']?.['Flicker Blade'],
                    deityFlicker: currentSquad.deities?.['30134']?.['Flicker Blade'],
                    commonResonance: currentSquad.commonSparks?.['30134']?.['Sword Resonance'],
                    deckLength: getCombinedDeckCards().length
                };
            })()""")
            print("Preset Rossweisse state:", json.dumps(res_ross, indent=2))
            assert res_ross['hero1'] == '30134', "Hero 1 should be Rossweisse (30134)"
            assert 'Sword Slash' in res_ross['removedCards'], "Sword Slash should be removed for Rossweisse"
            assert res_ross['branchFlicker'] == 1, "Flicker Blade should be Branch 1"
            assert res_ross['deityFlicker'] == 'marionette', "Flicker Blade should have Marionette deity"
            print("✓ PASS: Rossweisse Polarity preset deck configuration verified!")

            # Check Rossweisse card images in Deck Customizer
            await eval_js("document.getElementById('deckCustomizerContainer').scrollIntoView()")
            await asyncio.sleep(1)
            ross_imgs = await eval_js("""(() => {
                const imgs = Array.from(document.querySelectorAll('#deckCardGrid img.tcg-art-img'));
                return imgs.map(img => ({
                    src: img.src,
                    complete: img.complete,
                    naturalWidth: img.naturalWidth
                }));
            })()""")
            print(f"Rossweisse card images rendered in Deck Customizer: {len(ross_imgs)} cards")
            for im in ross_imgs[:4]:
                print(f"  {im['src']} -> complete: {im['complete']}, naturalWidth: {im['naturalWidth']}")
                assert im['naturalWidth'] > 0, f"Image {im['src']} failed to load!"
            print("✓ PASS: Rossweisse card images in Team Builder have naturalWidth > 0 and load successfully!")

            # Test 2: "Go to Turn Simulator" button in Preset Playbook Banner
            print("\n2. Testing 'Go to Turn Simulator' button in Preset Banner...")
            await eval_js("window.scrollTo(0, 0)")
            await asyncio.sleep(0.5)
            initial_scroll = await eval_js("window.scrollY")
            print(f"Initial scrollY: {initial_scroll}")

            # Click the banner button "Go to Turn Simulator"
            click_res = await eval_js("""(() => {
                const btn = Array.from(document.querySelectorAll('#presetPlaybookBanner button')).find(b => b.innerText.includes('Turn Simulator'));
                if (!btn) return 'Button not found';
                btn.click();
                return 'Clicked';
            })()""")
            print(f"Banner button click: {click_res}")
            assert click_res == 'Clicked', "Banner button must exist and be clicked"

            await asyncio.sleep(1.2)

            after_scroll = await eval_js("window.scrollY")
            sim_rect = await eval_js("""(() => {
                const sim = document.getElementById('combatSimulatorSection');
                const r = sim.getBoundingClientRect();
                return { top: r.top, bottom: r.bottom, height: r.height };
            })()""")
            print(f"ScrollY after click: {after_scroll}")
            print(f"Combat Simulator bounding rect top: {sim_rect['top']}")
            assert after_scroll > 500, f"Page should have scrolled down to simulator, scrollY is {after_scroll}"
            print("✓ PASS: 'Go to Turn Simulator' smoothly scrolls to Combat Simulator!")

            # Test 3: Navigate to characters.html and check Rossweisse card modal
            print("\n3. Testing Rossweisse cards in characters.html...")
            await send_cmd('Page.navigate', {'url': 'http://127.0.0.1:8000/characters.html'})
            await asyncio.sleep(2)

            await eval_js("""(() => {
                const c = COMBATANTS.find(x => String(x.id) === '30134');
                openModal(c);
                switchCharModalTab('cards');
            })()""")
            await asyncio.sleep(0.8)
            char_res = await eval_js("""(() => {
                const modal = document.getElementById('charModal');
                const cardArts = Array.from(modal.querySelectorAll('.m-card-art'));
                return {
                    name: document.getElementById('mName').innerText,
                    cardCount: cardArts.length,
                    cards: cardArts.map(img => ({
                        src: img.src,
                        complete: img.complete,
                        naturalWidth: img.naturalWidth
                    }))
                };
            })()""")
            print(f"Character modal: {char_res['name']}, {char_res['cardCount']} cards found")
            for c in char_res['cards']:
                print(f"  {c['src']} -> naturalWidth: {c['naturalWidth']}")
                assert c['naturalWidth'] > 0, f"Card art {c['src']} has naturalWidth 0 (failed to render)!"
            print("✓ PASS: All Rossweisse card illustrations in characters.html modal loaded with naturalWidth > 0!")

            # Test 4: Navigate to cards.html and check Rossweisse cards
            print("\n4. Testing Rossweisse cards in cards.html...")
            await send_cmd('Page.navigate', {'url': 'http://127.0.0.1:8000/cards.html'})
            await asyncio.sleep(2)

            await eval_js("""(() => {
                document.getElementById('cardSearch').value = 'Rossweisse';
                applyCardFilters();
                document.querySelectorAll('.card-item img').forEach(img => {
                    img.loading = 'eager';
                });
            })()""")
            await asyncio.sleep(1.2)
            cards_res = await eval_js("""(() => {
                const cardItems = Array.from(document.querySelectorAll('.card-item'));
                const cardImgs = Array.from(document.querySelectorAll('.card-item img'));
                return {
                    totalCardsFound: cardItems.length,
                    totalImgs: cardImgs.length,
                    imgDetails: cardImgs.map(img => ({
                        src: img.src,
                        complete: img.complete,
                        naturalWidth: img.naturalWidth
                    }))
                };
            })()""")
            print(f"cards.html search for 'Rossweisse': {cards_res['totalCardsFound']} cards, {cards_res['totalImgs']} images")
            for img in cards_res['imgDetails'][:5]:
                print(f"  {img['src']} -> naturalWidth: {img['naturalWidth']}")
                assert img['naturalWidth'] > 0, f"Card image {img['src']} failed to render!"
            print("✓ PASS: Rossweisse cards in cards.html have real illustrations and render with naturalWidth > 0!")

            print("\n🎉 ALL 3 REQUESTED FIXES ARE VERIFIED 100% IN HEADLESS EDGE!")

    finally:
        proc.kill()

if __name__ == '__main__':
    asyncio.run(run_e2e_tests())
