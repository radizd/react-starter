import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Item = ({ match }) => (
    <div>Item {match.params.id} is loaded</div>
)

const ItemList = ({ match }) => (
    <div>
        <h3>Please select a item.</h3>
        <ul>
            <li><Link to={`${match.path}/1`}>Item 1</Link></li>
            <li><Link to={`${match.path}/2`}>Item 2</Link></li>
            <li><Link to={`${match.path}/3`}>Item 3</Link></li>
        </ul>
    </div>
);

export const Items = ({ match }) => (
    <div>
        <h2>Items module</h2>
        <Route exact path={match.path} component={ItemList} />
        <Route path={`${match.path}/:id`} component={Item} />
    </div>
);