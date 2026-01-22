import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ThemeSetter } from "@/components/ui/ThemeSetter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function ExperiencePage() {
    return (
        <>
            <ThemeSetter theme="copper" />

            {/* Section 1: La Philosophie (Hero) */}
            <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="h-full w-full bg-cover bg-center bg-fixed opacity-60 grayscale brightness-75 contrast-125"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBaD7GX6IDQcpE6dTPqWcKlQ5cJgPJcKN_3jWq6qAmaWzlf09OxVzENMPLKLSkd6g1dUzu1CWWmO3by9sg4FXe5cAIjWd0IuEFrBcA8PC1Dl1M0O2vcJrHtA23mFS3gIaWre2D2YNy61Y7nywal9YtkX51-fnBnH6aGwDCLqr2PThsVBH-ldTfy1yTuvWkMgtEoxHLOcmLlPSD3Os_1pKR4Xi8UusGtou1XaZSH36NxUoVAeBEG0ZB-8d3prCNF8HWtFR0K0_216Vg')" }}>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-background-dark/80 via-transparent to-background-dark"></div>
                </div>
                <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl animate-fade-in-up">
                    <span className="inline-block py-1 px-3 border border-primary/30 rounded-full text-primary text-xs font-bold uppercase tracking-[0.2em] mb-6 backdrop-blur-sm">
                        L&apos;Essence
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 italic leading-tight font-display">
                        La <span className="text-primary font-normal not-italic">Philosophie</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 font-light leading-relaxed max-w-2xl mx-auto font-sans tracking-wide">
                        L&apos;union parfaite du chef et du sommelier, entre tradition et modernité. Une danse culinaire où chaque geste raconte une histoire, chaque saveur réveille un souvenir.
                    </p>
                    <div className="mt-12 flex flex-col items-center">
                        <span className="material-symbols-outlined text-white/50 animate-bounce">keyboard_arrow_down</span>
                    </div>
                </div>
            </section>

            {/* Section 2: L'Atelier Culinaire (Video) */}
            <ScrollReveal>
                <section className="relative w-full bg-background-dark py-20">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-6">
                            <h2 className="text-4xl md:text-5xl font-display italic text-white leading-tight">L&apos;Atelier Culinaire</h2>
                            <div className="flex items-center gap-2 text-primary mt-4 md:mt-0">
                                <span className="material-symbols-outlined text-sm">play_circle</span>
                                <span className="text-sm uppercase tracking-widest font-sans">Immersion en cuisine</span>
                            </div>
                        </div>
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl shadow-black/50">
                            <video
                                className="w-full h-full object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                <source src="/video1.mp4" type="video/mp4" />
                                Votre navigateur ne supporte pas la lecture de vidéos.
                            </video>
                            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                                <div>
                                    <p className="text-xs text-white/70 uppercase tracking-widest mb-1">En Direct</p>
                                    <p className="text-white text-xl italic font-display">Le feu, la précision, l&apos;art.</p>
                                </div>
                                <div className="flex gap-2">
                                    <div className="w-1 h-8 bg-primary animate-pulse"></div>
                                    <div className="w-1 h-6 bg-primary/60 animate-pulse delay-75"></div>
                                    <div className="w-1 h-10 bg-primary/80 animate-pulse delay-150"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* Section 3: Galerie Immersive (Masonry) */}
            <section className="bg-surface-dark py-24 border-y border-white/5">
                <div className="container mx-auto px-6 max-w-7xl">
                    <ScrollReveal animation="fade">
                        <div className="text-center mb-16">
                            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Atmosphère</span>
                            <h2 className="text-4xl md:text-5xl mt-3 italic text-white font-display">Galerie Immersive</h2>
                        </div>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                        {/* Large Feature Item */}
                        <ScrollReveal animation="slide-left" delay={100}>
                            <div className="md:col-span-2 row-span-2 relative rounded-lg overflow-hidden group">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBxF_zxxpdJM5mMWU8rUtgCTydXFUiZNYlM78JrpLmDx-laT9Sc3u2-Qrp7fPqMZCC2YkZRf2iLIS_5texy7w1dyTEtcnLIfLG6zwPkA5zZBQHqO9s_W5fvJY3T8qRs6B0zfzLXK344g-G5Lh7QAF8AU2QOqKZTn4V8JW3sciYU3UGnRlLJYineMeWMhUWQ7gOapgWvbsGIHwHow2hAyV-WyDzpv57Q5ye2_bzYPKAeeWkuSyKY64L0BrYrkGW0K6ShKdvVLOzIdh0')" }}>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                            <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                <h3 className="text-white text-2xl highlight font-display italic">La Salle Principale</h3>
                                <p className="text-gray-300 text-sm font-sans mt-1">Lumières tamisées et intimité</p>
                            </div>
                        </div>
                        </ScrollReveal>
                        {/* Tall Item */}
                        <ScrollReveal animation="slide-right" delay={200}>
                            <div className="md:col-span-1 row-span-2 relative rounded-lg overflow-hidden group">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCiAh8CTeiGG49II8ktFqIbXjuiP9YfiAmVxg-JMmQYyvTx_HAIaXt094SNVP1_BdbHK2XolocCKRO_1ZtiSrjAFPf5gLFcLkCSF0QlBMnITlvTDefcGNi_ExY3Y4qYTzeBvk6g3jw4ZG1jaVYput-DmwRsSyzF9Khw0a311AozP4LvL8Ga1t3FupTqSr1BgoMnSxh_odt2Mx8bsKkMUJ4rMzR--541SnoiKUlSPbeLKaqeQu4PYTkQI3t2UaYM1YHKCBW6c7it7YE')" }}>
                            </div>
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                        </div>
                        </ScrollReveal>
                        {/* Standard Item 1 */}
                        <ScrollReveal animation="scale" delay={300}>
                            <div className="relative rounded-lg overflow-hidden group">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD0bZXvfcXp0VmSFor-MeW5PGVrqX6Gq4JXcx1YlTe9dhcsdzt0NmQyMJ4PTjVcGGl_UNWRITZ9kZ7_9yoiccRqEp2AWoLwTv6VmvXzQbLnYQG3XMBFTmnnT5kqMWE5I3Vd8hjQYhyCbhLBIEMiBtVbnLd20VXk5xcWtYyJaj4BYPM16ckRG5VOZ0fel830I01vvIbxmjixQ0Tvbi3SR6VmT77qnWhvJ2Qs2s3EiUDQL_ZHDTKG-FYKKU_atCB2PRikrMEjxXm5evw')" }}>
                            </div>
                        </div>
                        </ScrollReveal>
                        {/* Standard Item 2 */}
                        <ScrollReveal animation="slide-up" delay={400}>
                            <div className="md:col-span-2 relative rounded-lg overflow-hidden group">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCu2vG5mgJw0PgqipI19nV31nr1uVh1t2WQIQAzm8j794KXA6rKYQs8p4iepLO56p69ITeNVMWSJiw5dwDfV4XAjRZbkwJzRTaP2_PlhvoGlJeTKhA0KeHRkdlu5qboquwAe2da1gVPxROznYFvB2p2u0_C7M1mf2cDEqLjvslad0l1JELPTYYmK0ebmeWxff9K6sZ_a1Fmw0aRuApCp_dQBJusrl-AIqtgsBHpitNAHJt_dajxO9hUlmQPwED3hwU5fAX1VNJYqMA')" }}>
                            </div>
                            <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded text-white text-xs uppercase tracking-wider">Détails</div>
                        </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Section 4: L'Équipe */}
            <section className="bg-background-dark py-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                    <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary blur-[150px]"></div>
                </div>
                <div className="container mx-auto px-6 max-w-5xl relative z-10">
                    <ScrollReveal animation="fade">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl md:text-5xl italic text-white mb-4 font-display">Les Créateurs</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
                        </div>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                        {/* Chef Card */}
                        <ScrollReveal animation="slide-left" delay={100}>
                            <div className="flex flex-col items-center text-center group">
                            <div className="relative w-full max-w-sm aspect-[3/4] rounded-lg overflow-hidden mb-8 shadow-xl shadow-black/40">
                                <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700"
                                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCacD9vOFCuuV7IYFAATmGMRoBt276wHcenmtkPrrdFRg2t0B05QsFWciZJTERvxDxRSJuYnJiQIEl0JDSsR7EiMVnmlgxE5yt8XuEBEKKN6ee5yxzPs8aG78b4XiljlIX281Ik99Y1VCzpLczPHE6YAGtaP-VBq37RUahqkRhjXkoDZpJrLMYAHH75o4jpWjDPKDEqmykOWlS251kh8Y52y8r8xug9yAv5Bt8JjRICrDaGEigZ8sMiiTIUHJ0VLDJb98iVyed2LIk')" }}>
                                </div>
                                <div className="absolute inset-0 border border-white/10 rounded-lg"></div>
                            </div>
                            <h3 className="text-2xl text-white font-display mb-2">Antoine Lefèvre</h3>
                            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-4">Chef Exécutif</p>
                            <p className="text-gray-400 font-sans font-light leading-relaxed max-w-sm">
                                &quot;La cuisine est un art éphémère qui ne prend vie que lorsqu&apos;elle est partagée. Je cherche l&apos;émotion pure dans la simplicité du produit.&quot;
                            </p>
                        </div>
                        </ScrollReveal>
                        {/* Sommelier Card */}
                        <ScrollReveal animation="slide-right" delay={200}>
                            <div className="flex flex-col items-center text-center group">
                            <div className="relative w-full max-w-sm aspect-[3/4] rounded-lg overflow-hidden mb-8 shadow-xl shadow-black/40">
                                <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700"
                                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAyxJqNRtBai-Jb2_VcJd5F2fUYubATMHXWWFYv2h_cmJMHTOejTG9sOJV18fCg58rUUk-GPWfOLdNH6CcU4ffnpBA2XbF0Mm92vuWL2WxUvrhw_TboUJ12Le4ekEgto8Ey38iRXhyj0sYUjvK3mmGkJm5bFRD-HgP-Z7g72O3eAFr-UG-GdF7TiO4Arcw1vin1UUbXM_Jn-n_FMvhHy4jIOq5mtw7h2aMxBdz4DIYJKxCsJ0whxWL-GjgiKMq3YzUYIDPy9Q5XlzE')" }}>
                                </div>
                                <div className="absolute inset-0 border border-white/10 rounded-lg"></div>
                            </div>
                            <h3 className="text-2xl text-white font-display mb-2">Claire Dubois</h3>
                            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-4">Chef Sommelier</p>
                            <p className="text-gray-400 font-sans font-light leading-relaxed max-w-sm">
                                &quot;Le vin est la mémoire de la terre. Mon rôle est de créer des harmonies qui élèvent chaque plat vers une nouvelle dimension sensorielle.&quot;
                            </p>
                        </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* AI Floating Element */}
            <div className="fixed bottom-6 right-6 z-40 max-w-sm w-full md:w-auto animate-pulse hover:animate-none">
                <div className="bg-[#1a1a1a]/70 backdrop-blur-md p-4 rounded-lg shadow-2xl border border-primary/20 flex items-start gap-4 transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex-shrink-0 bg-primary/20 p-2 rounded-full">
                        <span className="material-symbols-outlined text-primary">auto_awesome</span>
                    </div>
                    <div>
                        <h5 className="text-primary text-xs font-bold uppercase tracking-wide mb-1">Expérience Personnalisée</h5>
                        <p className="text-white text-sm font-sans leading-snug">
                            Selon vos visites précédentes, nous vous recommandons une <span className="text-primary font-medium">table en alcôve</span> pour votre prochain dîner.
                        </p>
                        <Link href="/reservation">
                            <Button variant="ghost" className="mt-2 p-0 h-auto text-xs text-white/70 hover:text-white underline decoration-primary decoration-1 underline-offset-2 hover:bg-transparent">
                                Réserver cette table
                            </Button>
                        </Link>
                    </div>
                    <button className="text-gray-500 hover:text-white ml-auto -mt-1 -mr-1">
                        <span className="material-symbols-outlined text-sm">close</span>
                    </button>
                </div>
            </div>
        </>
    );
}
