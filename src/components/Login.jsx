import { useEffect, useReducer } from "react"

const initialState = {
    validando: true,
    token: null,
    username: '',
    nombre: '',
}

const authReducer = ( state, action ) => {

    switch ( action.type ) {

        case 'logout':
            return {
                validando: false,
                token: null,
                username: '',
                nombre: '',
            }

        case 'login':
            const { nombre, username } = action.payload;
            return {
                validando: false,
                token: '1234asdf',
                username: username,
                nombre: nombre,
            }

        default:
            return state;
    }

}

export const Login = () => {
    
    const [ { validando, token, nombre, username }, dispatch ] = useReducer( authReducer, initialState )
    
    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout' });
        }, 1500);
    }, [])

    const login = () => {
        dispatch( { type: 'login', payload: { nombre: 'David Pareja Almela', username: 'dpareja' } } )
    }
    const logout = () => {
        dispatch( { type: 'logout' } )
    }

    if ( validando ) {

        return (
            <>
                <h3>Login</h3>  

                <div className="alert alert-info">
                    Validando...
                </div>
            </>
        )

    }

    return (
        <>
            <h3>Login</h3>  

            {

                ( token )
                    ? <div className="alert alert-success"> Autenticado como: { username } </div>
                    : <div className="alert alert-danger"> No autenticado </div>

            }

            {

                ( token )
                ? (
                    <button
                        className="btn btn-danger"
                        onClick={ () => { logout() } }
                    >
                        Logout
                    </button>
                )
                : (
                    <button
                        className="btn btn-primary"
                        onClick={ () => { login() } }
                    >
                        Login
                    </button>
                )

            }

        </>
    )
}
