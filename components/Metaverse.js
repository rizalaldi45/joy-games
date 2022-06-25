const Metaverse = () => {
    return (
        <div className="w-full h-auto p-20 bg-black text-white flex-col lg:flex-row flex justify-between items-center">
            <div className="w-full lg:w-1/5">
                <h4 className="text-2xl font-bold tracking-wide text-center lg:text-left">
                    INTO THE METAVERSE
                </h4>
                <p className="mt-5 text-lg text-center lg:text-justify font-semibold leading-loose font-semibold">
                    Earn, trade, stake, farm and swap your game assets the way you want. Welcome to a metaverse that lets you truly decide how you want to play. 
                </p>
            </div>
            <div className="w-full lg:w-auto flex flex-col items-center">
                <img className="w-36 h-10 mb-2 mt-7 lg:mt-0" src="/images/logo.png" alt="Joy Games" />
                <img src="/images/Metaverse-bg.png" alt="" />
            </div>
            <div className="w-full lg:w-1/5 mt-5 lg:mt-0">
                <p className="mt-5 text-lg text-center lg:text-justify font-semibold leading-loose">This is for all the gamers out there no matter who you are, whether you're a newbie or a whale. It's time to game on your own terms. Welcome to Joy Games - Metaverse gaming by true game makers.</p>
            </div>
        </div>
    )
}

export default Metaverse