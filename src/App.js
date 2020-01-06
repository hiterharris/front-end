import React from "react";
import logo from "./logo.svg";
import FormikSignUpForm from "./components/SignUpForm.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import SignUpForm2 from "./components/SignUpForm2";

function App() {
  return (
    <div className="App">
      <Router>
        <Route
          exact
          path="/register"
          render={props => <SignUpForm2 {...props} />}
        />
      </Router>
    </div>
  );
}

export default App;
