import Button from "../atoms/Button";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";

/**
 * HeroDonationSection - Organism para sección hero principal
 * 
 * Mostrar: título, descripción, imagen background, CTA
 * 
 * Props:
 * - onDonateClick: callback al hacer click
 * 
 * ZONA DE CAMBIO: Imagen background, colores, textos, layout
 */
function HeroDonationSection({ onDonateClick = () => {} }) {
    return (
        <section
            className="relative bg-gradient-to-r from-blue-600 to-blue-800 px-4 py-20 text-white"
            /* ZONA DE CAMBIO: Gradiente, imagen background, altura */
        >
            {/* ZONA DE CAMBIO: Agregar imagen background real */}
            <div className="absolute inset-0 opacity-10 bg-cover bg-center"></div>

            <div className="relative mx-auto max-w-6xl text-center">
                {/* Pequeño tag/badge arriba */}
                <Text as="span" className="inline-block rounded-full bg-blue-400 px-4 py-1 text-sm font-semibold mb-4">
                    Haz la diferencia hoy
                </Text>

                {/* Título principal */}
                <Heading level={1} className="mb-6 text-white">
                    Juntos podemos cambiar vidas
                </Heading>

                {/* Descripción */}
                <Text as="p" className="mx-auto mb-8 max-w-2xl text-lg text-blue-100">
                    {/* ZONA DE CAMBIO: Ajustar mensaje según tu causa */}
                    Tu donación tiene un impacto real. Con cada contribución, ayudamos a
                    comunidades necesitadas a alcanzar sus metas y construir un futuro mejor.
                </Text>

                {/* Botones CTA */}
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                    <Button
                        onClick={onDonateClick}
                        className="bg-white text-blue-700 hover:bg-gray-100"
                    >
                        Donar Ahora
                    </Button>
                    {/* ZONA DE CAMBIO: Agregar link a sección de "Learn More" */}
                    <Button
                        className="border-2 border-white bg-transparent hover:bg-blue-700"
                    >
                        Saber Más
                    </Button>
                </div>

                {/* Stats rápidas en hero */}
                <div className="mt-16 grid grid-cols-3 gap-4 text-center">
                    {/* ZONA DE CAMBIO: Actualizar con datos reales */}
                    <div>
                        <div className="text-3xl font-bold">$250K</div>
                        <Text as="span" className="text-sm text-blue-100">Recaudado</Text>
                    </div>
                    <div>
                        <div className="text-3xl font-bold">1,250</div>
                        <Text as="span" className="text-sm text-blue-100">Donantes</Text>
                    </div>
                    <div>
                        <div className="text-3xl font-bold">500+</div>
                        <Text as="span" className="text-sm text-blue-100">Vidas Impactadas</Text>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroDonationSection;
