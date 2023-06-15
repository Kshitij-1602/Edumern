const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    title: {
        type: String,
        required: true
    },
    text: {
        type: String
    },
    name: {
        type: String
    },
    avatar: {
        type: String
    },
    topic: {
        type: String
    },
    likes: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'users'
            }
        }
    ],
    dislikes: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'users'
            }
        }
    ],
    comments: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'users'
            },
            text: {
                type: String,
                required: true
            },
            likes: [{
                user: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'users'
                }
            }],
            dislikes: [{
                user: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'users'
                }
            }],
            name: {
                type: String
            },
            avatar: {
                type: String
            }
        }
    ]
})

module.exports = Post = mongoose.model('post', PostSchema)