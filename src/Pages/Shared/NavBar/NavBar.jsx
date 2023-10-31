import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
    const NavLinks = <>
        <NavLink className="navHoverClass" to='/'>Home</NavLink>
        <NavLink className="navHoverClass" to='/about'>About</NavLink>
        <NavLink className="navHoverClass" to='/services'>Services</NavLink>
        <NavLink className="navHoverClass" to='/blog'>Blog</NavLink>
        <NavLink className="navHoverClass" to='/contact'>Contact</NavLink>
    </>
    const [isChecked, setIsChecked] = useState(false);

    const toggleIcons = () => {
        setIsChecked(!isChecked);
    };

    
    return (
        <div>
            <div className="navbar bg-base-100 max-w-[1140px] mx-auto justify-evenly flex-col sm:flex-row my-[30px]">
                <div className="navbar-start flex justify-center w-full sm:w-1/3 sm:justify-start">
                    <Link>
                        <img src="https://i.ibb.co/tQDDLD1/logo.png" alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="nav-active menu menu-horizontal px-1 text-[18px] font-semibold text-[#444444] space-x-10">
                        {NavLinks}
                    </ul>
                </div>
                <div className="navbar-end flex justify-center sm:justify-end">
                    {/* shopping cart icon svg */}
                    <div className="flex gap-5 mr-8">
                        <div>
                            <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" >
                                <path  d="M15.75 10.5V6C15.75 5.00544 15.3549 4.05161 14.6517 3.34835C13.9484 2.64509 12.9946 2.25 12 2.25C11.0054 2.25 10.0516 2.64509 9.34835 3.34835C8.64509 4.05161 8.25 5.00544 8.25 6V10.5M19.606 8.507L20.869 20.507C20.939 21.172 20.419 21.75 19.75 21.75H4.25C4.09221 21.7502 3.93614 21.7171 3.79195 21.6531C3.64775 21.589 3.51865 21.4953 3.41302 21.3781C3.3074 21.2608 3.22761 21.1227 3.17885 20.9726C3.13009 20.8226 3.11345 20.6639 3.13 20.507L4.394 8.507C4.42316 8.23056 4.55363 7.9747 4.76025 7.78876C4.96688 7.60281 5.23503 7.49995 5.513 7.5H18.487C19.063 7.5 19.546 7.935 19.606 8.507ZM8.625 10.5C8.625 10.5995 8.58549 10.6948 8.51517 10.7652C8.44484 10.8355 8.34946 10.875 8.25 10.875C8.15054 10.875 8.05516 10.8355 7.98484 10.7652C7.91451 10.6948 7.875 10.5995 7.875 10.5C7.875 10.4005 7.91451 10.3052 7.98484 10.2348C8.05516 10.1645 8.15054 10.125 8.25 10.125C8.34946 10.125 8.44484 10.1645 8.51517 10.2348C8.58549 10.3052 8.625 10.4005 8.625 10.5V10.5ZM16.125 10.5C16.125 10.5995 16.0855 10.6948 16.0152 10.7652C15.9448 10.8355 15.8495 10.875 15.75 10.875C15.6505 10.875 15.5552 10.8355 15.4848 10.7652C15.4145 10.6948 15.375 10.5995 15.375 10.5C15.375 10.4005 15.4145 10.3052 15.4848 10.2348C15.5552 10.1645 15.6505 10.125 15.75 10.125C15.8495 10.125 15.9448 10.1645 16.0152 10.2348C16.0855 10.3052 16.125 10.4005 16.125 10.5V10.5Z" stroke="#444444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        {/* Search icon svg */}
                        <div>
                            <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M21 21L15.803 15.803M15.803 15.803C17.2096 14.3964 17.9998 12.4887 17.9998 10.4995C17.9998 8.51029 17.2096 6.60256 15.803 5.19599C14.3964 3.78941 12.4887 2.99921 10.4995 2.99921C8.5103 2.99921 6.60258 3.78941 5.196 5.19599C3.78942 6.60256 2.99922 8.51029 2.99922 10.4995C2.99922 12.4887 3.78942 14.3964 5.196 15.803C6.60258 17.2096 8.5103 17.9998 10.4995 17.9998C12.4887 17.9998 14.3964 17.2096 15.803 15.803V15.803Z" stroke="#444444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <a className="btn bg-transparent border-[#FF3811] text-[#FF3811] hover:border-[#FF3811]">Appointment</a>
                    <details className="dropdown dropdown-bottom dropdown-end lg:hidden">
                        <summary className="m-1 btn btn-circle swap swap-rotate" onClick={toggleIcons}>

                            {/* this hidden checkbox controls the state */}
                            <input type="checkbox" />

                            {/* hamburger icon */}
                            <svg className={`swap-off fill-current ${isChecked ? 'swap-on' : 'swap-off'}`}
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 512 512"
                            >
                                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                            </svg>

                            {/* close icon */}
                            <svg className={` fill-current ${isChecked ? 'swap-off' : 'swap-on'}`}
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 512 512"
                            >
                                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

                        </summary>
                        <ul tabIndex={0} className="nav-active menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavLinks}
                        </ul>
                    </details>
                </div>
            </div>
        </div>
    );
};

export default NavBar;