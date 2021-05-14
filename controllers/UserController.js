var client = require('../modules/new_client');
exports.sign_in = async function (req, res) {
    let response = await client.send_sync('hellolaravel', {
        route: "/api/user/login",
        method: "POST",
        headers: {
            Accept: "application/json"
        },
        query: null,
        body: {
            email: req.body.email,
            password: req.body.password
        }
    });

    if (response.error) {
        res.render('error', {
            error_message: response.error.message,
            error_status: response.error.status
        });
        return;
    }

    res.cookie('accessToken', response.result.data.token);
    res.redirect('/postlist');
}

exports.sign_out = function (req, res) {
    res.clearCookie('accessToken');
    res.redirect('/');
}

exports.sign_up = async function (req, res) {
    let response = await client.send_sync('hellolaravel', {
        route: "/api/user/register",
        method: "POST",
        headers: {
            Accept: "application/json"
        },
        query: null,
        body: {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
    });

    if (response.error) {
        res.render('error', {
            error_message: response.error.message,
            error_status: response.error.status
        });
        return;
    }

    res.cookie('accessToken', response.result.data.token);
    res.redirect('/postlist');
}
