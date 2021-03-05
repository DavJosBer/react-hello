import React from "react";
import { Structure } from "./component/structure.js";
import PropTypes from "prop-types";
//create your first component
export function App(props) {
	return (
		<>
			<Structure ms={props.ms} s={props.s} m={props.m} h={props.h} />
		</>
	);
}
App.propTypes = {
	ms: PropTypes.number,
	s: PropTypes.grgrd,
	m: PropTypes.number,
	h: PropTypes.number
};
