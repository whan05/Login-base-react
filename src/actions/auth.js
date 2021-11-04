import { createUserWithEmailAndPassword, updateProfile,  getAuth, signInWithPopup, signInWithEmailAndPassword  } from 'firebase/auth';
import { googleAuthProvider } from '../firebase/firebase-config';
import { types } from '../types/types'
import { finishLoading, startLoading } from './ui';
import Swal from 'sweetalert2'

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {

        dispatch(startLoading())

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(
                    Login(user.uid, user.displayName)
                )
                dispatch(finishLoading())
            }).catch((error) => {
                console.log(error);
                dispatch(finishLoading());
                Swal.fire('Por favor revise los datos ingresados', 'El usuario o contraseña no existe' , 'error');
            })

    }
}

export const startRegisterWhitEmailPasswordName = (email, password, fullName) => {
    return (dispatch) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ( {user} ) => {
                await updateProfile( user, {displayName: fullName});
                dispatch(Login(user.uid, user.displayName))

                console.log(user)
            }).catch( e => {
                console.log(e)
                Swal.fire('Por favor revise los datos ingresados', 'Por favor comfirmar si su cuenta existe' , 'error');
            });
    }

}

export const startGoogleLogin = () => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, googleAuthProvider)
            .then(({user}) => {
                dispatch(Login(user.uid, user.displayName))
            })
    }
}

export const Login = (uid, displayName) => ({

        type: types.login,
        payload: {
            uid,
            displayName,
        }

})

export const startLogout = (uid, displayName) => {
    return async ( dispatch) => {
        const auth = getAuth();
        await auth.signOut()

        dispatch(Logout())
    }
}

export const Logout = () => ({

    type: types.logout,

})