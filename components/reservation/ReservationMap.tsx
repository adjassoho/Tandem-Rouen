"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

export function ReservationMap({
    selectedTable,
    onSelectTable,
}: {
    selectedTable: string | null;
    onSelectTable: (id: string) => void;
}) {
    return (
        <div className="w-full h-full relative overflow-hidden flex items-center justify-center bg-[#181411]">
            {/* Background Texture mock */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#392f28 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>

            {/* Restaurant Walls/Layout Container */}
            <div className="relative w-[80%] h-[80%] border-4 border-[#392f28] rounded-2xl bg-[#181411] shadow-2xl overflow-hidden p-8">
                {/* Windows (Top) */}
                <div className="absolute top-0 left-1/4 right-1/4 h-2 bg-[#2a241f] border-b border-[#392f28] flex justify-center items-center">
                    <span className="text-[8px] text-secondary-text uppercase tracking-widest -mt-4">Vue Seine</span>
                </div>
                {/* Kitchen Area (Bottom) */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#1f1a16] border-t border-[#392f28] flex items-center justify-center">
                    <span className="text-[#392f28] font-black uppercase text-2xl opacity-20 tracking-widest">CUISINE</span>
                </div>
                {/* Entrance (Right) */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-20 bg-[#1f1a16] border-l border-[#392f28] flex items-center justify-center">
                    <span className="text-[8px] text-secondary-text -rotate-90">Entrée</span>
                </div>

                {/* TABLES LAYOUT */}
                <TableSeat id="01" top="10%" left="10%" type="round-small" selected={selectedTable === "01"} onSelect={() => onSelectTable("01")} />

                {/* Table 12 (Suggested) */}
                <div className="absolute top-[10%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group cursor-pointer z-10" onClick={() => onSelectTable("12")}>
                    <div className="relative">
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gold text-black text-[10px] font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap opacity-100 animate-bounce">
                            Suggérée pour vous
                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gold rotate-45"></div>
                        </div>
                        <div className={cn(
                            "w-20 h-20 rounded-lg border-2 flex items-center justify-center transition-all duration-300",
                            selectedTable === "12"
                                ? "bg-primary/20 border-primary shadow-glow"
                                : "bg-[#231e19] border-gold shadow-gold-glow animate-pulse-gold"
                        )}>
                            <span className={cn("font-bold text-sm", selectedTable === "12" ? "text-primary" : "text-gold")}>12</span>
                        </div>
                    </div>
                    {/* Chairs */}
                    <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-4 h-10 bg-gold/30 rounded-l-md"></div>
                    <div className="absolute -right-5 top-1/2 -translate-y-1/2 w-4 h-10 bg-gold/30 rounded-r-md"></div>
                </div>

                <TableSeat id="03" top="10%" right="10%" type="round-small" selected={selectedTable === "03"} onSelect={() => onSelectTable("03")} />
                <TableSeat id="04" top="50%" left="10%" type="rect" selected={selectedTable === "04"} onSelect={() => onSelectTable("04")} />
                <TableSeat id="05" top="50%" right="10%" type="square" selected={selectedTable === "05"} onSelect={() => onSelectTable("05")} />
                <TableSeat id="06" bottom="25%" left="15%" type="round-small" selected={selectedTable === "06"} onSelect={() => onSelectTable("06")} />
                <TableSeat id="07" bottom="25%" left="50%" type="rect-large" selected={selectedTable === "07"} onSelect={() => onSelectTable("07")} label="Grande Table 07" />
            </div>

            {/* Legend */}
            <div className="absolute bottom-4 left-6 right-6 flex justify-center gap-6 pointer-events-none">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#231e19] border border-[#392f28]"></div>
                    <span className="text-[10px] text-secondary-text uppercase">Disponible</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary/20 border border-primary"></div>
                    <span className="text-[10px] text-primary uppercase">Sélection</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-gold/20 border border-gold"></div>
                    <span className="text-[10px] text-gold uppercase">Suggestion IA</span>
                </div>
            </div>
        </div>
    );
}

function TableSeat({ id, top, left, right, bottom, type, selected, onSelect, label }: any) {
    const styles: any = { top, left, right, bottom };

    // Size logic matching HTML
    let containerClass = "w-16 h-16 rounded-full"; // round-small
    if (type === 'rect') containerClass = "w-24 h-12 rounded-lg";
    if (type === 'square') containerClass = "w-12 h-12 rounded-lg";
    if (type === 'rect-large') containerClass = "w-28 h-14 rounded-lg";

    // Transform logic: 'rect' and 'square' in HTML were centered differently in CSS (translate Y), 
    // here we might rely on absolute positioning. 
    // To match HTML exactly:
    // 04: top-1/2 left-12 -translate-y-1/2
    // 05: top-1/2 right-12 -translate-y-1/2
    // 07: bottom-24 left-1/2 -translate-x-1/2

    // We'll simplify for React component by passing styles or using specific logic if generic fails.
    // For now we use the style object provided.

    const isCenteredX = !left && !right;
    const isCenteredY = !top && !bottom;

    // Adjust specific positions to match HTML logic if needed
    let transform = "";
    if (type === 'rect' || type === 'square') transform += " translateY(-50%)"; // Center vertically for mid rows
    if (id === '07' || id === '12') transform += " translateX(-50%)";

    return (
        <div
            className="absolute flex flex-col items-center gap-2 group cursor-pointer"
            style={{ ...styles, transform }}
            onClick={onSelect}
        >
            <div className={cn(
                "border-2 flex items-center justify-center transition-all duration-300",
                containerClass,
                selected
                    ? "bg-primary/20 border-primary shadow-glow scale-105"
                    : "bg-[#231e19] border-[#392f28] hover:border-primary hover:scale-105 hover:shadow-[0_0_10px_rgba(212,98,17,0.4)]"
            )}>
                <span className={cn("font-bold text-xs", selected ? "text-primary" : "text-secondary-text")}>
                    {label || id}
                </span>
            </div>
            {/* Draw chairs for round tables visually if needed, but HTML only had chairs for 01 and 12. */}
            {id === '01' && (
                <div className="flex gap-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-8 justify-between pointer-events-none">
                    <div className="w-4 h-8 bg-[#392f28] rounded-l-full opacity-50"></div>
                    <div className="w-4 h-8 bg-[#392f28] rounded-r-full opacity-50"></div>
                </div>
            )}
        </div>
    )
}
