import Text from "../atoms/Text";
import Divider from "../atoms/Divider";
import Heading from "../atoms/Heading";

/**
 * Footer - Organism para pie de página
 * 
 * Mostrar: links, contacto, redes sociales, copyright
 * 
 * ZONA DE CAMBIO: Links reales, redes sociales, datos de contacto
 */
function Footer() {
    // ZONA DE CAMBIO: Actualizar con información real
    const currentYear = new Date().getFullYear();

    const footerSections = [
        {
            title: "Navegación",
            links: [
                { label: "Inicio", href: "#" },
                { label: "Causa", href: "#cause" },
                { label: "Impacto", href: "#impact" },
                { label: "FAQ", href: "#faq" },
            ],
        },
        {
            title: "Soporte",
            links: [
                { label: "Contacto", href: "#contact" },
                { label: "Términos y Condiciones", href: "#terms" },
                { label: "Privacidad", href: "#privacy" },
                { label: "Cookies", href: "#cookies" },
            ],
        },
        {
            title: "Redes Sociales",
            links: [
                { label: "Facebook", href: "https://facebook.com" },
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Twitter", href: "https://twitter.com" },
                { label: "LinkedIn", href: "https://linkedin.com" },
            ],
        },
    ];

    return (
        <footer className="border-t border-gray-200 bg-gray-900 text-gray-300">
            <div className="mx-auto max-w-6xl px-4 py-12">
                {/* Contenido principal footer */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Brand/Logo */}
                    <div className="col-span-1">
                        <div className="mb-4 flex items-center gap-2">
                            {/* ZONA DE CAMBIO: Logo, nombre de la organización */}
                            <div className="text-2xl">💙</div>
                            <Text as="span" className="text-lg font-bold text-white">
                                Donaton
                            </Text>
                        </div>
                        <Text as="p" className="text-sm text-gray-400">
                            {/* ZONA DE CAMBIO: Tagline/descripción */}
                            Transformando vidas a través de donaciones conscientes
                        </Text>
                    </div>

                    {/* Footer sections */}
                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <Heading
                                level={4}
                                className="mb-4 text-white"
                            >
                                {section.title}
                            </Heading>
                            <ul className="space-y-2">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-sm text-gray-400 transition-colors hover:text-white"
                                            /* ZONA DE CAMBIO: Routing real, target _blank para sociales */
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <Divider className="my-8 border-gray-700" />

                {/* Newsletter */}
                {/* ZONA DE CAMBIO: Implementar suscripción a newsletter */}
                <div className="mb-8 rounded-lg bg-gray-800 p-6">
                    <Heading level={4} className="mb-3 text-white">
                        Suscribete a nuestro newsletter
                    </Heading>
                    <div className="flex gap-2">
                        <input
                            type="email"
                            placeholder="tu@email.com"
                            className="flex-1 rounded-md bg-gray-700 px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button className="rounded-md bg-blue-600 px-6 py-2 font-semibold text-white hover:bg-blue-700">
                            Suscribirse
                        </button>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
                    <Text as="p" className="text-sm text-gray-500">
                        © {currentYear} Donaton. Todos los derechos reservados.
                    </Text>

                    {/* Badges de seguridad */}
                    <div className="flex justify-center gap-4 sm:justify-end">
                        <Text as="span" className="text-sm text-gray-500">
                            🔒 Seguro SSL
                        </Text>
                        {/* ZONA DE CAMBIO: Agregar badges reales de seguridad/certificaciones */}
                        <Text as="span" className="text-sm text-gray-500">
                            ✅ Verificado
                        </Text>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
