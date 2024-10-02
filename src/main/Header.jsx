import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GrFormClose } from 'react-icons/gr';
import { HiMenu } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

const Header = () => {
    const { t, i18n } = useTranslation();
    const [navbarActive, setNavbarActive] = useState(false);
    const [headerClass, setHeaderClass] = useState('header');
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    useEffect(() => {
        axios.get('https://ipapi.co/json/')
            .then(response => {
                const countryCode = response.data.country_code;
                setDefaultLanguageByCountry(countryCode);
            })
            .catch(error => {
                console.error('Error fetching country info:', error);
            });
    }, []);

    const setDefaultLanguageByCountry = (countryCode) => {
        const countryLangMap = {
            US: 'en',
            FR: 'fr',
            NL: 'dh', // Netherlands - Dutch
            AE: 'ar', // UAE - Arabic
            CN: 'ch', // China - Mandarin Chinese
            ES: 'sp', // Spain - Spanish
            BR: 'pr', // Brazil - Portuguese
            RU: 'rs', // Russia - Russian
        };

        const defaultLang = countryLangMap[countryCode] || 'en';
        i18n.changeLanguage(defaultLang);
    };

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

    const changeLanguage = (e) => {
        const selectedLanguage = e.target.value;
        i18n.changeLanguage(selectedLanguage.toLowerCase());
    };
    return (
        <div className='header-container'>
            <div className={headerClass}>
                <div className='upper-header'>
                    <div className='logo'>
                        <img src='/Images/logo.png' alt='header-shreesoftic' aria-hidden='true' style={{ width: 190 }} />
                    </div>
                    <div className='langauge-header'>
                        <select className='language-dropdown' onChange={changeLanguage} aria-label='Select Option'>
                            <option value='en'>English</option>
                            <option value='fr'>French</option>
                            <option value='dh'>Dutch</option>
                            <option value='ar'>Arabic</option>
                            <option value='ch'>Mandarin Chinese</option>
                            <option value='sp'>Spanish</option>
                            <option value='pr'>Portuguese</option>
                            <option value='rs'>Russian</option>
                        </select>
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
