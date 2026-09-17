function checkLogin(user, pass) {
    return user === "admin" && pass === "123";
}

// Xử lý form đăng nhập
const form = document.getElementById("loginForm");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const message = document.getElementById("message");

        if (checkLogin(username, password)) {
            message.textContent = "Đăng nhập thành công!";
        } else {
            message.textContent = "Sai username hoặc password!";
        }
    });
}

// Cho Jest sử dụng hàm
if (typeof module !== "undefined") {
    module.exports = { checkLogin };
}
