
const schema = {

    nombreCompleto : 'David Pareja Almela',
    edad : 35,
    direccion : {
        pais: "Canadá",
        casaNo: 156
    }

}

export const ObjetosLiterales = () => {

    const persona = {
        nombre: 'Fernando',
        edad: 35,
        direccion: {
            pais: 'Canada',
            casaNo: 156
        }
    }

    return (
        <>
            <h3>Objetos literales</h3>
            <code>
                <pre>
                { JSON.stringify( persona, null, 2 ) }
                </pre>
            </code>
        </>
    )
}
