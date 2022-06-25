import React, { createContext } from 'react'
import { useLocalStore } from 'mobx-react-lite'

export const UserContext = createContext(null)

export function StoreContextProvider({children}) {
    const store = useLocalStore(() => ({
        user: {},
        addUser(data) {
            this.user = data
        },
        removeUser() {
            this.user = {}
        }
    }))
 
    return (
        <UserContext.Provider value={store}>
            {children}
        </UserContext.Provider>
    )
}