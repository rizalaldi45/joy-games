const Client = () => {
    return (
        <div
            className="w-[100%] h-auto bg-cover bg-no-repeat flex-col md:flex-row flex justify-between items-center px-32 md:px-20 py-16"
            style={{backgroundImage: 'url("/images/client-bg.png")'}}
        >
            <div className="my-10 md:my-0">
                <img className="w-36 h-auto bg-cover" src="/images/client-4.png" alt="" />
            </div>
            <div className="my-10 md:my-0">
                <img className="w-28 h-auto bg-cover" src="/images/client-3.png" alt="" />
            </div>
            <div className="my-10 md:my-0">
                <img className="w-44 h-auto bg-cover" src="/images/client-1.png" alt="" />
            </div>
            <div  className="my-10 md:my-0">
                <img className="w-48 h-auto bg-cover" src="/images/client-2.png" alt="" />
            </div>
        </div>
    )
}

export default Client