import React from "react";
import { 
    Route, 
    Link, 
    Switch 
} from "react-router-dom";

import Home from "./Home";

const Sidebar = (props) => {
  return (
      <>
    <div className="sidebar">
      <div className="sidebar-list-styling">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>

      <div className="sidebar-route">
        <Switch>
          {/* <Route exact path="/Home"><Home /></Route> */}
          <Route exact path='/'><Home/></Route>
        </Switch>
      </div>
    </div>
    </>
  );
};

export default Sidebar;