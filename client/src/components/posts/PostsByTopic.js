import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import CreatePost from './CreatePost'
import Sidebar from '../layout/Sidebar'
import { getPostsByTopic } from '../../actions/post'
import PropTypes from 'prop-types'
import PostItem from './PostItem'

const PostsByTopic = ({ getPostsByTopic, post: {posts, loading}, match }) => {
    useEffect(() => {
        getPostsByTopic(match.params.topicName)
    }, [getPostsByTopic])
    return !loading && (
        <Fragment>
            <Sidebar />
            <div style={{ gridArea: 'content' }}>
                <CreatePost />
                <br />
                {posts.map(post => (
                    <PostItem key={post._id} post={post} />
                ))}
            </div>
        </Fragment>
    )
}

PostsByTopic.propTypes = {
    getPostsByTopic: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    post: state.post
})
export default connect(mapStateToProps, { getPostsByTopic })(PostsByTopic)