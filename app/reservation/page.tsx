"use client";
import React, { useState } from "react";
import { ThemeSetter } from "@/components/ui/ThemeSetter";
import { ReservationMap } from "@/components/reservation/ReservationMap";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function ReservationPage() {
    const [selectedTable, setSelectedTable] = useState<string | null>(null);

    // Simplified state for demo
    const [guests, setGuests] = useState("2");
    const [time, setTime] = useState("20:00");

    return (
        <>
            <ThemeSetter theme="copper" />

            <div className="flex flex-col lg:flex-row w-full max-w-[1600px] mx-auto min-h-[calc(100vh-80px)]">
                {/* LEFT PANEL: Booking Form */}
                <section className="flex-1 p-6 lg:p-12 lg:overflow-y-auto border-r border-[#392f28]">
                    <div className="max-w-xl mx-auto flex flex-col gap-10">
                        {/* Heading */}
                        <ScrollReveal animation="fade">
                            <div className="flex flex-col gap-3">
                            <p className="text-white text-4xl lg:text-5xl font-black leading-tight tracking-tight font-display">Votre Table vous attend</p>
                            <p className="text-secondary-text text-lg font-normal leading-normal font-sans">Réservez votre expérience culinaire chez Tandem.</p>
                        </div>

                        {/* Step 1 */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-white text-lg font-bold flex items-center gap-2">
                                <span className="bg-[#392f28] text-secondary-text text-xs px-2 py-0.5 rounded">01</span>
                                Nombre de convives
                            </h3>
                            <div className="flex gap-3 flex-wrap">
                                {["1", "2", "3", "4", "5", "6", "8+"].map((num) => (
                                    <button
                                        key={num}
                                        onClick={() => setGuests(num)}
                                        className={cn(
                                            "flex h-10 min-w-[3rem] px-2 items-center justify-center rounded-lg border transition-colors",
                                            guests === num
                                                ? "border-primary bg-primary/20 text-primary shadow-glow font-bold"
                                                : "border-[#392f28] bg-[#181411] text-white font-medium hover:border-primary hover:bg-[#2a241f]"
                                        )}
                                    >
                                        {num}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col gap-6">
                            <h3 className="text-white text-lg font-bold flex items-center gap-2">
                                <span className="bg-[#392f28] text-secondary-text text-xs px-2 py-0.5 rounded">02</span>
                                Date & Heure
                            </h3>
                            <div className="bg-background-card rounded-xl border border-[#392f28] p-4">
                                {/* Calendar Header Mock */}
                                <div className="flex items-center justify-between mb-4 px-2 text-white font-bold">
                                    <span>Octobre 2026</span>
                                    <div className="flex gap-2">
                                        <span className="material-symbols-outlined cursor-pointer">arrow_back_ios_new</span>
                                        <span className="material-symbols-outlined cursor-pointer">arrow_forward_ios</span>
                                    </div>
                                </div>
                                {/* Days Mock */}
                                <div className="grid grid-cols-7 text-center gap-y-2 text-sm text-secondary-text mb-4">
                                    <span className="font-bold">D</span><span className="font-bold">L</span><span className="font-bold">M</span><span className="font-bold">M</span><span className="font-bold">J</span><span className="font-bold">V</span><span className="font-bold">S</span>
                                    {[1, 2, 3, 4].map(d => <span key={d} className="opacity-50">{d}</span>)}
                                    <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto shadow-glow">5</span>
                                    {[6, 7, 8, 9, 10, 11, 12].map(d => <span key={d} className="hover:bg-white/10 rounded-full w-8 h-8 flex items-center justify-center mx-auto cursor-pointer">{d}</span>)}
                                </div>
                                {/* Time Slots */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm text-secondary-text font-medium">Créneaux disponibles</label>
                                    <div className="flex gap-3 flex-wrap">
                                        <button className="px-4 py-2 rounded-lg border border-[#392f28] text-secondary-text opacity-50 cursor-not-allowed text-sm">19:00</button>
                                        {["19:30", "20:00", "20:30", "21:00"].map((t) => (
                                            <button
                                                key={t}
                                                onClick={() => setTime(t)}
                                                className={cn(
                                                    "px-4 py-2 rounded-lg border text-sm font-medium transition-colors",
                                                    time === t
                                                        ? "border-primary bg-primary text-white shadow-glow font-bold"
                                                        : "border-gold/40 text-white bg-gold/10 hover:bg-gold/20 flex items-center gap-1 group"
                                                )}
                                            >
                                                {t}
                                                {time !== t && <span className="material-symbols-outlined text-[10px] text-gold group-hover:animate-ping">circle</span>}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-white text-lg font-bold flex items-center gap-2">
                                <span className="bg-[#392f28] text-secondary-text text-xs px-2 py-0.5 rounded">03</span>
                                Préférences
                            </h3>
                            <textarea className="w-full bg-[#231e19] border border-[#392f28] rounded-xl p-4 text-white placeholder-secondary-text focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all resize-none h-32" placeholder="Allergies, occasion spéciale..."></textarea>
                        </div>

                        {/* Submit */}
                        <div className="pt-4 flex flex-col gap-4">
                            <button className="w-full bg-primary hover:bg-[#b8530d] text-white font-bold text-lg py-4 rounded-xl shadow-glow transition-all transform active:scale-[0.99] flex items-center justify-center gap-2">
                                <span>Confirmer ma réservation</span>
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                            <div className="flex items-center justify-center gap-2 text-secondary-text text-xs">
                                <span className="material-symbols-outlined text-primary text-sm">verified_user</span>
                                Confirmation instantanée par SMS & Email
                            </div>
                        </div>
                        </ScrollReveal>

                    </div>
                </section>

                {/* RIGHT PANEL: Visual & AI */}
                <section className="lg:w-1/2 xl:w-[55%] bg-[#1a1714] relative flex flex-col h-[500px] lg:h-auto border-t lg:border-t-0 border-[#392f28]">
                    {/* AI Assistant Banner */}
                    <div className="absolute top-6 left-6 right-6 z-20 pointer-events-none">
                        <div className="bg-gradient-to-r from-[#231e19] to-[#181411] border border-gold/30 rounded-xl p-5 shadow-gold-glow flex items-start gap-4 backdrop-blur-md">
                            <div className="bg-gold/20 p-2 rounded-lg text-gold shrink-0">
                                <span className="material-symbols-outlined">auto_awesome</span>
                            </div>
                            <div>
                                <p className="text-gold text-xs font-bold uppercase tracking-wider mb-1">Assistant Réservation IA</p>
                                <p className="text-white text-sm leading-relaxed">
                                    &quot;Je vous suggère la <span className="text-gold font-bold cursor-pointer underline decoration-dotted underline-offset-4 pointer-events-auto" onClick={() => setSelectedTable("12")}>Table 12</span>, près de la fenêtre, pour une ambiance plus intime ce soir.&quot;
                                </p>
                            </div>
                        </div>
                    </div>

                    <ReservationMap selectedTable={selectedTable} onSelectTable={setSelectedTable} />
                </section>
            </div>
        </>
    );
}
