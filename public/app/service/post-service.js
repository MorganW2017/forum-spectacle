function PostService(){
    var baseUrl = 'http://localhost:9001/api/posts'
    var posts = []

    function logError(err) {
        console.error(err)
    }

    this.getPosts = function getPosts(cb){
        $.get(baseUrl)
            .then(res =>{
                posts = res
                cb(posts)
            })
            .fail(logError)
    }
    
        
    }