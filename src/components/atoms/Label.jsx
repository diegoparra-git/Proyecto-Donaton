function Label({ children, className = "", ...props }) {
    return (
        <label
            {...props}
            className={`mb-2 block font-semibold text-gray-700 ${className}`}
        >
            {children}
        </label>
    );
}

export default Label;