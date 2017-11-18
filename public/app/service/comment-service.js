function CommentService() {
    var baseUrl = 'http://localhost:9001/api/posts/:id/comments'
    var baseUrl2 = 'http://localhost:9001/api/posts/'
    var replies = []

    function Comment(config) {
        this.body = config.body.value,
            this.votes = config.votes.value,
            this.upVotes = config.upVotes.value,
            this.downVotes = config.downVote.value,
            this.health = config.health.value,
            this.alive = config.alive.value

    }

    function logError(err) {
        console.error(err)
    }

    this.getComments = function getComments(cb, postId) {
        $.get(baseUrl)
            .then(res => {
                comments = res
                console.log(comments)
                cb(comments, postId)
            })
            .fail(logError)
    }
    this.getComment = function getComment(id) {
        $.get(baseUrl + "/" + id)
            .then(res => {
                comments = res
                cb(comments)
            })
            .fail(logError)
    }
    this.addComment = function addComments(comment, getComments) {
        var newComment = new Comment(comment)
        $.post(baseUrl, newComment)
            .then(getComments(comment.postId))
            .fail(logError)
    }
    this.deleteComment = function deleteComment(postId, commentId, getComments) {
        $.ajax({
            url: baseUrl2 + postId + '/comments/' + commentId,
            method: 'DELETE'
        })
            .then(getComments(postId))
            .fail(logError)
    }
    


}