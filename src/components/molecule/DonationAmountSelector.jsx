import Heading from "../atoms/Heading";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

/**
 * DonationAmountSelector - Molecule para seleccionar cantidad de donación
 * 
 * Permite al usuario elegir entre montos predefinidos o ingresar un custom
 * 
 * Props:
 * - amount: número actual seleccionado
 * - onChange: callback al cambiar el monto
 * 
 * ZONA DE CAMBIO: Montos predefinidos (presetAmounts), textos, moneda
 */
function DonationAmountSelector({ amount = 0, onChange }) {
    // ZONA DE CAMBIO: Ajustar montos según necesidad (ej: si es en centavos o pesos)
    const presetAmounts = [100, 500, 1000, 2500];
    
    return (
        <div className="flex flex-col gap-6">
            <Heading level={2}>¿Cuánto quieres donar?</Heading>
            
            {/* ZONA DE CAMBIO: Cantidad de botones, layout responsivo */}
            <div className="flex flex-wrap gap-3">
                {presetAmounts.map((preset) => (
                    <Button
                        key={preset}
                        className={`${amount === preset ? "bg-blue-700" : "bg-gray-300 text-gray-900 hover:bg-gray-400"}`}
                        onClick={() => onChange(preset)}
                    >
                        ${preset}
                    </Button>
                ))}
            </div>
            
            {/* ZONA DE CAMBIO: Label, placeholder, validación */}
            <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                    O ingresa un monto personalizado:
                </label>
                <Input
                type="number"
                value={amount}
                onChange={(e) => onChange(Math.max(0, Number(e.target.value)))}
                placeholder="Ej: 5000"
                min="0"
                step="100"
                />
            </div>
        </div>
    );
}

export default DonationAmountSelector;