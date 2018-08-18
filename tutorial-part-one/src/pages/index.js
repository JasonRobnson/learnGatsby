import React from "react";
import Link from "gatsby-link";
import Counter from "./counter.js"

export default () =>
     <div style={{ color: `tomato` }}>
         <h1>Hello Gatsby!</h1>
         <p>What a place!</p>
         <img src="https://source.unsplash.com/random/400x200" alt=""/>
         <br />
         <div>
             <Link to="/page-2/">Second Page</Link>
         </div>
         <div>
             <Link to="/page-3/">Third Page</Link>
         </div>
         <div>
             <Link to="/counter/">Counter</Link>
         </div>
        <Counter />
     </div>
