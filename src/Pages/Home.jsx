
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import Workflow from '../home-component/Workflow';
import Team from '../home-component/Team';
import Homecontactus from '../home-component/Homecontactus';
import Homeportfolio from '../home-component/Homeportfolio';
import Homeservice from '../home-component/Homeservice';
import { Wave } from "react-animated-text";
import { useTranslation } from 'react-i18next';
import headerenglish from '../Data/english.json';
import headerfrench from '../Data/french.json';
import headerdutch from '../Data/dutch.json';
import headerarbic from '../Data/arabic.json';
import headerchines from '../Data/chinese.json';
import headerspanich from '../Data/spanish.json';
import headerportuguese from '../Data/portuguese.json'
import headerrussian from '../Data/russian.json';

const Home = () => {
    const { t, i18n } = useTranslation();
    const [currentDataIndex, setCurrentDataIndex] = useState(0);


    const headerdata = i18n.language === 'fr' ? headerfrench :
        i18n.language === 'dh' ? headerdutch :
            i18n.language === 'ar' ? headerarbic :
                i18n.language === 'ch' ? headerchines :
                    i18n.language === 'sp' ? headerspanich :
                        i18n.language === 'pr' ? headerportuguese :
                            i18n.language === 'ru' ? headerrussian :
                                headerenglish;

    const data = [
        headerdata.home.data.forbusiness,
        headerdata.home.data.tosellonline,
        headerdata.home.data.foryourideas
    ];
    let timer = null;

    const changeDataIndex = (currentIndex) => {
        timer = setTimeout(() => {
            const newIndex = currentIndex + 1 === data.length ? 0 : currentIndex + 1;
            setCurrentDataIndex(newIndex);
            changeDataIndex(newIndex);
        }, 1500);
    };

    useEffect(() => {
        changeDataIndex(0);
        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <>
            <div className='main-home'>
                <div className="home-section">
                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="home-info-first">
                        <div className="home-title">
                            <h1>Shreesoftic
                                <p><Wave text={data[currentDataIndex]} effect="fadeOut" /></p></h1>
                        </div>
                        <div className='home-description'>
                            {headerdata.home.description}
                        </div>
                        <div className="home-button">
                            <Link to='/contactus'>
                                <button>  {headerdata.home.cta_button}</button>
                            </Link>
                        </div>
                    </motion.div>

                    <div className="home-info">
                        <div className="home-info-bg">
                            <svg id="freepik_stories-tech-company" className="animated" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190 330">
                                <path fill="#A145B1">
                                    <animate attributeName='d'
                                        dur="10s" repeatCount="indefinite"
                                        values="M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45
        c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z;
        
        M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4C145.2,62,145,49.9,173,43.4 c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6 c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8
        C48.9,198.6,57.8,191,51,171.3z;

        M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45
        c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z"></animate>
                                </path>
                            </svg>
                        </div>

                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="home-info-img">
                            <img src='/Images/tech-company.svg' alt='tech-comapny' aria-hidden='true' />
                        </motion.div>
                    </div>
                </div>
            </div>

            <Workflow />
            <Homeservice />
            <Team />
            <Homeportfolio />
            <Homecontactus />
        </>
    );
}

export default Home;