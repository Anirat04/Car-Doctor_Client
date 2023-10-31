import { Link } from "react-router-dom";
import './PopularProducts.css';

const PopularProducts = () => {
    return (
        <div className="max-w-[1140px] mx-auto">
            <div className="common_Heading text-center">
                <h3 className="font-bold text-[#FF3811] mb-[20px] text-[20px]">Popular Products</h3>
                <h1 className="text-5xl font-bold">Browse Our Products</h1>
                <div className="textPadingAbout text-[#737373] mx-[30px] sm:mx-[60px] lg:mx-[230px]">
                    <p className="py-6 text-[16px] capitalize">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                </div>
            </div>
            <div className="service_items grid grid-cols-3 gap-[24px] mt-[25px] mb-[50px]">
                <div className="service_card card max-w-[364px] bg-base-100 hover:shadow-xl border  hover:scale-105 transition-all ease-linear">
                    <div className="px-[20px] pt-[20px]">
                        <figure className=" w-[325px] h-[215px] bg-[#F3F3F3] rounded-lg">
                            <img src="https://i.ibb.co/dkkfYqJ/pngwing-1.png" alt="Shoes" className="rounded-xl" />
                        </figure>
                    </div>
                    <div className="card-body px-[25px] py-[20px] flex flex-col items-center text-center">
                        <div className="card-ratings">
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                        <div>
                            <h2 className="card-title text-[#444444] font-bold text-[25px] pb-[6px]">Electrical System</h2>
                            <p className="font-bold text-[#FF3811] text-[20px]">$20.00</p>
                        </div>
                        <div id="product-cart" className="absolute top-[40px] right-[40px] bg-white p-[10px] rounded-lg">
                            <Link to='/'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" >
                                    <path d="M15.75 10.5V6C15.75 5.00544 15.3549 4.05161 14.6517 3.34835C13.9484 2.64509 12.9946 2.25 12 2.25C11.0054 2.25 10.0516 2.64509 9.34835 3.34835C8.64509 4.05161 8.25 5.00544 8.25 6V10.5M19.606 8.507L20.869 20.507C20.939 21.172 20.419 21.75 19.75 21.75H4.25C4.09221 21.7502 3.93614 21.7171 3.79195 21.6531C3.64775 21.589 3.51865 21.4953 3.41302 21.3781C3.3074 21.2608 3.22761 21.1227 3.17885 20.9726C3.13009 20.8226 3.11345 20.6639 3.13 20.507L4.394 8.507C4.42316 8.23056 4.55363 7.9747 4.76025 7.78876C4.96688 7.60281 5.23503 7.49995 5.513 7.5H18.487C19.063 7.5 19.546 7.935 19.606 8.507ZM8.625 10.5C8.625 10.5995 8.58549 10.6948 8.51517 10.7652C8.44484 10.8355 8.34946 10.875 8.25 10.875C8.15054 10.875 8.05516 10.8355 7.98484 10.7652C7.91451 10.6948 7.875 10.5995 7.875 10.5C7.875 10.4005 7.91451 10.3052 7.98484 10.2348C8.05516 10.1645 8.15054 10.125 8.25 10.125C8.34946 10.125 8.44484 10.1645 8.51517 10.2348C8.58549 10.3052 8.625 10.4005 8.625 10.5V10.5ZM16.125 10.5C16.125 10.5995 16.0855 10.6948 16.0152 10.7652C15.9448 10.8355 15.8495 10.875 15.75 10.875C15.6505 10.875 15.5552 10.8355 15.4848 10.7652C15.4145 10.6948 15.375 10.5995 15.375 10.5C15.375 10.4005 15.4145 10.3052 15.4848 10.2348C15.5552 10.1645 15.6505 10.125 15.75 10.125C15.8495 10.125 15.9448 10.1645 16.0152 10.2348C16.0855 10.3052 16.125 10.4005 16.125 10.5V10.5Z" stroke="#FF3811" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="service_card card max-w-[364px] bg-base-100 hover:shadow-xl border hover:scale-105 transition-all ease-linear">
                    <div className="px-[20px] pt-[20px]">
                        <figure className=" w-[325px] h-[215px] bg-[#F3F3F3] rounded-lg">
                            <img src="https://i.ibb.co/dkkfYqJ/pngwing-1.png" alt="Shoes" className="rounded-xl" />
                        </figure>
                    </div>
                    <div className="card-body px-[25px] py-[20px] flex flex-col items-center text-center">
                        <div className="card-ratings">
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                        <div>
                            <h2 className="card-title text-[#444444] font-bold text-[25px] pb-[6px]">Electrical System</h2>
                            <p className="font-bold text-[#FF3811] text-[20px]">$20.00</p>
                        </div>
                        <div id="product-cart" className="absolute top-[40px] right-[40px] bg-white p-[10px] rounded-lg">
                            <Link to='/'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" >
                                    <path d="M15.75 10.5V6C15.75 5.00544 15.3549 4.05161 14.6517 3.34835C13.9484 2.64509 12.9946 2.25 12 2.25C11.0054 2.25 10.0516 2.64509 9.34835 3.34835C8.64509 4.05161 8.25 5.00544 8.25 6V10.5M19.606 8.507L20.869 20.507C20.939 21.172 20.419 21.75 19.75 21.75H4.25C4.09221 21.7502 3.93614 21.7171 3.79195 21.6531C3.64775 21.589 3.51865 21.4953 3.41302 21.3781C3.3074 21.2608 3.22761 21.1227 3.17885 20.9726C3.13009 20.8226 3.11345 20.6639 3.13 20.507L4.394 8.507C4.42316 8.23056 4.55363 7.9747 4.76025 7.78876C4.96688 7.60281 5.23503 7.49995 5.513 7.5H18.487C19.063 7.5 19.546 7.935 19.606 8.507ZM8.625 10.5C8.625 10.5995 8.58549 10.6948 8.51517 10.7652C8.44484 10.8355 8.34946 10.875 8.25 10.875C8.15054 10.875 8.05516 10.8355 7.98484 10.7652C7.91451 10.6948 7.875 10.5995 7.875 10.5C7.875 10.4005 7.91451 10.3052 7.98484 10.2348C8.05516 10.1645 8.15054 10.125 8.25 10.125C8.34946 10.125 8.44484 10.1645 8.51517 10.2348C8.58549 10.3052 8.625 10.4005 8.625 10.5V10.5ZM16.125 10.5C16.125 10.5995 16.0855 10.6948 16.0152 10.7652C15.9448 10.8355 15.8495 10.875 15.75 10.875C15.6505 10.875 15.5552 10.8355 15.4848 10.7652C15.4145 10.6948 15.375 10.5995 15.375 10.5C15.375 10.4005 15.4145 10.3052 15.4848 10.2348C15.5552 10.1645 15.6505 10.125 15.75 10.125C15.8495 10.125 15.9448 10.1645 16.0152 10.2348C16.0855 10.3052 16.125 10.4005 16.125 10.5V10.5Z" stroke="#FF3811" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="service_card card max-w-[364px] bg-base-100 hover:shadow-xl border hover:scale-105 transition-all ease-linear">
                    <div className="px-[20px] pt-[20px]">
                        <figure className=" w-[325px] h-[215px] bg-[#F3F3F3] rounded-lg">
                            <img src="https://i.ibb.co/dkkfYqJ/pngwing-1.png" alt="Shoes" className="rounded-xl" />
                        </figure>
                    </div>
                    <div className="card-body px-[25px] py-[20px] flex flex-col items-center text-center">
                        <div className="card-ratings">
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                        <div>
                            <h2 className="card-title text-[#444444] font-bold text-[25px] pb-[6px]">Electrical System</h2>
                            <p className="font-bold text-[#FF3811] text-[20px]">$20.00</p>
                        </div>
                        <div id="product-cart" className="absolute top-[40px] right-[40px] bg-white p-[10px] rounded-lg">
                            <Link to='/'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" >
                                    <path d="M15.75 10.5V6C15.75 5.00544 15.3549 4.05161 14.6517 3.34835C13.9484 2.64509 12.9946 2.25 12 2.25C11.0054 2.25 10.0516 2.64509 9.34835 3.34835C8.64509 4.05161 8.25 5.00544 8.25 6V10.5M19.606 8.507L20.869 20.507C20.939 21.172 20.419 21.75 19.75 21.75H4.25C4.09221 21.7502 3.93614 21.7171 3.79195 21.6531C3.64775 21.589 3.51865 21.4953 3.41302 21.3781C3.3074 21.2608 3.22761 21.1227 3.17885 20.9726C3.13009 20.8226 3.11345 20.6639 3.13 20.507L4.394 8.507C4.42316 8.23056 4.55363 7.9747 4.76025 7.78876C4.96688 7.60281 5.23503 7.49995 5.513 7.5H18.487C19.063 7.5 19.546 7.935 19.606 8.507ZM8.625 10.5C8.625 10.5995 8.58549 10.6948 8.51517 10.7652C8.44484 10.8355 8.34946 10.875 8.25 10.875C8.15054 10.875 8.05516 10.8355 7.98484 10.7652C7.91451 10.6948 7.875 10.5995 7.875 10.5C7.875 10.4005 7.91451 10.3052 7.98484 10.2348C8.05516 10.1645 8.15054 10.125 8.25 10.125C8.34946 10.125 8.44484 10.1645 8.51517 10.2348C8.58549 10.3052 8.625 10.4005 8.625 10.5V10.5ZM16.125 10.5C16.125 10.5995 16.0855 10.6948 16.0152 10.7652C15.9448 10.8355 15.8495 10.875 15.75 10.875C15.6505 10.875 15.5552 10.8355 15.4848 10.7652C15.4145 10.6948 15.375 10.5995 15.375 10.5C15.375 10.4005 15.4145 10.3052 15.4848 10.2348C15.5552 10.1645 15.6505 10.125 15.75 10.125C15.8495 10.125 15.9448 10.1645 16.0152 10.2348C16.0855 10.3052 16.125 10.4005 16.125 10.5V10.5Z" stroke="#FF3811" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="service_card card max-w-[364px] bg-base-100 hover:shadow-xl border hover:scale-105 transition-all ease-linear">
                    <div className="px-[20px] pt-[20px]">
                        <figure className=" w-[325px] h-[215px] bg-[#F3F3F3] rounded-lg">
                            <img src="https://i.ibb.co/dkkfYqJ/pngwing-1.png" alt="Shoes" className="rounded-xl" />
                        </figure>
                    </div>
                    <div className="card-body px-[25px] py-[20px] flex flex-col items-center text-center">
                        <div className="card-ratings">
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                        <div>
                            <h2 className="card-title text-[#444444] font-bold text-[25px] pb-[6px]">Electrical System</h2>
                            <p className="font-bold text-[#FF3811] text-[20px]">$20.00</p>
                        </div>
                        <div id="product-cart" className="absolute top-[40px] right-[40px] bg-white p-[10px] rounded-lg">
                            <Link to='/'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" >
                                    <path d="M15.75 10.5V6C15.75 5.00544 15.3549 4.05161 14.6517 3.34835C13.9484 2.64509 12.9946 2.25 12 2.25C11.0054 2.25 10.0516 2.64509 9.34835 3.34835C8.64509 4.05161 8.25 5.00544 8.25 6V10.5M19.606 8.507L20.869 20.507C20.939 21.172 20.419 21.75 19.75 21.75H4.25C4.09221 21.7502 3.93614 21.7171 3.79195 21.6531C3.64775 21.589 3.51865 21.4953 3.41302 21.3781C3.3074 21.2608 3.22761 21.1227 3.17885 20.9726C3.13009 20.8226 3.11345 20.6639 3.13 20.507L4.394 8.507C4.42316 8.23056 4.55363 7.9747 4.76025 7.78876C4.96688 7.60281 5.23503 7.49995 5.513 7.5H18.487C19.063 7.5 19.546 7.935 19.606 8.507ZM8.625 10.5C8.625 10.5995 8.58549 10.6948 8.51517 10.7652C8.44484 10.8355 8.34946 10.875 8.25 10.875C8.15054 10.875 8.05516 10.8355 7.98484 10.7652C7.91451 10.6948 7.875 10.5995 7.875 10.5C7.875 10.4005 7.91451 10.3052 7.98484 10.2348C8.05516 10.1645 8.15054 10.125 8.25 10.125C8.34946 10.125 8.44484 10.1645 8.51517 10.2348C8.58549 10.3052 8.625 10.4005 8.625 10.5V10.5ZM16.125 10.5C16.125 10.5995 16.0855 10.6948 16.0152 10.7652C15.9448 10.8355 15.8495 10.875 15.75 10.875C15.6505 10.875 15.5552 10.8355 15.4848 10.7652C15.4145 10.6948 15.375 10.5995 15.375 10.5C15.375 10.4005 15.4145 10.3052 15.4848 10.2348C15.5552 10.1645 15.6505 10.125 15.75 10.125C15.8495 10.125 15.9448 10.1645 16.0152 10.2348C16.0855 10.3052 16.125 10.4005 16.125 10.5V10.5Z" stroke="#FF3811" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="service_card card max-w-[364px] bg-base-100 hover:shadow-xl border hover:scale-105 transition-all ease-linear">
                    <div className="px-[20px] pt-[20px]">
                        <figure className=" w-[325px] h-[215px] bg-[#F3F3F3] rounded-lg">
                            <img src="https://i.ibb.co/dkkfYqJ/pngwing-1.png" alt="Shoes" className="rounded-xl" />
                        </figure>
                    </div>
                    <div className="card-body px-[25px] py-[20px] flex flex-col items-center text-center">
                        <div className="card-ratings">
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                        <div>
                            <h2 className="card-title text-[#444444] font-bold text-[25px] pb-[6px]">Electrical System</h2>
                            <p className="font-bold text-[#FF3811] text-[20px]">$20.00</p>
                        </div>
                        <div id="product-cart" className="absolute top-[40px] right-[40px] bg-white p-[10px] rounded-lg">
                            <Link to='/'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" >
                                    <path d="M15.75 10.5V6C15.75 5.00544 15.3549 4.05161 14.6517 3.34835C13.9484 2.64509 12.9946 2.25 12 2.25C11.0054 2.25 10.0516 2.64509 9.34835 3.34835C8.64509 4.05161 8.25 5.00544 8.25 6V10.5M19.606 8.507L20.869 20.507C20.939 21.172 20.419 21.75 19.75 21.75H4.25C4.09221 21.7502 3.93614 21.7171 3.79195 21.6531C3.64775 21.589 3.51865 21.4953 3.41302 21.3781C3.3074 21.2608 3.22761 21.1227 3.17885 20.9726C3.13009 20.8226 3.11345 20.6639 3.13 20.507L4.394 8.507C4.42316 8.23056 4.55363 7.9747 4.76025 7.78876C4.96688 7.60281 5.23503 7.49995 5.513 7.5H18.487C19.063 7.5 19.546 7.935 19.606 8.507ZM8.625 10.5C8.625 10.5995 8.58549 10.6948 8.51517 10.7652C8.44484 10.8355 8.34946 10.875 8.25 10.875C8.15054 10.875 8.05516 10.8355 7.98484 10.7652C7.91451 10.6948 7.875 10.5995 7.875 10.5C7.875 10.4005 7.91451 10.3052 7.98484 10.2348C8.05516 10.1645 8.15054 10.125 8.25 10.125C8.34946 10.125 8.44484 10.1645 8.51517 10.2348C8.58549 10.3052 8.625 10.4005 8.625 10.5V10.5ZM16.125 10.5C16.125 10.5995 16.0855 10.6948 16.0152 10.7652C15.9448 10.8355 15.8495 10.875 15.75 10.875C15.6505 10.875 15.5552 10.8355 15.4848 10.7652C15.4145 10.6948 15.375 10.5995 15.375 10.5C15.375 10.4005 15.4145 10.3052 15.4848 10.2348C15.5552 10.1645 15.6505 10.125 15.75 10.125C15.8495 10.125 15.9448 10.1645 16.0152 10.2348C16.0855 10.3052 16.125 10.4005 16.125 10.5V10.5Z" stroke="#FF3811" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="service_card card max-w-[364px] bg-base-100 hover:shadow-xl border hover:scale-105 transition-all ease-linear">
                    <div className="px-[20px] pt-[20px]">
                        <figure className=" w-[325px] h-[215px] bg-[#F3F3F3] rounded-lg">
                            <img src="https://i.ibb.co/dkkfYqJ/pngwing-1.png" alt="Shoes" className="rounded-xl" />
                        </figure>
                    </div>
                    <div className="card-body px-[25px] py-[20px] flex flex-col items-center text-center">
                        <div className="card-ratings">
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                        <div>
                            <h2 className="card-title text-[#444444] font-bold text-[25px] pb-[6px]">Electrical System</h2>
                            <p className="font-bold text-[#FF3811] text-[20px]">$20.00</p>
                        </div>
                        <div id="product-cart" className="absolute top-[40px] right-[40px] bg-white p-[10px] rounded-lg">
                            <Link to='/'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" >
                                    <path d="M15.75 10.5V6C15.75 5.00544 15.3549 4.05161 14.6517 3.34835C13.9484 2.64509 12.9946 2.25 12 2.25C11.0054 2.25 10.0516 2.64509 9.34835 3.34835C8.64509 4.05161 8.25 5.00544 8.25 6V10.5M19.606 8.507L20.869 20.507C20.939 21.172 20.419 21.75 19.75 21.75H4.25C4.09221 21.7502 3.93614 21.7171 3.79195 21.6531C3.64775 21.589 3.51865 21.4953 3.41302 21.3781C3.3074 21.2608 3.22761 21.1227 3.17885 20.9726C3.13009 20.8226 3.11345 20.6639 3.13 20.507L4.394 8.507C4.42316 8.23056 4.55363 7.9747 4.76025 7.78876C4.96688 7.60281 5.23503 7.49995 5.513 7.5H18.487C19.063 7.5 19.546 7.935 19.606 8.507ZM8.625 10.5C8.625 10.5995 8.58549 10.6948 8.51517 10.7652C8.44484 10.8355 8.34946 10.875 8.25 10.875C8.15054 10.875 8.05516 10.8355 7.98484 10.7652C7.91451 10.6948 7.875 10.5995 7.875 10.5C7.875 10.4005 7.91451 10.3052 7.98484 10.2348C8.05516 10.1645 8.15054 10.125 8.25 10.125C8.34946 10.125 8.44484 10.1645 8.51517 10.2348C8.58549 10.3052 8.625 10.4005 8.625 10.5V10.5ZM16.125 10.5C16.125 10.5995 16.0855 10.6948 16.0152 10.7652C15.9448 10.8355 15.8495 10.875 15.75 10.875C15.6505 10.875 15.5552 10.8355 15.4848 10.7652C15.4145 10.6948 15.375 10.5995 15.375 10.5C15.375 10.4005 15.4145 10.3052 15.4848 10.2348C15.5552 10.1645 15.6505 10.125 15.75 10.125C15.8495 10.125 15.9448 10.1645 16.0152 10.2348C16.0855 10.3052 16.125 10.4005 16.125 10.5V10.5Z" stroke="#FF3811" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <button href="#" className="px-8 py-3 mt-5 text-lg font-semibold rounded border border-[#FF3811] bg-[#FF3811] bg-transparent hover:border-[#FF3811] text-[#FF3811]">More Products</button>
            </div>
        </div>
    );
};

export default PopularProducts;