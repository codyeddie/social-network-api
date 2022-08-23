const { Schema, model } = require('mongoose');

// define schema for auser 
const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        thoughts: [
                {
                    type: Schema.Types.ObjectId,
                    ref: 'Thought'
               }
        ],
        friends: [ 
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
    }
);

// create a model for User 
const User = model("User", UserSchema);

module.exports = User;


