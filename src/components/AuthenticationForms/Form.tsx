import React, { useState } from "react";
import CTAButton from "../ui/CTAButton";
import InputField from "../ui/InputField"; // Ensure InputField is correctly imported

interface InputFieldConfig {
  label?: string;
  placeholder?: string;
  helperText?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  validationRegex?: RegExp;
  validationText?: string;
  icon?: React.ReactNode;
}

interface FormProps {
  title: string;
  subtitle: string;
  buttonText: string;
  disabled?: boolean;
  onSubmit: () => void;
  toggleView?: () => void; // Optional, for cases like login/register toggle
  inputFieldsConfig: InputFieldConfig[];
}

const Form: React.FC<FormProps> = ({
  title,
  subtitle,
  buttonText,
  disabled = false,
  onSubmit,
  toggleView,
  inputFieldsConfig,
}) => {
  return (
    <div className='bg-dark-gradient rounded-lg p-[2px] w-[463px]'>
      <div className='bg-black-700 w-full h-full rounded-lg px-6 py-10'>
        <section className='flex flex-col items-center gap-2'>
          <h2 className='font-medium text-sm text-gray-600 uppercase tracking-wide-3'>
            {title}
          </h2>
          <h2 className='font-semibold text-white text-[18px] leading-5'>
            {subtitle}
          </h2>
        </section>

        {/* Render Input Fields */}
        <section className='mt-[45px] flex flex-col gap-4'>
          {inputFieldsConfig.map((input, index) => (
            <InputField
              key={index}
              label={input.label}
              placeholder={input.placeholder}
              helperText={input.helperText}
              value={input.value}
              onChange={input.onChange}
              validationRegex={input.validationRegex}
              validationText={input.validationText}
              icon={input.icon}
            />
          ))}
        </section>

        {/* Submit Button */}
        <section className='mt-4'>
          <CTAButton
            variant='primary'
            text={buttonText}
            onClick={onSubmit}
            disabled={disabled}
            customStyle='w-full'
          />
          {toggleView && (
            <p className='text-sm leading-4 font-medium text-gray-500 mt-3'>
              {buttonText === "Login now"
                ? "Not registered yet? "
                : "Already have an account? "}
              <span
                className='text-gray-100 cursor-pointer'
                onClick={toggleView}>
                {buttonText === "Login now" ? "Register →" : "Login →"}
              </span>
            </p>
          )}
        </section>
      </div>
    </div>
  );
};

export default Form;
