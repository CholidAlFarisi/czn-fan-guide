import os
import sys
import webbrowser
from http.server import HTTPServer, SimpleHTTPRequestHandler

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

def run():
    os.chdir(DIRECTORY)
    server_address = ('127.0.0.1', PORT)
    try:
        httpd = HTTPServer(server_address, Handler)
    except OSError:
        # Fallback to 8080 if 8000 is occupied
        alt_port = 8080
        httpd = HTTPServer(('127.0.0.1', alt_port), Handler)
        print(f"Port {PORT} in use, running on http://127.0.0.1:{alt_port}")
        webbrowser.open(f"http://127.0.0.1:{alt_port}")
        httpd.serve_forever()
        return

    print(f"==================================================")
    print(f"  Chaos Zero Nightmare Fan Guide — Local Server  ")
    print(f"  URL: http://127.0.0.1:{PORT}/index.html        ")
    print(f"  Directory: {DIRECTORY}                         ")
    print(f"  Press Ctrl+C to stop the server                ")
    print(f"==================================================")
    
    # Auto-open browser
    try:
        webbrowser.open(f"http://127.0.0.1:{PORT}/index.html")
    except Exception:
        pass

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping local server...")
        httpd.server_close()

if __name__ == '__main__':
    run()
