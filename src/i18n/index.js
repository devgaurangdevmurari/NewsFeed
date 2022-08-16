import I18n from "react-native-i18n";

import en from "./locales/en";
import france from "./locales/france";

I18n.fallbacks = true;

I18n.translations = {
  en,
  france,
};

I18n.locale = "en";

export default I18n;
