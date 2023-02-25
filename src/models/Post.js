import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    cover: {
        type: String
    },
    tags: {
        type: Array
    },
    likes: {
        type: Number
    },
    comments: {
        type: Number
    }
},
{
    timestamps: true
});

const Post = mongoose.model('Post', postSchema);

export default Post;