import React from "react";
import { connect } from "react-redux";
import { logout } from "../../state/actions";
import ExcersizeForm from "./ExerciseForm";

const Dashboard = props => {
  const signOut = () => {
    localStorage.clear("token");
    props.logout();
    props.history.push("/");
  };

  return (
    <div>
      <header>
        <h1>Workout Dashboard</h1>
      </header>
      <button onClick={signOut}> Sign Out</button>
      <ExcersizeForm />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps, { logout })(Dashboard);
