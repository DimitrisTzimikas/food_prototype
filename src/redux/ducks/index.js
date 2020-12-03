/* Libraries */
import {combineReducers} from 'redux';
/* Local Files */
import {language} from './language';

/* Reducers */
const reducers = combineReducers({
  language,
});

export {reducers};
