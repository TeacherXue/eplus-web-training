/**
 * `login` 函数使用提供的用户名、密码和源参数向“/api/user/login”端点发送 POST 请求。
 * @param username - username参数是用户输入的用于登录认证的用户名。
 * @param password - `password` 参数是用户尝试登录时输入的密码。
 * @returns 登录函数返回一个承诺，该承诺将解析为“/api/user/login”的 HTTP POST 请求的结果。
 */
function login(username, password) {
    return http.post("/api/user/login", {
        username: username,
        password: password,
        source: "app"
    });
}