import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const StudentView = (props) => {
  const {student} = props;

  let name = student.firstname + " " + student.lastname;

  //NO CAMPUS
  if(!student.campus){
    return(
      <div>
        <img src={student.image}/>
        <h1>{name}</h1>
        <h3>{student.email}</h3>
        <p>{student.gpa}</p>

        <div className="campus">
          <h3> This student is not registered to a campus. </h3>
        </div>
      </div>
    )
  }

  //STUDENT WITH CAMPUS
  else{
    return (
      <div>
        <img src={student.image}/>
        <h1>{name}</h1>
        <h3>{student.email}</h3>
        <p>{student.gpa}</p>

        <div className="campus">
          <img src={student.campus.image}/>
          <Link to={`/campus/${student.campus.id}`}>
            {student.campus.name}
          </Link>
          <p> {student.campus.description} </p> 
        </div>
      </div>
    );
  }

};

export default StudentView;
