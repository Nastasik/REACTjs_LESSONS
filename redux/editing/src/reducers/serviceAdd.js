import {CHANGE_SERVICE_FIELD, CANCEL_SERVICE, UPDATE_SERVICE, EDIT_SERVICE, ADD_SERVICE} from '../actions/actionTypes'

const initialState = {
  name: '',
  price: '',
  isUpdate: null
};

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {    

    case CHANGE_SERVICE_FIELD:
      const {name, value} = action.payload;
      return {...state, [name]: value};

    case EDIT_SERVICE:      
      return { ...state, ...action.payload.service };

    case ADD_SERVICE:
    case UPDATE_SERVICE:    
    case CANCEL_SERVICE:      
      return { ...initialState };

    default:
      return state;
  }
}
