import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCampusThunk, editCampusThunk } from '../../store/thunks';
import { EditCampusView } from '../views';

class EditCampusContainer extends Component {
  componentDidMount() {
    this.props.fetchCampus(this.props.match.params.id);
  }

  render() {
    return (
      <EditCampusView
        editCampus={this.props.editCampus}
        campus={this.props.campus}/>
    );
  }
}

const mapStateToProps = (state) => ({
  campus: state.campus
});

// Map dispatch to props
const mapDispatchToProps = (dispatch) => ({
  fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
  editCampus: (campus) => dispatch(editCampusThunk(campus))
});

// Make sure we get the addCampus func through props
EditCampusContainer.propTypes = {
  editCampus: PropTypes.func.isRequired,
  campus: PropTypes.object.isRequired,
  fetchCampus: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCampusContainer);


