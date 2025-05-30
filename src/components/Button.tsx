import type { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
  startIcon?: ReactElement; 
  onClick?: () => void;
  fullWidth?: boolean;
  loading?: boolean; 
}

const variantClasses = {
  primary: "bg-black text-white hover:bg-gray-700",
  secondary: "bg-black text-white hover:bg-gray-500",
  
};

const defaultStyles =
  "px-4 py-2 rounded-md font-light flex items-center justify-center gap-2 transition duration-300";

export function Button({
  variant,
  text,
  startIcon,
  onClick,
  fullWidth,
  loading,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${variantClasses[variant]} ${defaultStyles} ${
        fullWidth ? "w-full" : ""
      } ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
      disabled={loading}
    >
      {startIcon && <span>{startIcon}</span>}
      <span>{text}</span>
    </button>
  );
}
