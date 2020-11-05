import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
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
                            <Switch>
                                <Route path='/' exact>
                                    <Dashboard />
                                </Route>
                                <Route path='/tweet/:id'>
                                    <TweetPage />
                                </Route>
                                <Route path='/new'>
                                    <NewTweet />
                                </Route>
                            </Switch>
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