import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../constants";

import logo from "../../static/logo.jpg";
import "./navbar.css";

const NavBar = () => {
  const [ishOpen, setIshOpen] = useState(false);

  const { t, i18n } = useTranslation();
  const [languageCode, setLanguageCode] = useState("en");
  console.log(i18n.language);

  const handleLanguageChange = (event) => {
    const newLanguageCode = event.target.value;
    i18n.changeLanguage(newLanguageCode);
  };

  return (
    <div className="container  mx-auto ltr-grid">
      <nav className="flex gap-3 justify-end flex-wrap p-3 ">
        <div className="flex  lg:hidden  gap-3  ">
          <select className="bg-gray-800 text-white"  value={i18n.language} onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="fa">Farsi</option>
          </select>
          <button
            onClick={() => setIshOpen(!ishOpen)}
            type="button"
            className="bg-gray-800 inline-flex   p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {!ishOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
        
        {/* linka paine */}
        <div
          className="flex-grow lg:flex lg:items-center lg:w-auto md:hidden sm:hidden 
                    items-center justify-between hidden w-full  md:w-auto md:order-1
"
        >
          <div className="flex justify-end text-sm lg:flex-grow">
            <Link
              to="#"
              // /news
              className="ab block mt-4 lg:inline-block lg:mt-0 text-gray-400  mr-4"
            >
              {t("News")}{" "}
            </Link>
            <Link
              to="/Service"
              className="ab block mt-4 lg:inline-block lg:mt-0 text-gray-800  mr-4"
            >
              {t("Services")}{" "}
            </Link>
            <Link
              to="#"
              // NewsAndBlogs
              className="ab block mt-4 lg:inline-block lg:mt-0 text-gray-400  mr-4"
            >
              {t("blog")}{" "}
            </Link>

            <Link
              to="/About"
              className="ab block mt-4 lg:inline-block lg:mt-0 text-gray-800  mr-4"
            >
              {t("about")}{" "}
            </Link>
            <Link
              to="/Contactus"
              className="ab block mt-4 lg:inline-block lg:mt-0 text-gray-800  mr-4"
            >
              {t("Contactus")}
            </Link>
            <Link
              to="/"
              className="ab block mt-4 lg:inline-block lg:mt-0 text-gray-800 "
            >
              {t("Home")}{" "}
            </Link>
          </div>
        </div>
        {/* paini logo mikhore */}
        <div
          // className="flex items-center flex-shrink-0  mr-6"
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        >
          {/* <span className="font-semibold text-xl tracking-tight">Avesta </span> */}
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 "
          >
            <img src={logo} alt="logo" className="w-10" />
            <div className="text-xs  ">Avesta</div>
          </Link>
        </div>
        {/*  */}
        {/* ? */}
      </nav>

      {ishOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div
            className=" px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col 
           items-center bg-gray-800 "
          >
            <Link
              to="/"
              className="ab block mt-4 lg:inline-block lg:mt-0 mr-4 text-white"
            >
              خانه{" "}
            </Link>
            <Link
              to="#"
              // News
              className="ab block mt-4 lg:inline-block lg:mt-0 mr-4 text-white"
            >
              اخبار{" "}
            </Link>
            <Link
              to="/Service"
              className="ab block mt-4 lg:inline-block lg:mt-0 mr-4 text-white"
            >
              خدمات{" "}
            </Link>
            <Link
              to="#"
              // NewsAndBlogs
              className="ab block mt-4 lg:inline-block lg:mt-0 mr-4 text-white"
            >
              بلاگ{" "}
            </Link>
            <Link
              to="/user"
              className="ab block mt-4 lg:inline-block lg:mt-0 text-white"
            >
              کاربر{" "}
            </Link>
            <Link
              to="/About"
              className="ab block mt-4 lg:inline-block lg:mt-0  mr-4 text-white"
            >
              درباره ما
            </Link>
            <Link
              to="/Contactus"
              className="ab block mt-4 lg:inline-block lg:mt-0 text-white "
            >
              ارتباط با ما
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
// ???????????????????????????????????????
