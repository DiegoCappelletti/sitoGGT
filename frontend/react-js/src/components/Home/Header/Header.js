import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { fetchText } from '../../../api/index.js';
import { FaBars, FaLightbulb, FaTimes } from 'react-icons/fa';
import './style.css'

const Header = ({changeDarkmode}) => {

    useEffect(() => {
        fetch();
    },[])

    const [text, setText] = useState([]);
    const [sidebar, setSidebar] = useState(false);

    const fetch = async () => {
        const data = await fetchText();
        const t = data.data;
        setText(t);
    }

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <header className="l-header">
            <nav className="nav ">
                <div className="nav__toggle" id="nav-toggle">
                    <FaBars onClick={showSidebar} />
                </div>

                <div>
                    <a href="/" className="nav__logo"><span>GG</span>Terlago</a>
                </div>

                <div className={sidebar ? 'nav__menu show' : 'nav__menu'} id="nav-menu">
                    <div className="nav__close" id="nav-close">
                        <FaTimes onClick={showSidebar} />
                    </div>

                    <ul className="nav__list">
                        <li className="nav__item"><a href="#home" className="nav__link active" onClick={showSidebar}>Home</a></li>
                        {text.map((text, i) => (
                            <li key={i} className="nav__item"><a href={'#'+text.id} className="nav__link" onClick={showSidebar}>{text.header}</a></li>
                        ))}
                        <li className="nav__item"><a href="#eventi" className="nav__link" onClick={showSidebar}>Eventi futuri</a></li>
                    </ul>

                    <div className="nav__action">
                        <Link to="/authenticate?login">Accedi</Link>
                        <div>
                            <FaLightbulb onClick={changeDarkmode} />
                        </div>
                        <Link to="/authenticate?register">Registrati</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;