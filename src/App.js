import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Welcome from "./components/Welcome";
import Album from './components/Album';

import 'bootstrap/dist/js/bootstrap.bundle';

import './scss/Main.scss';

function App() {
    return (
        <Router>
            <div>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/" exact component={Welcome}>
                        <Welcome />
                    </Route>
                    <Route path="/albums">
                        <Album />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;


