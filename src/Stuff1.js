import React from "react";
import { connect } from "react-redux";
import { defaultAction } from "./actions";

export const Stuff1 = props => (
	<div>
		<div>{props.wat}</div>
		<button onClick={props.click}>Stuff1</button>
	</div>
);

export default connect(
	state => state,
	dispatch => ({
		click: () => dispatch(defaultAction())
	})
)(Stuff1);
