import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudentThunk } from "../../store/thunks";

import { StudentView } from "../views";


class StudentContainer extends Component {

  componentDidMount(){
    //getting student ID from url
    this.props.fetchStudent(this.props.match.params.id);
  }

  render(){
    return (
      <h1>Single Student View</h1>
    );
  }
};

// map state to props
const mapState = (state) => {
  return {
    student: state.student,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(StudentContainer);
