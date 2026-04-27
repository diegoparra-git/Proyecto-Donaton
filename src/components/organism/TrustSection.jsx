import Heading from "../atoms/Heading";
import Text from "../atoms/Text";
import TestimonialCard from "../molecule/TestimonialCard";

/**
 * TrustSection - Organism para mostrar testimonios y confianza
 * 
 * Mostrar: testimonios de donantes/beneficiarios, credibilidad
 * 
 * ZONA DE CAMBIO: Testimonios reales, datos de impacto, certificaciones
 */
function TrustSection() {
    // ZONA DE CAMBIO: Reemplazar con testimonios reales
    const testimonials = [
        {
            name: "María García",
            role: "Beneficiaria",
            message:
                "Gracias a las donaciones, pude acceder a educación de calidad. Ahora estudio en la universidad.",
            avatar: "👩‍🎓",
            rating: 5,
        },
        {
            name: "Juan López",
            role: "Donante",
            message:
                "Ver el impacto directo de mi donación me motivó a seguir contribuyendo. ¡Continúan!",
            avatar: "👨‍💼",
            rating: 5,
        },
        {
            name: "Carolina Mendez",
            role: "Voluntaria",
            message:
                "He visto cómo esta iniciativa transforma comunidades. Es inspirador ser parte de esto.",
            avatar: "👩‍🤝‍👩",
            rating: 5,
        },
    ];

    return (
        <section className="px-4 py-16">
            <div className="mx-auto max-w-6xl">
                {/* Título */}
                <Heading level={2} className="mb-4 text-center">
                    Lo que dicen sobre nosotros
                </Heading>

                <Text as="p" className="mb-12 text-center text-gray-600">
                    {/* ZONA DE CAMBIO: Mensaje según contexto */}
                    Historias reales de personas que han visto el cambio
                </Text>

                {/* Grid de testimonios */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {testimonials.map((testimonial, idx) => (
                        <TestimonialCard key={idx} {...testimonial} />
                    ))}
                </div>

                {/* Sección de credibilidad */}
                <div className="mt-16 border-t border-gray-200 pt-12">
                    <Heading level={3} className="mb-8 text-center">
                        Apoyados por
                    </Heading>

                    {/* ZONA DE CAMBIO: Agregar logos reales de socios, certificaciones */}
                    <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
                        <div className="text-center">
                            <div className="mb-2 text-4xl">✅</div>
                            <Text as="p" className="font-semibold">
                                Registrado Legalmente
                            </Text>
                        </div>
                        <div className="text-center">
                            <div className="mb-2 text-4xl">🔒</div>
                            <Text as="p" className="font-semibold">
                                Donaciones Seguras
                            </Text>
                        </div>
                        <div className="text-center">
                            <div className="mb-2 text-4xl">📊</div>
                            <Text as="p" className="font-semibold">
                                Transparencia Total
                            </Text>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TrustSection;
