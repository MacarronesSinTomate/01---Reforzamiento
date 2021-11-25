import React, { useEffect, useState, useRef } from 'react'

import { useUsuarios } from '../hooks/useUsuarios'

export const Usuarios = () => {

    const { usuarios, pasarPagina } = useUsuarios( 1 );

    const renderItem = ( { id, avatar, first_name, last_name, email } ) => {

        return (
            <tr key={ id.toString() }>
                <td> 
                    <img 
                        src={ avatar } 
                        alt={ first_name }
                        style={ 
                            {
                                width: 100,
                                height: 100,
                                borderRadius: 1000,
                            } 
                        }
                    />
                </td>
                <td> { first_name + " " + last_name } </td>
                <td> { email } </td>
            </tr>
        );

    }

    return (
        <>
            <h3>Usuarios:</h3>  
            <table className="table">
                <thead>
                    <tr>
                        <th> Avatar </th>
                        <th> Nombre </th>
                        <th> Email </th>
                    </tr>
                </thead>
                <tbody>
                    { usuarios.map( renderItem ) }
                </tbody>
            </table>

            <button
                className="btn btn-primary"
                onClick={ () => pasarPagina( -1 ) }
            >
                Anterior
            </button>
            &nbsp;
            <button
                className="btn btn-primary"
                onClick={ () => pasarPagina( 1 ) }
            >
                Siguiente
            </button>

        </>
    )
}
