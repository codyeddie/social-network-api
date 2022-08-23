const router = require('express').Router();
const {
    getAllThoughts,
    getSingleThought,
    newThought,
    deleteThought,
    newReaction,
    deleteReaction
} = require('../../controllers/thoughts');

// get all thoughts. also delete and add a new thought
router
    .route('/')
    .post(newThought)
    .delete(deleteThought)
    .get(getAllThoughts);

// get a single thought
router
    .route('/:thoughtId')
    .get(getSingleThought);

// get a single thought/reaction
router
    .route('/:thoughtId/reaction')
    .post(newReaction);

// delete a single reaction on a thought
router
    .route('/:thoughtId/reaction/:reactionId')
    .delete(deleteReaction);

// deletes a user though
router
    .route('/:thoughtId/user/:id')
    .delete(deleteThought);

module.exports = router;