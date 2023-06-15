import axios from 'axios'
import { setAlert } from './alert'
import {
    GET_POSTS,
    GET_POST,
    POST_ERROR,
    UPDATE_LIKES,
    DELETE_POST,
    ADD_POST,
    ADD_COMMENT,
    REMOVE_COMMENT,
    UPDATE_LIKES_COMMENT,
    GET_POSTS_TOPIC,
    UPDATE_LIKES_BYID
} from './types'

// Get posts
export const getPosts = () => async dispatch => {
    try {
        const res = await axios.get('/api/posts')

        dispatch({
            type: GET_POSTS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

// Get posts by topic
export const getPostsByTopic = topicName => async dispatch => {
    try {
        const res = await axios.get(`/api/posts/topic/${topicName}`)

        dispatch({
            type: GET_POSTS_TOPIC,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

// Add Like
export const addLike = postId => async dispatch => {
    try {
        const res = await axios.put(`/api/posts/like/${postId}`)

        dispatch({
            type: UPDATE_LIKES,
            payload: { postId, likes: res.data[0], dislikes: res.data[1] }
        })
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

// dislike
export const addDislike = postId => async dispatch => {
    try {
        const res = await axios.put(`/api/posts/dislike/${postId}`)

        dispatch({
            type: UPDATE_LIKES,
            payload: { postId, likes: res.data[0], dislikes: res.data[1] }
        })
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

// Add Like by id
export const addLikeById = postId => async dispatch => {
    try {
        const res = await axios.put(`/api/posts/like/${postId}`)

        dispatch({
            type: UPDATE_LIKES_BYID,
            payload: { likes: res.data[0], dislikes: res.data[1] }
        })
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

// Add dislike by id
export const addDislikeById = postId => async dispatch => {
    try {
        const res = await axios.put(`/api/posts/dislike/${postId}`)

        dispatch({
            type: UPDATE_LIKES_BYID,
            payload: { likes: res.data[0], dislikes: res.data[1] }
        })
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

// Add Comment Like
export const addCommentLike = ( postId, commentId ) => async dispatch => {
    try {
        const res = await axios.put(`/api/posts/comment/like/${postId}/${commentId}`)

        dispatch({
            type: UPDATE_LIKES_COMMENT,
            payload: { commentId, likes: res.data[0], dislikes: res.data[1] }
        })
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

// add comment dislike
export const addCommentDislike = ( postId, commentId ) => async dispatch => {
    try {
        const res = await axios.put(`/api/posts/comment/dislike/${postId}/${commentId}`)

        dispatch({
            type: UPDATE_LIKES_COMMENT,
            payload: { commentId, likes: res.data[0], dislikes: res.data[1] }
        })
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

// Remove Like
export const removeLike = postId => async dispatch => {
    try {
        const res = await axios.put(`/api/posts/unlike/${postId}`)

        dispatch({
            type: UPDATE_LIKES,
            payload: { postId, likes: res.data }
        })
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

// Delete Post
export const deletePost = postId => async dispatch => {
    try {
        await axios.delete(`/api/posts/${postId}`)

        dispatch({
            type: DELETE_POST,
            payload: postId
        })
        dispatch(setAlert('Post Removed', 'success'))
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

// Add Post
export const addPost = formData => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.post('/api/posts', formData, config)

        dispatch({
            type: ADD_POST,
            payload: res.data
        })
        dispatch(setAlert('Post Created', 'success'))
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

// Get post
export const getPost = postId => async dispatch => {
    try {
        const res = await axios.get(`/api/posts/${postId}`)

        dispatch({
            type: GET_POST,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

// Add Comment
export const addComment = ( postId, formData ) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.post(`/api/posts/comment/${postId}`, formData, config)

        dispatch({
            type: ADD_COMMENT,
            payload: res.data
        })
        dispatch(setAlert('Comment Added', 'success'))
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

// Delete Comment
export const deleteComment = ( postId, commentId ) => async dispatch => {
    try {
        await axios.delete(`/api/posts/comment/${postId}/${commentId}`)

        dispatch({
            type: REMOVE_COMMENT,
            payload: commentId
        })
        dispatch(setAlert('Comment Removed', 'success'))
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

export const reportContent = ( contentid, reporttype, formData, history ) => async dispatch => {
    try {
        const data = {
            email: formData.email,
            title: formData.title,
            description: formData.description,
            contentid,
            reporttype
        }
        await axios.post('/api/posts/report', data)
        dispatch(setAlert('Report Submitted','success'))
        history.push('/posts')
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}