/**
 * Card - Componente atómico para tarjetas/contenedores
 * 
 * Pensado para: agrupar contenido, crear secciones destacadas, contenedores base
 * 
 * ZONA DE CAMBIO: Colores de borde, sombras, relleno, esquinas
 */
function Card({ children, className = "", ...props }) {
    return (
        <div
            {...props}
            className={`rounded-lg border border-gray-200 bg-white p-6 shadow-sm ${className}`}
            /* ZONA DE CAMBIO: Ajustar sombra (shadow-sm -> shadow, shadow-lg, etc) */
        >
            {children}
        </div>
    );
}

export default Card;
