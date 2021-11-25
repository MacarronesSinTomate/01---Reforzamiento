import { useState } from "react";

export const useForm = ( formSchema ) => {
    
    const [ state, setState ] = useState( formSchema )
    
    const onChange = ( value, campo ) => {

        if ( !state[campo] ) return;

        setState({
            ...state,
            [campo]: value
        });

    }

    return {
        formulario: state,
        onChange
    }
}
