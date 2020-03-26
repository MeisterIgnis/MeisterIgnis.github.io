import { connect } from 'react-redux';
import InputField from '../components/InputField.js';
import {
  changeNr,
  changeBezeichnung,
  changeDauer,
  changeVorgänger,
  changeNachfolger,
  addNode,
  deleteNode,
  downloadJSON,
  downloadCSV,
  uploadJSON,
  uploadCSV
} from '../actions/actions.js';

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({
  changeNr: (value, idx) => dispatch(changeNr(value, idx)),
  changeBezeichnung: (value, idx) => dispatch(changeBezeichnung(value, idx)),
  changeDauer: (value, idx) => dispatch(changeDauer(value, idx)),
  changeVorgänger: (array, idx) => dispatch(changeVorgänger(array, idx)),
  changeNachfolger: (array, idx) => dispatch(changeNachfolger(array, idx)),
  addNode: () => dispatch(addNode()),
  deleteNode: () => dispatch(deleteNode()),
  downloadJSON: () => dispatch(downloadJSON()),
  downloadCSV: () => dispatch(downloadCSV()),
  uploadJSON: file => dispatch(uploadJSON(file)),
  uploadCSV: file => dispatch(uploadCSV(file))
});

export default connect(mapStateToProps, mapDispatchToProps)(InputField);
