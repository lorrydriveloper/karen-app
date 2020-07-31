import React from "react";

function Dashboard(props) {
  console.log(props);
  return (
    <div>
      Dashboard
      <p>{props.location.search}</p>
    </div>
  );
}

export default Dashboard;
