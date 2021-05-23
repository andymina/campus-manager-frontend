import './style/Campus.css'
import Button from '@material-ui/core/Button';
import { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Header from './Header';
import Box from '@material-ui/core/Box';
import CardView from "./Card.js";
import Empty from "./EmptyComponent.js"

class CampusView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    }
  }

  handleDelete = () => {
    this.props.deleteCampus(this.props.campus.id);
    this.setState({ redirect: true });
  }

  render() {
    const {campus} = this.props;

    if (this.state.redirect)
      return <Redirect to="/campuses"/>

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
                  <Button variant="contained" color="primary" onClick={this.handleDelete}>
                    Delete
                  </Button>
              </Link>
            </div>
          </div>
        </div>
        <div id = "student">
          {campus.students.length !== 0 ? 
          <Header
            heading="Students at this campus"
            link="/add-student"
            buttonLabel="Add student"/>
            :
          <Empty
          type="Students"
          link="/add-student"
          buttonLabel="Add student"/>}
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
  }
};

export default CampusView;
