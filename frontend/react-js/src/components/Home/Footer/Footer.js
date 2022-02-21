import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import './style.css'

const Footer = () => {
    return (
        <footer className="footer">           
            <div className="footer__container bd-grid">
                <h1 className="footer__title">GGTerlago</h1>
                <div className="footer__social">
                    <a href="https://it-it.facebook.com/GGTerlago" className="footer__link"><FaFacebook/></a>
                    <a href="https://www.instagram.com/gruppo_giovani_terlago/" className="footer__link"><FaInstagram/></a>
                </div>
                <p className="footer__copy">Tutti diritti riservati a &copy;GGTerlago</p>
            </div>
        </footer>
    )
}

export default Footer;