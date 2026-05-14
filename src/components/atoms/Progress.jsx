/**
 * Progress - Componente atómico para barras de progreso
 * 
 * Props:
 * - value: número entre 0 y 100 (porcentaje)
 * - max: máximo valor esperado (default 100)
 * - variant: "primary" | "success" | "warning" (default "primary")
 * 
 * ZONA DE CAMBIO: Colores según variant, altura de barra, animaciones
 */
function Progress({ value = 0, max = 100, variant = "primary", className = "", ...props }) {
    const percentage = Math.min((value / max) * 100, 100);

    // ZONA DE CAMBIO: Mapping de colores por variante
    const variantMap = {
        primary: "bg-blue-600",
        success: "bg-green-600",
        warning: "bg-yellow-500",
    };

    return (
        <div
            {...props}
            className={`w-full overflow-hidden rounded-full bg-gray-200 ${className}`}
            style={{ height: "8px" }} // ZONA DE CAMBIO: altura de la barra
        >
            <div
                className={`h-full transition-all duration-500 ${variantMap[variant]}`}
                style={{ width: `${percentage}%` }}
            />
        </div>
    );
}

export default Progress;
