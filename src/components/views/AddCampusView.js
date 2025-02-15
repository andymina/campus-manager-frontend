import { Component } from 'react';
import { FormGroup, TextField, Container, Button } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import validator from 'validator';
import './style/form.css';

class AddCampusView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      description: '',
      imgURL: '',
      errors: {},
      cancel: false,
      submit: false
    };
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  verifyInput = (event, update = true) => {
    // get the field to check
    let field = event.target.id;
    // Handle if the field was left empty
    if (this.state[field] === '' && field !== 'imgURL') {
      if (update) this.setState({ errors: { ...this.state.errors, [field]: "Field can't be empty." } });
      return false;
    }

    if (field === 'name' && !validator.isAlpha(this.state[field], 'en-US', { ignore: " -." })) {
      if (update) this.setState({ errors: { ...this.state.errors, [field]: "Name must only contain letters." } });
      return false;
    } else if (field === 'address' && !validator.isAlphanumeric(this.state[field], 'en-US', { ignore: " -.," })) {
      if (update) this.setState({ errors: { ...this.state.errors, [field]: "Address can only contain numbers or letters." } });
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
    // Assume the list is valid
    let valid = true;
    // Check against every field
    valid &= this.verifyInput({ target: { id: 'name' } }, false);
    valid &= this.verifyInput({ target: { id: 'address' } }, false);
    valid &= this.verifyInput({ target: { id: 'description' } }, false);
    valid &= this.verifyInput({ target: { id: 'imgURL' } }, false);

    return valid;
  }

  submit = async () => {
    let campus = {
      name: this.state.name,
      address: this.state.address,
      description: this.state.description,
      imageUrl: this.state.imgURL ? this.state.imgURL : undefined
    };

    // submit
    let data = await this.props.addCampus(campus);
    this.setState({ submit: true, id: data.id });
  }

  render() {
    if (this.state.cancel)
      return <Redirect to="/campuses" />
    
    if (this.state.submit)
      return <Redirect to={`/campus/${this.state.id}`}/>
    
    return (
      <Container>
        <div className ="form-container">
        <h1 className="form-heading">Add Campus</h1>
        </div>
        <FormGroup onSubmit={this.submit}>
          <TextField
            id="name"
            label="Name"
            onChange={this.handleInputChange}
            onBlur={this.verifyInput}
            value={this.state.name}
            required={true}
            error={Boolean(this.state.errors.name)}
            helperText={this.state.errors.name}/>
          <TextField
            id="address"
            label="Address"
            onChange={this.handleInputChange}
            onBlur={this.verifyInput}
            value={this.state.address}
            required={true}
            error={Boolean(this.state.errors.address)}
            helperText={this.state.errors.address}/>
          <TextField
            id="description"
            label="Description"
            onChange={this.handleInputChange}
            onBlur={this.verifyInput}
            value={this.state.description}
            required={true}
            error={Boolean(this.state.errors.description)}
            helperText={this.state.errors.description}/>
          <TextField
            id="imgURL"
            label="Image URL"
            onChange={this.handleInputChange}
            onBlur={this.verifyInput}
            value={this.state.imgURL}
            error={Boolean(this.state.errors.imgURL)}
            helperText={this.state.errors.imgURL}/>
          <div className="button-group">
            <Button className="button" variant="contained" color="primary" disabled={!this.validInput()} onClick={this.submit}>Submit</Button>
            <Button className="button" variant="contained" color="secondary" onClick={() => this.setState({ cancel: true })}>Cancel</Button>
          </div>
        </FormGroup>
      </Container>
    );
  }
}

export default AddCampusView;
