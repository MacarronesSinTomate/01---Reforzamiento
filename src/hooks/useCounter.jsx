import { useState } from "react";

export const useCounter = ( initialValue = 0 ) => {
    
    const [ valor, setValor ] = useState( initialValue );

    const acumular = ( num ) => {
        setValor( valor + num );
    }

    return {
        valor: valor,
        acumular: acumular
    }

}
