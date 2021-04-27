/**
 * Module dependencies.
 */
var Notification = require ('../models/Notification');

exports.create = function(req, res) {

    const notification = new Notification({
        userId: '33',
        postId: '44'
    });

// Save Notification in the database

    notification.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Notification."
        });
    });
};

// Find notification list by userId
    exports.findOne = (req, res) => {
        Notification.findById(req.params.user_id)
            .then(notification => {
                if (!notification) {
                    return res.status(404).send({
                        message: "Notification not found with id " + req.params.user_id
                    });
                }
                res.send(notification);
            }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Notification not found with id " + req.params.user_id
                });
            }
            return res.status(500).send({
                message: "Error retrieving notification with id " + req.params.user_id
            });
        });
    };


// Retrieve and return all notifications from the database.
exports.findAll = (req, res) => {
    let criteria = {};

    let userId = req.query.user_id;
    let postId = req.query.post_id;

    if(userId) {
        criteria.userId = userId;
    }

    if (postId) {
        criteria.postId = postId;
    }

    Notification.find(criteria, function(err, notifications) {
        res.render('listNot', {
            notifications: notifications,
        });
    });
};
