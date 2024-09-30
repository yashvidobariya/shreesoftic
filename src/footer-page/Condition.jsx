import React from 'react'
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import conditionenglish from '../Data/english.json';
import conditionfrench from '../Data/french.json';
import conditiondutch from '../Data/dutch.json';
import conditionarbic from '../Data/arabic.json';
import conditionchines from '../Data/chinese.json';
import conditionspanich from '../Data/spanish.json';
import conditionportuguese from '../Data/portuguese.json'
import conditionrussian from '../Data/russian.json';


const Condition = () => {
    const { t, i18n } = useTranslation();

    const conditiondata =
        i18n.language === 'fr'
            ? conditionfrench

            : i18n.language === 'dh'
                ? conditiondutch

                : i18n.language === 'ar'
                    ? conditionarbic

                    : i18n.language === 'ch'
                        ? conditionchines

                        : i18n.language === 'sp'
                            ? conditionspanich

                            : i18n.language === 'pr'
                                ? conditionportuguese

                                : i18n.language === 'rs'
                                    ? conditionrussian

                                    : conditionenglish;

    console.log("lanagauge", conditiondata);

    const conditionstep = conditiondata.condition.steps;

    return (
        <>
            <div className='privacy'>
                <div className="privacy-div">
                    <h1>{conditiondata.condition.title}</h1>
                    <p>{conditiondata.condition.description}
                    </p>
                </div>
            </div>

            <div className="privacy-section">
                <div className="privacy-flex">
                    <div className="privacy-details">

                        {conditionstep.map((section, index) => (
                            <div key={index}>
                                <h2 className='privacy-term'>{section.title}</h2>
                                <p className='privacy-term'>{section.description}</p>
                                <ul className='privacy-infomation-ul'>
                                    {section.terms.map((term, index) => (
                                        <li key={index}>{term.description}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="privacy-description">
                        <img src='/Images/condition.png' alt="team & condition" aria-hidden='true' />
                    </motion.div>
                </div>

            </div >
        </>
    )
}

export default Condition