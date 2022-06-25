import Carousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';

const Slideshow = () => {
    const handleDragStart = (e) => e.preventDefault();
    const items = [
        <img className="w-[50rem] h-[20rem] mx-10 md:mx-auto" src="/images/slide-1.png" role="presentation" onDragStart={handleDragStart} />,
        <img className="w-[50rem] h-[20rem] mx-20 md:mx-auto" src="/images/slide-2.png" role="presentation" onDragStart={handleDragStart} />,
    ];

    return (
        <div
            className="w-full h-auto pb-1"
            style={{backgroundImage: 'url("/images/slideshow-bg.png")'}}
        >
            <div className="text-white mx-auto text-center py-20 w-9/12 md:w-2/4 leading-loose">
                <h1 className="text-5xl font-bold font-sans text-dark-violet">News</h1>
                <p className="mt-8">
                    Eclipse to the world of the end of our story Inside
                </p>
            </div>
            <div className="mt-10 flex lg:w-1/2 mx-auto">
                <Carousel mouseTracking disableButtonsControls items={items} />
            </div>
            <div className="bg-dark-violet w-56 h-12 mt-20 mb-20 rounded-3xl flex justify-center items-center cursor-pointer mx-auto">
                <h5 className="text-white text-lg font-semibold">
                    VIEW ALL
                </h5>
            </div>
        </div>
    )
}

export default Slideshow