import React from "react";
import { connect } from "react-redux";
import { defaultAction } from "./actions";

export const Stuff2 = props => (
	<div>
		<div>{props.ytho}</div>
		<button onClick={props.click}>Stuff2</button>
	</div>
);

export default connect(
	state => state,
	dispatch => ({
		click: () => dispatch(defaultAction())
	})
)(Stuff2);
