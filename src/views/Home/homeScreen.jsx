import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../actions/auth'

export const HomeScreen = () => {

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(startLogout())
    }

    return (
        <div>
            <h1>Home</h1>
            <button 
                className="btn btn-primary"
                onClick={handleLogout}
                >
                    Cerrar Sesion
                </button>
        </div>
    )
}
