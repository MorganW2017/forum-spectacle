function UserService(){

    var baseUrl = 'http://localhost:9001/api/users'
    var users = []

    function User(config){
        this.name = config.name.value
    }

    function logError(err) {
        console.error(err)
    }

    this.getUsers = function getUsers(cb){
        $.get(baseUrl)
            .then(res =>{
                users = res
                cb(users)
            })
            .fail(logError)
    }
    this.addUser = function addUsers(user, getUsers){
        var newUser = new User(user)
        $.user(baseUrl, newUser)
            .then(getUsers)
            .fail(logError)
    }
    
        

}