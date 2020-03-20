import { connect } from 'react-redux';
import InputField from '../components/InputField.js';
import {
  changeBezeichnung,
  changeDauer,
  changeVorgänger,
  changeNachfolger
} from '../actions/actions.js';

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({
  changeBezeichnung: value => dispatch(changeBezeichnung(value)),
  changeDauer: value => dispatch(changeDauer(value)),
  changeVorgänger: array => dispatch(changeVorgänger(array)),
  changeNachfolger: array => dispatch(changeNachfolger(array))
});

export default connect(mapStateToProps, mapDispatchToProps)(InputField);
