import React from "react";
import PropTypes from "prop-types";
//create your first component
export function Card(props) {
	return (
		<div className="card text-white bg-dark mb-3">
			<div className="card-body">
				<h5 className="card-title">{props.mms % 10}</h5>
			</div>
		</div>
	);
}

Card.propTypes = {
	mms: PropTypes.number
};
