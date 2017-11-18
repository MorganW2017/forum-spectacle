function PostController(){
    var postService = new PostService()
    
    function getPosts(){
        postService.getPosts(drawPosts)
    }
    function drawPosts(posts){
        var postElem = document.getElementById('postId')
        var template = ''
        for (let i = 0; i < posts.length; i++) {
            const post = posts[i];
            template += `
            <div class="panel panel-default text-center spacer">
            <h3>${post.title}</h3>
            <h1>${post.description}</h1>
            <div class="comment-tracker">
                <h4 style="display:inline">Alive: 12</h4>
                <h4 style="display:inline">Dead: 3</h4>
                <button onclick="app.controllers.commentController.getComments('${post._id}')">Comments</button>
                <i class=" fa fa-trash ilb pull-right" onclick="app.controllers.postController.deletePost('${post._id}')"></i>
            </div>
            <div id="${post._id}"><div>
        </div>
            `
            
        }
        postElem.innerHTML = template
    }
    this.addPost = function addPost(event){
        event.preventDefault()
        var post = event.target
            postService.addPost(post, getPosts)
    }
    this.deletePost = function deletePost(index){
        postService.deletePost(index, getPosts)
    }
    this.searchPosts = function searchPosts(event){
        event.preventDefault()
        var search = event.target.search.value
        postService.searchPosts(search, drawPosts)
    }

    getPosts()

}