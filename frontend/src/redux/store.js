import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {reducer} from './reducer.js';

const initialState = {
  filter:"down",
  view:"cards",
  sightings:[],
  species:[],
  modalOpen:false,
  fetching:false,
  initialFetchingDone:false,
}


export default createStore(
  reducer,initialState,applyMiddleware(thunk)
);
