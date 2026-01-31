(function () {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("sw.js").then(() => {
            console.log("SW registered");
        });
    }

    function send(msg) {
        if (navigator.serviceWorker.controller) {
            navigator.serviceWorker.controller.postMessage(msg);
        } else {
            window.addEventListener("load", () => {
                navigator.serviceWorker.controller?.postMessage(msg);
            });
        }
    }

    document.addEventListener("DOMContentLoaded", () => {
        document.querySelector("[data-404-enable]")?.addEventListener("click", () => {
            if (confirm("本当に 404 を有効化しますか？")) {
                send("ENABLE_404");
                alert("404 を有効化しました。ページを再読み込みしてください。");
            }
        });

        document.querySelector("[data-404-disable]")?.addEventListener("click", () => {
            send("DISABLE_404");
            alert("404 を無効化しました。ページを再読み込みしてください。");
        });
    });
})();
