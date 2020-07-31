import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Route
          path="/dashboard"
          render={(routeProps) => <Dashboard {...routeProps} />}
        />
        <Route
          path="/login"
          render={(routeProps) => <Login {...routeProps} />}
        />
        <Route
          path="/"
          exact
          render={(routeProps) => <Landing {...routeProps} />}
        />
      </div>
    </Router>
  );
}

export default App;
