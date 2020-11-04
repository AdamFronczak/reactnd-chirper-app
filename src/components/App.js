import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitData } from '../actions/shared'
import Dashboard from './Dashboard';
import LoadingBar from "react-redux-loading";
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'
import Nav from './Nav'

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitData());
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <LoadingBar />
                    <div className='container'>
                        <Nav />
                        { this.props.loading === true
                        ? null
                        : <div>
                            <Route path='/' exact Component={Dashboard} />
                            <Route path='/tweet/:id' Component={TweetPage} />
                            <Route path='/new' Component={NewTweet} />
                        </div> }
                    </div>
                </Fragment>
            </Router>
        )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        loading: authedUser === null
    }
}

export default connect(mapStateToProps)(App)