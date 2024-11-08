import { createStore } from 'redux';
import reducer from './reducer'; // Correct path!

const store = createStore(reducer);

export default store;