import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import {  startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

import './loginScreen.css'

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const {loading} = useSelector(state => state.ui);

    const [ formValues, handleInputChange] = useForm({
        email: 'wfonseca@betasolutions.tech',
        password: 'Fvandy05**'
    });

    const {email, password} = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch( startLoginEmailPassword(email, password) );
    };

    const handleGoogleLogin = () => {
      dispatch( startGoogleLogin() );
  };

    return (
        <div className="login">
          <div className="row col-12 d-flex justify-content-end">
            <div className="col-lg-4 columna">
              <h2 className="text-light my-5 text-center">Para poder realizar una reservacion debe iniciar sesión</h2>
              <form className="text-light text-start container" onSubmit={handleLogin}>
                <div className="mb-3">
                  <label className="form-label">
                    <i className="bi bi-person mx-2"></i>
                    Correo Electronico
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="ingrese codigo de socio"
                    autoComplete="off"
                    value={email}
                   onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    <i className="bi bi-shield-lock mx-2"></i>
                    Contraseña
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="ingrese su contraseña"
                    autoComplete="off"
                    value={password}
                    onChange={handleInputChange}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-warning w-100 mb-3"
                  disabled={loading}
                >
                  Iniciar Sesion
                </button>
                <label className="h4">Ingreso a traves de:</label>
                <button 
                  className="btn btn-primary w-100 my-3"
                  onClick={handleGoogleLogin}
                  >
                    <i className="bi bi-google mx-3"></i>
                    Ingrear a traves de Google
                </button>
              </form>
              <h3 className="text-center text-light">Si no cuenta con una cuenta dark click en registrarse</h3>
              <div className="d-flex justify-content-center w-100">
              <Link to="/auth/register">
                <button
                  className="btn btn-success my-3"
                >
                  Registrarse
                </button>
              </Link>
              </div>
              
            </div>
          </div>
        </div>
      );
}
