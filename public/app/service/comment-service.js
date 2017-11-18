function CommentService() {
    var baseUrl = 'http://localhost:9001/api/posts/:id/comments'
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

    this.getComments = function getComments(cb) {
        $.get(baseUrl)
            .then(res => {
                comments = res
                cb(comments)
            })
            .fail(logError)
    }
    this.addComment = function addComments(comment, getComments) {
        var newComment = new Comment(comment)
        $.comment(baseUrl, newComment)
            .then(getComments)
            .fail(logError)
    }


}