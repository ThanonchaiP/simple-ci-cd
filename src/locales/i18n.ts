import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en } from './entries/en_US';
import { th } from './entries/th_TH';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    th: { translation: th },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});
