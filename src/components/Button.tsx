import type { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
  startIcon?: ReactElement;
  onClick?: () => void;
  fullWidth?: boolean;
  loading?: boolean;
  className?: string;
}

const variantClasses = {
  primary: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl focus:ring-blue-500",
  secondary: "bg-white/80 backdrop-blur-sm text-slate-700 border border-white/40 hover:bg-white/90 hover:border-white/60 shadow-sm hover:shadow-md focus:ring-slate-500",
};

const defaultStyles =
  "px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent transform active:scale-95";

export function Button({
  variant,
  text,
  startIcon,
  onClick,
  fullWidth,
  loading,
  className = "",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${variantClasses[variant]} ${defaultStyles} ${
        fullWidth ? "w-full" : ""
      } ${loading ? "opacity-60 cursor-not-allowed" : "hover:scale-[1.02]"} ${className}`}
      disabled={loading}
    >
      {loading ? (
        <div className="relative">
          <svg
            className="animate-spin h-5 w-5 text-current"
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
        </div>
      ) : (
        startIcon && (
          <span className="flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
            {startIcon}
          </span>
        )
      )}
      <span className="font-semibold tracking-wide">
        {loading ? "Loading..." : text}
      </span>
    </button>
  );
}