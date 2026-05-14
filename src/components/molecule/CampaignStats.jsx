import Card from "../atoms/Card";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";

/**
 * CampaignStats - Molecule para mostrar estadísticas de campaña
 * 
 * Mostrar datos como: dinero recaudado, meta, donantes, etc
 * 
 * Props:
 * - icon: emoji o texto (ej: "💰", "🎯")
 * - label: nombre de la estadística
 * - value: valor principal a mostrar
 * - description: texto complementario (opcional)
 * 
 * ZONA DE CAMBIO: Colores de fondo, tamaños, icono
 */
function CampaignStats({ icon = "📊", label, value, description = "" }) {
    return (
        <Card className="text-center">
            {/* ZONA DE CAMBIO: Tamaño del icono, estilo */}
            <div className="mb-3 text-4xl">{icon}</div>

            <Heading level={4} className="mb-2">
                {label}
            </Heading>

            {/* ZONA DE CAMBIO: Color y tamaño del valor principal */}
            <Text as="p" className="text-2xl font-bold text-blue-600 mb-2">
                {value}
            </Text>

            {description && (
                <Text as="span" className="text-sm text-gray-600">
                    {description}
                </Text>
            )}
        </Card>
    );
}

export default CampaignStats;
