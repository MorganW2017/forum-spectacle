function LoginService(){
    var baseUrl = 'http://localhost:9001/login'
    var baseUrl2 = 'http://localhost:9001/logout'

    function Login(config){
        this.email = config.email.value,
        this.password = config.password.value
    }

    function logError(err) {
        console.error(err)
    }

    this.userLogin = function userLogin(loginForm){
        var newLogin = new Login(loginForm)
        $.post(baseUrl, newLogin)
            .then(res => console.log(res))
            .fail(logError)
    }
    this.userLogout = function userLogout(logoutForm){
        $.delete(baseUrl2)
            .then(res => console.log(res))
            .fail(logError)
    }
}