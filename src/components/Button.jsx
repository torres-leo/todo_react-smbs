import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
	const { type, onClick } = props;

	return (
		<>
			<button type={type} onClick={onClick}>
				{props.children}
			</button>
		</>
	);
};

Button.propTypes = {
	type: PropTypes.string.isRequired,
};
export default Button;
