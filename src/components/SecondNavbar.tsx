import React, { useState } from "react";
import { Link } from "react-router-dom";

interface ListItemProps {
  children: React.ReactNode;
  NavLink: string;
}

const ListItem: React.FC<ListItemProps> = ({ children, NavLink }) => {
  return (
    <li>
      <a
        href={NavLink}
        className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex"
      >
        {children}
      </a>
    </li>
  );
};

const SecondNavbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={`flex max-w-full items-center bg-slate-500 dark:bg-dark`}>
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <a href="/#" className="block w-full py-5">
              <img
                src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-primary.svg"
                alt="logo"
                className="dark:hidden"
              />
              <img
                src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
                alt="logo"
                className="hidden dark:block"
              />
            </a>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={` ${
                  open && "navbarTogglerActive"
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
              </button>
              <nav
                // :className="!navbarOpen && 'hidden' "
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${
                  !open && "hidden"
                } `}
              >
                <ul className="block lg:flex">
                  <Link className="px-5 font-bold text-white" to='/'>Home</Link>
                  <Link className="px-5 font-bold text-white" to='/about'>About</Link>
                  <Link className="px-5 font-bold text-white" to='/contact'>Contact</Link>
                  <Link className="px-5 font-bold text-white" to='/blog'>Blog</Link>
                </ul>
              </nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <button
                className="px-7 rounded-md py-3 text-white font-medium hover:bg-blue-600 text-dark hover:text-white "
              >
                Sign in
              </button>

              <button
                className="rounded-md bg-primary px-7 py-3 text-white font-medium hover:bg-blue-600 hover:text-white"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SecondNavbar;
