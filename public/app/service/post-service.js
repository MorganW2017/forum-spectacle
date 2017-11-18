function PostService(){
    var baseUrl = 'http://localhost:9001/api/posts'
    var posts = []
    var activePost = {}

    function Post(config){
        this.title = config.title.value,
        this.description = config.description.value
    }

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
    this.getActivePost = function getActivePost(cb){
        $.get(baseUrl + "/" + postId)
            .then(res =>{
                posts = res
                cb(posts)
            })
            .fail(logError)
    }
    this.addPost = function addPosts(post, getPosts){
        var newPost = new Post(post)
        $.post(baseUrl, newPost)
            .then(getPosts)
            .fail(logError)
    }
    
        
    }