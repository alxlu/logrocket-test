import {DEFAULT_ACTION} from './actions';
const initialState = {};
export default function reducer2(state=initialState, action) {
  switch(action.type) {
    case DEFAULT_ACTION:
      return {...state, ytho: 1};
    default:
      return state
  }
}
