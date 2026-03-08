import et from "../locales/et.json";
import en from "../locales/en.json";

const messages = {
  et,
  en,
};

export const useLocale = () => {
  const locale = useState<"et" | "en">("locale", () => "et");

  const t = (path: string) => {
    const keys = path.split(".");
    let value: any = messages[locale.value];

    for (const key of keys) {
      value = value?.[key];
    }

    return value ?? path;
  };

  const setLocale = (lang: "et" | "en") => {
    locale.value = lang;
  };

  return { locale, t, setLocale };
};
