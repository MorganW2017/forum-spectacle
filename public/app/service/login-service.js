function LoginService(){
    var baseUrl = 'http://localhost:9001/login'

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
            .then()


    }

}