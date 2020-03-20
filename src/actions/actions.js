import {
  CHANGE_BEZEICHNUNG,
  CHANGE_DAUER,
  CHANGE_VORGÄNGER,
  CHANGE_NACHFOLGER
} from './actionTypes';

export const changeBezeichnung = value => ({
  type: CHANGE_BEZEICHNUNG,
  payload: { value }
});

export const changeDauer = value => ({
  type: CHANGE_DAUER,
  payload: { value }
});

export const changeVorgänger = array => ({
  type: CHANGE_VORGÄNGER,
  payload: { array }
});

export const changeNachfolger = array => ({
  type: CHANGE_NACHFOLGER,
  payload: { array }
});
