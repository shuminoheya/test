self.addEventListener("install", () => {
    self.skipWaiting();
});

self.addEventListener("activate", () => {
    clients.claim();
});

// 404 モードのフラグ
let enabled = false;

// メッセージ受信（ON/OFF）
self.addEventListener("message", (event) => {
    if (event.data === "ENABLE_404") {
        enabled = true;
    }
    if (event.data === "DISABLE_404") {
        enabled = false;
    }
});

// fetch を横取りして 404 を返す
self.addEventListener("fetch", (event) => {
    if (enabled) {
        event.respondWith(
            new Response(
                `<h1>404</h1><p>Page Not Found</p>`,
                {
                    status: 404,
                    headers: { "Content-Type": "text/html" }
                }
            )
        );
    }
});
