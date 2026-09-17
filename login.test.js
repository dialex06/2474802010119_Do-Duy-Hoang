const { checkLogin } = require("./login");

describe("Kiểm tra hàm đăng nhập", () => {
    test("Đăng nhập thành công với admin và 123", () => {
        expect(checkLogin("admin", "123")).toBe(true);
    });

    test("Đăng nhập thất bại với password sai", () => {
        expect(checkLogin("admin", "456")).toBe(false);
    });

    test("Đăng nhập thất bại với username sai", () => {
        expect(checkLogin("user", "123")).toBe(false);
    });
});
