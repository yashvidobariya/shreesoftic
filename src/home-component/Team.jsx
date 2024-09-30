import React from 'react'
import teamdata from '../../src/Data/teamdata.json';
import { motion } from "framer-motion";
import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';

import teamdataenglish from '../Data/english.json';
import teamdatafrench from '../Data/french.json';
import teamdatadutch from '../Data/dutch.json';
import teamdataarbic from '../Data/arabic.json';
import teamdatachines from '../Data/chinese.json';
import teamdataspanich from '../Data/spanish.json';
import teamdataportuguese from '../Data/portuguese.json'
import teamdatarussian from '../Data/russian.json';

const Team = () => {
    const { t, i18n } = useTranslation();

    const teamdata = i18n.language === 'fr'
        ? teamdatafrench :

        i18n.language === 'dh'
            ? teamdatadutch :

            i18n.language === 'ar'
                ? teamdataarbic

                : i18n.language === 'ch'
                    ? teamdatachines

                    : i18n.language === 'sp'
                        ? teamdataspanich

                        : i18n.language === 'pr'
                            ? teamdataportuguese

                            : i18n.language === 'rs'
                                ? teamdatarussian

                                : teamdataenglish;

    const teamsteps = teamdata.team.steps;

    return (
        <div className="home-team">
            <div className="home-team-flex">

                <div className="home-team-title">
                    <h6>{teamdata.team.header}</h6>
                    <h1>
                        {teamdata.team.subheader}
                    </h1>
                    <motion.p initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}>{teamdata.team.description}</motion.p>
                </div>

                <div className="home-team-title">
                    {
                        teamsteps.map(item => (
                            <div className="team-div" key={item.id}>
                                <div className="team-client">
                                    <span className="number">
                                        <CountUp start={0} end={item.number} duration={4} />
                                    </span>
                                    <span className="plus">+</span>
                                    <p>{item.title}</p>
                                </div>
                                <motion.div
                                    initial={{ y: 100, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: true }}
                                    className="team-description">
                                    <div className="team-title">
                                        <p>{item.description}</p>
                                    </div>
                                </motion.div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

    )
}

export default Team