import createConstants from '../constants/create.costants';
import updateConstants from '../constants/update.constats';

const {
  CREATE_CONTACT_REQUEST,
  CREATE_CONTACT_SUCCESS,
  CREATE_CONTACT_FAILED,
} = createConstants;
const {
  UPDATE_CONTACT_REQUEST,
  UPDATE_CONTACT_SUCCESS,
  UPDATE_CONTACT_FAILED,
} = updateConstants;

const initialContact = {
  isCreating: false,
  createError: false,
  contact: {},
  isUpdating: false,
  updateError: false
};

export default function Reducer(state = initialContact, action) {
  const { type, payload } = action;

  switch(type) {
    case CREATE_CONTACT_REQUEST:
      return {...state, isCreating: true, contact: {}, createError: false};
    case CREATE_CONTACT_SUCCESS:
      return {...state, isCreating: false, contact: payload, createError: false};
    case CREATE_CONTACT_FAILED:
      return {...state, isCreating: false, contact: {}, createError: payload};
    case UPDATE_CONTACT_REQUEST:
      return {...state, isUpdating: true, contact: {}, updateError: false};
    case UPDATE_CONTACT_SUCCESS:
      return {...state, isUpdating: false, contact: payload, updateError: false};
    case UPDATE_CONTACT_FAILED:
      return {...state, isUpdating: false, contact: {}, updateError: payload};
    default: return state;
  }
}