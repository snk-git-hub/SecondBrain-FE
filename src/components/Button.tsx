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
  primary: "bg-purple-600 text-white hover:bg-purple-700",
  secondary: "bg-purple-200 text-purple-600 hover:bg-purple-300",
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
