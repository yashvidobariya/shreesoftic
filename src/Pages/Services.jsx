import React, { useRef, useEffect } from 'react';
import { RiAppleFill } from "react-icons/ri";
import { TiVendorAndroid } from "react-icons/ti";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { RiComputerLine } from "react-icons/ri";
import { SiAntdesign } from "react-icons/si";
import { CiMobile1 } from "react-icons/ci";
import { GrCode } from "react-icons/gr";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import servicesData from '../../src/Data/Servicepage.json';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import reviews from '.././Data/reviews.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import servicedatafrench from '../Data/french.json';
import servicedatadutch from '../Data/dutch.json';
import servicedataarbic from '../Data/arabic.json';
import servicedatachines from '../Data/chinese.json';
import servicedataspanich from '../Data/spanish.json';
import servicedataportuguese from '../Data/portuguese.json'
import servicedatarussian from '../Data/russian.json';
import servicedataenglish from '../Data/english.json';

const icons = {
    TiVendorAndroid: <TiVendorAndroid />,
    RiAppleFill: <RiAppleFill />,
    RiComputerLine: <RiComputerLine />,
    SiAntdesign: <SiAntdesign />,
    FaFileInvoiceDollar: <FaFileInvoiceDollar />,
    CiMobile1: <CiMobile1 />,
    GrCode: <GrCode />
};

const Services = () => {
    const swiperRef = useRef(null);
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

    const servicesteps = servicedata.servicepage.steps;
    const serviceview = servicedata.servicepage.review;

    useEffect(() => {
        const swiperInstance = swiperRef.current.swiper;

        const handleSlideChange = () => {
            const slides = swiperInstance.slides;
            slides.forEach((slide, index) => {
                slide.classList.remove('swiper-slide-large', 'swiper-slide-small');
                if (swiperInstance.realIndex === index) {
                    slide.classList.add('swiper-slide-large');
                } else {
                    slide.classList.add('swiper-slide-small');
                }
            });
        };

        swiperInstance.on('slideChange', handleSlideChange);

        handleSlideChange();

        return () => {
            swiperInstance.off('slideChange', handleSlideChange);
        };
    }, []);

    const containerVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 100,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <div className='main-service'>
            <div className="service-flex">
                <div className="service-label">
                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="service-uper-section"
                    >
                        <h1>{servicedata.servicepage.header}</h1>
                        <p>{servicedata.servicepage.subheader}</p>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, -20, 0], transition: { duration: 3, repeat: Infinity } }}
                        className="service-uper-section"
                    >
                        <img src='/Images/service.png' aria-hidden='true' alt="Service" />
                    </motion.div>
                </div>
            </div>

            <div className="service-grid">
                <div className="service-div-title">
                    <h2>{servicedata.servicepage.servicetitle}</h2>
                </div>
                <div className="service-section">
                    <motion.div
                        className="service-box"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        viewport={{ once: true }}
                    >
                        {servicesteps.map(service => (
                            <motion.div
                                key={service.id}
                                className="service-container"
                                variants={itemVariants}
                                viewport={{ once: true }}
                            >
                                <div className="service-icon">
                                    {icons[service.icon]}
                                </div>
                                <div className="service-des">
                                    <h2>{service.title}</h2>
                                    <p>{service.description}</p>
                                    <Link to={`/services/servicedetails/${service.id}`}>{servicedata.servicepage.seemore}</Link>
                                </div>
                            </motion.div>

                        ))}
                    </motion.div>

                </div>
            </div>

            <div className="service-review-main">
                <div className="service-review">
                    <h2>{servicedata.servicepage.client_title}</h2>
                </div>
                <div className="service-review-div">
                    <div className="service-review-content">
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            loop={true}
                            coverflowEffect={{
                                rotate: 0,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: false,
                            }}
                            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                            className='review_slider'
                            ref={swiperRef}
                            navigation={{
                                prevEl: '.button-prev',
                                nextEl: '.button-next',
                            }}
                        >
                            {serviceview.map(item => (
                                <SwiperSlide key={item.id}>
                                    <img src={item.img} alt={item.name} aria-hidden='true' className='review-slider-image' />
                                    <div className="review-slider-feedback">
                                        <div className="review-detail">
                                            <p>{item.detail}</p>
                                            <h3>{item.name}</h3>
                                            <h6>{item.line}</h6>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="button-prev"><MdArrowBackIos className='prev' /></div>
                        <div className="button-next"><MdArrowForwardIos className='next' /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
