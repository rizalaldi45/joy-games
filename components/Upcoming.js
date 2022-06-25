import CardItem from "./CardItem"

const Upcoming = () => {

    return (
        <div
            className="w-[100%] h-auto py-10 bg-cover bg-no-repeat"
            style={{backgroundImage: 'url("/images/upcoming-bg.png")'}}
        >
            <div className="text-white mx-auto text-center py-20 w-9/12 md:w-2/4 leading-loose">
                <h1 className="text-5xl font-bold font-sans text-dark-violet">Upcoming Games</h1>
                <p className="mt-8">
                    Joy Games aims to not just create a platform but also will play an active role in the development and curation of gaming content on the platform, the upkeep of the codebase, and the development of new exciting ways to implement gamified finance into existing or new games, via a mixture of of inhouse development or co-development with our strategic partners, who are experienced and successful game development studios.
                </p>
            </div>
            <div className="p-10 md:px-20 flex-col lg:flex-row flex justify-between flex-wrap">
                <CardItem image="1" foot title="Claw Star" />
                <CardItem image="5" />
                <CardItem image="3" foot title="The Last" />
                <CardItem image="4" foot title="Moonland" />
                <CardItem image="2" foot title="Axie Infinity" />
                <CardItem image="6" foot title="Kimetzu Hero" />
            </div>
            <div className="bg-dark-violet w-56 h-12 mb-5 rounded-3xl flex justify-center items-center cursor-pointer mx-auto">
                <h5 className="text-white text-lg font-semibold">
                    VIEW MORE
                </h5>
            </div>
        </div>
    )
}

export default Upcoming