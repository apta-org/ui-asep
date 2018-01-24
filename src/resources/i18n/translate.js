import { EN_US } from './locale';
import propertiesBundle from './properties.json';

const defaultBundles = new Map();
defaultBundles.set('properties', propertiesBundle);

let languageBundle = new Map();

export function translateWithBundle(id, bundle, locale = EN_US, overrideTranslationsText) {
  function createLanguageBundle() {
    const text = overrideTranslationsText || defaultBundles.get(bundle);
    let localeLanguageBundle = languageBundle.get(bundle);
    if (!localeLanguageBundle) {
      localeLanguageBundle = {};
    }
    if (!localeLanguageBundle[locale]) {
      localeLanguageBundle[locale] = locale === EN_US ? text[EN_US] : Object.assign({}, text[EN_US], text[locale]);
      languageBundle.set(bundle, localeLanguageBundle);
    }
    return languageBundle.get(bundle)[locale];
  }

  const translation = createLanguageBundle();
  return id in translation ? translation[id] : id;
}

export function translate(id, locale = EN_US, overrideTranslationsText) {
  return translateWithBundle(id, 'properties', locale, overrideTranslationsText);
}

export function resetLanguageBundle() {
  languageBundle = new Map();
}
