import React, { useContext } from "react"
import { useObserver } from 'mobx-react-lite'
import { UserContext } from '../mobX/StoreContext'
import { useRouter } from 'next/router'
import { logout } from '../lib/api'

const Dashboard = () => {
    const dataUser = useContext(UserContext)
    const router = useRouter()
    const { fullname } = dataUser.user.data

    const handleLogout = () => {
        logout(dataUser.user.userToken)
        dataUser.removeUser()
        localStorage.removeItem('JOY_GAMES_USER_CRED')
        router.push('/')
    }

    return useObserver(() => (
        <div className="flex items-center justify-center h-screen">
            <div className="text-center">
                <h1 className="text-3xl font-bold">Welcome On Dashboard</h1>
                <h3 className="mb-10 text-xl font-bold text-dark-violet">{`${fullname}`}</h3>
                <div
                    className="bg-dark-violet w-44 h-12 rounded-3xl flex justify-center items-center cursor-pointer mx-auto"
                    onClick={() => handleLogout()}
                >
                    <h5 className="text-white text-lg font-semibold">
                        LOGOUT
                    </h5>
                </div>
            </div>
        </div>
    ))
}

export default Dashboard