const CardItem = (props) => {
    return (
        <div className="w-[100%] lg:w-[30%] h-fit bg-white rounded-xl mt-6 md:mt-0 mx-auto md:mx-0 shadow-xl mb-10">
            <div 
                className={`w-full ${props.foot ? 'h-[23rem]' : 'h-[29rem]'} bg-cover bg-center ${props.foot ? 'rounded-t-lg' : 'rounded-lg'}`}
                style={{backgroundImage: `url("/images/card-img-${props.image}.png")`}}
            >
                {!props.foot && (
                    <div className="h-full p-10 text-white flex-col flex items-start justify-center">
                        <h3 className="text-xl font-bold justfy-left tracking-wide">Masketeers</h3>
                        <p className="mt-5">
                            Enter the world of Masketeers where brave heroes empowered by mysterious masks take a stand against the inner demons of society. Soon you will be able to adorn yourself with exclusive NFT Costumes that can empower your Masketeers as they unleash their attacks on the manifestations of negativity.
                        </p>
                    </div>
                )}
            </div>
            {props.foot && (
                <div className='h-[6rem] py-5 px-8 text-left bg-black text-white rounded-b-lg'>
                    <div className='h-full flex flex-wrap justify-between items-center'>
                        <h1 className="text-xl font-semibold">{props.title}</h1>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CardItem