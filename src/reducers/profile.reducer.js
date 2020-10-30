import profileConstants from '../constants/profile.constants';
const {
  SELECT_PROFILE_REQUEST,
  SELECT_PROFILE_SUCCESS,
  SELECT_PROFILE_FAILED,
} = profileConstants;

const inintialState = {
  isLoading: false,
  error: false,
  profile: {}
};

export default function Reducer(state = inintialState, action) {
  const { type, payload } = action;

  switch(type) {
    case SELECT_PROFILE_REQUEST:
      return {...state, isLoading: true, profile: {}, error: false};
    case SELECT_PROFILE_SUCCESS:
      return {...state, isLoading: false, profile: payload, error: false};
    case SELECT_PROFILE_FAILED:
      return {...state, isLoading: false, profile: {}, error: payload};
    default:
      return state;
  }
}