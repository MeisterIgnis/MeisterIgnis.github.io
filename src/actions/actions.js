import {
  CHANGE_NR,
  CHANGE_BEZEICHNUNG,
  CHANGE_DAUER,
  CHANGE_VORGÄNGER,
  CHANGE_NACHFOLGER,
  ADD_NODE,
  DELETE_NODE
} from './actionTypes';

export const addNode = () => ({
  type: ADD_NODE
});

export const deleteNode = () => ({
  type: DELETE_NODE
});

export const changeNr = (value, idx) => ({
  type: CHANGE_NR,
  payload: { value, idx }
});

export const changeBezeichnung = (value, idx) => ({
  type: CHANGE_BEZEICHNUNG,
  payload: { value, idx }
});

export const changeDauer = (value, idx) => ({
  type: CHANGE_DAUER,
  payload: { value, idx }
});

export const changeVorgänger = (array, idx) => ({
  type: CHANGE_VORGÄNGER,
  payload: { array, idx }
});

export const changeNachfolger = array => ({
  type: CHANGE_NACHFOLGER,
  payload: { array }
});
