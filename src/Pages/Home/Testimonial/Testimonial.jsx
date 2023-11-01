/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimonial.css'

const Testimonial = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
        // Add centerPadding to create a gap between slides
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="max-w-[1140px] mx-auto my-[130px]">
                <div className="common_Heading text-center">
                    <h3 className="font-bold text-[#FF3811] mb-[20px] text-[20px]">Team</h3>
                    <h1 className="text-5xl font-bold">What Customer Says</h1>
                    <div className="textPadingAbout text-[#737373] mx-[30px] sm:mx-[60px] lg:mx-[230px]">
                        <p className="py-6 text-[16px] capitalize">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    </div>
                </div>
                <div>
                    <Slider className='pl-[8px]'  {...settings}>
                        <div className='border p-[50px] rounded-xl relative mr-[20px]'>
                            {/* testimonial profile sections */}
                            <div className="testi_Profile flex gap-5 items-center mb-5">
                                <div className="testi-pic">
                                    <img src="https://i.ibb.co/yPxW1cW/Ellipse-2.png" alt="" />
                                </div>
                                <div className="testi_profile-Text">
                                    <h3 className='text-[25px] font-bold text-[#444444]'>Awlad Hossain</h3>
                                    <p className='text-[20px] font-semibold text-[#737373]'>Businessman</p>
                                </div>
                            </div>
                            {/* testimonial text section */}
                            <div className="testi-text">
                                <p className='text-[16px] font-normal text-[#737373] mb-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                            <div className="absolute top-[54px] right-[100px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                                    <path d="M32 4V28H47.9999C47.9999 36.8223 40.8222 44 32 44V52.0001C45.2344 52.0001 56 41.2345 56 28V4H32Z" fill="#FF3811" fillOpacity="0.2" />
                                    <path d="M0 28H16C16 36.8223 8.82222 44 0 44V52.0001C13.2344 52.0001 24 41.2345 24 28V4H0V28Z" fill="#FF3811" fillOpacity="0.2" />
                                </svg>
                            </div>
                        </div>
                        <div className='border p-[50px] rounded-xl relative mr-[20px]'>
                            {/* testimonial profile sections */}
                            <div className="testi_Profile flex gap-5 items-center mb-5">
                                <div className="testi-pic">
                                    <img src="https://i.ibb.co/yPxW1cW/Ellipse-2.png" alt="" />
                                </div>
                                <div className="testi_profile-Text">
                                    <h3 className='text-[25px] font-bold text-[#444444]'>Awlad Hossain</h3>
                                    <p className='text-[20px] font-semibold text-[#737373]'>Businessman</p>
                                </div>
                            </div>
                            {/* testimonial text section */}
                            <div className="testi-text">
                                <p className='text-[16px] font-normal text-[#737373] mb-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                            <div className="absolute top-[54px] right-[100px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                                    <path d="M32 4V28H47.9999C47.9999 36.8223 40.8222 44 32 44V52.0001C45.2344 52.0001 56 41.2345 56 28V4H32Z" fill="#FF3811" fillOpacity="0.2" />
                                    <path d="M0 28H16C16 36.8223 8.82222 44 0 44V52.0001C13.2344 52.0001 24 41.2345 24 28V4H0V28Z" fill="#FF3811" fillOpacity="0.2" />
                                </svg>
                            </div>
                        </div>
                        <div className='border p-[50px] rounded-xl relative mr-[20px]'>
                            {/* testimonial profile sections */}
                            <div className="testi_Profile flex gap-5 items-center mb-5">
                                <div className="testi-pic">
                                    <img src="https://i.ibb.co/yPxW1cW/Ellipse-2.png" alt="" />
                                </div>
                                <div className="testi_profile-Text">
                                    <h3 className='text-[25px] font-bold text-[#444444]'>Awlad Hossain</h3>
                                    <p className='text-[20px] font-semibold text-[#737373]'>Businessman</p>
                                </div>
                            </div>
                            {/* testimonial text section */}
                            <div className="testi-text">
                                <p className='text-[16px] font-normal text-[#737373] mb-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                            <div className="absolute top-[54px] right-[100px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                                    <path d="M32 4V28H47.9999C47.9999 36.8223 40.8222 44 32 44V52.0001C45.2344 52.0001 56 41.2345 56 28V4H32Z" fill="#FF3811" fillOpacity="0.2" />
                                    <path d="M0 28H16C16 36.8223 8.82222 44 0 44V52.0001C13.2344 52.0001 24 41.2345 24 28V4H0V28Z" fill="#FF3811" fillOpacity="0.2" />
                                </svg>
                            </div>
                        </div>
                        <div className='border p-[50px] rounded-xl relative mr-[20px]'>
                            {/* testimonial profile sections */}
                            <div className="testi_Profile flex gap-5 items-center mb-5">
                                <div className="testi-pic">
                                    <img src="https://i.ibb.co/yPxW1cW/Ellipse-2.png" alt="" />
                                </div>
                                <div className="testi_profile-Text">
                                    <h3 className='text-[25px] font-bold text-[#444444]'>Awlad Hossain</h3>
                                    <p className='text-[20px] font-semibold text-[#737373]'>Businessman</p>
                                </div>
                            </div>
                            {/* testimonial text section */}
                            <div className="testi-text">
                                <p className='text-[16px] font-normal text-[#737373] mb-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                            <div className="absolute top-[54px] right-[100px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                                    <path d="M32 4V28H47.9999C47.9999 36.8223 40.8222 44 32 44V52.0001C45.2344 52.0001 56 41.2345 56 28V4H32Z" fill="#FF3811" fillOpacity="0.2" />
                                    <path d="M0 28H16C16 36.8223 8.82222 44 0 44V52.0001C13.2344 52.0001 24 41.2345 24 28V4H0V28Z" fill="#FF3811" fillOpacity="0.2" />
                                </svg>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    );
};

// CustomPrevArrow component
const CustomPrevArrow = (props) => (
    <div
        {...props}
        style={{
            ...props.style,
            display: 'block',
            position: 'absolute',
            left: '-10px', // Adjust the position as needed
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'red', // Change the color as needed
            fontSize: '24px', // Change the font size as needed
            cursor: 'pointer',
            zIndex: 999999,
        }}
    >
        <a className="btn btn-circle bg-[#FF3811] border-none hover:bg-[bg-[rgba(255,255,255,0.50)]] svg-stroke">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M19.5 12.7755L4.5 12.7755M4.5 12.7755L11.25 19.5255M4.5 12.7755L11.25 6.02551" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </a>
    </div>
);

// CustomNextArrow component
const CustomNextArrow = (props) => (
    <div
        {...props}
        style={{
            ...props.style,
            display: 'block',
            position: 'absolute',
            right: '10px', // Adjust the position as needed
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'blue', // Change the color as needed
            fontSize: '24px', // Change the font size as needed
            cursor: 'pointer',
            zIndex: 999999,
        }}
    >
        <a className="btn btn-circle bg-[#FF3811] border-none hover:bg-[bg-[rgba(255,255,255,0.50)]] svg-stroke">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M4.5 12.7755H19.5M19.5 12.7755L12.75 6.02551M19.5 12.7755L12.75 19.5255" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </a>
    </div>
);

export default Testimonial;