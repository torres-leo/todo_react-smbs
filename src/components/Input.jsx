import React from 'react';

const Input = (props) => {
	const { type, placeholder, onChange, value, defaultChecked } = props;
	return (
		<>
			<input type={type} placeholder={placeholder} onChange={onChange} value={value} defaultChecked={defaultChecked} />
		</>
	);
};

export default Input;
