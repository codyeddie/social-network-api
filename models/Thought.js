const { Schema, model, Types } = require('mongoose');

// create a schema for a reaction
const ReactionSchema = new Schema(
    {
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
      },
      reactionBody: {
        type: String
      },
      username: {
        type: String,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    }
  );
  
// create a schema for a thought
const ThoughtSchema = new Schema(
    {   
        username: {
            type: String,
        },
        thoughtText: {
            type: String,
        },
        reactions: [ReactionSchema],

    }
);



// create the thought model 
const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;

