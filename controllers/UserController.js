var client = require('../modules/client');
exports.sign_in = function (req, res) {
    client.send_sync('hellolaravel', {
        route: "/api/user/login",
        method: "POST",
        headers: {
            Accept:"application/json"
        },
        query: null,
        body:{
            email: "mama@gmail.com",
            password: "12345678"
        }
    }, function (result) {
        res.cookie('accessToken', result.data.token, {
            secure: true,
            httpOnly: true,
        });
        res.redirect('/postlist');
    });
}

exports.sign_out = function (req,res){
        res.clearCookie('accessToken');
        res.redirect('/');
}

exports.sign_up = function (req,res){
    client.send_sync('hellolaravel', {
        route: "/api/user/register",
        method: "POST",
        headers: {
            Accept:"application/json"
        },
        query: null,
        body: {
            name: "user1",
            email: "user1@gmail.com",
            password: "123456783"
        }
    }, function (result) {
        res.cookie('accessToken', result.data, {
            secure: true,
            httpOnly: true,
        });
        res.redirect('/postlist');
    });
}
