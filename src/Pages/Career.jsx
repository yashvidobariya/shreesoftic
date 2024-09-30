import React from 'react'
import { FcProcess } from "react-icons/fc";
import { PiHandshakeLight } from "react-icons/pi";
import { PiUserSwitchLight } from "react-icons/pi";
// import { RiComputerLine } from "react-icons/ri";
import career from '../Data/career.json';
import { motion } from "framer-motion";
import { MdOutlineCelebration } from "react-icons/md";
import { useTranslation } from 'react-i18next';

import careerenglish from '../Data/english.json';
import careerfrench from '../Data/french.json';
import careerdutch from '../Data/dutch.json';
import careerarbic from '../Data/arabic.json';
import careerchines from '../Data/chinese.json';
import careerspanich from '../Data/spanish.json';
import careerportuguese from '../Data/portuguese.json'
import careerrussian from '../Data/russian.json';



const Career = () => {

    const { t, i18n } = useTranslation();

    const careerdata = i18n.language === 'fr'
        ? careerfrench :

        i18n.language === 'dh'
            ? careerdutch :

            i18n.language === 'ar'
                ? careerarbic

                : i18n.language === 'ch'
                    ? careerchines

                    : i18n.language === 'sp'
                        ? careerspanich

                        : i18n.language === 'pr'
                            ? careerportuguese

                            : i18n.language === 'rs'
                                ? careerrussian

                                : careerenglish;

    const careerstep = careerdata.career.steps;

    return (
        <div className="career-flex">

            <div className="career-label">
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="career-uper-section">
                    <h1>{careerdata.career.join_title}<br /> {careerdata.career.join_title_parent}</h1>
                    <p>{careerdata.career.join_title_description}.</p>
                </motion.div>

                <motion.div
                    animate={{ y: [0, -20, 0], transition: { duration: 3, repeat: Infinity } }}
                    className="career-uper-section">
                    <img src='Images/career2.png' alt='career2img' aria-hidden='true' />
                </motion.div>
            </div>


            <div className="home-service">
                <div className="home-service-header">
                    <motion.h2 initial={{ y: -50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}>{careerdata.career.header}</motion.h2>
                    <motion.div
                        initial={{ y: 60, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="home-service-descitption">

                        <p>{careerdata.career.subheader}</p></motion.div>
                </div>



                <div className="service-grid-div">

                    <div className="services-grid" style={{ marginTop: '50px' }}>

                        <div
                            className="service-card" id='service-change-bg-career' >

                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.8 }}
                                className="service-icon" id='service-class-change' ><PiUserSwitchLight /></motion.div>
                            <h3 id='service-change' >{careerstep[0].title}</h3>
                            <p id='service-text' >{careerstep[0].description}

                            </p>
                        </div>


                        <div className="service-card">

                            <div className="workflow-card">
                                <motion.div
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.8 }}
                                    className="service-icon"><FcProcess /></motion.div>
                                <h3>{careerstep[1].title}</h3>
                                <p>{careerstep[1].description}</p>
                            </div>
                        </div>
                    </div>



                    <div className="services-grid">

                        <div className="service-card">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.8 }}
                                className="service-icon"><PiHandshakeLight /></motion.div>
                            <h3>{careerstep[2].title}</h3>
                            <p>{careerstep[2].description}</p>
                        </div>


                        <div className="service-card" id='service-change-career1' >

                            <div className="workflow-card">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.8 }}
                                    className="service-icon" id='text-change' ><MdOutlineCelebration /></motion.div>
                                <h3 id='service-text-change' >{careerstep[3].title}</h3>
                                <p id='p-change' >{careerstep[3].description}</p>
                            </div>
                        </div>


                    </div>

                </div>


            </div>


            <motion.div

                className="career-work"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}>
                <div className="career-work-section">
                    <img src='Images/fancy.png' alt="Careerfancywork" aria-hidden='true' />
                </div>

                <div className="career-uper-section">
                    <h2>{careerdata.career.work_title}<br />{careerdata.career.work_title_parent}</h2>
                    <p>{careerdata.career.subheader}
                    </p>
                </div>


            </motion.div>


        </div>
    )
}

export default Career


