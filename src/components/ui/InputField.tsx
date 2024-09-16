import React, { useState } from "react";

interface InputFieldProps {
  label?: string;
  placeholder?: string;
  helperText?: string;
  icon?: React.ReactNode; // Accept any icon as a JSX element
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  validationRegex?: RegExp;
  validationText?: string;
  customStyle?: string; // Accepts Tailwind class strings for additional styling
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  helperText,
  icon,
  value,
  onChange,
  validationRegex,
  validationText,
  customStyle = "",
}) => {
  const [isValid, setIsValid] = useState(true);

  // Validate input based on the provided regex
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (validationRegex) {
      setIsValid(validationRegex.test(e.target.value));
    }
    onChange(e);
  };

  return (
    <div className={`flex flex-col w-full ${customStyle}`}>
      {/* Label and Helper Text */}
      {label && (
        <div className='flex justify-between items-center mb-[10px]'>
          <label className='text-sm font-medium text-gray-100'>{label}</label>
          {helperText && (
            <span className='text-xs text-gray-500 cursor-pointer'>{helperText}</span>
          )}
        </div>
      )}

      {/* Input with Icon */}
      <div className='relative'>
        <input
          type='text'
          className={`w-full bg-black-700 p-3 text-gray-500 font-normal py-2 text-sm border-[1.5px] rounded-lg focus:outline-none ${
            isValid ? "border-gray-900" : "border-red-300"
          }`}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />

        {/* Icon Placement */}
        {icon && (
          <span className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer'>
            {icon}
          </span>
        )}
      </div>

      {/* Validation Text */}
      {!isValid && validationText && (
        <span className='text-xs text-red-300 mt-1'>{validationText}</span>
      )}
    </div>
  );
};

export default InputField;
