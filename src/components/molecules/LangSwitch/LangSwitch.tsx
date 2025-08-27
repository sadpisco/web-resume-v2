import Switch from "@/components/atoms/Switch";

interface LangSwitchProps {
    locale: string;
}

const LangSwitch = ({ locale }: LangSwitchProps) => {
    const handleChange = () => {
        if (locale === "es") {
            window.location.href = "/";
        } else {
            window.location.href = "/es";
        }
    }
    return (
        <section className="flex items-center gap-2 text-lg">
            <span className="text-sm sm:text-lg">{locale === "en" ? "English" : "Inglés"}</span>
            <Switch checked={locale === "es"} onCheckedChange={handleChange} />
            <span className="text-sm sm:text-lg">{locale === "en" ? "Spanish" : "Español"}</span>
        </section>
    )
}

export default LangSwitch