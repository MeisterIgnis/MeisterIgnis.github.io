import {
  CHANGE_BEZEICHNUNG,
  CHANGE_DAUER,
  CHANGE_VORGÄNGER,
  CHANGE_NACHFOLGER
} from '../actions/actionTypes';

const initialState = {
  Nr: 1,
  Bezeichnung: 'Laufen',
  Dauer: 4,
  Vorgänger: 0,
  Nachfolger: 0
};

export default function(state = initialState, action) {
  console.table(state);
  switch (action.type) {
    case CHANGE_BEZEICHNUNG: {
      var Bezeichnung = action.payload.value;
      return {
        ...state,
        Bezeichnung
      };
    }
    case CHANGE_DAUER: {
      var Dauer = action.payload.value;
      return {
        ...state,
        Dauer
      };
    }
    case CHANGE_VORGÄNGER: {
      var Vorgänger = action.payload.array;
      return {
        ...state,
        Vorgänger
      };
    }
    case CHANGE_NACHFOLGER: {
      var Nachfolger = action.payload.array;
      return {
        ...state,
        Nachfolger
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
}
