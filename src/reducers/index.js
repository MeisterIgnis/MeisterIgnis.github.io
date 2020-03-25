import {
  CHANGE_NR,
  CHANGE_BEZEICHNUNG,
  CHANGE_DAUER,
  CHANGE_VORGÄNGER,
  CHANGE_NACHFOLGER,
  ADD_NODE,
  DELETE_NODE
} from '../actions/actionTypes';

export default function(state = require('./initState.json'), action) {
  console.log(state);
  console.log(require('./initState.csv').value);
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

      nodes = calculateNachfolger(nodes);

      nodes = calculateNodes(nodes);

      nodes = calculatePositions(nodes);

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

      nodes = calculateVorgänger(nodes);

      nodes = calculateNodes(nodes);

      nodes = calculatePositions(nodes);
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
        SEZ: 0,
        Position: []
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

function calculateVorgänger(nodes) {
  nodes.forEach(node => {
    node.Vorgänger = [];
  });

  nodes.forEach(node => {
    node.Nachfolger.forEach(nachV => {
      nodes[nachV].Vorgänger.push(parseInt(node.Nr));
    });
  });
  return nodes;
}

function calculateNodes(nodes) {
  nodes = calculateFAZFEZ(nodes);
  nodes = calculateSAZSEZ(nodes);
  return nodes;
}

function calculateFAZFEZ(nodes) {
  nodes.forEach(node => {
    let nextFAZ = 0;
    if (node.Vorgänger.length === 0) {
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
  return nodes;
}

//Confusion Overload
function calculateSAZSEZ(nodes) {
  var reversedNodes = nodes;
  reversedNodes.reverse();

  reversedNodes.forEach(node => {
    node.SAZ = 0;
    node.SEZ = 0;
  });
  reversedNodes.forEach(node => {
    var biggestSEZ = 0;
    if (node.Nachfolger.length === 0) {
      node.SEZ = findBiggestSEZ(nodes);
      if (node.SEZ < node.FEZ) {
        node.SEZ = node.FEZ;
      }

      node.SAZ = node.SEZ - node.Dauer;
    } else {
      node.Nachfolger.forEach(nachF => {
        if (nodes[nodes.length - nachF - 1].SAZ >= biggestSEZ) {
          biggestSEZ = nodes[nodes.length - nachF - 1].SAZ;
        }
      });
      node.SEZ = biggestSEZ;
      node.SAZ = biggestSEZ - node.Dauer;
    }
  });

  nodes = reversedNodes.reverse();
  return nodes;
}

function findBiggestSEZ(nodes) {
  var biggestSEZ = 0;
  nodes.forEach(node => {
    if (node.SEZ > biggestSEZ) {
      biggestSEZ = node.SEZ;
    }
  });
  return biggestSEZ;
}

function calculatePositions(nodes) {
  var idx = 0;
  var idx2 = 0;
  nodes.forEach(node => {
    var newPosition = [0, 0];
    if (node.Vorgänger.length == 0) {
      idx++;
      newPosition = [1, idx];
    } else {
      if (nodes[node.Vorgänger[0]].Nachfolger.length == 1) {
        newPosition = [
          nodes[node.Vorgänger[0]].Position[0] + 1,
          nodes[node.Vorgänger[0]].Position[1]
        ];
      } else {
        newPosition = [
          nodes[node.Vorgänger[0]].Position[0] + 1,
          nodes[node.Vorgänger[0]].Position[1] + idx2
        ];
        idx2++;
      }
    }
    node.Position = newPosition;
  });

  return nodes;
}

function newCalculatePositions(nodes) {
  var idx = 0;
  var idx2 = 0;
  nodes.forEach(node => {
    var newPosition = [0, 0];
    if (node.Vorgänger.length == 0) {
      idx++;
      newPosition = [1, idx];
    } else {
      var vorgängerMitHöchsteSEZNodeNr = 0;
      node.Vorgänger.forEach(vorG => {
        vorgängerMitHöchsteSEZNodeNr = whoHasBiggestSEZ(nodes);
      });
      console.log(nodes[vorgängerMitHöchsteSEZNodeNr].Nr);
      newPosition = [
        nodes[vorgängerMitHöchsteSEZNodeNr].Position[0] + 1,
        nodes[vorgängerMitHöchsteSEZNodeNr].Position[1] + idx2
      ];
      idx2++;
    }
    node.Position = newPosition;
  });

  return nodes;
}

function whoHasBiggestSEZ(nodes) {
  var biggestSEZ = 0;
  var whoHasNodeNr = 0;
  nodes.forEach(node => {
    if (node.SEZ > biggestSEZ) {
      biggestSEZ = node.SEZ;
      whoHasNodeNr = node.Nr;
    }
  });
  return whoHasNodeNr;
}
