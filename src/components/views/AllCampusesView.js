import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Header from "./Header.js"
import Empty from "./EmptyComponent.js"
import CampusCardView from "./CampusCard.js";


const AllCampusesView = (props) => {
  if (!props.allCampuses.length) {
    return (
      <div>
        <Empty type = 'Campuses' buttonLabel = 'Add Campus' link = '/add-campus'/>
      </div>
    );
  }

  return (
    <div>
      <Header heading ='All Campuses' buttonLabel ='Add Campus' link = '/add-campus'/>
      {props.allCampuses.map((campus) => (
        <div key={campus.id}>
          <CampusCardView campus={campus}/>
        </div>
      ))}
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;
