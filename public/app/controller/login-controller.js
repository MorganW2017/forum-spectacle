function LoginController(){
    var loginService = new LoginService()
    var loginFormElem = document.getElementById('show-login-form')
    var formstate = false
    
    this.userLogin = function userLogin(event){
        event.preventDefault()
        var loginForm = event.target
        loginService.userLogin(loginForm)
        
    }

    this.showLoginForm = function showLoginForm(){
        if(formstate){
            showButton.innerText = 'Login'
            showButton.className = 'btn btn-info'
            loginFormElem.classList.add('hidden')
            formstate = false
        }else{
            showButton.innerText = 'Cancel'
            showButton.className = 'btn btn-warning'
            loginFormElem.classList.remove('hidden')
            formstate = true
        }
    }

}