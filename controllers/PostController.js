var client = require('../modules/client');
exports.posts_list = function (req, res) {
    client.send_sync('hellolaravel', {
        route: "/api/post",
        method: "GET",
        headers: {
            Accept:"application/json",
            Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hZG1pbi50ZXN0IiwiYXVkIjoiaHR0cDpcL1wvYWRtaW4udGVzdCIsImlhdCI6MTYxOTU2NTM2OCwidXNlcl9pZCI6IjYwODZiNzEyZjI5Y2FkMjExMDUyYTFmNCJ9.p8LxH4FaYSx5y7kNOaj-MEoUciJBtF0zWmB-4qJtsxA"
        },
        query: null,
        body: null
    }, function (posts_list, error) {
        if (error) {
            res.render('error', {
                error_message: error.message,
                error_status: error.status
            });
            return;
        }
        res.render('view_posts', {
            posts_list: posts_list.data
        });
    });
}

exports.like_post = function (req, res) {
    // TODO: send like to PHP service
}

exports.create_post = function (req, res) {
        res.render('create_post');
}

exports.delete_post = function (req, res) {
    // TODO: send like to PHP service
}

exports.update_post = function (req, res) {
    // TODO: send like to PHP service
}
exports.save_posts = function (req, res) {
    //TODO: save post
}

