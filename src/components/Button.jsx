import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type, onClick, className, title, children }) => {
	return (
		<button type={type} className={className} onClick={onClick} title={title}>
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
