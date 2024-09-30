import React from 'react';
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import workflowDataFr from '../Data/french.json';
import workflowDataEn from '../Data/english.json';
import workflowDataDh from '../Data/dutch.json';
import workflowDataar from '../Data/arabic.json';
import workflowDatach from '../Data/chinese.json';
import workflowDatasp from '../Data/spanish.json';
import workflowDatapr from '../Data/portuguese.json';
import workflowDatars from '../Data/russian.json';

const Workflow = () => {
    const { t, i18n } = useTranslation();

    const workflowData = i18n.language === 'fr'
        ? workflowDataFr
        : i18n.language === 'dh'
            ? workflowDataDh

            : i18n.language === 'ar'
                ? workflowDataar

                : i18n.language === 'ch'
                    ? workflowDatach

                    : i18n.language === 'sp'
                        ? workflowDatasp

                        : i18n.language === 'pr'
                            ? workflowDatapr

                            : i18n.language === 'rs'
                                ? workflowDatars

                                : workflowDataEn;

    const workflowSteps = workflowData.workflow.steps;

    return (
        <div className='workflow'>
            <motion.div initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }} className='main-workflow'>
                <div className="workflow-div">
                    <p>{workflowData.workflow.header}</p>
                    <h2>{workflowData.workflow.subheader}</h2>
                </div>
            </motion.div>

            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="workflow-box">
                {workflowSteps.map(item => (
                    <div key={item.id} className="workflow-content">
                        <div className="icon">
                            <img src={item.icon} alt={item.title} aria-hidden='true' />
                        </div>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

export default Workflow;
