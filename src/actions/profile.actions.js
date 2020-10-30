import profileConstants from '../constants/profile.constants';
import { fetchSelectedProfile } from '../services/contactServices';

const {
  SELECT_PROFILE_REQUEST,
  SELECT_PROFILE_SUCCESS,
  SELECT_PROFILE_FAILED,
} = profileConstants;


export function selectProfile(contactId) {
  return async (dispatch) => {
    dispatch({type: SELECT_PROFILE_REQUEST, payload: contactId});

    try {
      const payload = fetchSelectedProfile(contactId);
      dispatch({type: SELECT_PROFILE_SUCCESS, payload});
    } catch (error) {
      dispatch({type: SELECT_PROFILE_FAILED, payload: error});
    }
  }
}