function SignupController(){
    var signupService = new SignupService()
    var signupFormElem = document.getElementById('add-signup-form')
    var showSignupButton = document.getElementById('show-signup-button')
    var signupFormstate = false
    
    this.userSignup = function userSignup(event){
        event.preventDefault()
        var signupForm = event.target
        signupService.userSignup(signupForm)
        signupFormElem.classList.toggle('hidden', true)
    }

    this.showSignupForm = function showSignupForm(){
        if(signupFormstate){
            showSignupButton.innerText = 'Register'
            showSignupButton.className = 'btn btn-info'
            signupFormElem.classList.add('hidden')
            signupFormstate = false
        }else{
            signupFormElem.classList.remove('hidden')
            signupFormstate = true
        }
    }
}