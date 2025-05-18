const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const { check,validationResult } = require('express-validator')
const Users = require('../../models/Users')
const Post = require('../../models/Post')
const Reports = require('../../models/Reports')


router.post('/', [ auth, [
    check('title', 'Title is required').not().isEmpty(),
    check('text', 'Text is required').not().isEmpty(),
    check('topic', 'Topic is required').not().isEmpty()
] ], async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    try {
        const user = await Users.findById(req.user.id).select('-password')
        if (!user) {
            return res.status(404).json({ msg: 'User not found' })
        }

        const newPost = new Post({
            title: req.body.title,
            text: req.body.text,
            name: user.name,
            avatar: user.avatar,
            user: req.user.id,
            topic: req.body.topic,
            date: new Date()
        })
        const post = await newPost.save()
        res.json(post)

    } catch (error) {
        console.error(error.message)
        res.status(500).json({ msg: 'Server Error', error: error.message })
    }
})


router.get('/', auth, async (req, res) => {
    try {
        const posts = await Post.find().sort({ date: -1 })
        res.json(posts)
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Server Error')
    }
})


router.get('/:id', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if(!post) {
            return res.status(404).json({ msg: 'Post not found' })
        }
        res.json(post)
    } catch (error) {
        console.error(error.message)
        if(error.kind == 'ObjectId') {
            return res.status(404).json({ msg: 'Post not found' })
        }
        res.status(500).send('Server Error')
    }
})


router.get('/topic/:topicName', auth, async(req, res) => {
    try {
        const posts = await Post.find({ topic: req.params.topicName })    
        res.json(posts)
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Server Error')
    }
})


router.delete('/:id', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if(!post) {
            return res.status(404).json({ msg: 'Post not found' })
        }

        // check user owns the post
        if(post.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' })
        }

        await post.remove()

        res.json({ msg: 'post removed' })
    } catch (error) {
        console.error(error.message)
        if(error.kind == 'ObjectId') {
            return res.status(404).json({ msg: 'Post not found' })
        }
        res.status(500).send('Server Error')
    }
})

router.put('/like/:id', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)

        // Check if the post has already been liked
        if (post.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
            return res.status(400).json({ msg: 'Post already liked' })
        }

        post.likes.unshift({ user: req.user.id })

        // if post disliked
        if (post.dislikes.filter(dislike => dislike.user.toString() === req.user.id).length > 0) {
            // remove dislike

            // Get remove index
            const removeIndex = post.dislikes
                .map(dislike => dislike.user.toString())
                .indexOf(req.user.id)

            post.dislikes.splice(removeIndex, 1)
        }

        await post.save()

        res.json([post.likes, post.dislikes])
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})


router.put('/dislike/:id', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)

        // Check if the post has already been disliked
        if (post.dislikes.filter(dislike => dislike.user.toString() === req.user.id).length > 0) {
            return res.status(400).json({ msg: 'Post already disliked' })
        }

        post.dislikes.unshift({ user: req.user.id })

        // if post liked
        if (post.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
            // remove like

            // Get remove index
            const removeIndex = post.likes
                .map(like => like.user.toString())
                .indexOf(req.user.id)

            post.likes.splice(removeIndex, 1)
        }

        await post.save()

        res.json([post.likes, post.dislikes])
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})


router.put('/unlike/:id', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)

        // Check if the post has already been liked
        if (post.likes.filter(like => like.user.toString() === req.user.id).length === 0) {
            return res.status(400).json({ msg: 'Post has not yet been liked' })
        }

        // Get remove index
        const removeIndex = post.likes
            .map(like => like.user.toString())
            .indexOf(req.user.id)

        post.likes.splice(removeIndex, 1)

        await post.save()

        res.json(post.likes)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})


router.post(
    '/comment/:id',
    [
        auth,
        [
            check('text', 'Text is required')
                .not()
                .isEmpty()
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        try {
            const user = await Users.findById(req.user.id).select('-password')
            if (!user) {
                return res.status(404).json({ msg: 'User not found' })
            }

            const post = await Post.findById(req.params.id)
            if (!post) {
                return res.status(404).json({ msg: 'Post not found' })
            }

            const newComment = {
                text: req.body.text,
                name: user.name,
                avatar: user.avatar,
                user: req.user.id,
                date: new Date()
            }

            post.comments.unshift(newComment)
            await post.save()
            res.json(post.comments)
        } catch (err) {
            console.error(err.message)
            if(err.kind === 'ObjectId') {
                return res.status(404).json({ msg: 'Post not found' })
            }
            res.status(500).json({ msg: 'Server Error', error: err.message })
        }
    }
)


router.put('/comment/like/:id/:comment_id', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)

        // Pull out comment
        const comment = post.comments.find(
            comment => comment.id === req.params.comment_id
        )

        // Check if the post has already been liked
        if (comment.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
            return res.status(400).json({ msg: 'Comment already liked' })
        }

        // post.comment.likes.unshift({ user: req.user.id })
        post.comments.map(cmnt => {
            if(cmnt.id === comment.id) {
                cmnt.likes.unshift({ user: req.user.id })
                return cmnt
            } else {
                return cmnt
            }
        })

        // if comment disliked
        if (comment.dislikes.filter(dislike => dislike.user.toString() === req.user.id).length > 0) {
            // remove dislike

            const commentIndex = post.comments.findIndex(
                comment => comment.id === req.params.comment_id
            )

            const removeIndex = post.comments[commentIndex].dislikes.findIndex(
                dislike => dislike.user.toString() === req.user.id
            )

            post.comments[commentIndex].dislikes.splice(removeIndex, 1)
        }

        await post.save()

        res.json([ comment.likes, comment.dislikes ])
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})


router.put('/comment/dislike/:id/:comment_id', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)

        // Pull out comment
        const comment = post.comments.find(
            comment => comment.id === req.params.comment_id
        )

        // Check if the post has already been liked
        if (comment.dislikes.filter(dislike => dislike.user.toString() === req.user.id).length > 0) {
            return res.status(400).json({ msg: 'Comment already liked' })
        }

        // post.comment.dislikes.unshift({ user: req.user.id })
        post.comments.map(cmnt => {
            if(cmnt.id === comment.id) {
                cmnt.dislikes.unshift({ user: req.user.id })
                return cmnt
            } else {
                return cmnt
            }
        })

        // if comment liked
        if (comment.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
            // remove dislike

            const commentIndex = post.comments.findIndex(
                comment => comment.id === req.params.comment_id
            )

            const removeIndex = post.comments[commentIndex].likes.findIndex(
                like => like.user.toString() === req.user.id
            )

            post.comments[commentIndex].likes.splice(removeIndex, 1)
        }

        await post.save()

        res.json([ comment.likes, comment.dislikes ])
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})


router.put('/comment/unlike/:id/:comment_id', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)

        // Pull out comment
        const comment = post.comments.find(
            comment => comment.id === req.params.comment_id
        )

        // Check if the post has already been liked
        if (comment.likes.filter(like => like.user.toString() === req.user.id).length === 0) {
            return res.status(400).json({ msg: 'Post has not yet been liked' })
        }

        const commentIndex = post.comments.findIndex(
            comment => comment.id === req.params.comment_id
        )

        const removeIndex = post.comments[commentIndex].likes.findIndex(
            like => like.user.toString() === req.user.id
        )

        post.comments[commentIndex].likes.splice(removeIndex, 1)

        // const p = post.comments[commentIndex].likes.filter(like => like.user.toString() !== req.user.id)

        await post.save()

        // console.log(p)
        // console.log(post)
        res.json(post)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})


router.delete('/comment/:id/:comment_id', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)

        // Pull out comment
        const comment = post.comments.find(
            comment => comment.id === req.params.comment_id
        )

        // Make sure comment exists
        if (!comment) {
            return res.status(404).json({ msg: 'Comment does not exist' })
        }

        // Check user
        if (comment.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' })
        }

        // Get remove index
        const removeIndex = post.comments
            .map(comment => comment.id)
            .indexOf(req.params.comment_id)

        post.comments.splice(removeIndex, 1)

        await post.save()

        res.json(post.comments)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})


router.post('/report', auth, async (req, res) => {
    try {
        const newReport = new Reports({
            email: req.body.email,
            title: req.body.title,
            description: req.body.description,
            reporttype: req.body.reporttype,
            contentid: req.body.contentid
        })
        await newReport.save()
        res.send({ msg: 'Report Sent' })
    } catch (error) {
        console.error(error.message)
        res.status(500).send({ msg: 'Server Error' })
    }
})

module.exports = router