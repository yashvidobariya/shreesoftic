import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../Data/slider.json';
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import homeportfolioenglish from '../Data/english.json';
import homeportfoliofrench from '../Data/french.json';
import homeportfoliodutch from '../Data/dutch.json';
import homeportfolioaarbic from '../Data/arabic.json';
import homeportfoliochines from '../Data/chinese.json';
import homeportfoliospanich from '../Data/spanish.json';
import homeportfolioportuguese from '../Data/portuguese.json'
import homeportfoliorussian from '../Data/russian.json';

const Singleportfolio = () => {
    const { id } = useParams();
    const { t, i18n } = useTranslation();

    const portfoliodata = i18n.language === 'fr' ? homeportfoliofrench :
        i18n.language === 'dh' ? homeportfoliodutch :
            i18n.language === 'ar' ? homeportfolioaarbic :
                i18n.language === 'ch' ? homeportfoliochines :
                    i18n.language === 'sp' ? homeportfoliospanich :
                        i18n.language === 'pr' ? homeportfolioportuguese :
                            i18n.language === 'ru' ? homeportfoliorussian :
                                homeportfolioenglish;

    const homeporfoliosteps = portfoliodata.portfolio.steps;
    const portfolioitem = homeporfoliosteps.find(item => item.id === parseInt(id));
    console.log(portfolioitem);

    if (!portfolioitem) {
        return <div>Portfolio item not found</div>;
    }

    return (
        <>
            <div className="potfolio-detail-section">
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="contact-header-title">
                    <h1>{portfolioitem.title}</h1>
                    <p>{portfolioitem.description}</p>
                </motion.div>
            </div>

            <div className="service-flex">
                <div className="portfolio-label">
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="service-uper-section"
                    >
                        <img src={portfolioitem.image} alt="Service portfolio" aria-hidden='true' />
                    </motion.div>
                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="portfolio-uper-section"
                    >


                        <h2>{portfolioitem.title}</h2>
                        <div className="portfolio-details-list">
                            <ul>
                                {portfolioitem.description && <li><p>{portfolioitem.description}</p></li>}
                                {portfolioitem.technology && <li><p>{portfolioitem.technology}</p></li>}
                                {portfolioitem.info && <li><p>{portfolioitem.info}</p></li>}
                                {portfolioitem.type && <li><p>{portfolioitem.type}</p></li>}
                            </ul>
                        </div>


                    </motion.div>
                </div>

            </div>

        </>
    );
}

export default Singleportfolio;
