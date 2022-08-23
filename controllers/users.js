const { User } = require('../models');

const userCrud = {
    // get all users
    getAllUsers(req, res) {
        User.find({})
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // get a single user
    getSingleUser({ params }, res) {
        User.findOne({ _id: params.id })
            .then(dbUserData => {
                // If no user is found, send 404
                if (!dbUserData) {
                    res.status(404).json({ message: 'Unable to find this user!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // add a new user
    newUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.status(400).json(err));
    },
    // update User by id
    editUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'Unable to find this user!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err));
    },
    // delete a single user
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'Unable to find this user!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err));
    },

    // create a new friend
    newFriend({ params, body }, res) {
        console.log(params)
        User.findOneAndUpdate(
            { _id: params.userId },
            { $addToSet: { friends: params.friendId } },
            { new: true }
        ).then(dbData => {
            console.log(dbData)
            res.json(dbData)
        })
    },

    // delete a friend
    deleteFriend({ params }, res) {
        console.log(params);
        User.findOneAndUpdate(
            { _id: params.userId },
            {
                $pull: {
                    friends: params.friendId
                }
            },
            { new: true }
        )
            .then(userData => {
                if (!userData) {
                    res.status(404).json({ message: 'Unable to find this reaction!' });
                    return;
                }
                res.json(userData);
            })
            .catch(err => res.json(err));
    }
};



module.exports = userCrud;