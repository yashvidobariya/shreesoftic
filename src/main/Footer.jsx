import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineMail, MdOutlinePhoneIphone } from "react-icons/md";
import { FaRegMap } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import { IoLogoInstagram } from "react-icons/io";
import { useTranslation } from 'react-i18next';
import footeraenglish from '../Data/english.json';
import footerfrench from '../Data/french.json';
import footerdutch from '../Data/dutch.json';
import footerarbic from '../Data/arabic.json';
import footerchines from '../Data/chinese.json';
import footerspanich from '../Data/spanish.json';
import footerportuguese from '../Data/portuguese.json'
import footerrussian from '../Data/russian.json';
import axios from 'axios';

function Footer() {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

    const teamdata = i18n.language === 'fr' ? footerfrench :
        i18n.language === 'dh' ? footerdutch :
            i18n.language === 'ar' ? footerarbic :
                i18n.language === 'ch' ? footerchines :
                    i18n.language === 'sp' ? footerspanich :
                        i18n.language === 'pr' ? footerportuguese :
                            i18n.language === 'ru' ? footerrussian :
                                footeraenglish;

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
            setSelectedLanguage(lang);
        } catch (error) {
            console.error('Error fetching IP info:', error);
            i18n.changeLanguage('en');
            setSelectedLanguage('en');
        }
    };

    useEffect(() => {
        setDefaultLanguageBasedOnIP();
    }, []);

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    const changeLanguage = (e) => {
        const selectedLanguage = e.target.value;
        i18n.changeLanguage(selectedLanguage.toLowerCase());
        setSelectedLanguage(selectedLanguage);
    };

    return (
        <div className='footer'>
            <div className="footer-div">
                <div className="footer-main">
                    <div className="footer-content">
                        <div className='logo'>
                            <img src={teamdata.footer.logo.src} alt={teamdata.footer.logo.alt} style={{ width: teamdata.footer.logo.width }} />
                        </div>
                        <h3>{teamdata.footer.aboutUs.header}</h3>
                        <p>{teamdata.footer.aboutUs.description}</p>
                        <div className="footer-icons">
                            <div className="footer-social">
                                <div className="footer-col">
                                    <a href={teamdata.footer.socialMedia.linkedin}><BiLogoLinkedin /></a>
                                </div>
                                <div className="footer-col">
                                    <a href={teamdata.footer.socialMedia.instagram}><IoLogoInstagram /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-content" style={{ textAlign: 'center' }}>
                        <h3>Quick Links</h3>
                        <div className="footer-link">
                            <p>
                                <Link to={teamdata.footer.quickLinks.home} className={activeLink === teamdata.footer.quickLinks.home ? 'active' : ''}>
                                    {teamdata.footer.link.home}
                                </Link>
                            </p>
                            <p>
                                <Link to={teamdata.footer.quickLinks.aboutUs} className={activeLink === teamdata.footer.quickLinks.aboutUs ? 'active' : ''}>
                                    {teamdata.footer.link.about}
                                </Link>
                            </p>
                            <p>
                                <Link to={teamdata.footer.quickLinks.services} className={activeLink === teamdata.footer.quickLinks.services ? 'active' : ''}>
                                    {teamdata.footer.link.service}
                                </Link>
                            </p>
                            <p>
                                <Link to={teamdata.footer.quickLinks.career} className={activeLink === teamdata.footer.quickLinks.career ? 'active' : ''}>
                                    {teamdata.footer.link.career}
                                </Link>
                            </p>
                            <p>
                                <Link to={teamdata.footer.quickLinks.contactUs} className={activeLink === teamdata.footer.quickLinks.contactUs ? 'active' : ''}>
                                    {teamdata.footer.link.contact}
                                </Link>
                            </p>
                        </div>
                    </div>

                    <div className="footer-content">
                        <h3>Contact Us</h3>
                        <div className="footer-info">
                            <div className="footer-col">
                                <MdOutlineMail />
                            </div>
                            <div className="footer-email-content">
                                <a href={`mailto:${teamdata.footer.contactUs.email}`} aria-hidden='contact email'>{teamdata.footer.contactUs.email}</a>
                            </div>
                        </div>
                        <div className="footer-info">
                            <div className="footer-col">
                                <MdOutlinePhoneIphone />
                            </div>
                            <div className="footer-email-content">
                                <a href={`tel:${teamdata.footer.contactUs.phoneNumber}`} aria-hidden='tel phonenumber'>{teamdata.footer.contactUs.phoneNumber}</a>
                            </div>
                        </div>
                        <div className="footer-info">
                            <div className="footer-col">
                                <FaRegMap />
                            </div>
                            <div className="footer-email-content">
                                <a href='#' aria-hidden='true'>{teamdata.footer.contactUs.address}</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-privacy">
                    <div className="footer-flex">
                        <div className="footer-copyrigth">
                            <p>&#169; 2024 All Rights Reserved - Shreesoftic.com</p>
                        </div>
                        <div className="footer-term">
                            <div className="footer-privacy-link">
                                <Link className={activeLink === teamdata.footer.privacyPolicy.url ? 'active' : ''} to={teamdata.footer.privacyPolicy.url}>{teamdata.footer.privacyPolicy.text}</Link>
                            </div>
                            <div className="footer-term">
                                <p>|</p>
                            </div>
                            <div className="footer-term">
                                <Link className={activeLink === teamdata.footer.termsAndConditions.url ? 'active' : ''} to={teamdata.footer.termsAndConditions.url}>{teamdata.footer.termsAndConditions.text}</Link>
                            </div>
                        </div>
                        <div className='langauge-header'>
                            <select className='language-dropdown' value={selectedLanguage} onChange={changeLanguage} aria-label='Select Option'>
                                <option value='en'>English</option>
                                <option value='fr'>French</option>
                                <option value='dh'>Dutch</option>
                                <option value='ar'>Arabic</option>
                                <option value='ch'>Mandarin Chinese</option>
                                <option value='sp'>Spanish</option>
                                <option value='pr'>Portuguese</option>
                                <option value='ru'>Russian</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
