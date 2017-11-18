function SignupService(){
    var baseUrl = 'http://localhost:9001/register'

    function Signup(config){
        this.name = config.name.value,
        this.email = config.email.value,
        this.password = config.password.value
    }

    function logError(err) {
        console.error(err)
    }

    this.userSignup = function userSignup(signupForm){
        var newSignup = new Signup(signupForm)
        debugger
        $.post(baseUrl, newSignup)
            .then(res => console.log(res))
            .fail(logError)
    }
}