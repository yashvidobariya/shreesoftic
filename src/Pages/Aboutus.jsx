import React from 'react'
import Team from '../home-component/Team'
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import aboutenglish from '../Data/english.json';
import aboutfrench from '../Data/french.json';
import aboutdutch from '../Data/dutch.json';
import aboutarbic from '../Data/arabic.json';
import aboutchines from '../Data/chinese.json';
import aboutspanich from '../Data/spanish.json';
import aboutportuguese from '../Data/portuguese.json'
import aboutrussian from '../Data/russian.json';



const Aboutus = () => {
    const { t, i18n } = useTranslation();

    const aboutdata = i18n.language === 'fr'
        ? aboutfrench :

        i18n.language === 'dh'
            ? aboutdutch :

            i18n.language === 'ar'
                ? aboutarbic

                : i18n.language === 'ch'
                    ? aboutchines

                    : i18n.language === 'sp'
                        ? aboutspanich

                        : i18n.language === 'pr'
                            ? aboutportuguese

                            : i18n.language === 'ru'
                                ? aboutrussian

                                : aboutenglish;

    return (
        <div>
            <div className="about-section">
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="contact-header-title">
                    <h1>{aboutdata.aboutus.header}</h1>
                    <p>{aboutdata.aboutus.subheader}</p>
                </motion.div>
            </div>
            <Team />
        </div>
    )
}

export default Aboutus