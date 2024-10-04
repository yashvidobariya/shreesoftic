import React, { useState } from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { BiMailSend } from "react-icons/bi";
import { TbPhoneCall } from "react-icons/tb";
import { motion } from "framer-motion";
import contactDetails from '../Data/contact.json';
import axios from 'axios';

import contactenglish from '../Data/english.json';
import { useTranslation } from 'react-i18next';
import contactfrench from '../Data/french.json';
import contactdutch from '../Data/dutch.json';
import contactarbic from '../Data/arabic.json';
import contactchines from '../Data/chinese.json';
import contactspanich from '../Data/spanish.json';
import contactportuguese from '../Data/portuguese.json'
import contactrussian from '../Data/russian.json';

const icons = {
    IoLocationSharp: <IoLocationSharp />,
    BiMailSend: <BiMailSend />,
    TbPhoneCall: <TbPhoneCall />
};

const Contactus = () => {

    const { t, i18n } = useTranslation();

    const contactdata =
        i18n.language === 'fr'
            ? contactfrench

            : i18n.language === 'dh'
                ? contactdutch

                : i18n.language === 'ar'
                    ? contactarbic

                    : i18n.language === 'ch'
                        ? contactchines

                        : i18n.language === 'sp'
                            ? contactspanich

                            : i18n.language === 'pr'
                                ? contactportuguese

                                : i18n.language === 'ru'
                                    ? contactrussian

                                    : contactenglish;

    console.log("lanagauge", contactdata);

    const contactdatastep = contactdata.contact.steps;

    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [phonenumber, setphonenumber] = useState('');
    const [message, setmessage] = useState('');

    const handlesubmit = async (e) => {
        e.preventDefault();
        const date = new Date();
        const data = {
            name,
            email,
            phonenumber,
            message,
            datetime: date.toISOString()
        };
        try {
            const response = await axios.post("https://sheet.best/api/sheets/d046cb77-c9c6-42c6-a055-0d80ddba4768", data);
            console.log(response);
            setname('');
            setemail('');
            setphonenumber('');
            alert('Message sent successfully!');
        } catch (error) {
            console.error(error);
            alert('Failed to send message. Please try again.');

        }
    };

    return (
        <div className="main-contactus">
            <div className="contactus-section">
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="contact-header-title"
                >
                    <h1>{contactdata.contact.header}</h1>
                    <p>{contactdata.contact.subheader}</p>
                </motion.div>
            </div>

            <div className="contactus-form">
                <div className="form-main-div">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="form-content"
                    >
                        <div className="form-box">
                            <h2>{contactdata.contact.detail_header}</h2>
                            <p>{contactdata.contact.detail_subheader}</p>
                            {contactdatastep.map((detail, index) => (
                                <div key={index} className="form-flex">
                                    <div className="form-icon">
                                        {icons[detail.icon]}
                                    </div>
                                    <div className="form-details">
                                        <h4>{detail.heading}</h4>
                                        {detail.icon === "BiMailSend" ? (
                                            <a href={`mailto:${detail.content}`} aria-hidden='true'>{detail.content}</a>
                                        ) : detail.icon === "TbPhoneCall" ? (
                                            <a href={`tel:${detail.content}`} aria-hidden='true'>{detail.content}</a>
                                        ) : (
                                            <p>{detail.content}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="form-content"
                    >
                        <form onSubmit={handlesubmit}>
                            <div className="form-contactus">
                                <div className="contactus-title">
                                    <h2>{contactdata.contact.form_header}</h2>
                                    <p>{contactdata.contact.form_subheader}</p>

                                    <div className="contactus-input">
                                        <div className="contactus-input-flex">
                                            <div className="contactus-label">
                                                <input type="text" placeholder={t('contact.firstname')} onChange={(e) => setname(e.target.value)} value={name} required />

                                            </div>
                                            <div className="contactus-label">
                                                <input type="email" placeholder={t('contact.email')} onChange={(e) => setemail(e.target.value)} value={email} required />

                                            </div>
                                            <div className="contactus-label">
                                                <input type="text" placeholder={t('contact.number')} onChange={(e) => setphonenumber(e.target.value)} value={phonenumber} required />

                                            </div>
                                        </div>
                                        <div className="contactus-message">
                                            <div className="contactus-textarea">
                                                <textarea placeholder={t('contact.message')} onChange={(e) => setmessage(e.target.value)} value={message} required />

                                            </div>
                                        </div>
                                    </div>
                                    <div className="contactus-submit">
                                        <button type="submit">{contactdata.contact.form_button}</button>
                                    </div>

                                </div>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>

            <div className="home-contactus-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.1968400286432!2d72.8040676110772!3d21.22404168096082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fea420d763d%3A0xc9967fd58cf761db!2sShreesoftic!5e0!3m2!1sen!2sin!4v1716464463906!5m2!1sen!2sin" title="map shreesoftic"
                    frameBorder="0"
                ></iframe>
            </div>
        </div>
    );
};

export default Contactus;
