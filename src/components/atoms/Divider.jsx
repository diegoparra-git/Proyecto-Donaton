/**
 * Divider - Componente atómico para separadores
 * 
 * Props:
 * - orientation: "horizontal" | "vertical" (default "horizontal")
 * 
 * Pensado para: separar secciones, dividir contenido
 * 
 * ZONA DE CAMBIO: Color, grosor, espacio alrededor
 */
function Divider({ orientation = "horizontal", className = "", ...props }) {
    if (orientation === "vertical") {
        return (
            <div
                {...props}
                className={`h-full w-px bg-gray-200 ${className}`}
                /* ZONA DE CAMBIO: Ajustar color (bg-gray-200 -> bg-gray-300, etc) */
            />
        );
    }

    return (
        <hr
            {...props}
            className={`border-0 border-t border-gray-200 ${className}`}
            /* ZONA DE CAMBIO: Ajustar color y espaciado */
        />
    );
}

export default Divider;
