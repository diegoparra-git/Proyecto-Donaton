import { useState } from "react";
import Button from "../atoms/Button";
import Text from "../atoms/Text";
import Divider from "../atoms/Divider";

/**
 * FAQItem - Molecule para elemento de FAQ (expandible)
 * 
 * Question + Answer con toggle
 * 
 * Props:
 * - question: pregunta a mostrar
 * - answer: respuesta que se expandible
 * - defaultOpen: abierto por defecto (false)
 * 
 * ZONA DE CAMBIO: Icono de expand/collapse, animación, colores
 */
function FAQItem({ question = "", answer = "", defaultOpen = false }) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="flex flex-col gap-3">
            {/* ZONA DE CAMBIO: Hover effect, padding, tipografía */}
            <Button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full justify-between border border-gray-200 bg-white px-4 py-3 text-left font-semibold text-gray-900 hover:bg-gray-50"
            >
                <span>{question}</span>
                {/* ZONA DE CAMBIO: Icono rotativo, usar SVG en lugar de texto */}
                <span className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>
                    ▼
                </span>
            </Button>

            {/* Respuesta (expandible) */}
            {isOpen && (
                <div className="px-4 py-3 bg-gray-50 rounded-md">
                    <Text as="p" className="text-gray-700">
                        {answer}
                    </Text>
                </div>
            )}

            <Divider />
        </div>
    );
}

export default FAQItem;
