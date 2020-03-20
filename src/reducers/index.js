import {
    CHANGE_NR,
  CHANGE_BEZEICHNUNG,
  CHANGE_DAUER,
  CHANGE_VORGÄNGER,
  CHANGE_NACHFOLGER
} from '../actions/actionTypes';

const initialState = {
  Nr: 0,
  Bezeichnung: 'Laufen',
  Dauer: 4,
  Vorgänger: [1],
  Nachfolger: [0]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NR: {
        var Nr = action.payload.value;
        return {
          ...state,
          Nr
        };
      }
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
