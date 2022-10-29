import {I18n, localize} from '@languages';

export const language = params => {
  return {
    type: 'language',
    language: (I18n.locale = params),
  };
};
