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
  primary: "bg-black text-white hover:bg-gray-800",
  secondary: "bg-white text-black border border-black hover:bg-gray-100",
};

const defaultStyles =
  "px-4 py-2 rounded-xl font-medium flex items-center justify-center gap-2 transition duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2";

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
      } ${loading ? "opacity-50 cursor-not-allowed" : "hover:scale-[1.02]"}`}
      disabled={loading}
    >
      {loading ? (
        <svg
          className="animate-spin h-5 w-5 mr-2 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          ></path>
        </svg>
      ) : (
        startIcon && <span>{startIcon}</span>
      )}
      <span>{loading ? "Loading..." : text}</span>
    </button>
  );
}
