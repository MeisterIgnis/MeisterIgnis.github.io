import {
  CHANGE_NR,
  CHANGE_BEZEICHNUNG,
  CHANGE_DAUER,
  CHANGE_VORGÄNGER,
  CHANGE_NACHFOLGER
} from './actionTypes';

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
