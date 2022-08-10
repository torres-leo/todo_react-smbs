import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type, onClick, children }) => {
	return (
		<button type={type} onClick={onClick}>
			{children}
		</button>
	);
};

Button.propTypes = {
	type: PropTypes.string.isRequired,
	onClick: PropTypes.func,
};

Button.defaultPropTypes = {
	onClick: () => {},
};
export default Button;
