import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import english from '../Data/english.json';
import french from '../Data/french.json';
import dutch from '../Data/dutch.json';
import arabic from '../Data/arabic.json';
import chines from '../Data/chinese.json'
import spanish from '../Data/spanish.json';
import portuguese from '../Data/portuguese.json';
import russian from '../Data/spanish.json'
const resources = {
    en: {
        translation: english
    },
    fr: {
        translation: french
    },
    dh: {
        translation: dutch
    },
    ar: {
        translation: arabic
    },
    ch: {
        translation: chines
    },
    sp: {
        translation: spanish
    },
    pr: {
        translation: portuguese
    },
    rs: {
        translation: russian
    }

};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
