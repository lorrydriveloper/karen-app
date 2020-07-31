import React from "react";
import { Link } from "react-router-dom";

function Landing(props) {
  return (
    <div>
      landing
      <Link to="/dashboard?id=2">Client 1</Link>
      <Link to="/dashboard?id=3">Client 2</Link>
      <Link to="/login?id=4&name=pedro">Need Login</Link>
    </div>
  );
}

export default Landing;
