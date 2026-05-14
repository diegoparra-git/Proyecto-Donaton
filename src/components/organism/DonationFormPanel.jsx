import { useState } from "react";
import Card from "../atoms/Card";
import Button from "../atoms/Button";
import Heading from "../atoms/Heading";
import FormField from "../molecule/FormField";
import DonationAmountSelector from "../molecule/DonationAmountSelector";

/**
 * DonationFormPanel - Organism para formulario de donación completo
 * 
 * Agrupa: selector de monto + formulario de datos + botón envío
 * 
 * Props:
 * - onSubmit: callback al enviar formulario (e)
 * 
 * ZONA DE CAMBIO: Validaciones, integración con API, métodos de pago
 */
function DonationFormPanel({ onSubmit = () => {} }) {
    const [formData, setFormData] = useState({
        amount: 0,
        fullName: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    // ZONA DE CAMBIO: Agregar validaciones más robustas
    const validateForm = () => {
        const newErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = "El nombre es requerido";
        }
        if (!formData.email.trim()) {
            newErrors.email = "El email es requerido";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Email inválido";
        }
        if (formData.amount <= 0) {
            newErrors.amount = "Debes seleccionar un monto";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsLoading(true);

        try {
            // ZONA DE CAMBIO: Integrar con API real
            console.log("Enviando donación:", formData);
            // Simular delay de API
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Callback con datos
            onSubmit(formData);

            // Resetear formulario
            setFormData({
                amount: 0,
                fullName: "",
                email: "",
                message: "",
            });
            setErrors({});
        } catch (error) {
            console.error("Error al procesar donación:", error);
            setErrors({ submit: "Hubo un error. Intenta de nuevo." });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Card className="mx-auto max-w-md">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <Heading level={3}>Completa tu donación</Heading>

                {/* Selector de monto */}
                <DonationAmountSelector
                    amount={formData.amount}
                    onChange={(amount) =>
                        setFormData((prev) => ({ ...prev, amount }))
                    }
                />

                {/* Campo nombre */}
                <FormField
                    label="Nombre completo"
                    type="text"
                    placeholder="Juan Pérez"
                    value={formData.fullName}
                    onChange={(e) =>
                        setFormData((prev) => ({
                            ...prev,
                            fullName: e.target.value,
                        }))
                    }
                    error={errors.fullName}
                />

                {/* Campo email */}
                <FormField
                    label="Email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) =>
                        setFormData((prev) => ({
                            ...prev,
                            email: e.target.value,
                        }))
                    }
                    error={errors.email}
                    hint="Usaremos esto para confirmación"
                    /* ZONA DE CAMBIO: Agregar verificación de email */
                />

                {/* Campo mensaje opcional */}
                <FormField
                    label="Mensaje (opcional)"
                    type="textarea"
                    placeholder="¿Por qué deci decidiste donar?"
                    value={formData.message}
                    onChange={(e) =>
                        setFormData((prev) => ({
                            ...prev,
                            message: e.target.value,
                        }))
                    }
                    /* ZONA DE CAMBIO: Implementar como textarea real */
                />

                {/* Checkbox términos */}
                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        id="terms"
                        required
                        className="h-4 w-4 rounded border-gray-300"
                        /* ZONA DE CAMBIO: Estilos de checkbox custom */
                    />
                    <label htmlFor="terms" className="text-sm text-gray-600">
                        Acepto los términos y condiciones
                    </label>
                </div>

                {/* Error general */}
                {errors.submit && (
                    <div className="rounded-md bg-red-50 p-3 text-sm text-red-700">
                        {errors.submit}
                    </div>
                )}

                {/* Botón envío */}
                <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full"
                >
                    {isLoading ? "Procesando..." : "Donar Ahora"}
                </Button>

                {/* Info de seguridad */}
                <p className="text-center text-xs text-gray-600">
                    🔒 Tu donación es segura y procesada de forma encriptada
                </p>
            </form>
        </Card>
    );
}

export default DonationFormPanel;
