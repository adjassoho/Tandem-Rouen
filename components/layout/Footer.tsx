import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-[#0f0f0f] border-t border-white/5 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="material-symbols-outlined text-primary text-2xl">restaurant_menu</span>
                            <span className="text-xl font-bold tracking-widest text-white uppercase">Le mojo Rouen</span>
                        </div>
                        <p className="text-white/50 text-sm leading-relaxed">
                            Bistronomie moderne et vins d'auteurs. L'alliance de la tradition et de l'innovation au service du goût.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Navigation</h4>
                        <ul className="space-y-3">
                            <li><Link className="text-white/60 hover:text-primary transition-colors text-sm" href="/carte">La Carte</Link></li>
                            <li><Link className="text-white/60 hover:text-primary transition-colors text-sm" href="/production">Nos Producteurs</Link></li>
                            <li><Link className="text-white/60 hover:text-primary transition-colors text-sm" href="/reservation">Privatisation</Link></li>
                            <li><Link className="text-white/60 hover:text-primary transition-colors text-sm" href="#">Presse</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Nous Trouver</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-white/60 text-sm">
                                <span className="material-symbols-outlined text-base mt-0.5">location_on</span>
                                <span>28 rue des bons enfants,<br/>Rouen, France 76000 </span>
                            </li>
                            <li className="flex items-center gap-3 text-white/60 text-sm">
                                <span className="material-symbols-outlined text-base">call</span>
                                <span>+33 2 35 88 59 55</span>
                            </li>
                            <li className="flex items-center gap-3 text-white/60 text-sm">
                                <span className="material-symbols-outlined text-base">mail</span>
                                <span>claem@orange.fr</span>
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Horaires</h4>
                        <ul className="space-y-2 text-sm text-white/60">
                            <li className="flex justify-between"><span>Lun - Dim</span> <span>Fermé</span></li>
                            <li className="flex justify-between"><span>Mar - Mer - Jeu</span> <span>12h - 14h / 19h - 21h</span></li>
                            <li className="flex justify-between"><span>Ven - Sam</span> <span>12h - 14h / 19h - 21h30</span></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/30 text-xs">© 2026 Le mojo Rouen. Tous droits réservés.</p>
                    <div className="flex gap-4">
                        <Link className="text-white/40 hover:text-white transition-colors" href="https://www.instagram.com/lemojorouen/" target="_blank" rel="noopener noreferrer">Instagram</Link>
                        <Link className="text-white/40 hover:text-white transition-colors" href="https://web.facebook.com/profile.php?id=61555378817893&ref=NONE_xav_ig_profile_page_web" target="_blank" rel="noopener noreferrer">Facebook</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
