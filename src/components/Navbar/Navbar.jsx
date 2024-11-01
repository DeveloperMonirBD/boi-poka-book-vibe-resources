import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const links = (
        <>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/listBooks">Listed Books</NavLink>
            </li>
            <li>
                <NavLink to="/PageToRead">Pages to Read</NavLink>
            </li>
        </>
    );


    return (
        <div className="bg-base-100">
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow ">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl font-bold">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-4 space-x-6 font-semibold text-base text-gray-700">{links}</ul>
                </div>
                <div className="navbar-end space-x-2">
                    <NavLink className="btn bg-[#23BE0A] text-white hover:text-[#23BE0A]">Sign In</NavLink>

                    <NavLink className="btn bg-[#59C6D2] text-white hover:text-[#59C6D2]">Sign Up</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
