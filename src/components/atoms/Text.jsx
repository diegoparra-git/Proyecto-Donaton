function Text({ as = "p", className = "", children, ...props }) {
    const Component = as;

    return (
        <Component
            {...props}
            className={`text-gray-700 ${className}`}
        >
            {children}
        </Component>
    );
}

export default Text;