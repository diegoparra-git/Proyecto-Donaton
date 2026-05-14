import Heading from "../atoms/Heading";
import Text from "../atoms/Text";
import FAQItem from "../molecule/FAQItem";

/**
 * FAQSection - Organism para sección de preguntas frecuentes
 * 
 * Mostrar: lista de FAQs en accordion expandible
 * 
 * ZONA DE CAMBIO: Preguntas y respuestas según tu dominio
 */
function FAQSection() {
    // ZONA DE CAMBIO: Agregar preguntas y respuestas reales
    const faqs = [
        {
            question: "¿Cómo se usa mi donación?",
            answer:
                "El 90% de tu donación va directamente a programas comunitarios. El 10% cubre costos administrativos. Puedes ver el desglose detallado en nuestro reporte anual de transparencia.",
        },
        {
            question: "¿Es seguro donar en línea?",
            answer:
                "Sí, usamos encriptación SSL de nivel bancario y procesamos pagos a través de proveedores certificados. Tu información está protegida en todo momento.",
        },
        {
            question: "¿Puedo recibir comprobante de mi donación?",
            answer:
                "Absolutamente. Te enviaremos un recibo automático a tu email después de completar la transacción. También puedes solicitarlo en cualquier momento.",
        },
        {
            question: "¿Puedo donar de forma anónima?",
            answer:
                "Sí, durante el formulario puedes marcar la opción de donación anónima. No publicaremos tu nombre en nuestro sitio si lo solicitas.",
        },
        {
            question: "¿Qué métodos de pago aceptan?",
            answer:
                "Aceptamos tarjetas de crédito (VISA, Mastercard), transferencia bancaria y billeteras digitales. Expandiremos opciones según demanda.",
            /* ZONA DE CAMBIO: Actualizar métodos de pago disponibles */
        },
        {
            question: "¿Cuál es el monto mínimo/máximo para donar?",
            answer:
                "El mínimo es $100 y no hay máximo. Puedes donar tantas veces como desees y en cualquier cantidad.",
        },
    ];

    return (
        <section className="bg-gray-50 px-4 py-16" id="faq">
            <div className="mx-auto max-w-4xl">
                {/* Título */}
                <Heading level={2} className="mb-4 text-center">
                    Preguntas Frecuentes
                </Heading>

                <Text as="p" className="mb-12 text-center text-gray-600">
                    {/* ZONA DE CAMBIO: Mensaje personalizado */}
                    Resolvemos tus dudas sobre cómo funciona el proceso de donación
                </Text>

                {/* Lista de FAQs */}
                <div className="space-y-2">
                    {faqs.map((faq, idx) => (
                        <FAQItem
                            key={idx}
                            question={faq.question}
                            answer={faq.answer}
                            defaultOpen={idx === 0} // Primera abierta por defecto
                        />
                    ))}
                </div>

                {/* CTA para más info */}
                <div className="mt-12 rounded-lg border-2 border-blue-200 bg-blue-50 p-6 text-center">
                    <Heading level={4} className="mb-2">
                        ¿No encontraste la respuesta?
                    </Heading>
                    <Text as="p" className="mb-4 text-gray-700">
                        {/* ZONA DE CAMBIO: Agregar email o formulario de contacto */}
                        Contáctanos directamente en{" "}
                        <a
                            href="mailto:contacto@donaton.org"
                            className="font-semibold text-blue-600 hover:underline"
                        >
                            contacto@donaton.org
                        </a>
                    </Text>
                </div>
            </div>
        </section>
    );
}

export default FAQSection;
