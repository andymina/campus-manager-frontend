import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import './style/Empty.css'
import { Link } from 'react-router-dom';

const Empty = (props) => {
  return (
    <div className = 'container'>
    <div className="parent">
      <h1 className = 'center'>All {props.type}</h1>
      <h3 className = 'center'>There are no {props.type} registered in the database.</h3>
      <Link to= {props.link}>
      <Button className = 'center' variant="contained" color="primary">
        {props.buttonLabel}
      </Button>
      </Link>
      </div>
    </div>
  );
}

Empty.defaultProps = {
  type: 'Default',
  buttonLabel: 'Default Button',
  link: './add-campus',
}

Empty.propTypes = {
  type: PropTypes.string,
  buttonLabel: PropTypes.string,
  link: PropTypes.string,
}

export default Empty
