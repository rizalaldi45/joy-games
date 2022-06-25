const Footer = () => {
    return (
        <div className="flex flex-col w-full h-auto px-20 bg-black pt-20 pb-10">
            <div className="flex-col md:flex-row flex justify-between">
                <div className="flex flex-col justify-start">
                    <img className="w-36 h-10 mb-2 mt-7 lg:mt-0" src="/images/logo.png" alt="Joy Games" />
                    <h3 className="text-white mt-5 font-bold">METAVERSE GAMING</h3>
                    <h4 className="text-white text-xs font-bold">BY JOY GAME PLAYER</h4>
                </div>
                <div className="mt-10 md:mt-0">
                    <h3 className="text-white font-bold">OUR SERVICES</h3>
                    <ul className="text-white mt-5 font-bold">
                        <li className="mb-3 cursor-pointer">ABOUT</li>
                        <li className="mb-3 cursor-pointer">STORE</li>
                        <li className="mb-3 cursor-pointer">GAMEBOX</li>
                        <li className="mb-3 cursor-pointer">TOKEN</li>
                        <li className="mb-3 cursor-pointer">STACKING</li>
                        <li className="mb-3 cursor-pointer">DOCS</li>
                    </ul>
                </div>
                <div className="mt-10 md:mt-0">
                    <h3 className="text-white font-bold">OUR SERVICES</h3>
                    <ul className="text-white mt-5 font-bold">
                        <li className="mb-3 cursor-pointer">HELP</li>
                        <li className="mb-3 cursor-pointer">FAX</li>
                        <li className="mb-3 cursor-pointer">CONTACT</li>
                    </ul>
                </div>
                <div className="mt-10 md:mt-0">
                    <h3 className="text-white font-bold">JOIN OUR COMUNITY</h3>
                    <div className="mt-5 flex">
                        <img className="w-6 h-6 mr-10 cursor-pointer" src="/images/icons-twitter.png" alt="" />
                        <img className="w-6 h-6 mr-10 cursor-pointer" src="/images/icons-medium.png" alt="" />
                        <img className="w-6 h-6 mr-10 cursor-pointer" src="/images/icons-github.png" alt="" />
                        <img className="w-6 h-6 mr-10 cursor-pointer" src="/images/icons-telegram.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="flex justify-start md:justify-center mt-10">
                <h3 className="text-white font-bold">© 2022 Joy Games | Terms & Conditions | Privacy Policy</h3>
            </div>
        </div>
    )
}

export default Footer