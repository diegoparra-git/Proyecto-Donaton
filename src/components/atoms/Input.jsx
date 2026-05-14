function Input({ className = "", ...props }) {
    return (
        <input
            {...props}
            className={`w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:cursor-not-allowed disabled:bg-gray-100 ${className}`}
        />
    );
}

export default Input;