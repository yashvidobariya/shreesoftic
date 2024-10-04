import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import sliderdata from '../../src/Data/slider.json';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from "react-icons/io";
import { useTranslation } from 'react-i18next';
import homeportfolioenglish from '../Data/english.json';
import homeportfoliofrench from '../Data/french.json';
import homeportfoliodutch from '../Data/dutch.json';
import homeportfolioaarbic from '../Data/arabic.json';
import homeportfoliochines from '../Data/chinese.json';
import homeportfoliospanich from '../Data/spanish.json';
import homeportfolioportuguese from '../Data/portuguese.json'
import homeportfoliorussian from '../Data/russian.json';

const Homeportfolio = () => {
    const { t, i18n } = useTranslation();

    const portfoliodata = i18n.language === 'fr' ? homeportfoliofrench :
        i18n.language === 'dh' ? homeportfoliodutch :
            i18n.language === 'ar' ? homeportfolioaarbic :
                i18n.language === 'ch' ? homeportfoliochines :
                    i18n.language === 'sp' ? homeportfoliospanich :
                        i18n.language === 'pr' ? homeportfolioportuguese :
                            i18n.language === 'ru' ? homeportfoliorussian :
                                homeportfolioenglish;

    const homeporfoliosteps = portfoliodata.portfolio.steps;

    return (
        <div className="main-homeportfolio-div">
            <div className="homeportfolio">
                <div className="homeportfolio-heading">
                    <h1>{portfoliodata.portfolio.header}</h1>
                    <p>{portfoliodata.portfolio.subheader}</p>
                </div>
            </div>
            <div className='homeportfolio-container'>
                <Swiper
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    breakpoints={{
                        600: { slidesPerView: 1 },
                        769: { slidesPerView: 2 },
                        992: { slidesPerView: 2 }
                    }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2,
                        slideShadows: false,
                    }}
                    pagination={{ clickable: true }}
                    modules={[Pagination, Navigation, Autoplay]}
                    className='swiper_container'
                >
                    {homeporfoliosteps.map(item => (
                        <SwiperSlide key={item.id}>
                            <div className='slide-content'>
                                <div className='slider-image-container'>
                                    <img src={item.image} alt={item.title} aria-hidden='true' className='slider-image' />
                                    <div className='image-overlay'>
                                        <h2>{item.title}</h2>
                                        <p>{item.description}</p>
                                        <button>
                                            <Link to={`/home/details/${item.id}`}>{portfoliodata.portfolio.button}</Link>
                                            <div className="more-arrow">
                                                <IoIosArrowRoundForward className='more-icon' />
                                            </div>
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Homeportfolio;
