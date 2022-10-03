import { useState } from "react";
import { NavLink  } from "react-router-dom";


export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false); 
  return (
    <div className="main-container">
      <div className="wrapper ">
        <div className=" navbar-container  ">
          <nav className="w-full bg-gray-500 shadow py-4">
            <div className="px-3 ">
              <div className="flex w-full justify-between items-center gap-5  md:px-4 ">
                <div className="">
                  <a href="#">
                  <h2 className="text-2xl font-bold text-white">Global News</h2>
                  </a>
                </div>
                <section className="MOBILE-MENU md:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen(!isNavOpen)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>
          </section>
                <div className=" DESKTOP-MENU hidden space-x-8 lg:flex flex-1 justify-self-center  mt-8 md:block md:pb-0 md:mt-0 ">
                  <ul className="items-center justify-center md:flex flex-col md:flex-row gap-7">
                    <li className="text-white hover:text-indigo-200">
                      <NavLink className="navbar-item" to="/">
                        Home
                      </NavLink>
                    </li>
                    <li className="text-white hover:text-indigo-200">
                      <NavLink className="navbar-item" to="/news">
                  News
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {isNavOpen &&
            <div className="MENU-LINK-MOBILE-OPEN">
                  <ul className="flex  md:hidden flex-col mt-2 ml-5 w-full  gap-1 justify-between">
                    <li className="text-white hover:text-indigo-200">
                      <NavLink className="navbar-item" to="/">
                        Home
                      </NavLink>
                    </li> 
                    <li className="text-white hover:text-indigo-200">
                      <NavLink className="navbar-item" to="/news">
                      News
                      </NavLink>
                    </li>
                  </ul>
                </div>
}
     
          </nav>
        </div>
      </div>
 
    </div>
  );
}


