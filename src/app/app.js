import React from "react";
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Items } from "./component/item-component";
import { AppMenu } from "./component/menu-component";

const Loading = <div>Trwa ładowanie...</div>

const Home = Loadable({
    loader: () => import(/* webpackChunkName: "home" */ "./modules/home"),
    loading() { return Loading }
});

const About = Loadable({
    loader: () => import(/* webpackChunkName: "about" */ "./modules/about"),
    loading() { return Loading }
});

export const AppRouter = () => (
    <Router>
        <div>
            <AppMenu />
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
        </div>
    </Router>
);
