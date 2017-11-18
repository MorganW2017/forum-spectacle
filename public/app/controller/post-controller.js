function PostController() {
    var postService = new PostService()

    var firstSentence = ''

    function getPosts() {
        postService.getPosts(drawPosts)
    }
    function drawPosts(posts) {
        var postElem = document.getElementById('postBody')
        var template = ''
        for (let i = 0; i < posts.length; i++) {
            var post = posts[i];
            console.log(`${specialSentence(post.description)}`)
            template += `
            <div class="panel panel-default text-center spacer">
                <div class="panel-heading">
                    <h1>${post.title}</h1>
                </div>
                <div class="panel-body">
                    <h1 class="first">${sentArr[0]}</h1>
                    <h3 id="Second">${sentArr[1]}</h3>
                </div>
                <div class="panel-footer">
                    <div class="comment-tracker">
                        <button onclick="app.controllers.commentController.getComments('${post._id}')">Comments</button>
                        <button onclick="app.controllers.commentController.collapseComments('${post._id}')">Collapse</button>                        
                        <i class=" fa fa-trash ilb pull-right" onclick="app.controllers.postController.deletePost('${post._id}')"></i>
                    </div>
                </div>
                    <div id="${post._id}"></div>
            </div>
            `

        }
        postElem.innerHTML = template
    }

    function specialSentence(str) {
        var strArr = str.split('. ')
        firstSentence = strArr[0] + "."
        var afterFirst = strArr.splice(1, strArr.length)
        var second = afterFirst.join('. ')
        return sentArr = [firstSentence, second]
        console.log(firstSentence)
        console.log(second)
    }
    this.addPost = function addPost(event) {
        event.preventDefault()
        var post = event.target
        postService.addPost(post, getPosts)
    }
    this.deletePost = function deletePost(index) {
        postService.deletePost(index, getPosts)
    }
    this.searchPosts = function searchPosts(event) {
        event.preventDefault()
        var search = event.target.search.value
        postService.searchPosts(search, drawPosts)
    }

    getPosts()

}