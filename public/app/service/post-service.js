function PostService() {
    var baseUrl = 'http://localhost:9001/api/posts'
    var posts = []
    var activePost = {}

    function Post(config) {
        this.title = config.title.value,
            this.description = config.description.value
    }

    function logError(err) {
        console.error(err)
    }
    this.searchPosts = function searchPosts(search, cb) {
        $.get(baseUrl)
            .then(res => {
                var posts = res.filter(post => {
                    if (post.title.toLowerCase().includes(search.toLowerCase())) {
                        return true
                    }
                })
                cb(posts)
            })
            .fail(logError)
    }

    this.getPosts = function getPosts(cb) {
        $.get(baseUrl)
            .then(res => {
                posts = res
                cb(posts)
            })
            .fail(logError)
    }
<<<<<<< HEAD
    this.addPost = function addPosts(post, getPosts) {
=======
    this.getActivePost = function getActivePost(cb){
        $.get(baseUrl + "/" + postId)
            .then(res =>{
                posts = res
                cb(posts)
            })
            .fail(logError)
    }
    this.addPost = function addPosts(post, getPosts){
>>>>>>> a25f9184734e34a03e40fffb21cc87130b74e1a7
        var newPost = new Post(post)
        $.post(baseUrl, newPost)
            .then(getPosts)
            .fail(logError)
    }
    this.deletePost = function deletePost(index, getPosts) {
        $.ajax({
            url: baseUrl + '/' + index,
            method: 'DELETE'
        })
            .then(getPosts)
            .fail(logError)
    }

}