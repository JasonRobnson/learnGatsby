import React from "react" ;
import Link from "gatsby-link";

export default () => (
    <div>
            <h2>Second Page</h2>
            <p>This is my second Gatsby.js Page! Woot!</p>
            <Link to="/">First Page</Link>
            <br/>
            <Link to="/page-3">Third Page</Link>
    </div>
)