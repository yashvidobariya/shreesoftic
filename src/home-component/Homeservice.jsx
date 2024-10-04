import React from 'react'
import { RiAppleFill } from "react-icons/ri";
import { TiVendorAndroid } from "react-icons/ti";
import { SiAltiumdesigner } from "react-icons/si";
import { RiComputerLine } from "react-icons/ri";
import servicedataenglish from '../Data/english.json';
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import servicedatafrench from '../Data/french.json';
import servicedatadutch from '../Data/dutch.json';
import servicedataarbic from '../Data/arabic.json';
import servicedatachines from '../Data/chinese.json';
import servicedataspanich from '../Data/spanish.json';
import servicedataportuguese from '../Data/portuguese.json'
import servicedatarussian from '../Data/russian.json';

const icons = {
    RiComputerLine: <RiComputerLine />,
    RiAppleFill: <RiAppleFill />,
    TiVendorAndroid: <TiVendorAndroid />,
    SiAltiumdesigner: <SiAltiumdesigner />
};

const Homeservice = () => {
    const { t, i18n } = useTranslation();

    const servicedata =
        i18n.language === 'fr'
            ? servicedatafrench
            : i18n.language === 'dh'
                ? servicedatadutch
                : i18n.language === 'ar'
                    ? servicedataarbic

                    : i18n.language === 'ch'
                        ? servicedatachines

                        : i18n.language === 'sp'
                            ? servicedataspanich

                            : i18n.language === 'pr'
                                ? servicedataportuguese

                                : i18n.language === 'ru'
                                    ? servicedatarussian

                                    : servicedataenglish;

    console.log("lanagauge", servicedata);

    const servicesteps = servicedata.service.steps;
    return (

        <div className="home-service">
            <div className="home-service-header">
                <motion.h1 initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}>{servicedata.service.header}</motion.h1>
                <motion.div
                    initial={{ y: 60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="home-service-descitption">
                    <p>{servicedata.service.subheader}</p></motion.div>
            </div>


            <div className="service-grid-div">
                <div className="services-grid" style={{ marginTop: '50px' }}>
                    <div
                        className="service-card" id='service-change-bg' >
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            className="service-icon" id='service-text-change' >{icons.RiComputerLine}</motion.div>
                        <h3 id='service-text-change-h3' >{servicesteps[0].title}</h3>
                        <p id='service-text-change-p' >{servicesteps[0].description}
                        </p>
                    </div>


                    <div className="service-card">

                        <div className="workflow-card">
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.8 }}
                                className="service-icon">{icons.RiAppleFill}</motion.div>
                            <h3>{servicesteps[1].title}</h3>
                            <p>{servicesteps[1].description}</p>
                        </div>
                    </div>
                </div>

                <div className="services-grid">

                    <div className="service-card">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.8 }}
                            className="service-icon">{icons.TiVendorAndroid} </motion.div>
                        <h3>{servicesteps[2].title}</h3>
                        <p>{servicesteps[2].description}
                        </p>
                    </div>


                    <div className="service-card" id='service-change-bg1' >

                        <div className="workflow-card">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.8 }}
                                className="service-icon" id='service-class-change' ><SiAltiumdesigner /></motion.div>
                            <h3 id='service-text-h3' >{servicesteps[3].title}</h3>
                            <p id='service-text-h4' >{servicesteps[3].description}</p>
                        </div>
                    </div>


                </div>

            </div>


        </div>

    )
}

export default Homeservice