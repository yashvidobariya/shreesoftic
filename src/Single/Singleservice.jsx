
import { useParams } from 'react-router-dom';
import servicesData from '../../src/Data/Servicepage.json';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import servicedatafrench from '../Data/french.json';
import servicedatadutch from '../Data/dutch.json';
import servicedataarbic from '../Data/arabic.json';
import servicedatachines from '../Data/chinese.json';
import servicedataspanich from '../Data/spanish.json';
import servicedataportuguese from '../Data/portuguese.json'
import servicedatarussian from '../Data/russian.json';
import servicedataenglish from '../Data/english.json';

const SingleService = () => {
    const { id } = useParams();

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

    const servicedatastep = servicedata.servicepage.steps;
    console.log("servicedatastep", servicedatastep)
    const service = servicedatastep.find(service => service.id === id);
    console.log("service", service);

    if (!service) {
        return <div>Service not found</div>;
    }

    return (
        <div className="service-flex">
            <div className="service-label">
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="service-uper-section"
                >
                    <h1>{service.title}</h1>
                    <p>{service.description}</p>
                </motion.div>

                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="service-uper-section"
                >
                    <img src={service.image} alt="single Service" aria-hidden='true' />
                </motion.div>
            </div>

            <div className="servicedetail">
                <div className="service-content">
                    <div className="servicedetail-h1">
                        <h3>{service.subtitle}</h3>
                    </div>
                    <div className="servicedetail-des">
                        <p>
                            {service.info}
                        </p>
                    </div>
                    <div className="service-details-flex">

                        <div className="service-main-div">
                            <h3>{servicedata.servicepage.tech}</h3>
                            <div className="serivce-grid-details">
                                {Object.entries(service.Technology).map(([category, details]) => (
                                    <div className='service-details-content' key={category}>
                                        <h4>{category}</h4>
                                        <p>{details}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    <div className="service-feature">
                        <div className="service-feature-div">
                            {Object.entries(service.Features).map(([category, details]) => (
                                <div className="service-feature-details" key={category}>
                                    <h3>{category}</h3>
                                    <p>{details}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="service-details-flex">

                        <div className="service-main-div">
                            <h3> {servicedata.servicepage.our} {service.title} {servicedata.servicepage.process}</h3>
                            <div className="serivce-grid-details">
                                {Object.entries(service.DevelopmentProcess).map(([category, details]) => (
                                    <div className='service-details-content' key={category}>
                                        <h4>{category}</h4>
                                        <p>{details}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <motion.div
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
                className='home-contactus' >
                <div className="home-contactus-div" >
                    <h3>{servicedata.servicepage.service_contact_header}</h3>

                    <Link to="/contactus">
                        <button>{servicedata.servicepage.service_contact_button}</button>
                    </Link>
                </div>

            </motion.div>
        </div>
    );
}

export default SingleService;
