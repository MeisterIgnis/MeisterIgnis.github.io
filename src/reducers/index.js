import {
  CHANGE_NR,
  CHANGE_BEZEICHNUNG,
  CHANGE_DAUER,
  CHANGE_VORGÄNGER,
  CHANGE_NACHFOLGER
} from '../actions/actionTypes';

const initialState = {
  nodes: [
    {
      Nr: 0,
      Bezeichnung: 'Dehnen',
      Dauer: 10,
      Vorgänger: [],
      Nachfolger: [1]
    },
    {
      Nr: 1,
      Bezeichnung: 'Laufen',
      Dauer: 30,
      Vorgänger: [0],
      Nachfolger: [2]
    },
    {
      Nr: 2,
      Bezeichnung: 'Pause',
      Dauer: 5,
      Vorgänger: [1, 2],
      Nachfolger: []
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NR: {
      var idx = action.payload.idx;
      var Nr = action.payload.value;
      return {
        ...state,
        Nr
      };
    }
    case CHANGE_BEZEICHNUNG: {
      var idx = action.payload.idx;
      var Bezeichnung = action.payload.value;
      return {
        ...state,
        Bezeichnung
      };
    }
    case CHANGE_DAUER: {
      var idx = action.payload.idx;
      var Dauer = action.payload.value;
      return {
        ...state,
        Dauer
      };
    }
    case CHANGE_VORGÄNGER: {
      var idx = action.payload.idx;
      var Vorgänger = action.payload.array;
      return {
        ...state,
        Vorgänger
      };
    }
    case CHANGE_NACHFOLGER: {
      var idx = action.payload.idx;
      var Nachfolger = action.payload.array;
      return {
        ...state
        //state[idx].Nachfolger = Nachfolger
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
}
