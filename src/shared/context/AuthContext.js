import React, { createContext, useState } from 'react'
import { KEY } from '../constants'
import { useDepedency } from '../hook/UseDepedency'
import { Storage } from '../Storage'

export const AuthContext = createContext({})

export const AuthProvider = ({children}) => {
    const {loginService} = useDepedency()
    const storage = Storage()

    const onLogin = async (userCred = {}) => {
        try {
            await storage.storeData(KEY.USERNAME, userCred.userName)

            const response = await loginService.authenticate(userCred)
            if (response) {
                await storage.storeData(KEY.TOKEN, response.token)
                return true
            } else {
                return false
            }
        } catch (e) {
            return false
        }
    }

    const isTokenExist = async () => {
        try {
            const token = await storage.getData(KEY.TOKEN,)
            return !!token;
        } catch (e) {
            return false;
        }
    }

    const onLogout = async () => {
        try {
            await storage.deleteData(KEY.TOKEN);
            return true;
        } catch (e) {
            return false;
        }
    }

    const getUserName = async () => {
        try {
            const response = await storage.getData(KEY.USERNAME)
            return response
        } catch (e) {
            return null
        }
    }

    return <AuthContext.Provider value={{onLogin, onLogout, isTokenExist, getUserName}}>{children}</AuthContext.Provider>;

}