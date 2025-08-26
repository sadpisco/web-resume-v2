import Switch from "@/components/atoms/Switch";
import { Moon, SunDim } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

interface DarkThemeSwitchProps {
    locale: string;
}

const DarkThemeSwitch = ({ locale }: DarkThemeSwitchProps) => {
    const [isDark, setIsDark] = useState(false);
    useEffect(() => {
        const storageTheme = localStorage.getItem("theme");
        setIsDark(storageTheme === "dark");
    }, []);
    const toggleTheme = () => {
        const storageTheme = localStorage.getItem("theme");
        if (storageTheme === 'dark') {
            localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        } else {
            localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        }
    }
    return (
        <section className="flex items-center gap-2">
            <SunDim size={28} />
            <Switch defaultChecked={isDark} onCheckedChange={toggleTheme} className="data-[state=unchecked]:bg-neutral-700" />
            <Moon size={28} />
        </section>
    )
}

export default DarkThemeSwitch