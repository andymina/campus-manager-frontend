import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './style/Student.css'
import Header from "./Header.js"
import CampusCardView from "./CampusCard.js";

const StudentView = (props) => {
  const {student} = props;

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

            <Link to={`/edit-student/${student.id}`}>
              <Button variant="contained" color="primary">
                  Edit
              </Button>
            </Link>

            <Link to={'/students'} >
              <Button variant="contained" color="primary" onClick={() => props.deleteStudent(student.id)}>
                  Delete
              </Button>
            </Link>
          </div>
      </div>

      <div id = "campus">
        <h1> Campus </h1>
        <p> This student is not registered to a campus </p>
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
          <Link to={`/edit-student/${student.id}`}>
            <Button variant="contained" color="primary">
                Edit
            </Button>
          </Link>
            <Link to={'/students'} >
              <Button variant="contained" color="primary" onClick={() => props.deleteStudent(student.id)}>
                Delete
              </Button>
            </Link>
        </div>
    </div>

    <div id = "campus">
      <Header heading ='Campus' buttonLabel ='Change Campus'/>
      <CampusCardView campus={student.campus}/>

    </div>

    </div>

  );

};

export default StudentView;
