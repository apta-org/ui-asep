export const EN_US = 'en-US';

export function determineLocale() {
  // Hardcode language for now, however this value should come from the browser with the following code:
  // (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage;
  return EN_US;
}
