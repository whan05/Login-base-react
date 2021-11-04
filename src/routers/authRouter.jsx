import React from 'react'
import { Redirect, Route, Switch } from 'react-router';
import { LoginScreen } from '../views/Login/loginScreen';
import { RegisterScreen } from '../views/Register/registerScreen';

export const AuthRouter = () => {
    return (
        <div>
            <Switch>
                <Route
                    exact
                    path="/auth/login"
                    component={LoginScreen}
                />
                <Route
                    exact
                    path="/auth/register"
                    component={RegisterScreen}
                />
                <Redirect to="/auth/register"/>
            </Switch>
            
        </div>
    )
}
