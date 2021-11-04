import React from 'react'
import {Provider} from 'react-redux'
import { AppRouter } from './routers/appRouter'
import { Store } from './store/store'

export const LoginApp = () => {
    return (
        <Provider store={Store}>
            <AppRouter/>
        </Provider>
    )
}
