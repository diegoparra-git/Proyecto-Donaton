const Button = ({ className = "", children, type = "button", disabled = false, ...props }) => {
    return (
        <button
            type={type}
            disabled={disabled}
            {...props}
            className={`inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-blue-300 ${className}`}
        >
            {children}
        </button>
    );
}

export default Button;