import { connect } from 'react-redux';
import OperationNode from '../components/OperationNode.js';

const mapStateToProps = (state) => ({
  state
});

const mapDispatchToProps = dispatch => ({
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(OperationNode);
