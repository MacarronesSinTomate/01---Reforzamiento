import React, { useEffect, useState, useRef } from 'react'
import { reqResApi } from '../api/reqRes'

export const useUsuarios = () => {
    
    const [ usuarios, setUsuarios] = useState( [] );
    const [ pages, setPages] = useState( 0 );

    const paginaRef = useRef( 1 );

    useEffect(() => {
        
        // Llamada a la API
        cargarUsuarios();

    }, [])

    const pasarPagina = ( num ) => {


        if ( 
            paginaRef.current < pages && num > 0
            ||
            paginaRef.current > 1 && num < 0 
        ) {
            
            paginaRef.current += num;   

            console.log( "Cargando Usuarios" );
            cargarUsuarios();

        }

    }

    const cargarUsuarios = async () => {

        const respuesta = await reqResApi.get( '/users', {
            params : {
                page: paginaRef.current
            }
        } )

        if ( respuesta.data.data.length > 0 ) {

            setUsuarios( respuesta.data.data );
            setPages( respuesta.data.total_pages );

        }

    }

    return {
        usuarios: usuarios,
        pasarPagina: pasarPagina
    }

}
