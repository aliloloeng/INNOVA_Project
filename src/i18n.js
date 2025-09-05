import { createI18n } from "vue-i18n"
import de from "./locales/de.json"
import it from "./locales/it.json"

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "de", // پیش‌فرض آلمانی
  fallbackLocale: "de",
  messages: {
    de,
    it
  }
})

export default i18n
