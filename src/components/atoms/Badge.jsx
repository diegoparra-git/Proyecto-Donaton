/**
 * Badge - Componente atómico para etiquetas/badges
 * 
 * Props:
 * - variant: "primary" | "success" | "warning" | "danger" (default "primary")
 * - size: "sm" | "md" | "lg" (default "md")
 * 
 * Pensado para: etiquetas de estado, categorías, indicadores
 * 
 * ZONA DE CAMBIO: Colores por variante, tamaños, esquinas
 */
function Badge({ children, variant = "primary", size = "md", className = "", ...props }) {
    // ZONA DE CAMBIO: Mapping de colores por variante
    const variantMap = {
        primary: "bg-blue-100 text-blue-800",
        success: "bg-green-100 text-green-800",
        warning: "bg-yellow-100 text-yellow-800",
        danger: "bg-red-100 text-red-800",
    };

    // ZONA DE CAMBIO: Mapping de tamaños
    const sizeMap = {
        sm: "px-2 py-1 text-xs",
        md: "px-3 py-1.5 text-sm",
        lg: "px-4 py-2 text-base",
    };

    return (
        <span
            {...props}
            className={`inline-block rounded-full font-semibold ${variantMap[variant]} ${sizeMap[size]} ${className}`}
        >
            {children}
        </span>
    );
}

export default Badge;
