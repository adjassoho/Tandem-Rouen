"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function Header() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "/carte", label: "La Carte" },
        { href: "/experience", label: "L'Expérience" },
        { href: "/production", label: "Producteurs" },
        { href: "/reservation", label: "Réserver" }, // In desktop it's a button, but list here for mobile
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                scrolled ? "bg-[#1a1a1a]/90 backdrop-blur-md border-white/10 h-20" : "bg-transparent h-24"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <span className="material-symbols-outlined text-primary text-3xl transition-transform group-hover:rotate-12">restaurant_menu</span>
                    <h1 className="text-2xl font-bold tracking-widest text-white uppercase group-hover:text-primary transition-colors">Tandem</h1>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.slice(0, 3).map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-lg font-medium transition-colors hover:text-primary",
                                pathname === link.href ? "text-primary border-b border-primary pb-1" : "text-white/80"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* Reservation Link (Desktop Button) */}
                    <Link href="/reservation">
                        <Button variant="primary" size="sm">
                            RÉSERVER
                        </Button>
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <span className="material-symbols-outlined text-3xl">{mobileMenuOpen ? "close" : "menu"}</span>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-[#1a1a1a] border-b border-white/10 p-6 flex flex-col gap-6 shadow-2xl animate-in slide-in-from-top-5">
                    <nav className="flex flex-col gap-4 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={cn(
                                    "text-xl font-medium transition-colors hover:text-primary",
                                    pathname === link.href ? "text-primary" : "text-white/80"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
