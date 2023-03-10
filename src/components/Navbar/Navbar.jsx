import React, { useEffect, useRef, useState } from "react";
import "./Navbar.modules.css";
import { FaUserAlt,FaDownload,FaLock,FaArrowCircleLeft} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(!isOpen);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
  }, [ref]);
  return (
    <div className="h-16 flex items-center justify-between bg-white px-20 relative">
      <div className="flex items-center">
        <img
          src={
            "https://t4.ftcdn.net/jpg/00/67/50/13/360_F_67501304_O7rJqtBrbN3NTA1RO5g34c5KiErLMlDa.jpg"
          }
          alt=""
          className="h-14 w-20 object-cover mr-4"
        />
        <h1 className="text-2xl font-bold">Matrimony</h1>
      </div>
      <div className="flex items-center">
        <div className="container">
          <a className="text-lg ml-5 font-semibold">Home</a>
          <a className="text-lg ml-5 font-semibold text-orange-500">Search</a>
          <a className="text-lg ml-5 font-semibold">Pricing Plan</a>
          <a className="text-lg ml-5 font-semibold">Contact Us</a>

          <a className="text-lg ml-5 font-semibold">En</a>
        </div>
        <img
          className="w-28 h-10 object-contain round-[50%]"
          src="data:image/jpeg;base64,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"
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(!isOpen);
          }}
        />
      </div>
      {isOpen && (
        <div className="absolute p-5 top-10 right-28 bg-white w-80" ref={ref}>
          <div className="ml-5 text-lg font-semibold text-current">
            <div className=" pt-3 flex content-center text-center " >
             <FaUserAlt className=" text-orange-500 mr-3 "/>
              Profile
            </div>
            <div className="pt-3 flex content-center text-center">
              <FaDownload  className=" text-orange-500 mr-3" />
              Download Profile
            </div>
            <div className="pt-3 flex content-center text-center">
              < FaLock  className=" text-orange-500 mr-3"/>
              Change Password
            </div>
            <div className="pt-3 flex content-center text-center">
              <FaArrowCircleLeft  className=" text-orange-500 mr-3"/>
              Logout
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
