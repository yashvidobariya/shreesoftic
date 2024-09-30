import React from 'react'
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import privacyfrench from '../Data/french.json';
import privacydutch from '../Data/dutch.json';
import privacyarbic from '../Data/arabic.json';
import privacychines from '../Data/chinese.json';
import privacyspanich from '../Data/spanish.json';
import privacyportuguese from '../Data/portuguese.json'
import privacyrussian from '../Data/russian.json';
import privacyenglish from '../Data/english.json';


const Privacy = () => {
    const { t, i18n } = useTranslation();

    const privacydata =
        i18n.language === 'fr'
            ? privacyfrench
            : i18n.language === 'dh'
                ? privacydutch
                : i18n.language === 'ar'
                    ? privacyarbic

                    : i18n.language === 'ch'
                        ? privacychines

                        : i18n.language === 'sp'
                            ? privacyspanich

                            : i18n.language === 'pr'
                                ? privacyportuguese

                                : i18n.language === 'rs'
                                    ? privacyrussian

                                    : privacyenglish;

    console.log("lanagauge", privacydata);

    const servicesteps = privacydata.privacy.steps;
    const servicesteps1 = privacydata.privacy.steps1;
    return (
        <>
            <div className='privacy'>
                <div className="privacy-div">
                    <h1>{privacydata.privacy.title}</h1>
                    <p>{privacydata.privacy.title}</p>
                </div>
            </div>

            <div className="privacy-section">
                <div className="privacy-flex">
                    <div className="privacy-details">
                        <p> </p>

                        <p>{privacydata.privacy.subtitle}
                            <a href="mailto: contact@shreesoftic.com" aria-hidden='contact email'>{privacydata.privacy.email}</a></p>

                        <p>{privacydata.privacy.link}<a href="www.shreesoftic.com" aria-hidden='visit website link'>{privacydata.privacy.shresoftic}</a> {privacydata.privacy.shresoftic_after}</p>

                        <p>{privacydata.privacy.p1}</p>


                        <p>{privacydata.privacy.p2}</p>

                        <p>{privacydata.privacy.p3}</p>

                        <h3 className='privacy-title'>{privacydata.privacy.title1}</h3>
                        <p>{privacydata.privacy.description1}</p>
                        <p>{privacydata.privacy.description2}</p>
                        <h5>{privacydata.privacy.header}</h5>
                        <p>{privacydata.privacy.description3}</p>
                        <p>{privacydata.privacy.description4}</p>
                    </div>
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="privacy-description">
                        <img src='/Images/privacyimg.png' aria-hidden="true" />
                    </motion.div>
                </div>

            </div >


            <div className="privacy-security">
                <div className="privacy-que">
                    <div className="privacy-details-que">

                        <h5>{privacydata.privacy.title2}</h5>

                        <p>{privacydata.privacy.description21}</p>

                        <p>{privacydata.privacy.description22}</p>
                        <h5>{privacydata.privacy.header2}</h5>
                        <h5>{privacydata.privacy.subheader2}</h5>

                        <p>{privacydata.privacy.description23}</p>

                        <h5>{privacydata.privacy.title22}</h5>

                        <p>{privacydata.privacy.description24}.</p>

                        <h5>{privacydata.privacy.title23}</h5>
                        <p>{privacydata.privacy.description25}</p>
                        <p>{privacydata.privacy.note}</p>


                        {servicesteps.map((step, index) => (
                            <div key={index}>
                                <h3 className='privacy-title'>{step.title}</h3>
                                {step.paragraphs.map((paragraph, pIndex) => (
                                    <p key={pIndex}>{paragraph}</p>
                                ))}
                            </div>
                        ))}
                    </div>


                    <div>
                        {servicesteps1.map((step, index) => {
                            return (
                                <div key={index}>
                                    <h3 className='privacy-title'>{step.title}</h3>
                                    {step.paragraphs.map((ans, ansIndex) => (
                                        <p key={ansIndex}>{ans}</p>
                                    ))}
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div >
        </>
    )
}

export default Privacy