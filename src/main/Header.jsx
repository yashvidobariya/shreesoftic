import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import { GrFormClose } from 'react-icons/gr';
import { HiMenu } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';
import headerenglish from '../Data/english.json';
import headerfrench from '../Data/french.json';
import headerdutch from '../Data/dutch.json';
import headerarbic from '../Data/arabic.json';
import headerchines from '../Data/chinese.json';
import headerspanich from '../Data/spanish.json';
import headerportuguese from '../Data/portuguese.json'
import headerrussian from '../Data/russian.json';


const Header = () => {
    const { i18n } = useTranslation();
    const [navbarActive, setNavbarActive] = useState(false);
    const [headerClass, setHeaderClass] = useState('header');
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    const headerdata = i18n.language === 'fr' ? headerfrench :
        i18n.language === 'dh' ? headerdutch :
            i18n.language === 'ar' ? headerarbic :
                i18n.language === 'ch' ? headerchines :
                    i18n.language === 'sp' ? headerspanich :
                        i18n.language === 'pr' ? headerportuguese :
                            i18n.language === 'ru' ? headerrussian :
                                headerenglish;

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    const showNavbar = () => {
        setNavbarActive(true);
    };

    const removeNavbar = () => {
        setNavbarActive(false);
    };

    const handleScroll = () => {
        if (window.scrollY >= 10) {
            setHeaderClass('header activeheader');
        } else {
            setHeaderClass('header');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isActive = (path) => {
        if (location.pathname === path) return true;
        if (path === '/services' && location.pathname.includes('/services/servicedetails')) return true;
        if (path === '/' && location.pathname.includes('/home/details')) return true;
        if (path === '/' && location.pathname.includes('/condition')) return true;
        if (path === '/' && location.pathname.includes('/privacy')) return true;
        return false;
    };


    return (
        <div className='header-container'>
            <div className={headerClass}>
                <div className='upper-header'>
                    <div className='logo'>
                        <img src='/Images/logo.png' alt='header-shreesoftic' aria-hidden='true' style={{ width: 190 }} />
                    </div>
                </div>
                <div className='main-header'>
                    <div className={`left ${navbarActive ? 'activeleft' : ''}`}>
                        <Link
                            to="/"
                            onClick={removeNavbar}
                            className={isActive('/') ? 'active' : ''}
                        >
                            {headerdata.header.home}
                        </Link>
                        <Link
                            to="/aboutus"
                            onClick={removeNavbar}
                            className={isActive('/aboutus') ? 'active' : ''}
                        >
                            {headerdata.header.about_us}
                        </Link>
                        <Link
                            to="/services"
                            onClick={removeNavbar}
                            className={isActive('/services') ? 'active' : ''}
                        >
                            {headerdata.header.services}
                        </Link>
                        <Link
                            to="/career"
                            onClick={removeNavbar}
                            className={isActive('/career') ? 'active' : ''}
                        >
                            {headerdata.header.career}
                        </Link>
                        <Link
                            to="/contactus"
                            onClick={removeNavbar}
                            className={isActive('/contactus') ? 'active' : ''}
                        >
                            {headerdata.header.contact_us}
                        </Link>
                    </div>
                    <div className={`closenavbar ${navbarActive ? 'visible' : 'hidden'}`} onClick={removeNavbar}>
                        <GrFormClose className='icon' />
                    </div>
                    <div className={`togglenavbar ${navbarActive ? 'hidden' : 'visible'}`} onClick={showNavbar}>
                        <HiMenu className='icon' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
