import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';

import './registerScreen.css'
import { removeError, setError } from '../../actions/ui';
import { startRegisterWhitEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

  const dispatch = useDispatch()

  const {msgError} = useSelector( state => state.ui)


  const [formValues, handleInputChange] = useForm({
    fullName: "Whanderley",
    email:"wfonsecap05@gmail.com",
    password: "12345",
    password2: "12345"
  })

  const {fullName, email, password, password2} = formValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(startRegisterWhitEmailPasswordName(email, password, fullName))
    }
    
  }

  const isFormValid = () => {

    if ( fullName.trim().length <= 2 ) {
      dispatch(setError("El nombre es requerido"))
      return false;
    } else if ( !validator.isEmail( email ) ){
      dispatch(setError("El correo es invalido"))
      return false;
    } else if ( password !== password2  || password.length < 4){
      dispatch(setError("La contraseña debe tener al menos 4 caracteres y coincidir ambas contraseñas"))
      return false;
    }

    dispatch(removeError())
    return true
  }
    

    return (
        <div className="register">
          <div className="row col-12 d-flex justify-content-end">
            <div className="col-lg-4 columna">
              <h2 className="text-light my-5 text-center">Por favor llenar los datos para ingresar correctamente</h2>
              <form className="text-light text-start container" onSubmit={handleRegister}>
             { 
                msgError &&
                (
                  <div className="alert alert-danger" role="alert">
                    { msgError }
                  </div>
                )
              }
              <div className="mb-3">
                  <label className="form-label">
                    <i className="bi bi-person mx-2"></i>
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    className="form-control"
                    id="exampleInputName1"
                    aria-describedby="emailHelp"
                    placeholder="ingrese codigo de socio"
                    autoComplete="off"
                    onChange={handleInputChange}
                    value={fullName}
                  />
                </div>
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
                    onChange={handleInputChange}
                    value={email}
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
                    onChange={handleInputChange}
                    value={password}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    <i className="bi bi-shield-lock mx-2"></i>
                    Confirmar contraseña
                  </label>
                  <input
                    type="password"
                    name="password2"
                    className="form-control"
                    id="exampleInputPassword2"
                    placeholder="ingrese su contraseña"
                    autoComplete="off"
                    onChange={handleInputChange}
                    value={password2}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-success w-100 my-3 text-light"
                >
                  Registrar Usuario
                </button>

              </form>
            </div>
          </div>
        </div>
      );
}
