import React from "react";
import { Card } from "./card.js";
import PropTypes from "prop-types";
//create your first component
export const Structure = props => {
	return (
		<>
			<div className="container">
				<div className="row my-5">
					<div className="col-3">
						<Card mms={props.h} />
					</div>
					<div className="col-3">
						<Card mms={props.m} />
					</div>
					<div className="col-3">
						<Card mms={props.s} />
					</div>
					<div className="col-3">
						<Card mms={props.ms} />
					</div>
				</div>
			</div>
		</>
	);
};
Structure.propTypes = {
	ms: PropTypes.number,
	s: PropTypes.number,
	m: PropTypes.number,
	h: PropTypes.number
};
