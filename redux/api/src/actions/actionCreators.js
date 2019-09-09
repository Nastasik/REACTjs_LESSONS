import {
  CHANGE_SERVICE_FIELD,
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_FAILURE,
  FETCH_SERVICES_SUCCESS,
  ADD_SERVICE_REQUEST,
  ADD_SERVICE_FAILURE,
  ADD_SERVICE_SUCCESS,
  REMOVE_SERVICE_REQUEST,
  REMOVE_SERVICE_SUCCESS,
  REMOVE_SERVICE_FAILURE,
  REMOVE_SERVICE,
  EDIT_SERVICE,
  UPDATE_SERVICES,
  CANCEL_UPDATE,

  FETCH_EDIT_REQUEST,
  FETCH_EDIT_SUCCESS,
  FETCH_EDIT_FAILURE,

  UPDATE_SERVICE_REQUEST,
  UPDATE_SERVICE_FAILURE,
  UPDATE_SERVICE_SUCCESS,
} from './actionTypes';

export const changeServiceField = (name, value) => ({
  type: CHANGE_SERVICE_FIELD,
  payload: {
    name,
    value,
  },
});

export const removeServiceItem = id => ({
  type: REMOVE_SERVICE,
  payload: {
    id,
  },
});

// ===============================================================

export const fetchServicesRequest =() => ({
  type: FETCH_SERVICES_REQUEST,
});

export const fetchServicesFailure = error => ({
  type: FETCH_SERVICES_FAILURE,
  payload: {
    error,
  },
});

export const fetchServicesSuccess = items => ({
  type: FETCH_SERVICES_SUCCESS,
  payload: {
    items,
  },
});

export const fetchServices = () => async (dispatch) => {
  dispatch(fetchServicesRequest());

  try {
    const response = await fetch(`http://localhost:7070/api/services`);

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    dispatch(fetchServicesSuccess(data));

  } catch (error) {
    dispatch(fetchServicesFailure(error.message));
  }
};

// =================================================================

export const addServiceRequest = (name, price, content) => ({
  type: ADD_SERVICE_REQUEST,
  payload: {
    name,
    price,
    content,
  },
})

export const addServiceFailure = message => ({
  type: ADD_SERVICE_FAILURE,
  payload: {
    message,
  },
});

export const addServiceSuccess = () => ({
  type: ADD_SERVICE_SUCCESS,
});

export const addService = () => async (dispatch, getState) => {
  dispatch(addServiceRequest());
  const {serviceAdd: {item: {name, price, content}}} = getState();

  try {
    const response = await fetch(`http://localhost:7070/api/services`, {
      method: 'POST',
      headers: {  
        'Access-Control-Allow-Origin': 'http://localhost:7070/api/services',      
        'Content-Type': 'application/json'},
      body: JSON.stringify({name, price, content}),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    dispatch(addServiceSuccess());
  } catch (e) {
    dispatch(addServiceFailure(e.message));
  }

  dispatch(fetchServices());
};

// ==========================================================================

function removeServiceRequest() {
    return { type: REMOVE_SERVICE_REQUEST };
}

function removeServiceSuccess(items) {
    return { type: REMOVE_SERVICE_SUCCESS, payload: {items: items || []} };
}

function removeServiceFailure(message) {
    return { type: REMOVE_SERVICE_FAILURE, payload: {message} };
}

export const removeService = id => async (dispatch) => {
  dispatch(removeServiceRequest());
  try {
    const response = await fetch("http://localhost:7070/api/services/" + id, {
      method: "DELETE"
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();

    dispatch(removeServiceSuccess(data));
    dispatch(fetchServices());

  } catch (e) {
    dispatch(removeServiceFailure(e.message));
  }
};

// ===========================================================================

function editServiceRequest() {
  return { type: FETCH_EDIT_REQUEST };
}

function editServiceSuccess(service) {
  return { type: FETCH_EDIT_SUCCESS, payload: {service}};
}

function editServiceFailure(message) {
  return { type: FETCH_EDIT_FAILURE, payload: {message} };
}

export const editService = id => async (dispatch) => {
    dispatch(editServiceRequest());
    try {
      const response = await fetch("http://localhost:7070/api/services/" + id, 
      {
        method: "GET"
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();

      dispatch(editServiceSuccess(data));
      
    } catch (e) {
      dispatch(editServiceFailure(e.message));
    }
};

export function editServiceField(service) {
    return { type: EDIT_SERVICE, payload: {service} };
}

// ============================================================
export function updateServices(service) {
    return { type: UPDATE_SERVICES, payload: {service} };
}


export const updateServiceRequest = (name, price, content) => ({
  type: UPDATE_SERVICE_REQUEST,
  payload: {
    name,
    price,
    content,
  },
})

export const updateServiceFailure = message => ({
  type: UPDATE_SERVICE_FAILURE,
  payload: {
    message,
  },
});

export const updateServiceSuccess = () => ({
  type: UPDATE_SERVICE_SUCCESS,
});

export const updateService = (service) => async (dispatch, getState) => {
  dispatch(updateServiceRequest());
  const {serviceAdd: {item: {name, price, content}}} = getState();

  try {
    const response = await fetch(`http://localhost:7070/api/services/` + service.id, {
      method: 'POST',
      headers: {  
        'Access-Control-Allow-Origin': 'http://localhost:7070/api/services',      
        'Content-Type': 'application/json'},
      body: JSON.stringify({name, price, content}),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    dispatch(updateServiceSuccess());
  } catch (e) {
    dispatch(updateServiceFailure(e.message));
  }

  dispatch(fetchServices());
};

// ==========================================================================

export function cancelUpdate() {
    return { type: CANCEL_UPDATE };
}
