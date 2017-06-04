// @flow

import fr from '../../../i18n/fr';
import en from '../../../i18n/en';

const  getTranslationsFromLocal = (local: string) :any => (local === 'en' ? en : fr);

export default getTranslationsFromLocal;