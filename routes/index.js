var express = require('express');
var router = express.Router();
const auth = require('../middleware/auth');
var notificationController = require('../controllers/Notificationcontroller');
var postController = require('../controllers/PostController');
var userController = require('../controllers/UserController')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// getAll Notes
router.get('/notifications',auth,notificationController.findAll);
// Retrieve notifications list by userId
// router.get('/notifications/:userId',auth, notificationController.findOne);

/*
Post methods
 */

router.get('/render_create_form', auth, postController.render_create_form);

// Posts Creation Form
router.post('/create_post',auth,postController.create_post);

// Posts list
router.get('/postlist',auth, postController.posts_list);
// // save Post
// router.post('/save_posts',auth, postController.save_posts);

// update post
router.put('/update_post',auth,postController.update_post);
//delete post
// router.delete('/delete_post/{id}',auth,postController.delete_post());
//like post
// router.post('/like_post',auth,postController.like_post());
/*
user methods
 */

//Log in
router.post('/signin', userController.sign_in);
//Log out
router.get('/signout', userController.sign_out);
//Sign in
router.post('/signup', userController.sign_up);
module.exports = router;
