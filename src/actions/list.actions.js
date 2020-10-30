import listContants from '../constants/list.constats';
import { fetchContacts } from '../services/contactServices';
import { selectProfile } from './profile.actions';

const {
  FETCH_CONTACT_LIST_REQUEST,
  FETCH_CONTACT_LIST_SUCCESS,
  FETCH_CONTACT_LIST_FAILED
} = listContants;

export function fetchList() {
  return async(dispatch) => {
    dispatch({type: FETCH_CONTACT_LIST_REQUEST});

    try {
      const payload = fetchContacts();
      dispatch({type: FETCH_CONTACT_LIST_SUCCESS, payload})
      // initially, First contact will be consider as the selected profile
      const selectedContact = payload.length > 0 ? payload[0].id : null;
      if (selectedContact) {
        dispatch(selectProfile(selectedContact));
      }
    } catch (error) {
      dispatch({type: FETCH_CONTACT_LIST_FAILED});
    }
  }
};
