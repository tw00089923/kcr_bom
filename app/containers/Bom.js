import React from 'react';
import Bom from '../components/Bom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ActionBom from '../actions/bom';
function mapStateToProps(state) {
  return {
  	bom : state.bom
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionBom, dispatch);
}
export default connect(
  mapStateToProps,mapDispatchToProps
// Implement map dispatch to props
)(Bom);
