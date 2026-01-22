import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function CartePage() {
    return (
        <>
            <div className="fixed inset-0 z-0 pointer-events-none opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-700 via-background-dark to-black"></div>

            <main className="relative z-10 flex-grow max-w-5xl mx-auto w-full px-6 py-12">
                {/* Page Header */}
                <ScrollReveal animation="fade">
                    <div className="mb-12 text-center md:text-left">
                    <h2 className="text-5xl md:text-6xl font-display italic font-light text-white mb-4">La Carte du Marché</h2>
                    <p className="text-gray-400 text-lg max-w-2xl font-sans font-light">
                        Une cuisine de saison sublimée par l&apos;intelligence artificielle. Découvrez nos suggestions et laissez notre Sommelier IA vous guider.
                    </p>
                </div>
                </ScrollReveal>

                {/* Smart Filters */}
                <ScrollReveal animation="slide-up" delay={100}>
                    <div className="flex flex-wrap items-center gap-4 mb-16 border-b border-white/5 pb-8">
                    <span className="text-gray-500 uppercase text-xs tracking-widest font-sans mr-2">Filtres Intelligents</span>
                    <button className="group flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 transition-all">
                        <span className="material-symbols-outlined text-green-400 text-[20px]">eco</span>
                        <span className="text-sm font-medium">Végétarien</span>
                    </button>
                    <button className="group flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 transition-all">
                        <span className="material-symbols-outlined text-amber-200 text-[20px]">grain</span>
                        <span className="text-sm font-medium">Sans Gluten</span>
                    </button>
                    <button className="relative group flex items-center gap-2 px-5 py-2 rounded-full border border-primary/50 bg-primary/10 hover:bg-primary/20 transition-all ml-auto md:ml-0 shadow-glow">
                        <span className="absolute -top-1 -right-1 flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                        </span>
                        <span className="material-symbols-outlined text-primary text-[20px]">smart_toy</span>
                        <span className="text-sm font-bold text-primary">Accords Vins IA</span>
                    </button>
                </div>
                </ScrollReveal>

                {/* Menu Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    {/* Left Column: Starters & Main Categories */}
                    <div className="md:col-span-7 flex flex-col gap-16">
                        {/* Entrées */}
                        <ScrollReveal animation="slide-left" delay={200}>
                            <section>
                            <h3 className="text-3xl text-primary font-display italic mb-8 flex items-center gap-4">
                                Entrées
                                <span className="h-px bg-white/10 flex-grow"></span>
                            </h3>
                            <div className="space-y-8">
                                <MenuEntry title="Velouté de Butternut Rôti" price="14€" desc="Éclats de châtaignes, huile de noisette, croustillant de sauge." />
                                <MenuEntry title="Carpaccio de Saint-Jacques" price="18€" desc="Agrumes de Sicile, poivre de Timut, radis blue meat." />
                                <MenuEntry title="Œuf Parfait Bio" price="16€" desc="Crème de champignons sauvages, mouillettes au beurre demi-sel." />
                            </div>
                        </section>

                        {/* Plats */}
                        <section>
                            <h3 className="text-3xl text-primary font-display italic mb-8 flex items-center gap-4">
                                Plats
                                <span className="h-px bg-white/10 flex-grow"></span>
                            </h3>
                            <div className="space-y-10">
                                <MenuEntry title="Filet de Bar de Ligne" price="26€" desc="Risotto crémeux aux asperges, émulsion au champagne." />

                                {/* Featured Item Container */}
                                <div className="@container">
                                    <div className="relative bg-surface-accent/30 border border-white/5 rounded-xl p-1 md:-mx-4 transition-colors hover:border-white/10">
                                        <div className="flex flex-col xl:flex-row">
                                            {/* Dish Image & Details */}
                                            <div className="p-5 flex-1">
                                                <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4">
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                                                    <img className="w-full h-full object-cover transform hover:scale-105 transition-duration-700 transition-transform" alt="Close up of gourmet grilled beef steak with sauce" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuxSz6b-17d_u-9izUmp-R-hjwZZTUsky0UDmVCnaOCJ5vs4vXwdopuDO8ZXLpm0eB9Paqad7PqmRpHFAUWrmJ16v4qLpVK3bseV3toPqH6Ue6W2bvmKXUckF714DoWTTok1ArZ4tpm5guE_F_FGhUxHrX0pevxtdvABHPIoaOpeE4CW4tf5pEW-n7IRTxqSJgeKu-iuHpiDZWeWUtM2FalIdGx9H3ScFHTAuObS5u7oOP3JAHnQdnIfb3VSzk6zUW2fcTnRBbAGU" />
                                                    <div className="absolute bottom-3 left-3 z-20 bg-primary text-black text-xs font-bold px-2 py-1 rounded">Suggestion du Chef</div>
                                                </div>
                                                <h4 className="text-2xl text-white font-bold mb-2">Pavé de Bœuf Normand</h4>
                                                <p className="text-gray-400 text-sm font-sans mb-4">Jus corsé, mousseline de céleri rave, noisettes torréfiées et légumes racines glacés.</p>
                                                <div className="flex items-center justify-between mt-auto">
                                                    <span className="text-2xl text-primary font-display italic">28€</span>
                                                </div>
                                            </div>
                                            {/* AI Divider (Desktop) */}
                                            <div className="hidden xl:flex items-center justify-center w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent my-4"></div>
                                            {/* AI Divider (Mobile) */}
                                            <div className="xl:hidden w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent my-0"></div>
                                            {/* AI Sommelier Widget */}
                                            <div className="p-5 w-full xl:w-[280px] bg-gradient-to-b from-primary/5 to-transparent relative overflow-hidden flex flex-col justify-between">
                                                <div className="absolute top-0 right-0 p-3 opacity-20">
                                                    <span className="material-symbols-outlined text-6xl text-primary">psychology</span>
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-2 mb-3">
                                                        <span className="material-symbols-outlined text-primary text-sm">auto_awesome</span>
                                                        <span className="text-xs font-bold uppercase tracking-widest text-primary">Sommelier IA</span>
                                                    </div>
                                                    <div className="flex items-start gap-3 mb-4">
                                                        <img className="w-12 h-32 object-cover rounded shadow-lg border border-white/10" alt="Bottle of premium red wine Saint Emilion" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9isKVJ6yj8xRmQaehlUqsCGYTYEWFQHpcESpI9E2U_uH2vAFo5RuKDqnbbKNR6jztgpmPtYuS-pdTFm3yv7VNBJ5JwAanIuyG89rfiuw_XUdlzMTT-FRC1hjzwO1pcGDwidynZezcuAuqDxEZNc8uUyHSR0nkRDez-IAqsW9Z32UZY5b_qYOgl0rQcSvUT3p0IrLe0H90wIkIJj7zK_N6WaWaAcQcMweqp8xgguyMm-gDMZQY2VzMleWCLHuR1Bo-pmHzv7l2UM4" />
                                                        <div>
                                                            <h5 className="text-white font-bold leading-tight mb-1 text-sm">Saint-Émilion Grand Cru</h5>
                                                            <p className="text-xs text-gray-500 mb-2">Château La Grâce Dieu</p>
                                                            <p className="text-[11px] text-primary italic leading-relaxed">&quot;La structure tannique de ce vin souligne parfaitement le caractère fumé du bœuf.&quot;</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Link href="/reservation" className="w-full mt-2">
                                                    <button className="w-full group relative flex items-center justify-center gap-2 overflow-hidden rounded-lg border border-primary/30 bg-surface-dark px-3 py-2 text-xs font-medium text-white transition-all hover:border-primary hover:bg-primary/10">
                                                        <span>Personnaliser l&apos;accord</span>
                                                        <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">tune</span>
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Featured Item */}

                                <MenuEntry title="Risotto aux Cèpes (V)" price="22€" desc="Parmesan Reggiano 24 mois, tuile de pain, huile de truffe blanche." />
                            </div>
                        </section>
                        </ScrollReveal>
                    </div>

                    {/* Right Column: Desserts & Info */}
                    <div className="md:col-span-5 flex flex-col gap-12 md:pl-8 md:border-l md:border-white/5">
                        {/* Desserts */}
                        <ScrollReveal animation="slide-right" delay={200}>
                            <section>
                            <h3 className="text-3xl text-primary font-display italic mb-8 flex items-center gap-4">
                                Desserts
                                <span className="h-px bg-white/10 flex-grow"></span>
                            </h3>
                            <div className="space-y-8">
                                <MenuEntry title="Paris-Brest Revisité" price="12€" desc="Crème praliné noisette, insert coulant, choux craquelin." />
                                <MenuEntry title="Tarte Citron Yuzu" price="11€" desc="Meringue italienne brûlée, sablé breton, gelée de citron vert." />
                                <MenuEntry title="Chocolat Grand Cru" price="13€" desc="Ganache 70%, glace fève de tonka, tuile grué de cacao." />
                            </div>
                        </section>

                        {/* Experience Box */}
                        <div className="bg-surface-accent p-6 rounded-xl border border-white/5 relative overflow-hidden mt-8">
                            <div className="absolute inset-0 z-0 bg-cover bg-center opacity-20 mix-blend-overlay" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBFVhdEhCbeOib77foebwMgnYVPYBzWKyc9DZ9kUTIiOXiKDRstWbeusjD0jGWZS5-wR2o7K1MxnnqAFK2-pHUYseqJnrN_9WHnCOYRBSnaFNlspbVNGDpgvbmf8rV5rQCk0l7z5UIP-FnjUBPkfDxbxVryvU-Qq12UM2WF6I4mWLgQ1uvVr_YB2jaxBfv_M6fJF3ihDsratxbpUMJfL7sRy2-DqHm4Lzyw0pXqiJGiPfyKmKMi5VGmZqCvCjekeVoxvVvfYOp79zg')" }}></div>
                            <div className="relative z-10 text-center">
                                <span className="material-symbols-outlined text-primary text-4xl mb-3">local_bar</span>
                                <h4 className="text-xl text-white font-bold mb-2">L&apos;Expérience Vin</h4>
                                <p className="text-gray-400 text-sm font-sans mb-4">Laissez-vous tenter par notre sélection de vins au verre, curée par nos experts et l&apos;IA.</p>
                                <Link href="#" className="text-primary hover:text-white text-sm font-bold uppercase tracking-widest border-b border-primary hover:border-white pb-1 transition-all">Voir la carte des vins</Link>
                            </div>
                        </div>
                        </ScrollReveal>
                    </div>
                </div>
            </main>
        </>
    );
}

function MenuEntry({ title, price, desc }: { title: string; price: string; desc: string }) {
    return (
        <div className="group flex justify-between items-end cursor-pointer">
            <div className="max-w-[80%]">
                <h4 className="text-xl text-white font-medium group-hover:text-primary transition-colors">{title}</h4>
                <p className="text-gray-500 text-sm mt-1 font-sans">{desc}</p>
            </div>
            <span className="text-xl text-primary font-display italic">{price}</span>
        </div>
    );
}
