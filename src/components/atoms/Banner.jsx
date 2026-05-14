function Banner({ children, className = "", ...props }) {
    return (
        <div
            {...props}
            className={`bg-gray-100 p-4 rounded-lg ${className}`}
        >
            {children}
        </div>
    );
}

export default Banner;