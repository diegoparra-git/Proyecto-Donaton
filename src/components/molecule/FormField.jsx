import Label from "../atoms/Label";
import Input from "../atoms/Input";
import Text from "../atoms/Text";

/**
 * FormField - Molecule para campo de formulario
 * 
 * Agrupa Label + Input + mensajes de error/ayuda
 * 
 * Props:
 * - label: texto de la etiqueta
 * - error: mensaje de error (opcional)
 * - hint: texto de ayuda (opcional)
 * - type: tipo de input (text, email, password, etc)
 * - ...rest: props que pasan al Input
 * 
 * ZONA DE CAMBIO: Validaciones, estilos de error, espaciado
 */
function FormField({
    label,
    error = "",
    hint = "",
    type = "text",
    className = "",
    ...props
}) {
    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            {label && <Label>{label}</Label>}

            {/* ZONA DE CAMBIO: Bordes rojo si hay error, focus styles */}
            <Input
                type={type}
                {...props}
                className={`${error ? "border-red-500 focus:ring-red-500/20" : ""}`}
            />

            {error && (
                <Text as="span" className="text-sm text-red-600">
                    {/* ZONA DE CAMBIO: Icono de error */}
                    ⚠ {error}
                </Text>
            )}

            {hint && !error && (
                <Text as="span" className="text-sm text-gray-500">
                    {hint}
                </Text>
            )}
        </div>
    );
}

export default FormField;
