import { useRouter } from 'next/router'

const Navbar = (props) => {
    const router = useRouter()

    return (
        <div 
            className="w-[100%] h-auto bg-cover bg-no-repeat text-white flex justify-between py-10 absolute"
            style={{backgroundImage: 'url("/images/navbar-bg.png")'}}
        >
            <img className="w-44 h-12 ml-10" src="/images/logo.png" alt="Joy Games" />
            <div className="hidden xl:block">
                <ul className="flex items-center h-12 font-semibold text-lg">
                    <li className="mr-10 cursor-pointer">ABOUT</li>
                    <li className="mr-10 cursor-pointer">STORE</li>
                    <li className="mr-10 cursor-pointer">GAMEBOX</li>
                    <li className="mr-10 cursor-pointer">TOKEN</li>
                    <li className="mr-10 cursor-pointer">STAKING</li>
                    <li className="mr-10 cursor-pointer">DOCS</li>
                </ul>
            </div>
            <div className="hidden xl:block">
                <ul className="flex items-center h-12 font-semibold text-lg">
                    <li className="mr-10 cursor-pointer" onClick={() => router.push('/register')}>REGISTER</li>
                    <li className="mr-10">
                        <div className="bg-dark-violet w-44 h-12 rounded-3xl flex justify-center items-center cursor-pointer" onClick={() => router.push('/login')} >
                            <h5 className="text-white text-lg font-semibold">
                                LOGIN
                            </h5>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="flex items-center xl:hidden mr-10">
                <img className="w-9 h-9 cursor-pointer" src="/images/hamburger-icon.png" alt="Hamburger Icon" onClick={() => props.setShowMobileNav(true)} />
            </div>
        </div>
    )
}

export default Navbar