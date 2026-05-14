import Card from "../atoms/Card";
import Text from "../atoms/Text";

/**
 * TestimonialCard - Molecule para mostrar testimonios/reviews
 * 
 * Mostrar: nombre, rol, mensaje y rating
 * 
 * Props:
 * - name: nombre de la persona
 * - role: rol/descripción
 * - message: texto del testimonio
 * - avatar: URL de imagen o iniciales
 * - rating: número de 1-5 estrellas
 * 
 * ZONA DE CAMBIO: Estrellas, colores, layout, imagen
 */
function TestimonialCard({
    name = "Persona",
    role = "",
    message = "",
    avatar = "👤",
    rating = 5,
}) {
    // ZONA DE CAMBIO: Renderizar estrellas dinámicas
    const stars = "⭐".repeat(rating);

    return (
        <Card>
            {/* Header: Avatar + Nombre + Rol */}
            <div className="mb-4 flex items-start gap-3">
                {/* ZONA DE CAMBIO: Tamaño avatar, forma (redonda, cuadrada) */}
                <div className="text-3xl">{avatar}</div>

                <div className="flex-1">
                    <Text as="p" className="font-semibold text-gray-900">
                        {name}
                    </Text>
                    {role && (
                        <Text as="span" className="text-sm text-gray-600">
                            {role}
                        </Text>
                    )}
                </div>
            </div>

            {/* Rating */}
            <div className="mb-3 text-sm">{stars}</div>

            {/* Mensaje */}
            <Text as="p" className="text-gray-700 italic">
                "{message}"
            </Text>
        </Card>
    );
}

export default TestimonialCard;
