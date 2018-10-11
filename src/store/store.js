import { createStore } from 'redux';

import { reducer } from './ducks.js';

const store = createStore(reducer);

export default store;
