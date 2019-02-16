import React , { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Tip from './views/tip/tip';


import Login from './views/login/login';
import Main from './views/main/main';

export default function App() {
    return (
        <Router>
            <div className="full">
                <Tip />
                <Route exact path="/" component={Login} />
                <Route path="/main" component={Main} />
            </div>
        </Router>
    )
}