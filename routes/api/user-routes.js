const router = require('express').Router();
// import the user controllers
const {
    getAllUsers,
    getSingleUser,
    newUser,
    editUser,
    deleteUser,
    newFriend,
    deleteFriend
} = require('../../controllers/users');



// this gets all new users and creates a new user
router
    .route('/')
    .get(getAllUsers)
    .post(newUser);

// this allows users to geta single user, updatte a single user, or deleter single user based on their ID
router
    .route('/:id')
    .get(getSingleUser)
    .put(editUser)
    .delete(deleteUser);

// this allows users to create a new friend and delete friends
router
    .route('/:userId/friends/:friendId')
    .post(newFriend)
    .delete(deleteFriend)

module.exports = router;



