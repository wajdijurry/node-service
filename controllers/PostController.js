var client = require('../modules/client');
exports.posts_list = function (req, res) {
    client.send_sync('hellolaravel', {
        route: "/api/post",
        method: "GET",
        headers: {
            Accept:"application/json",
            Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hZG1pbi50ZXN0IiwiYXVkIjoiaHR0cDpcL1wvYWRtaW4udGVzdCIsImlhdCI6MTYxOTQ0MTQyNiwidXNlcl9pZCI6IjYwODZiNzEyZjI5Y2FkMjExMDUyYTFmNCJ9.6AD52GYedvVFPKVK5E9nBhUXN6NvKrurUVziMjfgrKA"
        },
        query: null,
        body: null
    }, function (posts_list) {
        res.render('view_posts', {
            posts_list: posts_list
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

