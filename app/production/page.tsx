"use client";
import Link from "next/link";
import { ThemeSetter } from "@/components/ui/ThemeSetter";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function ProductionPage() {
    const [activeProducer, setActiveProducer] = useState<string | null>("ferme-de-bray");

    return (
        <>
            <ThemeSetter theme="copper" />

            {/* Hero Section */}
            <ScrollReveal animation="fade">
                <section className="relative px-6 py-12 md:py-16 lg:px-20 max-w-[1440px] mx-auto w-full flex flex-col items-center text-center pt-32">
                <div className="max-w-3xl space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] bg-gradient-to-br from-white via-white to-gray-500 bg-clip-text text-transparent font-display">
                        Au Cœur du <span className="text-primary">Terroir Normand</span>
                    </h1>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                        Une cuisine sincère commence par des produits d&apos;exception. Nous tissons des liens directs avec les artisans qui façonnent l&apos;identité culinaire de Le mojo Rouen, privilégiant le circuit court et le respect des saisons.
                    </p>
                    {/* AI Traceability Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 shadow-lg backdrop-blur-sm mt-4">
                        <span className="material-symbols-outlined text-primary !text-[18px]">verified_user</span>
                        <span className="text-primary/90 text-xs font-bold uppercase tracking-wider">Traçabilité IA : 100% Local & Vérifié</span>
                    </div>
                </div>
            </section>

            {/* Interactive Map Section */}
            <section className="flex-1 w-full px-4 md:px-8 pb-8 flex flex-col items-center">
                <div className="relative w-full max-w-[1440px] h-[700px] bg-[#221810] rounded-2xl overflow-hidden border border-[#392f28] shadow-2xl group/map">
                    {/* Stylized Map Background */}
                    <div className="absolute inset-0 w-full h-full opacity-60 mix-blend-overlay pointer-events-none"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBUqdO5VZAM7UZp8vX9arpt8vDMfly0NGwQE-A2nUMB5QNh-b1SoJJp8iStE_CtStOPyjcLxM6v_cI8Be5cfs5rd2vwV2R4mEGwSVNxJWIH8ANDG2ZMPUWyHSsU3057joOCTzZJz7J9sya0BVSdneOl2d9fDsEkQXX4ays7b326Z2YZQvsG9WCCJz_3RRaQ2Ams4IRaLzPiU9PNZjk2O5dniTiSTEGNPX5Fes3S0VlmNCek3VxZI9hQbKJkS3MdLFTlohZ9QwoQq9g')", backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(100%) contrast(120%) brightness(0.4)" }}>
                    </div>

                    {/* SVG Overlay for Map Lines (Abstract) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100,200 Q250,150 400,250 T700,300" fill="none" stroke="#d46211" strokeWidth="2"></path>
                        <path d="M50,400 Q300,350 500,500 T900,450" fill="none" stroke="#d46211" strokeDasharray="5,5" strokeWidth="1"></path>
                        <circle cx="20%" cy="40%" fill="url(#grad1)" opacity="0.1" r="150"></circle>
                        <defs>
                            <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" id="grad1" r="50%">
                                <stop offset="0%" stopColor="#d46211" stopOpacity="1"></stop>
                                <stop offset="100%" stopColor="#1a1a1a" stopOpacity="0"></stop>
                            </radialGradient>
                        </defs>
                    </svg>

                    {/* Filter Controls (Floating Top Left) */}
                    <div className="absolute top-6 left-6 z-20 flex flex-col gap-3">
                        <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-1 opacity-70 ml-1">Filtrer par type</h3>
                        <div className="flex flex-wrap gap-2 max-w-[300px]">
                            <FilterButton icon="grid_view" label="Tout" active />
                            <FilterButton icon="potted_plant" label="Légumes" />
                            <FilterButton icon="set_meal" label="Poissons" />
                            <FilterButton icon="lunch_dining" label="Viandes" />
                            <FilterButton icon="local_pizza" label="Fromages" />
                        </div>
                    </div>

                    {/* Map Pins */}
                    <MapPin id="ferme-de-bray" top="35%" left="65%" icon="agriculture" label="Ferme de Bray" active={activeProducer === "ferme-de-bray"} onClick={() => setActiveProducer("ferme-de-bray")} />
                    <MapPin id="pecheurs" top="20%" left="30%" icon="sailing" label="Pêcheurs de Fécamp" active={activeProducer === "pecheurs"} onClick={() => setActiveProducer("pecheurs")} />
                    <MapPin id="maraicher" top="80%" left="25%" icon="eco" label="Maraîcher de la Vallée" active={activeProducer === "maraicher"} onClick={() => setActiveProducer("maraicher")} /> {/* Adjusted bottom to top % for simplicity */}
                    <MapPin id="vergers" top="45%" left="45%" icon="nutrition" label="Vergers de Normandie" active={activeProducer === "vergers"} onClick={() => setActiveProducer("vergers")} />

                    {/* Producer Spotlight Card (Active State) */}
                    {activeProducer === "ferme-de-bray" && (
                        <div className="absolute top-6 right-6 bottom-6 w-full max-w-[360px] bg-[#1a1a1a]/95 backdrop-blur-xl border border-[#392f28] rounded-xl shadow-2xl p-0 flex flex-col overflow-hidden animate-slideIn z-30">
                            <div className="h-48 w-full relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent z-10"></div>
                                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBfCqRjVwckodImQsYkiOLDAqNsWDT0Wjweawk76qCzeIaGN7569UOBjpLwbw8Bkz32uQkaZqVUT8Lo-LZWohFK2CKlt8Aikzv3IZT2sKW27sJHK8DmD32adSSXNSkmeKRFMsrcoClN8-5JFwqtln_IAarUU3jR7gqECELizl29c62VC_wKhPrnDouUH7t-Rcf1t1TEIzsF_K8zWmSVTyK2a6ajkLnV-rvoB1xAaXNPb8z5HFl9JDSf7c3gzaA90-5O50FzZ2UUIxU')" }}></div>
                                <div className="absolute top-4 right-4 z-20">
                                    <button className="size-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80" onClick={() => setActiveProducer(null)}>
                                        <span className="material-symbols-outlined !text-[20px]">close</span>
                                    </button>
                                </div>
                                <div className="absolute bottom-4 left-4 z-20">
                                    <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Fromages AOP</span>
                                </div>
                            </div>
                            <div className="p-6 flex flex-col gap-4 flex-1 overflow-y-auto">
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-1">Ferme de Bray</h2>
                                    <div className="flex items-center gap-1 text-[#b9a89d] text-sm">
                                        <span className="material-symbols-outlined !text-[16px]">location_on</span>
                                        <span>Neufchâtel-en-Bray (28km)</span>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    Depuis 4 générations, la famille Dubois affine le Cœur de Neufchâtel avec passion. Leurs vaches pâturent dans les vallées humides du Pays de Bray, donnant au lait une richesse unique.
                                </p>
                                <div className="w-full h-px bg-white/10 my-1"></div>
                                <div className="space-y-3">
                                    <h4 className="text-xs font-bold text-primary uppercase tracking-widest">À la carte ce soir</h4>
                                    <div className="flex gap-3 items-start">
                                        <div className="size-12 rounded bg-[#27201c] shrink-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCGDvLxktQgGwzW0z-cpqE80tWzDv3c3ZE9ol07mDyzVKVKYx2vN32vZ1AH--or1sQdT4XLbbuMws-UKCEaQ3lsfCRNjfAACsMYBXhuyLjg4_CpinlgBrbUHMcmQ8sRXWqCOeNw-do_HwBUzDKkMZd5YZT5ScWa-iM0XfKqcfzT152kEaAis3OnadWbapBVqVAPzCoel34GGyf65bIA-U-VOkpd_4hqOOjh90REz38-tjyqELChjo-5dYPzhjfhFYMXOH3Tl37Ms18')" }}></div>
                                        <div>
                                            <p className="text-sm font-bold text-white">L&apos;Assiette du Berger</p>
                                            <p className="text-xs text-gray-500">Cœur de Neufchâtel rôti, miel de pommier.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 items-start">
                                        <div className="size-12 rounded bg-[#27201c] shrink-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBIX8wYigdFQoJSGxIc_G6yhdlXhkk4bTbcULyGOH4N_ScfaFIYSJy4MG7BCdFnHsXK3sEFd4rnIry4RDs2q3Pk_5p_SD4oy_8FgA6ou7atiGdDUDHj2bb8wPTMXnxg_f0rfqSweaoqMgF6UL5mqhYAgRkWS_a5NL7XcN827fEujT_TQr5bLDvJQiEZCrWr0PvFBPXnjtAYnK2i7Cl6Ve2c1EzUrG4odWK6DKgbZpTLf4A-2mV8rMrputwzoiyyrUpcPxCCt9sgXzE')" }}></div>
                                        <div>
                                            <p className="text-sm font-bold text-white">Salade Brayonne</p>
                                            <p className="text-xs text-gray-500">Pommes, noix, dés de fromage frais.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-auto pt-4">
                                    <Link href="/experience" className="w-full">
                                        <button className="w-full h-10 flex items-center justify-center gap-2 rounded-lg border border-white/20 hover:bg-white/5 text-sm font-medium transition-colors">
                                            <span>Voir le reportage complet</span>
                                            <span className="material-symbols-outlined !text-[16px]">arrow_forward</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Map Legend */}
                    <div className="absolute bottom-6 left-6 z-20 flex flex-col gap-2 pointer-events-none">
                        <div className="bg-black/60 backdrop-blur px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2 w-fit">
                            <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                            <span className="text-[10px] text-gray-300 uppercase tracking-wider font-bold">Données en temps réel</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Categories */}
            <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-20 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <CategoryCard title="Le Potager" count="5 Producteurs" img="https://lh3.googleusercontent.com/aida-public/AB6AXuCiYZUTTh1F3FkxNcgpVwl2pN6FAr6LSlEQobgaXkic0pCLkAeZKJefCc6qnu8cihyzkkb9lQfcbsu2PsFZ2EzDAS3vRdkQP-ccsUGS4IXGg6g1Mtxfj5WtZMqbCNEE0nIL-khyzIUnzcoloqMg6M-tTYhU2U1_VSVISvadVu8uw46H9bIQ_tcUGMPNaXYFUXmQbUs4so8iAjPrjw6pWeHbpLamVQ_XNzURXWjvidLyVkHN0LPsoIYwO-HSHgTjY7RCX7iAuwzkHxM" />
                    <CategoryCard title="La Mer" count="3 Pêcheurs" img="https://lh3.googleusercontent.com/aida-public/AB6AXuDy0LEY_fJCc-I3lMcXAOzUewvc2V5PVl9c8aAZ4EadJ04zSePIjAczui62eUxCrvRbLEo_Gxyo3e4LMR7rLlKWoBvusEVlq_q6zzxQCt7VcacDpPOvdlwpAn709PTjwz57dp26zrvaFg9VuW9nRUZq4HXzjHEbmTt46a_8ns7hvEUEm5UZxn9eiByoy_rP62otWWYfd401TAysmOHeWRkLVODB-CQCxp7TB-UT8wkG7Kh7GFM2WNuQUjiEUa7-I0BuRRs_es0r5JE" />
                    <CategoryCard title="L'Élevage" count="4 Éleveurs" img="https://lh3.googleusercontent.com/aida-public/AB6AXuDdiEsdkyNCQEriQOUeCK2yJHgdgGZQ2BvpowCRiV1CC_zqwtTNns32naH1_bTeO_OAYiKbw_7_91iiVSTOkZUAWSQ7Q2q2XxelE7Ok2-nx9z9ssYcxEbWWrZFHR7V_u_stWA13rv14rCwlSJ71oVIufD2cd2I4FjjW9qzrWSzEGqoHSArLNOHxez6WDLN4UX6RNmd1Rf0vL5LdObNC9FwC_MM_wUvJ5OLVGj91ftiDGHcLjaO9TMCRYQLq7ygvNH7SPREQOYW4gfA" />
                    <CategoryCard title="La Cave" count="8 Domaines" img="https://lh3.googleusercontent.com/aida-public/AB6AXuDywPc3xAN40Yjo6UOt3GcUEKmjc2YF4_MIiuzYcVX3QmGkB3ZvfLts4DKGlL9kxZrqOfPmpxvfHPdeS1E10TE_UxIA1Tm7YcN7tT8jGe9ZIL0J0hrIg-eDUx8pOUwNeyX7ixWeUuBKYmsqH97xx-U1QsOV-jd9ryz7CxDI0YrYrAPLObtIakUm-s0oJAFRFvHgx5pjqrn3aY1L7VCt_H2qoHpLZ2j__n-7om3rXyp67MrTd3RBYW-iHqoBZZOjETsKxQjSB-G2QBc" />
                </div>
            </section>
            </ScrollReveal>
        </>
    );
}

function FilterButton({ icon, label, active }: { icon: string; label: string; active?: boolean }) {
    return (
        <button className={cn(
            "flex items-center gap-2 h-9 px-4 rounded-full border transition-all",
            active ? "bg-primary text-white shadow-lg border-primary hover:scale-105" : "bg-[#1a1a1a]/80 backdrop-blur text-gray-300 border-white/10 hover:border-primary/50 hover:text-white"
        )}>
            <span className="material-symbols-outlined !text-[18px]">{icon}</span>
            <span className="text-xs font-bold">{label}</span>
            {/* Remove grid_view if logic requires */}
        </button>
    );
}

function MapPin({ id, top, left, icon, label, active, onClick }: { id: string; top: string; left: string; icon: string; label: string; active: boolean; onClick: () => void }) {
    return (
        <div className="absolute z-20 group/pin" style={{ top, left }}>
            <button
                onClick={onClick}
                className={cn(
                    "relative flex items-center justify-center rounded-full transition-transform hover:scale-110 duration-300 shadow-lg",
                    active ? "size-12 bg-[#1a1a1a] border-2 border-primary text-primary" : "size-10 bg-[#1a1a1a] border border-white/30 text-white hover:bg-primary hover:border-primary"
                )}>
                <span className="material-symbols-outlined !text-[20px]">{icon}</span>
            </button>
            {active && <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping pointer-events-none"></div>}
            <div className="absolute top-14 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/80 px-3 py-1 rounded text-xs font-bold text-white opacity-0 group-hover/pin:opacity-100 transition-opacity pointer-events-none">
                {label}
            </div>
        </div>
    );
}

function CategoryCard({ title, count, img }: { title: string; count: string; img: string }) {
    return (
        <Link href="#" className="group relative overflow-hidden rounded-xl aspect-[4/3] flex items-end p-6 border border-[#392f28] hover:border-primary/50 transition-colors">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${img}')` }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="relative z-10">
                <h3 className="text-white text-lg font-bold mb-1">{title}</h3>
                <p className="text-primary text-xs font-medium opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">{count}</p>
            </div>
        </Link>
    );
}
