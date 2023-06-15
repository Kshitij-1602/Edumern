import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import CreatePost from './CreatePost'
import Sidebar from '../layout/Sidebar'
import { getPosts } from '../../actions/post'
import PropTypes from 'prop-types'
import PostItem from './PostItem'

const Posts = ({ getPosts, post: {posts, loading} }) => {
    useEffect(() => {
        getPosts()
    }, [getPosts])
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

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    post: state.post
})
export default connect(mapStateToProps, { getPosts })(Posts)