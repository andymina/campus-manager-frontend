import { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link, Redirect } from 'react-router-dom';
import './style/Student.css'
import Header from "./Header.js"
import Empty from './EmptyComponent';
import CampusCardView from "./CampusCard.js";

class StudentView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    }
  }

  handleDelete = () => {
    this.props.deleteStudent(this.props.student.id);
    this.setState({ redirect: true });
  }

  render() {
    const {student} = this.props;

    if (this.state.redirect)
      return <Redirect to={`/students`}/>

    if(!student){
      return(
        <div>
          <Header heading ='All Students' buttonLabel ='Add Student'/>
          <p> There are no students registered in the database. </p>
        </div>
      )
    }

    //student with no campus
    if(!student.campus){
      return (
        <div>
        <div id = "details">
          <img className = "student" src={student.imageUrl} alt="student-pic"/>
            <div id = "text">
              <h1>{student.firstname + " " + student.lastname}</h1>
              <p>{student.email}</p>
              <p>{student.gpa}</p>

              <div id="buttons">
              <Link to={`/edit-student/${student.id}`}>
                <Button variant="contained" color="primary">
                    Edit
                </Button>
              </Link>

              <Link to={'/students'} >
                <Button variant="contained" color="primary" onClick={this.handleDelete}>
                    Delete
                </Button>
              </Link>
              </div>

            </div>
        </div>

        <div id = "campus">
          <Empty
            type="Campus"
            link={`/edit-student/${student.id}`}
            buttonLabel="Edit student"/>
        </div>

        </div>
      );
    }

    //student with campus
    return (
      <div>
      <div id = "details">
        <img className = "school" src={student.imageUrl} alt="student-pic"/>
          <div id = "text">
            <h1>{student.firstname + " " + student.lastname}</h1>
            <p>{student.email}</p>
            <p>{student.gpa}</p>
            <div id="buttons">
              <Link to={`/edit-student/${student.id}`}>
                <Button variant="contained" color="primary">
                    Edit
                </Button>
              </Link>
                <Link to={'/students'} >
                  <Button variant="contained" color="primary" onClick={this.handleDelete}>
                    Delete
                  </Button>
                </Link>
            </div>
          </div>
      </div>

      <div id = "campus">
        <Header heading ='Campus' link={`/edit-student/${student.id}`} buttonLabel ='Change Campus'/>
        <CampusCardView campus={student.campus}/>
      </div>

      </div>

    );
  }

};

export default StudentView;
