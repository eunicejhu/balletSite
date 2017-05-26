// @flow

import fr from '../../../i18n/fr.json';
import en from '../../../i18n/en.json';

const  getTranslationsFromLocal = (local: string) :any => (local === 'en' ? en : fr);

export default getTranslationsFromLocal;