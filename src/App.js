import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import ExerciseList from "./components/exercise/list.component";
import EditExercise from "./components/exercise/edit.component";
import CreateExercise from "./components/exercise/create.component";
import CreateUser from "./components/user/create.component";
import Navbar from "./components/common/navbar.component";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        <br />
        <Route path="/" exact component={ExerciseList} />
        <Route path="/edit/:id" exact component={EditExercise} />
        <Route path="/add" exact component={CreateExercise} />
        <Route path="/user" exact component={CreateUser} />
      </Router>
    );
  }
}
