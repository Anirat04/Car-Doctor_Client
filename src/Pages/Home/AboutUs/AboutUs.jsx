/* eslint-disable react/no-unescaped-entities */
const AboutUs = () => {
    return (
        <div className="my-[130px]">
            <div className="hero max-w-[1140px] mx-auto">
                <div className="hero-content grid grid-cols-2 p-0">
                    <div className="aboutImg relative">
                        <img src="https://i.ibb.co/XjZyNrQ/Rectangle-4.png" className="max-w-[460px] h-[473px] rounded-lg shadow-2xl" />
                        <img className="absolute top-[225px] left-[194px]" src="https://i.ibb.co/5n6sJCn/Rectangle-5.png" alt="" />
                    </div>
                    <div>
                        <h3 className="font-bold text-[#FF3811] mb-[20px] text-[20px]">About Us</h3>
                        <h1 className="text-5xl font-bold mr-[180px]">We are qualified & of experience in this field</h1>
                        <div className="textPadingAbout mr-[70px] text-[#737373]">
                            <p className="py-6 text-[16px] capitalize">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                            <p className="text-[16px] capitalize">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                            <button href="#" className="px-8 py-3 mt-5 text-lg font-semibold rounded border border-[#FF3811] bg-[#FF3811] text-white hover:bg-transparent hover:border-[#FF3811] hover:text-[#FF3811]">Discover More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;