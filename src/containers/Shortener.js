import { connect } from 'react-redux';
import { createUrl } from '../actions';
import CreateForm from '../components/CreateForm';

const mapDispatchToProps = (dispatch) => {
  return {
    onShort: (url) => {
      dispatch(createUrl(url));
    }
  }
}

const Shortener = connect(null, mapDispatchToProps)(CreateForm);

export default Shortener;
