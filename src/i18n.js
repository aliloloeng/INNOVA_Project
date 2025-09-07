import { createI18n } from "vue-i18n"
import de from "./locales/de.json"
import it from "./locales/it.json"
import en from "./locales/en.json"

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "en",
  fallbackLocale: "de",
  messages: {
    de,
    it,
    en
  }
})

export default i18n
