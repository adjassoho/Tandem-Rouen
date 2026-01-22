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
                            <span className="text-xl font-bold tracking-widest text-white uppercase">Tandem</span>
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
                                <span>11 Rue Damiette, <br />76000 Rouen</span>
                            </li>
                            <li className="flex items-center gap-3 text-white/60 text-sm">
                                <span className="material-symbols-outlined text-base">call</span>
                                <span>+33 2 35 00 00 00</span>
                            </li>
                            <li className="flex items-center gap-3 text-white/60 text-sm">
                                <span className="material-symbols-outlined text-base">mail</span>
                                <span>bonjour@tandem-rouen.fr</span>
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Horaires</h4>
                        <ul className="space-y-2 text-sm text-white/60">
                            <li className="flex justify-between"><span>Lun - Mar</span> <span>Fermé</span></li>
                            <li className="flex justify-between"><span>Mer - Sam</span> <span>12h - 14h / 19h - 22h</span></li>
                            <li className="flex justify-between"><span>Dimanche</span> <span>12h - 15h</span></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/30 text-xs">© 2026 Tandem Rouen. Tous droits réservés.</p>
                    <div className="flex gap-4">
                        <Link className="text-white/40 hover:text-white transition-colors" href="#">Instagram</Link>
                        <Link className="text-white/40 hover:text-white transition-colors" href="#">Facebook</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
