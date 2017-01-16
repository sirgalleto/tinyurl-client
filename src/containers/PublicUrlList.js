import { connect } from 'react-redux';
// import { addUrl } from '../actions';
import UrlList from '../components/UrlList';

const mapStatetoProps = (state) => {
  return {
    urls: state.urls.items
  }
}

const PublicUrlList = connect(mapStatetoProps)(UrlList);

export default PublicUrlList;
