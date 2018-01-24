import { determineLocale } from './locale';

export default function reducer(state = { locale: determineLocale() }, action) {
  let newState = { ...state };
  switch (action.type) {
    case 'CHANGE_LANGUAGE':
      newState = action.payload;
      break;
    default:
      break;
  }
  return newState;
}

export const selectLocale = state => state.i18n.locale;

