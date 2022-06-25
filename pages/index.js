import React, { useState, useContext, useEffect } from "react"
import { UserContext } from '../mobX/StoreContext'
import { useObserver } from 'mobx-react-lite';
import Navbar from "../components/Navbar"
import Client from "../components/Client"
import Metaverse from "../components/Metaverse"
import Upcoming from "../components/Upcoming"
import Slideshow from "../components/Slideshow"
import StrategicClient from "../components/StrategicClient"
import Footer from "../components/Footer"
import MobileNavbar from "../components/MobileNavbar"
import Dashboard from "../components/Dashboard"

const Home = () => {
  const dataUser = useContext(UserContext)
  const [showMobileNav, setShowMobileNav] = useState(false)

  useEffect(() => {
    const userCred = JSON.parse(localStorage.getItem('JOY_GAMES_USER_CRED'))
    dataUser.addUser(userCred)
  }, [])

  return useObserver(() => (
    <div>
      {dataUser.user?.data && (
        <Dashboard />
      )}
      {!showMobileNav && !dataUser.user?.data && (
        <>
          <Navbar setShowMobileNav={setShowMobileNav} />
          <div 
            className="w-[100%] h-screen bg-cover bg-no-repeat"
            style={{backgroundImage: 'url("/images/header-bg.png")'}}
          >
          </div>
          <Client />
          <Metaverse />
          <Upcoming />
          <Slideshow />
          <StrategicClient />
          <Footer />
        </>
      )}
      {showMobileNav && !dataUser.user?.data && (
          <MobileNavbar setShowMobileNav={setShowMobileNav} />
      )}
    </div>
  ))
}

export default Home
