function CommentController() {
    var commentService = new CommentService()
    
    this.getComments = function getComments(postId) {
        commentService.getComments(drawComments, postId)
    }
    function drawComments(comments, postId) {
        var commentElem = document.getElementById(postId)
        template = ''
        for (let i = 0; i < comments.length; i++) {
            var comment = comments[i];
            template += `
                <div class="panel panel-default spacer">
                    <div class="row">
                        <div class="col-sm-2 character">
                            <img src="//placehold.it/100x100">
                            <h5>${comment.health}</h5>
                            <h5>${comment.votes}</h5>
                        </div>
                        <div class="col-sm-8 comment-body">
                            <h3>${comment.body}</h3>
                        </div>
                        <div class="col-sm-2">
                            <div class="up-votes ">
                                <i class="fa fa-arrow-up vote-size il" onclick="app.controllers.commentController.upvote()"></i>
                                <h5 class="il vote-size">${comment.upVotes}</h5>
                            </div>
                        </div>    
                        <div class="down-votes">
                            <i class="fa fa-arrow-down vote-size il onclick="app.controllers.commentController.downvote()"></i>
                            <h5 class="il vote-size">${comment.downVotes}</h5>
                        </div>
                        <div class="trash-star pull-right pull-bottom">
                            <i class=" fa fa-trash ilb" onclick="app.controllers.commentController.deleteComment('${comment.postId}','${comment._id}')"></i>
                        </div>           
                    </div>
                </div>
                `

        }
        commentElem.innerHTML = template
    }
    this.collapseComments = function collapseComments(postId){
        var commentElem = document.getElementById(postId)
        commentElem.innerHTML = ''
        
    }
    this.addComment = function addComment(event) {
        event.preventDefault()
        var comment = event.target
        commentService.addComment(comment, this.getComments)
    }
    this.deleteComment = function deleteComment(postId, commentId) {
        commentService.deleteComment(postId, commentId, this.getComments)
    }
}


