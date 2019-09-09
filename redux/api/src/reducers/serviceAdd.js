import {
  CHANGE_SERVICE_FIELD,
  ADD_SERVICE_REQUEST,
  ADD_SERVICE_FAILURE,
  ADD_SERVICE_SUCCESS,
  CANCEL_UPDATE,
  UPDATE_SERVICES,
  EDIT_SERVICE,
  REMOVE_SERVICE_REQUEST,
  REMOVE_SERVICE_SUCCESS,
  REMOVE_SERVICE_FAILURE,

  FETCH_EDIT_REQUEST,
  FETCH_EDIT_SUCCESS,
  FETCH_EDIT_FAILURE,

  UPDATE_SERVICE_REQUEST,
  UPDATE_SERVICE_FAILURE,
  UPDATE_SERVICE_SUCCESS,
} from '../actions/actionTypes'

const initialState = {
  item: { name: '', price: '', content: '', id: null},
  loading: false,
  error: null,
};

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {

    case CANCEL_UPDATE:    
      return {...initialState};

    case UPDATE_SERVICES:
      return {...state}

    case ADD_SERVICE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,      
      };

    case ADD_SERVICE_FAILURE:
      const {error} = action.payload;
      return {
        ...state,
        loading: false,
        error,
      };

    case ADD_SERVICE_SUCCESS:
      return {...initialState};

    case CHANGE_SERVICE_FIELD:
      const { name, value } = action.payload;
      const { item } = state;
      return {
        ...state,
        item: {
          ...item,
          [name]: value,
        }
    }; 

    case REMOVE_SERVICE_REQUEST:
      return { ...state, isLoading: true, error: null };

    case REMOVE_SERVICE_SUCCESS:
      return { ...state, isLoading: false, error: null };

    case REMOVE_SERVICE_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };

    case EDIT_SERVICE:
        return { ...state}; 
 
    case FETCH_EDIT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_EDIT_FAILURE:
      const {errorEdit} = action.payload.message;
      return {
        ...state,
        loading: false,
        errorEdit,
      };

    case FETCH_EDIT_SUCCESS:  
      return {
        ...state, ...action.payload.service,
        item:{ ...action.payload.service},
        loading: false,
        error: null 
    };     

    case UPDATE_SERVICE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,      
      };

    case UPDATE_SERVICE_FAILURE:
      const {errorUpdate} = action.payload;
      return {
        ...state,
        loading: false,
        errorUpdate,
      };

    case UPDATE_SERVICE_SUCCESS:
      return {...initialState};
   
    default:
      return state;
  }
}
