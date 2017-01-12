import { connect } from 'react-redux';
import { addUrl } from '../actions';
import CreateForm from '../components/CreateForm';

const mapDispatchToProps = (dispatch) => {
  return {
    onShort: (url) => {
      dispatch(addUrl(url));
    }
  }
}

const Shortener = connect(null, mapDispatchToProps)(CreateForm);

export default Shortener;
