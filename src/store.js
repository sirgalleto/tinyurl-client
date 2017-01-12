import { createStore } from 'redux';
import tinyApp from './reducers';

let store = createStore(tinyApp);

export default store;
