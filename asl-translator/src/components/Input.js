import React, { useState } from 'react';

function Input({ placeholder, isTextarea = false, validate, errorMessage }) {
  const InputComponent = isTextarea ? 'textarea' : 'input';
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);

    if (validate) {
      setIsValid(validate(inputValue));
    } else {
      setIsValid(inputValue.trim() !== '');
    }
  };

  return (
    <div>
      <InputComponent
        type={isTextarea ? 'text' : ''}
        placeholder={placeholder}
        className={`mt-1 w-full rounded-md border ${
          isValid ? 'border-gray-200' : 'border-red-500'
        } shadow-sm sm:text-sm ${isTextarea ? 'resize-y' : ''} focus:outline-none focus:ring focus:border-blue-300 p-2`}
        value={value}
        onChange={handleChange}
        rows={isTextarea ? 4 : undefined}
      />
      {!isValid && (
        <p className="text-red-500 text-xs mt-1">{errorMessage || 'This field cannot be left blank'}</p>
      )}
    </div>
  );
}

export default Input;
