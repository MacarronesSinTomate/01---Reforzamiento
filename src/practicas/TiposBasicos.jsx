import React from 'react'

export const TiposBasicos = () => {

    const nombre = "David Pareja";
    const edad = 23;
    const estaActivo = true;

    const poderes = [ "Velocidad", "Volar", "Respirar bajo el agua" ]

    return (
        <div>
            <h3> Tipos Basicos </h3>
            { nombre } - { edad } - { ( estaActivo ) ? "Activo" : "No Activo" }
            <br />
            { poderes.join(", ") }
        </div>
    )
}
