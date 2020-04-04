import React from "react";
import "../../style.css";

function Nav(props) {
  return (
    <div className="b-navContainer">
      <a class="nav-link" href="/">
        Home <span class="sr-only">(current)</span>
      </a>
      <a class="nav-link" href="/requests">
        Signup
      </a>
      <a class="nav-link" href="/calendar">
        Calendar
      </a>
    </div>
  );
}

export default Nav;
