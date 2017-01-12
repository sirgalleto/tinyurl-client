import { connect } from 'react-redux';
// import { addUrl } from '../actions';
import UrlList from '../components/UrlList';

const mapSatetoProps = (state) => {
  return {
    urls: state.urls
  }
}

const PublicUrlList = connect(mapSatetoProps)(UrlList);

export default PublicUrlList;
