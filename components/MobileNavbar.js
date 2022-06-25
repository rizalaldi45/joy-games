import { useRouter } from 'next/router'

const MobileNavbar = (props) => {
    const router = useRouter()

    return (
        <div className="w-screen h-screen bg-black absolute z-50 p-10">
            <img className="w-8 h-8 cursor-pointer" src="/images/close-icon.png" alt="" onClick={() => props.setShowMobileNav(false)} />
            <div className="w-full h-[100%] flex flex-col items-center justify-center">
                <ul className="text-white text-center font-bold">
                    <li className="mb-10 cursor-pointer">ABOUT</li>
                    <li className="mb-10 cursor-pointer">STORE</li>
                    <li className="mb-10 cursor-pointer">GAMEBOX</li>
                    <li className="mb-10 cursor-pointer">TOKEN</li>
                    <li className="mb-10 cursor-pointer">STAKING</li>
                    <li className="mb-10 cursor-pointer">DOCS</li>
                    <li className="mb-10 cursor-pointer" onClick={() => router.push('/login')}>LOGIN</li>
                    <li className="mb-10 cursor-pointer" onClick={() => router.push('/register')}>REGISTER</li>
                </ul>
            </div>
        </div>
    )
}

export default MobileNavbar