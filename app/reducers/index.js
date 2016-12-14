// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import bom from './bom'

const rootReducer = combineReducers({
  counter,
  routing, 
  bom
});

export default rootReducer;
