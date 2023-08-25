//点击登录按钮调用登录接口
let loginButton = document.querySelector('.login-button');
loginButton.addEventListener('click', function () {
    let form = document.querySelector('.login-form');
    const data = serialize(form, { hash: true, empty: true });

    if (data.username === '') {
        showToast("请输入用户名",2000);
        return;
    }

    if (data.password === '') {
        showToast("请输入密码",2000);
        return;
    }

    login(data.username, hex_md5(data.password)).then((result) => {
        console.log(result);
        if (result.retCode === "000000") {
            localStorage.setItem('accessToken', result.data.userInfo.accessToken);
            showToast("登录成功",2000, function () {
                window.location.href = '../home/home.html';
            });
        } else {
            //显示登录失败toast
            showToast("登录失败",2000);
        }
    }).catch((err) => {
        console.log(err);
    });
})