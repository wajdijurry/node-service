var mongoose = require("mongoose");
var express = require('express');
var router = express.Router();
var notificationcontroller = require('../controllers/Notificationcontroller');
var postController = require('../controllers/PostController');
var userController = require('../controllers/UserController')



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// //Notification route
//
// router.get('/testMongo', function (req, res) {
//   const NotificationSchema = new mongoose.Schema({
//     user_id: String
//   });
//   const Notification = mongoose.model('Notification', NotificationSchema);
//   let user1Notification = new Notification({
//     user_id:"1234",
//     post_id:"123525"
//   });
//   user1Notification.save(function (err, user1Notification) {
//     if (err) return console.error(err);
//   });
//   res.send('OK!');
// });
// module.exports = router;
//
// //Post route
// router.get('/posts/:id', (req, res, next) => {
//   Post.findOne({ _id: req.params.id }).exec((err, post) => {
//     res.render('post', { post });
//   });
// });

// // Create a new Note
// router.get('/notifications', Notification_controller.create);
// getAll Notes
router.get('/notifications',notificationcontroller.findAll);
// Retrieve notifications list by userId
router.get('/notifications/:userId', notificationcontroller.findOne);
/*
Post methods
 */

// Posts Creation Form
router.get('/createform', postController.create_post);

// Posts list
router.get('/postlist', postController.posts_list);
// save Post
router.post('/savepost', postController.save_posts);

/*
user methods
 */

//Log in
router.get('/signin', userController.sign_in);
//Log out
router.get('/signout', userController.sign_out);
//Sign in
router.get('/signup', userController.sign_up);
module.exports = router;
