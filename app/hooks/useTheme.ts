"use client"

import { useEffect, useState } from "react"

type Theme = "light" | "dark";

export const useTheme = () => {
    const [theme, setTheme] = useState<Theme>("dark");

    useEffect(() => {
        const stored = localStorage.getItem("theme") as Theme | null;
        const currentTheme = stored || "dark";

        document.documentElement.classList.add(currentTheme);
        setTheme(currentTheme);
    }, [])

    const toggleTheme = () => {
        const newTheme: Theme = theme === "dark" ? "light" : "dark";
        document.documentElement.classList.remove(theme);
        document.documentElement.classList.add(newTheme);

        localStorage.setItem("theme", newTheme);
        setTheme(newTheme);
    };

    return { theme, toggleTheme };
}