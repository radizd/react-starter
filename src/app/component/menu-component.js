import React from "react";
import { Link } from "react-router-dom";


export const AppMenu = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about/">About</Link>
            </li>
            <li>
                <Link to="/items/">Items</Link>
            </li>
        </ul>
    </nav>
);
