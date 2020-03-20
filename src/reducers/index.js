import {
  CHANGE_NR,
  CHANGE_BEZEICHNUNG,
  CHANGE_DAUER,
  CHANGE_VORGÄNGER,
  CHANGE_NACHFOLGER
} from '../actions/actionTypes';

const initialState = {
  //TODO: ADD FAZ; FEZ; SAZ; SEZ; GP
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
      Vorgänger: [1],
      Nachfolger: [3]
    },
    {
      Nr: 3,
      Bezeichnung: 'Wiederholen',
      Dauer: 200,
      Vorgänger: [2],
      Nachfolger: []
    }
  ]
};

//TODO: FUNCTION: CALCULATE FAZ; FEZ; SAZ; SEZ; GP

export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NR: {
      let idx = action.payload.idx;
      var Nr = action.payload.value;
      return {
        ...state,
        Nr,
        idx
      };
    }
    case CHANGE_BEZEICHNUNG: {
      let idx = action.payload.idx;
      var Bezeichnung = action.payload.value;
      return {
        ...state,
        Bezeichnung,
        idx
      };
    }
    case CHANGE_DAUER: {
      let idx = action.payload.idx;
      var Dauer = action.payload.value;
      return {
        ...state,
        Dauer,
        idx
      };
    }
    case CHANGE_VORGÄNGER: {
      let idx = action.payload.idx;
      var Vorgänger = action.payload.array;
      return {
        ...state,
        Vorgänger,
        idx
      };
    }
    case CHANGE_NACHFOLGER: {
      let idx = action.payload.idx;
      var Nachfolger = action.payload.array;
      return {
        ...state,
        Nachfolger,
        idx
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
