import React from "react";
import footerLogo from "../../assets/logo-2.png";
import copyrightIcon from "./copyright-solid.svg";

function Footer() {
  return (
    <footer className="mt-auto bg-stone-900 text-white p-2">
      <div className="container mx-auto flex flex-col sm:flex-row sm:justify-between items-center py-2 ">
        <img className="w-auto h-full p-1" src={footerLogo} alt="footer-logo" />
        <p>
          Copy Right
          <img className="w-4 inline-flex mx-2 pb-1" src={copyrightIcon} alt="copyright logo" />
          2022-efruits.wholsale.com
        </p>
      </div>
    </footer>
  );
}

export default Footer;
