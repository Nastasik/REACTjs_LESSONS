import { ADD_SERVICE, REMOVE_SERVICE, CHANGE_SERVICE_FIELD, CANCEL_SERVICE, EDIT_SERVICE, UPDATE_SERVICE } from './actionTypes';

export function addService(name, price) {
  return {type: ADD_SERVICE, payload: {name, price}};
}

export function removeService(id) {
  return {type: REMOVE_SERVICE, payload: {id}};
}

export function changeServiceField(name, value) {
  return {type: CHANGE_SERVICE_FIELD, payload: {name, value}}
}

export function cancelUpdate() {
  return {type: CANCEL_SERVICE};
}

export function editService(service) {
  return {type: EDIT_SERVICE, payload: {service}};
}

export function updateService(service) {
  return {type: UPDATE_SERVICE, payload: {service}};
}