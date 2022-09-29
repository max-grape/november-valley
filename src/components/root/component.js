import React from "react";
import { HashRouter, Switch, Route, useParams } from 'react-router-dom';

import './styles.scss';

import Main from '../main/component.js';
import Post from '../post/component.js';


class Root extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/" exact render={() => (<Main />)} />
                    <Route path="/:id" exact render={() => (<PostWrapper />)} />
                </Switch>
            </HashRouter>
        )
    }
}

function PostWrapper() {
    let { id } = useParams();

    return (
        <Post postId={id} />
    )
}

export default Root;
