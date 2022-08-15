import React from 'react';

const Input = ({ type, placeholder, value, onChange, defaultChecked, className }) => {
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
						className={className}
					/>
				);
			default:
				return <input type='text' placeholder={placeholder} className={className} onChange={onChange} value={value} />;
		}
	};

	return renderInput(type);
};

export default Input;
