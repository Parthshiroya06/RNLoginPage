import LocalizedStrings from 'react-native-localization';
import I18n from 'react-native-i18n';
import {en, gu, hi} from './locales';
import * as RNLocalize from 'react-native-localize';

I18n.defaultLocale = 'en';
// I18n.locale = 'en';
I18n.fallbacks = true;
// It will convert HOME_noteTitle to "HOME note title" if the value of HOME_noteTitle doesn't exist in any of the translation files.
I18n.missingBehaviour = 'guess';
I18n.translations = {
  en,
  gu,
  hi,
};
export default I18n;
