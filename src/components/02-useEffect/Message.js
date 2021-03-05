import { useEffect } from "react";

export const Message = () => {

    useEffect(() => {
        console.log("Componente montado");
        return () => {
            console.log("Componente desmontado");
        }
    });
    
    return (
        <div>
            <h3>Hola sierra-034</h3>
        </div>
    );
};