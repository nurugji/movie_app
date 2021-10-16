import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <Link to="/">HOME</Link>
      <Link
        to={{
          pathname: "/About",
          //   stats: {
          //     fromNavigation: true,
          //   },
          // loaction.state.fromNavigation:true 확인가능
        }}
      >
        ABOUT
      </Link>
    </div>
  );
}

export default Navigation;
