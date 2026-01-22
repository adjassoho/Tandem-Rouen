"use client";
import { useEffect } from "react";

export function ThemeSetter({ theme }: { theme: "default" | "copper" }) {
    useEffect(() => {
        // We add the class to the body to ensure global variables (like in Header) are affected
        if (theme === "copper") {
            document.body.classList.add("theme-copper");
        } else {
            document.body.classList.remove("theme-copper");
        }
        // Cleanup on unmount or change
        return () => {
            document.body.classList.remove("theme-copper");
        };
    }, [theme]);

    return null;
}
