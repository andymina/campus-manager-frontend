import { Component } from 'react';
import { FormGroup, TextField, Container, Button, MenuItem } from '@material-ui/core';
import validator from 'validator';

class EditStudentView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: props.student.firstname || '',
      lastname: props.student.lastname || '',
      email: props.student.email || '',
      gpa: String(props.student.gpa) || '',
      imgURL: props.student.imageUrl || '',
      campus: props.student.campus ? props.student.campus.name : "None",
      campusId: props.student.campus ? props.student.campusId : 0,
      errors: {}
    }
  }


  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        firstname: this.props.student.firstname,
        lastname: this.props.student.lastname,
        email: this.props.student.email,
        gpa: String(this.props.student.gpa),
        imgURL: this.props.student.imageUrl,
        campus: this.props.student.campus ? this.props.student.campus.name : "None",
        campusId: this.props.student.campus ? this.props.student.campusId : 0,
        errors: {}
      });
    }
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  selectCampus = (event) => {
    this.setState({ campus: event.target.value, campusId: event.target.id });
  }

  verifyInput = (event, update = true) => {
    // get the field to check
    let field = event.target.id;
    // Handle if the field was left empty
    if (this.state[field] === '' && field !== 'imgURL') {
      if (update) this.setState({ errors: { ...this.state.errors, [field]: "Field can't be empty." } });
      return false;
    }

    if (field.includes('name') && !validator.isAlpha(this.state[field], 'en-US', { ignore: " -." })) {
      if (update) this.setState({ errors: { ...this.state.errors, [field]: "Name must only contain letters." } });
      return false;
    } else if (field === 'email' && !validator.isEmail(this.state[field])) {
      if (update) this.setState({ errors: { ...this.state.errors, [field]: "Invalid email." } });
      return false;
    } else if (field === 'gpa' && !validator.isFloat(this.state[field], { min: 0.0, max: 4.0 })) {
      if (update) this.setState({ errors: { ...this.state.errors, [field]: "GPA must between 0.0 and 4.0." } });
      return false;
    } else if (field === 'imgURL' && this.state[field] !== '' && !validator.isURL(this.state[field])) {
      if (update) this.setState({ errors: { ...this.state.errors, [field]: "Invalid image URL." } });
      return false;
    } else {
      if (update) this.setState({ errors: { ...this.state.errors, [field]: "" } });
      return true;
    }
  }

  validInput = () => {
    // Assume the input is valid
    let valid = true;
    // Check against every field
    valid &= this.verifyInput({ target: { id: 'firstname' } }, false);
    valid &= this.verifyInput({ target: { id: 'lastname' } }, false);
    valid &= this.verifyInput({ target: { id: 'email' } }, false);
    valid &= this.verifyInput({ target: { id: 'gpa' } }, false);
    valid &= this.verifyInput({ target: { id: 'imgURL' } }, false);

    // return the status
    return valid;
  }

  submit = () => {
    let student = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      gpa: Number(this.state.gpa),
      campusId: this.state.campusId ? this.state.campusId : undefined,
      imageUrl: this.state.imgURL ? this.state.imgURL : undefined,
      id: this.props.student.id
    };
    // submit
    this.props.editStudent(student);
  }

  render() {
    return (
      <Container>
        <FormGroup onSubmit={this.submit}>
          <TextField
            id="firstname"
            label="First name"
            onChange={this.handleInputChange}
            onBlur={this.verifyInput}
            value={this.state.firstname}
            required={true}
            error={Boolean(this.state.errors.firstname)}
            helperText={this.state.errors.firstname}/>
          <TextField
            id="lastname"
            label="Last name"
            onChange={this.handleInputChange}
            onBlur={this.verifyInput}
            value={this.state.lastname}
            required={true}
            error={Boolean(this.state.errors.lastname)}
            helperText={this.state.errors.lastname}/>
          <TextField
            id="email"
            label="Email"
            onChange={this.handleInputChange}
            onBlur={this.verifyInput}
            value={this.state.email}
            required={true}
            error={Boolean(this.state.errors.email)}
            helperText={this.state.errors.email}/>
          <TextField
            id="gpa"
            label="GPA"
            onChange={this.handleInputChange}
            onBlur={this.verifyInput}
            value={this.state.gpa}
            required={true}
            error={Boolean(this.state.errors.gpa)}
            helperText={this.state.errors.gpa}/>
          <TextField
            id="imgURL"
            label="Image URL"
            onChange={this.handleInputChange}
            onBlur={this.verifyInput}
            value={this.state.imgURL}
            error={Boolean(this.state.errors.imgURL)}
            helperText={this.state.errors.imgURL}/>
          <TextField id="campus" label="Campus" value={this.state.campus} select>
            <MenuItem value="None">None</MenuItem>
            {
              this.props.allCampuses.map((campus) => {
                return (
                  <MenuItem
                    key={campus.id}
                    value={campus.name}
                    id={campus.id}
                    onClick={() => this.setState({ campus: campus.name, campusId: campus.id })}>
                    {campus.name}
                  </MenuItem>
                );
              })
            }
          </TextField>
          <Button variant="contained" disabled={!this.validInput()} onClick={this.submit}>Submit</Button>
        </FormGroup>
      </Container>
    );
  }
}

export default EditStudentView;