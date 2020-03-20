import {
  CHANGE_NR,
  CHANGE_BEZEICHNUNG,
  CHANGE_DAUER,
  CHANGE_VORGÄNGER,
  CHANGE_NACHFOLGER,
  ADD_NODE,
  DELETE_NODE
} from '../actions/actionTypes';

const initialState = {
  //TODO: ADD FAZ; FEZ; SAZ; SEZ;
  nodes: [
    {
      Nr: 0,
      Bezeichnung: 'Dehnen',
      Dauer: 10,
      Vorgänger: [],
      Nachfolger: [1],
      FAZ: 0,
      SAZ: 0,
      FEZ: 0,
      SEZ: 0
    },
    {
      Nr: 1,
      Bezeichnung: 'Laufen',
      Dauer: 30,
      Vorgänger: [0],
      Nachfolger: [2],
      FAZ: 0,
      SAZ: 0,
      FEZ: 0,
      SEZ: 0
    },
    {
      Nr: 2,
      Bezeichnung: 'Pause',
      Dauer: 5,
      Vorgänger: [1],
      Nachfolger: [3],
      FAZ: 0,
      SAZ: 0,
      FEZ: 0,
      SEZ: 0
    },
    {
      Nr: 3,
      Bezeichnung: 'Wiederholen',
      Dauer: 200,
      Vorgänger: [2],
      Nachfolger: [],
      FAZ: 0,
      SAZ: 0,
      FEZ: 0,
      SEZ: 0
    }
  ]
};

//TODO: FUNCTION: CALCULATE FAZ; FEZ; SAZ; SEZ;

export default function(state = initialState, action) {
  switch (action.type) {
    //Macht eigentlich keinen Sinn
    case CHANGE_NR: {
      return {
        ...state
      };
    }
    case CHANGE_BEZEICHNUNG: {
      let idx = action.payload.idx;
      var Bezeichnung = action.payload.value;

      let nodes = state.nodes;
      nodes[idx].Bezeichnung = Bezeichnung;
      return {
        ...state,
        nodes
      };
    }
    case CHANGE_DAUER: {
      let idx = action.payload.idx;
      var Dauer = action.payload.value;

      let nodes = state.nodes;
      nodes[idx].Dauer = Dauer;
      return {
        ...state,
        nodes
      };
    }
    case CHANGE_VORGÄNGER: {
      let idx = action.payload.idx;
      var vorgängerString = action.payload.array;
      let Vorgänger = convertToArray(vorgängerString);

      let nodes = state.nodes;
      nodes[idx].Vorgänger = Vorgänger;
      return {
        ...state,
        nodes
      };
    }
    case CHANGE_NACHFOLGER: {
      let idx = action.payload.idx;
      var nachfolgerString = action.payload.array;
      var Nachfolger = convertToArray(nachfolgerString);
      return {
        ...state,
        Nachfolger,
        idx
        //state[idx].Nachfolger = Nachfolger
      };
    }
    case ADD_NODE: {
      return {
        ...state
      };
    }
    case DELETE_NODE: {
      return {
        ...state
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
}

function convertToArray(arrayAlsString) {
  var stringAlsArray = [];
  var idx = 0;
  for (var index = 0; index < arrayAlsString.length; index++) {
    if (
      arrayAlsString.charAt(index) >= '0' &&
      arrayAlsString.charAt(index) <= '9'
    ) {
      stringAlsArray[idx] = arrayAlsString.charAt(index);
      idx++;
    }
  }

  return stringAlsArray;
}
