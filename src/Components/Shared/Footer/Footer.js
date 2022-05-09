import React from 'react';
import footerLogo from '../../../logo-2.png'
import copyrightIcon from '../../../copyright.png'
const Footer = () => {
    return (
      <footer className="flex justify-center bg-stone-900 fixed bottom-0 right-0 left-0 h-14 font-semibold">
        <div className="container flex justify-between items-center  bg-stone-900 text-white px-4 py-2">
                <img className='w-60' src={footerLogo} alt="footer-logo" />
                <p>CopyRight<img className='w-2 inline-flex' src={copyrightIcon} alt='copyright logo'/>-2022-efruits.wholsale.com</p>
        </div>
      </footer>
    );
};

export default Footer;