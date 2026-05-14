import Heading from "../atoms/Heading";
import Text from "../atoms/Text";
import Progress from "../atoms/Progress";
import CampaignStats from "../molecule/CampaignStats";

/**
 * ProgressSection - Organism para mostrar progreso de la campaña
 * 
 * Mostrar: barra de progreso, meta, recaudado, stats
 * 
 * Props:
 * - currentAmount: dinero recaudado
 * - goalAmount: meta de recaudación
 * - donorCount: cantidad de donantes
 * 
 * ZONA DE CAMBIO: Textos, colores, formato de moneda
 */
function ProgressSection({
    currentAmount = 250000,
    goalAmount = 500000,
    donorCount = 1250,
}) {
    const percentage = (currentAmount / goalAmount) * 100;
    const remaining = goalAmount - currentAmount;

    // ZONA DE CAMBIO: Función para formatear moneda según locale
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS",
            maximumFractionDigits: 0,
        }).format(amount);
    };

    return (
        <section className="bg-gray-50 px-4 py-16">
            <div className="mx-auto max-w-6xl">
                {/* Título */}
                <Heading level={2} className="mb-4 text-center">
                    Nuestro Progreso
                </Heading>

                <Text as="p" className="mb-12 text-center text-gray-600">
                    {/* ZONA DE CAMBIO: Ajustar mensaje según contexto */}
                    Vemos cada donación como un paso hacia nuestro objetivo
                </Text>

                {/* Barra de progreso */}
                <div className="mb-12 max-w-2xl mx-auto">
                    <div className="mb-4 flex justify-between">
                        <Text as="span" className="font-semibold text-gray-900">
                            {formatCurrency(currentAmount)} recaudados
                        </Text>
                        <Text as="span" className="text-gray-600">
                            {formatCurrency(goalAmount)} meta
                        </Text>
                    </div>

                    {/* ZONA DE CAMBIO: Ajustar variante de color */}
                    <Progress value={currentAmount} max={goalAmount} variant="success" />

                    <div className="mt-4 text-center">
                        <Text as="p" className="text-sm text-gray-600">
                            Faltan {formatCurrency(remaining)} para alcanzar la meta
                        </Text>
                        <Text as="p" className="text-lg font-bold text-green-600">
                            {Math.round(percentage)}% completado
                        </Text>
                    </div>
                </div>

                {/* Stats en grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                    {/* ZONA DE CAMBIO: Agregar más estadísticas, actualizar datos */}
                    <CampaignStats
                        icon="💰"
                        label="Total Recaudado"
                        value={formatCurrency(currentAmount)}
                    />

                    <CampaignStats
                        icon="👥"
                        label="Donantes"
                        value={`${donorCount.toLocaleString("es-AR")}`}
                        description="Personas como tú"
                    />

                    <CampaignStats
                        icon="🎯"
                        label="Porcentaje Meta"
                        value={`${Math.round(percentage)}%`}
                        description={`de ${formatCurrency(goalAmount)}`}
                    />
                </div>
            </div>
        </section>
    );
}

export default ProgressSection;
