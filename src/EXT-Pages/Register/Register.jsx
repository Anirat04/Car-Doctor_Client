/* eslint-disable react/no-unescaped-entities */
const Register = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col gap-[70px] lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img src="https://i.ibb.co/HgVVR3g/Access-control-system-2.png" alt="" />
                    </div>
                    <div className="card flex-shrink-0 p-[75px] border">
                        <div className="w-full text-gray-100">
                            <h1 className="text-[40px] font-semibold text-[#444444] text-center mb-[50px]">Sign Up</h1>
                            <form className="space-y-6 w-[461px]">
                                <div className="space-y-1 text-sm">
                                    <label className="block text-[18px] font-semibold text-[#444444]">Name</label>
                                    <input type="text" name="username" id="username" placeholder="Your name" className="w-full px-4 py-4 rounded-md border  text-gray-100 focus:border-[#FF3811]" />
                                    <div data-lastpass-icon-root="true"></div>
                                </div>
                                <div className="space-y-1 text-sm">
                                    <label className="block text-[18px] font-semibold text-[#444444]">Email</label>
                                    <input type="text" name="username" id="username" placeholder="Your email" className="w-full px-4 py-4 rounded-md border  text-gray-100 focus:border-[#FF3811]" />
                                    <div data-lastpass-icon-root="true"></div>
                                </div>
                                <div className="space-y-1 text-sm">
                                    <label className="block text-[18px] font-semibold text-[#444444]">Confirm Password</label>
                                    <input type="password" name="password" id="password" placeholder="Your password" className="w-full px-4 py-4 rounded-md border  text-gray-100 focus:border-[#FF3811]" />
                                    <div className="flex justify-end text-xs text-gray-400">
                                        <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                                    </div>
                                    <div data-lastpass-icon-root="true"></div>
                                </div>
                                <button className="block w-full p-3 text-center text-white rounded-lg bg-[#FF3811]">Sign Up</button>
                            </form>
                            <div className="flex items-center pt-4 space-x-1 mt-[2-px]">
                                <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                                <p className="px-3 text-[18px] text-[#444444] font-medium">Or Sign Up with</p>
                                <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                            </div>
                            <div className="social flex mt-[20px] justify-center space-x-4 pb-[50px]">
                                <div className="facebook bg-[#F5F5F8] p-[12px] rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                                        <path d="M17.3047 27.1211V16.5346H20.8761L21.407 12.3896H17.3047V9.74948C17.3047 8.55339 17.6379 7.73448 19.3545 7.73448H21.5297V4.03902C20.4714 3.9256 19.4076 3.87084 18.3432 3.87498C15.1863 3.87498 13.0189 5.80214 13.0189 9.34002V12.3819H9.4707V16.5269H13.0267V27.1211H17.3047Z" fill="#3B5998" />
                                    </svg>
                                </div>

                                <div className="LinkedIn bg-[#F5F5F8] grid items-center justify-center w-[55px] h-[55px] rounded-full">
                                    {/* https://i.ibb.co/st9WbG0/bx-bxl-linkedin.png
                                    https://i.ibb.co/CvNCPbY/google-1.png */}
                                    <img src="https://i.ibb.co/st9WbG0/bx-bxl-linkedin.png" alt="" />
                                </div>
                                <div className="Google bg-[#F5F5F8] grid items-center justify-center w-[55px] h-[55px] rounded-full">
                                    <img src="https://i.ibb.co/CvNCPbY/google-1.png" alt="" />
                                </div>
                            </div>
                            <p className="text-[18px] text-center sm:px-6 text-[#737373]">Don't have an account? 
                                <a rel="noopener noreferrer" href="#" className="underline text-[#FF3811] font-bold"> Sign Up</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;