import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Requests from "./pages/Requests";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Requests} />
          <Route exact path="/requests" component={Requests} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
