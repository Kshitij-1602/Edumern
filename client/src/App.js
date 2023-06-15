import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Landing from './components/layout/Landing'
import Topics from './components/layout/Topics'
import Register from './components/auth/Register'
import Dashboard from './components/dashboard/Dashboard'
import Profile from './components/profile/Profile'
import ProfileById from './components/profile/ProfileById'
import Posts from './components/posts/Posts'
import PostsByTopic from './components/posts/PostsByTopic'
import Post from './components/post/Post'
import EditProfile from './components/profile/EditProfile'
import Snackbar from './components/layout/Snackbar'
import Login from './components/auth/Login'
import Wiki from './components/static/Wiki'
import Rules from './components/static/Rules'
import Report from './components/posts/Report'
import ReportComment from './components/post/ReportComment'
import './App.css'
import { Provider } from 'react-redux'
import store from './store'
import { loadUser } from './actions/auth'
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';

if(localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  return (
  <Provider store={store}>
    <Router>
      <Fragment>
        <div className="mainGridContainer">
            <Header />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute exact path="/profile/:id" component={ProfileById} />
              <PrivateRoute exact path="/edit-profile" component={EditProfile} />
              <PrivateRoute exact path="/posts" component={Posts} />
              <PrivateRoute exact path="/posts/:id" component={Post} />
              <PrivateRoute exact path="/posts/topic/:topicName" component={PostsByTopic} />
              <PrivateRoute exact path="/topics" component={Topics} />
              <PrivateRoute exact path="/wiki" component={Wiki} />
              <PrivateRoute exact path="/rules" component={Rules} />
              <PrivateRoute exact path="/report/post/:id" component={Report} />
              <PrivateRoute exact path="/report/comment/:id" component={ReportComment} />
            </Switch>
            <Footer />
        </div>
        <Snackbar />
      </Fragment>
    </Router>
  </Provider>
)}

export default App;
