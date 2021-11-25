export const Funciones = () => {

    const sumar = ( num1, num2 ) => {
        return num1 + num2;
    }

    return (
        <>
            <h3>Funciones</h3>   
            El resultado es: { sumar(3, 5) }
        </>
    )
}
