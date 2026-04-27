/**
 * Heading - Componente atómico para títulos
 * 
 * Render: h1, h2, h3, h4, h5, h6 según la prop `level`
 * Pensado para: títulos principales, subtítulos, encabezados de sección
 * 
 * ZONA DE CAMBIO: Colores, tamaños, pesos de fuente
 */
function Heading({ level = 1, children, className = "", ...props }) {
    const Tag = `h${level}`;
    
    // ZONA DE CAMBIO: Mapping de estilos por nivel de heading
    const sizeMap = {
        1: "text-4xl font-bold", // Títulos principales
        2: "text-3xl font-bold", // Subtítulos grandes
        3: "text-2xl font-semibold", // Subtítulos medianos
        4: "text-xl font-semibold", // Subtítulos pequeños
        5: "text-lg font-semibold",
        6: "text-base font-semibold",
    };

    return (
        <Tag
            {...props}
            className={`text-gray-900 ${sizeMap[level]} ${className}`}
        >
            {children}
        </Tag>
    );
}

export default Heading;
