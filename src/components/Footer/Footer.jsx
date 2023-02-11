import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="h-16 bg-orange-500 flex flex-wrap justify-around items-center mt-5">
      <div>
        <p className="text-white ">
          CopyRight @ Trichy Vayalur Road Reddy Trust All Rights reserved. Theme
          Anews by Themeuniver
        </p>
      </div>
      <div>
        <FontAwesomeIcon icon={faFacebook} className="text-white mr-4 text-lg" />
        <FontAwesomeIcon icon={faTwitter} className="text-white mr-4 text-lg" />
        <FontAwesomeIcon icon={faInstagram} className="text-white text-lg" />
      </div>
    </div>
  );
};

export default Footer;
