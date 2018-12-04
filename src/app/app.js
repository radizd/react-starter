import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { About } from "./component/about-component";
import { Home } from "./component/home-component";
import { Items } from "./component/item-component";
import { AppMenu } from "./component/menu-component";

export const AppRouter = () => (
    <Router>
        <div>
            <AppMenu />
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/items" component={Items} />
        </div>
    </Router>
);
