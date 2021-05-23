import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Fab } from '@material-ui/core';
import Header from "./Header.js"
import AddCampusView from './AddCampusView';
import Empty from "./EmptyComponent.js"

const AllCampusesView = (props) => {
  if (!props.allCampuses.length) {
    return (
      <div>
        <Empty type = 'Campuses' buttonLabel = 'Add Campus'/>
      </div>
    );
  }

  return (
    <div>
      <Header heading ='All Campuses' buttonLabel ='Add Campus'/>
      {props.allCampuses.map((campus) => (
        <div key={campus.id}>
          <Link to={`/campus/${campus.id}`}>
            <h1>{campus.name}</h1>
          </Link>
          <p>{campus.description}</p>
        </div>
      ))}
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;
