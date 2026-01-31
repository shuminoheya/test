// --------------------------------------
// 404 モードの永続フラグ
// --------------------------------------
let enabled = false;

// --------------------------------------
// インストール & アクティベート
// --------------------------------------
self.addEventListener("install", () => {
    self.skipWaiting();
});

self.addEventListener("activate", () => {
    clients.claim();
});

// --------------------------------------
// ページからのメッセージ受信
// --------------------------------------
self.addEventListener("message", (event) => {
    switch (event.data) {
        case "ENABLE_404":
            enabled = true;
            break;
        case "DISABLE_404":
            enabled = false;
            break;
    }
});

// --------------------------------------
// 高速 404 レスポンス
// --------------------------------------
const errorPage = `
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<title>404 Not Found</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
<div class="box">
    <h1>404 not found</h1>
    <p>お探しのページは見つかりませんでした。</p>
    <p>間違いと思われる場合googleに報告してください</p>
</div>
</body>
</html>
`;

// --------------------------------------
// fetch イベント（最適化済み）
// --------------------------------------
self.addEventListener("fetch", (event) => {
    if (!enabled) return; // 404 モード OFF のときは何もしない

    // 404 モード ON → 全リクエストを 404 にする
    event.respondWith(
        new Response(errorPage, {
            status: 404,
            headers: { "Content-Type": "text/html; charset=utf-8" }
        })
    );
});
