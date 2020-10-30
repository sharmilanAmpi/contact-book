import listContants from '../constants/list.constats';

const {
  FETCH_CONTACT_LIST_REQUEST,
  FETCH_CONTACT_LIST_SUCCESS,
  FETCH_CONTACT_LIST_FAILED,
} = listContants;
const initiallState = {
  isLoading: false,
  list: [],
  error: false
};

export default function Reducer(state = initiallState, action) {
  const {type, payload} = action;

  switch(type) {
    case FETCH_CONTACT_LIST_REQUEST: 
      return {...state, isLoading: true, list: [], error: false};
    case FETCH_CONTACT_LIST_SUCCESS:
      return {...state, isLoading: false, list: payload, error: false};
    case FETCH_CONTACT_LIST_FAILED:
      return {...state, isLoading: false, list: [], error: payload};
    default:
      return state;
  }
}