import * as ac from './actions/actionCreators';
const axios = require('axios');

// THUNKS

// --- BEGIN CAMPUS THUNK ---
export const fetchAllCampusesThunk = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/campuses`);
    dispatch(ac.fetchAllCampuses(data)); // -> dispatch({ type, payload })
  } catch(err) {
    console.error(err);
  }
};

export const fetchCampusThunk = (id) => async (dispatch) => {
  try {
    let res = await axios.get(`/api/campuses/${id}`);
    dispatch(ac.fetchCampus(res.data));
  } catch(err) {
    console.error(err);
  }
};

export const addCampusThunk = (campus) => async (dispatch) => {
  try {
    const { data } = await axios.post(`/api/campuses`, campus); // TODO: ask stacey about promise
    dispatch(ac.addCampus(data));
  } catch (err) {
    console.error(err);
  }
}

export const editCampusThunk = (campus) => async (dispatch) => {
  try {
    const { data } = await axios.put(`/api/campuses/${campus.id}`, campus);
    dispatch(ac.editCampus(data));
  } catch (err) {
    console.error(err);
  }
}

export const deleteCampusThunk = (campusId) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`/api/campuses/${campusId}`);
    dispatch(ac.deleteCampus(data));
  } catch (err) {
    console.error(err);
  }
}
// --- END CAMPUS THUNK ---

// --- BEGIN STUDENT THUNK ---
export const fetchAllStudentsThunk = () => async (dispatch) => {
  try {
    let res = await axios.get(`/api/students`);
    dispatch(ac.fetchAllStudents(res.data));
  } catch(err) {
    console.error(err);
  }
};

export const fetchStudentThunk = id => async dispatch => {
  try {
    let res = await axios.get(`/api/students/${id}`);
    dispatch(ac.fetchStudent(res.data));
  } catch(err) {
    console.error(err);
  }
};

export const addStudentThunk = (student) => async (dispatch) => {
  try {
    let res = await axios.post(`/api/students`, student);
    dispatch(ac.addStudent(res.data));
  } catch(err) {
    console.error(err);
  }
};

export const editStudentThunk = (student) => async dispatch => {
  try {
    let updatedStudent = await axios.put(`/api/students/${student.id}`, student);
    dispatch(ac.editStudent(updatedStudent));
  } catch(err) {
    console.error(err);
  }
};

export const deleteStudentThunk = studentId => async dispatch => {
  try {
    await axios.delete(`/api/students/${studentId}`);
    //delete succesful so change state with dispatch
    dispatch(ac.deleteStudent(studentId));
  } catch(err) {
    console.error(err);
  }
};
