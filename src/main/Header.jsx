import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import { GrFormClose } from 'react-icons/gr';
import { HiMenu } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t, i18n } = useTranslation();
    const [navbarActive, setNavbarActive] = useState(false);
    const [headerClass, setHeaderClass] = useState('header');
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

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

    const setDefaultLanguageBasedOnIP = async () => {
        try {
            const apiKey = '5cb9aba45868448db71086ee93d18d1f';
            const response = await axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}`);
            const countryCode = response.data.country_code2.toLowerCase();
            console.log("countrycode", countryCode);

            const countryLanguage = {
                us: 'en',
                fr: 'fr',
                nl: 'dh',
                ar: 'ar',
                cn: 'ch',
                es: 'sp',
                pt: 'pr',
                ru: 'rs',
            };

            const lang = countryLanguage[countryCode] || 'en';
            i18n.changeLanguage(lang);
        } catch (error) {
            console.error('Error fetching IP info:', error);
            i18n.changeLanguage('en');
        }
    };

    useEffect(() => {
        setDefaultLanguageBasedOnIP();
    }, []);


    useEffect(() => {
        setDefaultLanguageBasedOnIP();
    }, []);

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
                            {t('header.home')}
                        </Link>
                        <Link
                            to="/aboutus"
                            onClick={removeNavbar}
                            className={isActive('/aboutus') ? 'active' : ''}
                        >
                            {t('header.about_us')}
                        </Link>
                        <Link
                            to="/services"
                            onClick={removeNavbar}
                            className={isActive('/services') ? 'active' : ''}
                        >
                            {t('header.services')}
                        </Link>
                        <Link
                            to="/career"
                            onClick={removeNavbar}
                            className={isActive('/career') ? 'active' : ''}
                        >
                            {t('header.career')}
                        </Link>
                        <Link
                            to="/contactus"
                            onClick={removeNavbar}
                            className={isActive('/contactus') ? 'active' : ''}
                        >
                            {t('header.contact_us')}
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
