function LoginController(){
    var loginService = new LoginService()
    var loginFormElem = document.getElementById('add-login-form')
    var showButton = document.getElementById('show-button')
    var formstate = false
    
    this.userLogin = function userLogin(event){
        event.preventDefault()
        var loginForm = event.target
        loginService.userLogin(loginForm)
        loginFormElem.classList.toggle('hidden', true)
    }

    this.showLoginForm = function showLoginForm(){
        if(formstate){
            showButton.innerText = 'Login'
            showButton.className = 'btn btn-info'
            loginFormElem.classList.add('hidden')
            formstate = false
        }else{
            showButton.innerText = 'Logout'
            showButton.onclick = app.controllers.loginController.userLogout(event)
            console.log(showButton.onclick)
            showButton.className = 'btn btn-warning'
            loginFormElem.classList.remove('hidden')
            formstate = true
        }
    }

    this.userLogout = function userLogout(event){
        event.preventDefault()
        var logoutForm = event.target
        loginService.userLogin(logoutForm)
        loginFormElem.classList.toggle('hidden', true)
    }

}