import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import contactenglish from '../Data/english.json';
import contactfrench from '../Data/french.json';
import contactdutch from '../Data/dutch.json';
import contactarbic from '../Data/arabic.json';
import contactochines from '../Data/chinese.json';
import contactspanich from '../Data/spanish.json';
import contactportuguese from '../Data/portuguese.json'
import contactrussian from '../Data/russian.json';

const Homecontactus = () => {
    const { t, i18n } = useTranslation();
    const contactdata = i18n.language === 'fr'
        ? contactfrench :

        i18n.language === 'dh'
            ? contactdutch :

            i18n.language === 'ar'
                ? contactarbic

                : i18n.language === 'ch'
                    ? contactochines

                    : i18n.language === 'sp'
                        ? contactspanich

                        : i18n.language === 'pr'
                            ? contactportuguese

                            : i18n.language === 'rs'
                                ? contactrussian

                                : contactenglish;


    return (
        <div className="main-home-contactus">
            {/* <h1>Contact us</h1> */}

            <motion.div
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
                className='home-contactus' >
                <div className="home-contactus-div" >
                    <h2>{contactdata.contactus.header}</h2>
                    <p>{contactdata.contactus.subheader}</p>
                    <Link to="/contactus">
                        <button>{contactdata.contactus.button}</button>
                    </Link>
                </div>

            </motion.div>

            <div className="home-contactus-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.1968400286432!2d72.8040676110772!3d21.22404168096082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fea420d763d%3A0xc9967fd58cf761db!2sShreesoftic!5e0!3m2!1sen!2sin!4v1716464463906!5m2!1sen!2sin" title='shreesoftic google map' frameBorder="0"></iframe>

            </div>
        </div>

    )
}

export default Homecontactus