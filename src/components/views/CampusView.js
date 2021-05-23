import './style/Campus.css'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import CardView from "./Card.js";
import Empty from "./EmptyComponent.js"

const CampusView = (props) => {
  const {campus} = props;
  //waiting for students array to be populated
  // if (campus.students === undefined){
  //   return <div>Loading...</div>
  // }

  if(!campus){
    return (
      <div>
        <Empty type = 'Campuses' buttonLabel = 'Add Campus' link = '/add-campus'/>
      </div>
    );
  }

  return (
    <div>
      <div id = "details">
        <img className = "school" src={campus.imageUrl} alt="picture of college"/>
        <div id = "text">
          <h1>{campus.name}</h1>
          <p>{campus.address}</p>
          <p>{campus.description}</p>
          <div id="buttons">
            <Link to={`/edit-campus/${campus.id}`}>
              <Button variant="contained" color="primary">
                Edit
              </Button>
            </Link>
              <Link to={'/campuses'} >
                <Button variant="contained" color="primary" onClick={() => props.deleteCampus(campus.id) }>
                  Delete
                </Button>
            </Link>
          </div>
        </div>
      </div>
      <div id = "student">
        <div id = "student-head">
          <h1> Students on Campus </h1>
          <Link to={'/add-student'} >
          <Button variant="contained" color="primary">
            Add Student
          </Button>
          </Link>
        </div>
        <ul>
        {campus.students.map( student => {
          let name = student.firstname + " " + student.lastname;
          student.campus = { name: campus.name, id: campus.id };
          return (
            <Box display="flex" flexDirection="row">
              <CardView student={student}/>
            </Box>
          );
        })}
        </ul>
      </div>
    </div>
  );

};

export default CampusView;
