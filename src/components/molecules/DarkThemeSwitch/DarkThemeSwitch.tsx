import Switch from "@/components/atoms/Switch";

const DarkThemeSwitch = () => {
    const handleChange = () => {
        const isDark = localStorage.getItem("theme");
        if (isDark === 'dark') {
            localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        } else {
            localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        }
    }
    return (
        <section className="flex items-center gap-2">
            <span>Light</span>
            <Switch defaultChecked={true} onCheckedChange={handleChange} className="" />
            <span>Dark</span>
        </section>
    )
}

export default DarkThemeSwitch