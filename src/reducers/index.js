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

      nodes = calculateNodes(nodes);
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

      nodes = calculateNodes(nodes);
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

      nodes = calculateNodes(nodes);
      return {
        ...state,
        nodes
      };
    }
    case CHANGE_NACHFOLGER: {
      let idx = action.payload.idx;
      var nachfolgerString = action.payload.array;
      var Nachfolger = convertToArray(nachfolgerString);

      let nodes = state.nodes;
      nodes[idx].Nachfolger = Nachfolger;

      nodes = calculateNodes(nodes);
      return {
        ...state,
        nodes
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
  let char = arrayAlsString.charAt(index);
  for (var index = 0; index < arrayAlsString.length; index++) {
    if (char >= '0' && char <= '9') {
      stringAlsArray[idx] = arrayAlsString.charAt(index);
      idx++;
    }
  }

  return stringAlsArray;
}

function calculateNodes(nodes) {
  //TODO: der kleine Rest --- Welche Reihenfolge beim berechnen???
  var nextFAZ = 0;
  var nextFEZ = 0;

  nodes.forEach(node => {
    console.log(node.Vorgänger.length);

    if (node.Vorgänger.length == 0) {
      node.FAZ = 0;
      node.FEZ = node.Dauer;
    } else {
      node.Vorgänger.forEach(vorG => {
        if (nodes[vorG].FEZ > nextFAZ) {
          nextFAZ = nodes[vorG].FEZ;
        }
      });
      node.FAZ = parseInt(nextFAZ);
      node.FEZ = parseInt(nextFAZ) + parseInt(node.Dauer);
    }
  });

  return nodes;
}
