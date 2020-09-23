import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";
import ViewEmployeeComponent from "./components/ViewEmployeeComponent";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListEmployeeComponent} />
            <Route path="/employees" exact component={ListEmployeeComponent} />
            <Route
              path="/add-employee/:id"
              exact
              component={CreateEmployeeComponent}
            />
            {/* <Route
              path="/update-employee/:id"
              exact
              component={UpdateEmployeeComponent}
            /> */}
            <Route
              path="/view-employee/:id"
              exact
              component={ViewEmployeeComponent}
            />
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
