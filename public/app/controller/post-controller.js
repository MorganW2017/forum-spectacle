function PostController(){
    var postService = new PostService()
    
    function getPosts(){
        postService.getPosts(drawPosts)
    }
    function drawPosts(posts){
        var postElem = document.getElementById('postId')
        template = ''
        for (let i = 0; i < posts.length; i++) {
            const post = posts[i];
            template += `
            <div class="panel panel-default text-center spacer">
            <h3>${post.title}</h3>
            <h1>${post.description}</h1>
            <div class="comment-tracker">
                <h4 style="display:inline">Alive: 12</h4>
                <h4 style="display:inline">Dead: 3</h4>
                <button onsubmit="app.controllers.postController.showComments(event)">Comments</button>
            </div>
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

    getPosts()

}