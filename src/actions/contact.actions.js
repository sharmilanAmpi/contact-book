import createConstants from '../constants/create.costants';
import updateConstants from '../constants/update.constats';
import { createContact, updateContact, getContact as fetchContact } from "../services/contactServices";
const {
  CREATE_CONTACT_REQUEST,
  CREATE_CONTACT_SUCCESS,
  CREATE_CONTACT_FAILED,
} = createConstants;
const {
  UPDATE_CONTACT_REQUEST,
  UPDATE_CONTACT_SUCCESS,
  UPDATE_CONTACT_FAILED,
  GET_CONTACT_REQUEST,
  GET_CONTACT_SUCCESS,
  GET_CONTACT_FAILED,
} = updateConstants;

export function create(contact) {
  return async (dispatch) => {
    dispatch({type: CREATE_CONTACT_REQUEST});

    try {
      const payload = createContact(contact);
      dispatch({type: CREATE_CONTACT_SUCCESS, payload});
    } catch (error) {
      dispatch({type: CREATE_CONTACT_FAILED, payload: error});
    }
  }
};

export function update(id, data) {
  return async (dispatch) => {
    dispatch({type: UPDATE_CONTACT_REQUEST, payload: id});

    try {
      const payload = updateContact(id, data)
      dispatch({type: UPDATE_CONTACT_SUCCESS, payload})
    } catch (error) {
      dispatch({type: UPDATE_CONTACT_FAILED, payload: error});
    }
  }
}

export function getContact(id) {
  return async (dispatch) => {
    dispatch({type: GET_CONTACT_REQUEST})
    try {
      const payload = fetchContact(id);
      dispatch({type: GET_CONTACT_SUCCESS, payload});
    } catch (error) {
      dispatch({type: GET_CONTACT_FAILED, payload: error});
    }
  }
}