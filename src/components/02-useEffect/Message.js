import { useEffect, useState } from "react";

export const Message = () => {

    const [coords, setCoords] = useState({
        x: 0,
        y: 0
    });

    useEffect(() => {
        console.log("Componente montado");
        const mouseMove = (event) => {
            const coords = {x: event.x, y: event.y};
            setCoords(coords);
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            console.log("Componente desmontado");
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);
    
    return (
        <div>
            <h3>Hola sierra-034</h3>
            <code>x: {coords.x}, y: {coords.y}</code>
        </div>
    );
};