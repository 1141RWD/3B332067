// 確保 HTML 元素都載入完成後才執行 JS
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("feedbackForm");
    const successMessage = document.getElementById("successMessage");

    // 檢查元素是否存在，避免錯誤
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault(); // 阻擋表單預設跳轉

            const type = document.getElementById("type").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!type || !message) {
                alert("請完整填寫反饋類型與內容！");
                return;
            }

            // 1. 顯示成功訊息
            if (successMessage) {
                successMessage.style.display = "block";
            }

            // 2. 清空表單
            form.reset();

            // 3. 延遲 1.5 秒後跳回首頁
            console.log("準備跳轉..."); // 你可以在 Console 檢查有沒有跑到這
            setTimeout(() => {
                window.location.href = "index.html"; 
            }, 1500);
        });
    } else {
        console.error("找不到 feedbackForm 元素！");
    }
});