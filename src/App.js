import "./App.css";

//Router
import { Switch, Route } from "react-router-dom";
//Components
import {
  HomePageContainer,
  CampusContainer, StudentContainer,
  AllCampusesContainer, AllStudentsContainer,
  AddCampusContainer, EditCampusContainer,
  AddStudentContainer, EditStudentContainer
} from './components/containers';
import NavBar from "./components/views/NavBar.js"

// if you create separate components for adding/editing
// a student or campus, make sure you add routes to those
// components here

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/campuses" component={AllCampusesContainer} />
        <Route exact path="/campus/:id" component={CampusContainer} />
        <Route exact path="/add-campus" component={AddCampusContainer} />
        <Route exact path="/add-student" component={AddStudentContainer}/>
        <Route exact path="/edit-student/:id" component={EditStudentContainer}/>
        <Route exact path="/edit-campus/:id" component={EditCampusContainer}/>
        <Route exact path="/students" component={AllStudentsContainer} />
        <Route exact path="/student/:id" component={StudentContainer} />
      </Switch>
    </div>
  );
}

export default App;
