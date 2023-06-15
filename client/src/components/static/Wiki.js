import { Paper } from '@material-ui/core'
import React from 'react'
import { Fragment } from 'react'
import Sidebar from '../layout/Sidebar'
import landing from './landing.png'
import register from './register.png'
import login from './login.png'
import allposts from './allposts.png'
import profile from './profile.png'
import editprofile from './editprofile.png'
import topics from './topics.png'

const Wiki = () => {
    return (
        <Fragment>
            <Sidebar />
            <Paper style={wikiStyle}>
                <h1>EduForum Wiki</h1>
                <h3>What is EduForum?</h3>
                <p>
                    Eduforum is a social network for students. Students can post questions, doubts or
                    whatever they want to discuss based on 5 topics: maths, history, programming,
                    languages, science or they can post without topic (this post will be shown only
                    in all topics section). Then other students can answer these questions/doubts and
                    take part in the discussion by clicking on comment button. Students can upvote or
                    downvote the post depending on whether they like it or not.
                </p>
                <h3>Technologies used:</h3>
                <ul>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Express</li>
                    <li>MongoDb</li>
                </ul>
                <h3>Features:</h3>
                <ol>
                    <li>Register/Login</li>
                    <li>Post your thoughts</li>
                    <li>Comments</li>
                    <li>Posts organized by topics</li>
                    <li>Upvote/Downvote posts and comments</li>
                    <li>Make your profile</li>
                    <li>Add profile picture from gravatar</li>
                </ol>
                <h3>Screenshots:</h3>
                <h4>Welcome Page: </h4>
                <p>
                    First you will be greeted with welcome page. Here you can register or login.
                </p>
                <img src={landing} style={imgStyle} />
                <h4>Login and Register:</h4>
                <p>
                    Login has email and password as required field, whereas register has name, email
                    and login as required field.
                </p>
                <img src={register} style={imgStyle} />
                <img src={login} style={imgStyle} />
                <h4>First Page after login/register</h4>
                <p>
                    After you login or register you will be redirected to a page that shows all posts.
                    Here you can see a blue button for adding posts. Each post has a upvote, downvote,
                    comment and report buttons. You can also use the sidebar to navigate the website.
                    Go to topics to see posts by topics.
                </p>
                <img src={allposts} style={imgStyle} />
                <h4>Topics Page:</h4>
                <p>
                    In this page you can select a topic and only those posts will be shown that are
                    tagged by that topic.
                </p>
                <img src={topics} style={imgStyle} />
                <h4>Profile Page:</h4>
                <p>
                    This page shows user profile. You can see your own profile by clicking on
                    profile in sidebar. To see other people's profile click on their name or
                    avatar in posts or comments.
                </p>
                <img src={profile} style={imgStyle} />
                <h4>Edit Profile Page</h4>
                <p>
                    In your profile click on edit profile to reach this page.
                </p>
                <img src={editprofile} style={imgStyle} /> 
            </Paper>
        </Fragment>
    )
}

const wikiStyle = { 
    gridArea: 'content', 
    margin: '20px', 
    paddingLeft: '30px', 
    paddingTop: '10px', 
    paddingRight: '20px' 
}

const imgStyle = { 
    width: '534px', 
    height: '300px' 
}

export default Wiki
