(function () {
    "use strict";

    // Service Worker 登録
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("/sw.js");
    }

    // ボタンが押されたら SW にメッセージ送信
    function setupButtons() {
        const enableBtn = document.querySelector("[data-404-enable]");
        const disableBtn = document.querySelector("[data-404-disable]");

        if (enableBtn) {
            enableBtn.addEventListener("click", () => {
                if (confirm("本当に 404 モードを有効化しますか？")) {
                    navigator.serviceWorker.controller?.postMessage("ENABLE_404");
                    alert("404 モードを有効化しました");
                }
            });
        }

        if (disableBtn) {
            disableBtn.addEventListener("click", () => {
                navigator.serviceWorker.controller?.postMessage("DISABLE_404");
                alert("404 モードを無効化しました");
            });
        }
    }

    document.addEventListener("DOMContentLoaded", setupButtons);
})();
