export default function useTranslations() {
    const getTranslations = async (locale: string) => {
        const data = (await import(`../locales/${locale}.json`)).default;
        return data;
    }
    return {
        getTranslations
    }
}