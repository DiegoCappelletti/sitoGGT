import React from 'react';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home'
import Main from './components/Main/Main'
import Auth from './components/Author/Auth'
import './style.css'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/authenticate" exact component={Auth}/>
                <Route path="/main" exact component={Main}/>
            </Switch>
        </Router>
    )
}

export default App;