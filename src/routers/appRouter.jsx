import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import { HomeScreen } from '../views/Home/homeScreen';
import { AuthRouter } from './authRouter';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { PrivateRoute } from './privateRoute';
import { useDispatch } from 'react-redux';
import { Login } from '../actions/auth';
import { PublicRoute } from './publicRoute';

export const AppRouter = () => {

    const dispatch = useDispatch()

    const [checking, setChecking] = useState(true)

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if(user?.uid) {
                dispatch( Login ( user.uid , user.displayName ) );
                setIsLoggedIn(true);
            }else{
                setIsLoggedIn(false);
            }

            setChecking(false);
        });
    
    }, [dispatch, setChecking, setIsLoggedIn])

    if (checking) {
        return(
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Cargando...</span>
            </div>
        )
    }


    return (
        
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        path="/auth"
                        component={AuthRouter}
                        isAuthenticated={isLoggedIn}
                    />
                    <PrivateRoute
                        exact
                        path="/"
                        component={HomeScreen}
                        isAuthenticated={isLoggedIn}
                    />
                            


                    <Redirect to="/auth/login"/>



                </Switch>
            </div>
        </Router>
    )
}
