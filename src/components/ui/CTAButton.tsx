import React from "react";

type ButtonVariant = "primary" | "secondary" | "danger";

interface CTAButtonProps {
  variant: ButtonVariant;
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  customStyle?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  variant,
  text,
  onClick,
  disabled = false,
  customStyle = "",
}) => {
  // Define variant-based styles using Tailwind CSS
  const baseStyle = "px-4 py-2 rounded text-sm font-medium";

  const variantStyle = {
    primary: "bg-blue text-white hover:bg-blue-600",
    secondary: "bg-gray-600 text-white hover:bg-gray-500",
    danger: "bg-red-600 text-white hover:bg-red-500",
  }[variant];

  const disabledStyle = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";

  return (
    <button
      className={`${baseStyle} ${variantStyle} ${disabledStyle} ${customStyle}`}
      onClick={onClick}
      disabled={disabled}>
      {text}
    </button>
  );
};

export default CTAButton;
