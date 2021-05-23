import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllStudentsThunk } from "../../store/thunks";
import { AllStudentsView } from "../views";


class AllStudentsContainer extends Component{

  componentDidMount() {
    console.log(this.props);
    this.props.fetchAllStudents();
  }

  componentDidUpdate() {
    this.props.fetchAllStudents();
  }

  render() {
    return (
      <AllStudentsView
        allStudents={this.props.allStudents}
      />
    );
  }
};

const mapState = (state) => {
  return {
    allStudents: state.allStudents,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
  };
};

// Type check props;
AllStudentsContainer.propTypes = {
  allStudents: PropTypes.array.isRequired,
  fetchAllStudents: PropTypes.func.isRequired,
};


export default connect(mapState, mapDispatch)(AllStudentsContainer);
