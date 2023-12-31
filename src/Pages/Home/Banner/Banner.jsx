const Banner = () => {
    return (
        <div className="max-w-[1140px] mx-auto max-h-[600px]">
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full"
                    style={
                        {
                            backgroundImage: 'url(https://i.ibb.co/4Sv8fFs/5.jpg)',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            maxHeight: '600px'
                        }
                    } >

                    <div className="overlay bg-gradient-to-r from-gray-900 via-gray-900 to-transparent w-full h-full pb-[100px]" style={
                        {
                            borderRadius: '10px',
                            background: 'linear-gradient(90deg, #151515 0%, rgba(21, 21, 21, 0.00) 100%)'
                        }
                    }>
                        {/* textarea of banner */}
                        <div className="flex flex-col text-white justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left mt-[100px] ml-[100px]">
                            <h1 className="text-5xl font-bold sm:text-6xl">Affordable Price For Car Servicing
                            </h1>
                            <p className="mt-6 mb-8 text-lg sm:mb-12">
                                There are many variations of passages of  available, but the majority have suffered alteration in some form
                            </p>
                            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                                <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded border border-[#FF3811] bg-[#FF3811] text-white hover:bg-transparent hover:border-white">Discover More</a>
                                <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100 hover:bg-[#FF3811] hover:border-[#FF3811]">Latest Project</a>
                            </div>
                        </div>
                    </div>
                    {/* <img src="https://i.ibb.co/4Sv8fFs/5.jpg" className="w-full" /> */}
                    <div className="absolute flex gap-5 justify-end transform  left-5 bottom-[50px] right-[60px]">
                        <a href="#slide4" className="btn btn-circle bg-[#FF3811] border-none hover:bg-[bg-[rgba(255,255,255,0.50)]] svg-stroke">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M19.5 12.7755L4.5 12.7755M4.5 12.7755L11.25 19.5255M4.5 12.7755L11.25 6.02551" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <a href="#slide2" className="btn btn-circle bg-[#FF3811] border-none hover:bg-[bg-[rgba(255,255,255,0.50)]] svg-stroke">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M4.5 12.7755H19.5M19.5 12.7755L12.75 6.02551M19.5 12.7755L12.75 19.5255" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full"
                    style={
                        {
                            backgroundImage: 'url(https://i.ibb.co/4Sv8fFs/5.jpg)',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            maxHeight: '600px'
                        }
                    } >

                    <div className="overlay bg-gradient-to-r from-gray-900 via-gray-900 to-transparent w-full h-full pb-[100px]" style={
                        {
                            borderRadius: '10px',
                            background: 'linear-gradient(90deg, #151515 0%, rgba(21, 21, 21, 0.00) 100%)'
                        }
                    }>
                        {/* textarea of banner */}
                        <div className="flex flex-col text-white justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left mt-[100px] ml-[100px]">
                            <h1 className="text-5xl font-bold sm:text-6xl">Affordable Price For Car Servicing
                            </h1>
                            <p className="mt-6 mb-8 text-lg sm:mb-12">
                                There are many variations of passages of  available, but the majority have suffered alteration in some form
                            </p>
                            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                                <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded border border-[#FF3811] bg-[#FF3811] text-white hover:bg-transparent hover:border-white">Discover More</a>
                                <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100 hover:bg-[#FF3811] hover:border-[#FF3811]">Latest Project</a>
                            </div>
                        </div>
                    </div>
                    {/* <img src="https://i.ibb.co/4Sv8fFs/5.jpg" className="w-full" /> */}
                    <div className="absolute flex gap-5 justify-end transform  left-5 bottom-[50px] right-[60px]">
                        <a href="#slide1" className="btn btn-circle bg-[#FF3811] border-none hover:bg-[bg-[rgba(255,255,255,0.50)]] svg-stroke">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M19.5 12.7755L4.5 12.7755M4.5 12.7755L11.25 19.5255M4.5 12.7755L11.25 6.02551" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <a href="#slide3" className="btn btn-circle bg-[#FF3811] border-none hover:bg-[bg-[rgba(255,255,255,0.50)]] svg-stroke">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M4.5 12.7755H19.5M19.5 12.7755L12.75 6.02551M19.5 12.7755L12.75 19.5255" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full"
                    style={
                        {
                            backgroundImage: 'url(https://i.ibb.co/4Sv8fFs/5.jpg)',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            maxHeight: '600px'
                        }
                    } >

                    <div className="overlay bg-gradient-to-r from-gray-900 via-gray-900 to-transparent w-full h-full pb-[100px]" style={
                        {
                            borderRadius: '10px',
                            background: 'linear-gradient(90deg, #151515 0%, rgba(21, 21, 21, 0.00) 100%)'
                        }
                    }>
                        {/* textarea of banner */}
                        <div className="flex flex-col text-white justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left mt-[100px] ml-[100px]">
                            <h1 className="text-5xl font-bold sm:text-6xl">Affordable Price For Car Servicing
                            </h1>
                            <p className="mt-6 mb-8 text-lg sm:mb-12">
                                There are many variations of passages of  available, but the majority have suffered alteration in some form
                            </p>
                            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                                <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded border border-[#FF3811] bg-[#FF3811] text-white hover:bg-transparent hover:border-white">Discover More</a>
                                <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100 hover:bg-[#FF3811] hover:border-[#FF3811]">Latest Project</a>
                            </div>
                        </div>
                    </div>
                    {/* <img src="https://i.ibb.co/4Sv8fFs/5.jpg" className="w-full" /> */}
                    <div className="absolute flex gap-5 justify-end transform  left-5 bottom-[50px] right-[60px]">
                        <a href="#slide2" className="btn btn-circle bg-[#FF3811] border-none hover:bg-[bg-[rgba(255,255,255,0.50)]] svg-stroke">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M19.5 12.7755L4.5 12.7755M4.5 12.7755L11.25 19.5255M4.5 12.7755L11.25 6.02551" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <a href="#slide4" className="btn btn-circle bg-[#FF3811] border-none hover:bg-[bg-[rgba(255,255,255,0.50)]] svg-stroke">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M4.5 12.7755H19.5M19.5 12.7755L12.75 6.02551M19.5 12.7755L12.75 19.5255" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full"
                    style={
                        {
                            backgroundImage: 'url(https://i.ibb.co/4Sv8fFs/5.jpg)',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            maxHeight: '600px'
                        }
                    }>
                    <div className="overlay bg-gradient-to-r from-gray-900 via-gray-900 to-transparent w-full h-full pb-[100px]" style={
                        {
                            borderRadius: '10px',
                            background: 'linear-gradient(90deg, #151515 0%, rgba(21, 21, 21, 0.00) 100%)'
                        }
                    }>
                        {/* textarea of banner */}
                        <div className="flex flex-col text-white justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left mt-[100px] ml-[100px]">
                            <h1 className="text-5xl font-bold sm:text-6xl">Affordable Price For Car Servicing
                            </h1>
                            <p className="mt-6 mb-8 text-lg sm:mb-12">
                                There are many variations of passages of  available, but the majority have suffered alteration in some form
                            </p>
                            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                                <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded border border-[#FF3811] bg-[#FF3811] text-white hover:bg-transparent hover:border-white">Discover More</a>
                                <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100 hover:bg-[#FF3811] hover:border-[#FF3811]">Latest Project</a>
                            </div>
                        </div>
                    </div>
                    {/* <img src="https://i.ibb.co/4Sv8fFs/5.jpg" /> */}
                    <div className="absolute flex gap-5 justify-end transform  left-5 bottom-[50px] right-[60px]">
                        <a href="#slide2" className="btn btn-circle bg-[#FF3811] border-none hover:bg-[bg-[rgba(255,255,255,0.50)]] svg-stroke">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M19.5 12.7755L4.5 12.7755M4.5 12.7755L11.25 19.5255M4.5 12.7755L11.25 6.02551" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <a href="#slide4" className="btn btn-circle bg-[#FF3811] border-none hover:bg-[bg-[rgba(255,255,255,0.50)]] svg-stroke">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M4.5 12.7755H19.5M19.5 12.7755L12.75 6.02551M19.5 12.7755L12.75 19.5255" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;