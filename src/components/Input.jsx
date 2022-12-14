import React from 'react';

const Input = ({ type, placeholder, value, onChange, defaultChecked }) => {
	const renderInput = (type) => {
		switch (type) {
			case 'checkbox':
				return (
					<input
						type='checkbox'
						placeholder={placeholder}
						onChange={onChange}
						checked={value}
						defaultChecked={defaultChecked}
					/>
				);
			default:
				return <input type='text' placeholder={placeholder} onChange={onChange} value={value} />;
		}
	};

	return renderInput(type);
};

export default Input;
