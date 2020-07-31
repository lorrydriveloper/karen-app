import React from "react";

function login(props) {
  return (
    <div>
      Login Page
      <p>{props.location.search}</p>
    </div>
  );
}

export default login;
