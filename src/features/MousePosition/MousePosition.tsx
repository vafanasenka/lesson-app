import React, { useEffect, useState } from "react";

const MousePosition: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event: MouseEvent) => {
        setMousePosition({
            x: event.clientX,
            y: event.clientY
        });
    };

    useEffect(() => {
        console.log("addEventListener");
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            console.log("removeEventListener");
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <>
            <div className="w-100 p-3">
                <h3>Mouse position</h3>

                <div className="card mb-3">
                    <div className="card-body">
                        <span>Mouse position: x: {mousePosition.x}, y: {mousePosition.y}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MousePosition;