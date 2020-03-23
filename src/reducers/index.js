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
      Nachfolger: [],
      FAZ: 0,
      SAZ: 0,
      FEZ: 0,
      SEZ: 0
    },
    {
      Nr: 1,
      Bezeichnung: 'Laufen',
      Dauer: 30,
      Vorgänger: [],
      Nachfolger: [],
      FAZ: 0,
      SAZ: 0,
      FEZ: 0,
      SEZ: 0
    },
    {
      Nr: 2,
      Bezeichnung: 'Pause',
      Dauer: 5,
      Vorgänger: [],
      Nachfolger: [],
      FAZ: 0,
      SAZ: 0,
      FEZ: 0,
      SEZ: 0
    },
    {
      Nr: 3,
      Bezeichnung: 'Wiederholen',
      Dauer: 200,
      Vorgänger: [],
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

      var nodes = state.nodes;
      nodes[idx].Vorgänger = Vorgänger;

      nodes = calculateNachfolger(nodes);

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
      var nodes = state.nodes;
      nodes.push({
        Nr: nodes.length,
        Bezeichnung: '',
        Dauer: 0,
        Vorgänger: [],
        Nachfolger: [],
        FAZ: 0,
        SAZ: 0,
        FEZ: 0,
        SEZ: 0
      });
      return {
        ...state,
        nodes
      };
    }
    case DELETE_NODE: {
      var nodes = state.nodes;
      nodes.pop();
      return {
        ...state,
        nodes
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

function calculateNachfolger(nodes) {
  nodes.forEach(node => {
    node.Nachfolger = [];
  });

  nodes.forEach(node => {
    node.Vorgänger.forEach(vorG => {
      nodes[vorG].Nachfolger.push(parseInt(node.Nr));
    });
  });

  return nodes;
}

function calculateNodes(nodes) {
  //Calculate FAZ/FEZ
  //TODO: Bugfix:
  let nextFAZ = 0;
  nodes.forEach(node => {
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
      node.FEZ = parseInt(parseInt(nextFAZ) + parseInt(node.Dauer));
    }
  });
  console.table(nodes);

  //Calculate SAZ/SEZ
  nodes.reverse().forEach(node => {
    var biggestSEZ = 0;
    if (node.Nr == nodes.length) {
      node.SAZ = node.FAZ;
      node.SEZ = node.FEZ;
    } else {
      node.Nachfolger.forEach(nachF => {
        if (nodes[nachF].SAZ > biggestSEZ) {
          biggestSEZ = nodes[nachF].SAZ;
        }
      });
      node.SEZ = biggestSEZ;
      node.SAZ = biggestSEZ - node.Dauer;
    }
  });
  nodes.reverse();

  return nodes;
}
