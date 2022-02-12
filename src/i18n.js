import { createI18n } from "vue-i18n";
import config from "@/config";

const locales = require.context("./locales", true, /[A-Za-z0-9-_,\s]+\.json$/i);
const messages = {};
locales.keys().forEach((key) => {
  const matched = key.match(/([A-Za-z0-9-_]+)\./i);
  if (matched && matched.length > 1) {
    const locale = matched[1];
    messages[locale] = locales(key).default;
  }
});

export default createI18n({
  locale: config.locale,
  fallbackLocale: "en-US",
  formatFallbackMessages: true,
  messages,
});
