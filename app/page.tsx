import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAaAQJjtcC5W4X3lFBokuhTU5d9QyMMHAsHvO5Ykmfn2pJg4MNqv5-fpBb4ik_t-br0VnjcKetGchf05xAo9faDOx8JtkkDgWmn6WANosgAms2lQnQe3kArnCgiVp6S4jdH4AIZqPspIrFNxN0b4RIHFespTV39-xdfuwhNBP89LLexa1tWGXeq_wzjzF1HT86ZonvEMFW1boN1R7BRKkJjJzITgpVvrpUubypezxKTvNxO-KlPuMZ2iWGNbclzHJCkL-BFIB-gK6o')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/70 via-[#1a1a1a]/40 to-[#1a1a1a]"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center gap-8 mt-16 animate-fade-in-up">
          <div className="space-y-4">
            <h2 className="text-primary text-lg md:text-xl italic font-light tracking-wide">
              Bistronomie Connectée
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight text-white text-shadow font-display">
              Cuisine de Marché <br />
              <span className="italic font-light">& Vins d&apos;Auteurs</span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl">
            Une expérience culinaire augmentée au cœur de Rouen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/reservation">
              <Button variant="primary" size="lg" className="h-14 px-8 text-base">
                <span>Réserver une table</span>
                <span className="text-xs font-normal opacity-75 ml-2 normal-case">(Disponibilité en temps réel)</span>
              </Button>
            </Link>
            <Link href="/experience">
              <Button variant="outline" size="lg" className="h-14 px-8 text-base font-bold bg-white/10 hover:bg-white/20 backdrop-blur-sm">
                <span className="material-symbols-outlined text-xl">play_circle</span>
                <span>Découvrir le concept</span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
          <span className="material-symbols-outlined text-4xl">
            keyboard_arrow_down
          </span>
        </div>
      </section>

      {/* Suggestion du Chef */}
      <section className="py-20 px-6 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal animation="fade">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 font-display">
                La Suggestion du Chef
              </h2>
              <p className="text-white/60 text-lg">
                Une sélection personnalisée selon vos goûts.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="group flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-primary/50 transition-all">
                <span className="material-symbols-outlined text-lg group-hover:text-primary">
                  spa
                </span>
                <span className="text-sm font-medium">Végétarien</span>
              </button>
              <button className="group flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-primary/50 transition-all">
                <span className="material-symbols-outlined text-lg group-hover:text-primary">
                  grain
                </span>
                <span className="text-sm font-medium">Sans Gluten</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary bg-primary/10 text-primary transition-all shadow-[0_0_10px_rgba(242,185,13,0.2)]">
                <span className="material-symbols-outlined text-lg fill-current">
                  wine_bar
                </span>
                <span className="text-sm font-bold">Accords Vins (IA)</span>
              </button>
            </div>
          </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <ScrollReveal animation="slide-left" delay={100}>
              <div className="relative group rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              {/* Using img for external resource, or Image with whitelisted domain */}
              <img
                alt="Pavé de Bœuf Normand with roasted root vegetables"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJghO8BaZZ1bgT7G_CPyWzzaMuqR5LzsBHvT3i1WKIIHfXhEQNC_UCBFJ0m8dGus3ZLVoiocg1yQdbDLzQMEfURYgY2KxXcUbEZQOLwIdoXC9K64ROD1J0njLRTScuZDF8t3PUvEo_aZau5XrbAKW7Woo1cJMB7hfnXVT4vE3HF3LgYj4khATuU-Kt-7y0UpDpVQtf7tHevubZ8sadmakSDWTUVgg_zUiGm7w4PjNmZ6_G68MGO5fEtHq8lGuMCL2MbHSMOVIXxLM"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl font-bold text-white font-display">
                    Pavé de Bœuf Normand
                  </h3>
                  <span className="text-2xl font-light text-primary italic font-display">
                    34€
                  </span>
                </div>
                <p className="text-white/80 mt-2 text-lg">
                  Servi avec ses légumes racines rôtis au miel de Normandie.
                </p>
              </div>
            </div>
            </ScrollReveal>
            <ScrollReveal animation="slide-right" delay={200}>
              <div className="flex flex-col justify-center gap-8">
              <div className="space-y-6">
                <p className="text-white/70 text-lg leading-relaxed font-sans">
                  Une pièce d&apos;exception sélectionnée chez notre éleveur
                  partenaire. La viande est maturée 21 jours pour une tendreté
                  incomparable, puis saisie au beurre noisette.
                </p>
                <div className="relative overflow-hidden rounded-xl bg-surface-dark border border-white/10 p-6 animate-shimmer bg-gradient-to-r from-surface-dark via-[#2a2a2a] to-surface-dark bg-[length:200%_100%]">
                  <div className="relative z-10 flex gap-4">
                    <div className="shrink-0 size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">
                        auto_awesome
                      </span>
                    </div>
                    <div>
                      <h4 className="text-primary font-bold text-sm tracking-widest uppercase mb-1">
                        Conseil Sommelier IA
                      </h4>
                      <p className="text-white font-medium text-xl italic mb-2 font-display">
                        "S&apos;accorde parfaitement avec le Saint-Émilion Grand
                        Cru 2018."
                      </p>
                      <p className="text-white/50 text-sm font-sans">
                        Basé sur vos préférences pour les vins tanniques et
                        boisés.
                      </p>
                    </div>
                  </div>
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
                </div>
              </div>
              <div className="flex gap-4">
                <Link href="/carte" className="flex-1">
                  <Button className="w-full bg-white text-[#1a1a1a] h-12 hover:bg-gray-200">
                    Ajouter à la commande
                  </Button>
                </Link>
                <button className="flex items-center justify-center size-12 rounded-md border border-white/20 text-white hover:border-primary hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">favorite</span>
                </button>
              </div>
            </div>
            </ScrollReveal>
          </div>
          <ScrollReveal animation="slide-up" delay={300}>
            <div className="flex justify-center border-t border-white/5 pt-12">
            <Link href="/carte" className="group flex items-center gap-3 px-8 py-3 rounded-md border border-primary text-primary font-bold uppercase tracking-widest text-sm hover:bg-primary hover:text-[#1a1a1a] transition-all duration-300">
              Consulter la Carte Complète
              <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Le Duo */}
      <section className="py-24 bg-[#141414] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal animation="slide-left">
            <div className="order-2 md:order-1 space-y-8">
            <div>
              <h2 className="text-primary text-lg italic tracking-wide mb-3 font-display">
                Le Duo
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight font-display">
                L&apos;Art de Recevoir
              </h3>
            </div>
            <p className="text-white/70 text-lg leading-relaxed font-sans">
              Au-delà de l&apos;assiette, Tandem est une histoire de complicité.
              Notre Chef et notre Sommelier orchestrent un ballet sensoriel
              unique, où la précision du geste culinaire rencontre
              l&apos;intuition du service. Laissez-vous guider dans une
              atmosphère feutrée où chaque détail est pensé pour sublimer
              l&apos;instant.
            </p>
            <div className="pt-2">
              <Link href="/experience">
                <Button variant="outline" className="px-8 py-3 text-sm tracking-widest group">
                  S&apos;immerger dans l&apos;expérience
                  <span className="material-symbols-outlined transition-transform group-hover:rotate-45 ml-2">explore</span>
                </Button>
              </Link>
            </div>
          </div>
          </ScrollReveal>
          <ScrollReveal animation="slide-right" delay={100}>
            <div className="order-1 md:order-2 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
            <img
              alt="Salle de restaurant élégante et sombre"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8dAwogwYNGNQWgEFid8_dN9cVHBX_sRdRP8f-Qb53e6D1exon1p_mxLywExJn32m4OHmdy01ShkS2-VgTc-UME4ri6JMaikAFF9aY8gV7vBcZ8wRKjFEPxUmRtQWNEkljOL4Zg0N_M9W97MSoFme2BuvwDGNfsZ8ygiomJeGwP-nUYm40j6oGX86NdeyfxGg-_Ohm0bDzPY2HhYniJqfYOMTvRM8Ij27b06lHkA9ZQnDZl0CaSiS3y-wF-HJxcVX9lFytS8wzZIA"
            />
            <div className="absolute inset-4 border border-white/10 z-20 pointer-events-none"></div>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Circuit Court */}
      <section className="relative py-24 bg-[#111] overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none grayscale"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCJJhi8W3_uzTuywe942xXgAJpgzbi6pBsbAaEPK-hCYlCnatOfHwEbWqIPsZRTZuRSDaSqZ-BCVU7-3HNEdjok6uGisKyK4_Dz6l2DIGwHSMkPozS6iD8NOFCkva3T_Os7ZR6tcIlfYEd0OvkkFNUp_iwA41xv2H18s9mm2Brx-wqx5PtVTnHa2LnEYlSfDhfDVlb3XAW4FWKT9NE0Uz2uTG4nLFUzAmn4IGwALoHGbN40psc3tjckiVrmujBYXU30om-hMqI6LuM')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <ScrollReveal animation="fade">
            <div className="text-center mb-16">
            <h2 className="text-primary text-xl italic mb-2 font-display">
              Circuit Court
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white font-display">
              Nos Producteurs Locaux
            </h3>
            <p className="text-white/60 mt-4 max-w-2xl mx-auto">
              Nous sourçons 90% de nos ingrédients dans un rayon de 100km autour
              de Rouen.
            </p>
          </div>
          </ScrollReveal>
          <ScrollReveal animation="scale" delay={100}>
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-[#1a1a1a] rounded-2xl border border-white/10 shadow-2xl overflow-hidden group mb-12">
            <div
              className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/1.09,49.44,8.5/1280x600?access_token=placeholder')] bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity duration-500"
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent"></div>

            {/* Pin 1 */}
            <div className="absolute top-[40%] left-[45%] flex flex-col items-center gap-2 group/pin cursor-pointer">
              <div className="relative">
                <span className="material-symbols-outlined text-4xl text-primary drop-shadow-[0_0_10px_rgba(242,185,13,0.8)] animate-bounce">
                  location_on
                </span>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-1 bg-black/50 blur-sm rounded-full"></div>
              </div>
              <div className="bg-white text-black px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover/pin:opacity-100 transition-opacity transform translate-y-2 group-hover/pin:translate-y-0 text-center min-w-[150px]">
                <p className="font-bold text-sm">Maraîcher Rouen</p>
                <p className="text-xs text-gray-600">Légumes Racines</p>
              </div>
            </div>

            {/* Pin 2 */}
            <div className="absolute top-[30%] left-[60%] flex flex-col items-center gap-2 group/pin cursor-pointer">
              <div className="relative">
                <span
                  className="material-symbols-outlined text-4xl text-primary drop-shadow-[0_0_10px_rgba(242,185,13,0.8)] animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                >
                  location_on
                </span>
              </div>
              <div className="bg-white text-black px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover/pin:opacity-100 transition-opacity transform translate-y-2 group-hover/pin:translate-y-0 text-center min-w-[150px]">
                <p className="font-bold text-sm">Ferme de Bray</p>
                <p className="text-xs text-gray-600">Bœuf Normand</p>
              </div>
            </div>
          </div>
          </ScrollReveal>
          <ScrollReveal animation="slide-up" delay={200}>
            <div className="flex justify-center">
            <Link href="/production">
              <Button variant="outline" className="rounded-full shadow-lg border-white/10 bg-surface-dark hover:shadow-[0_0_15px_rgba(242,185,13,0.15)] group">
                <span>Explorer notre Terroir</span>
                <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1 ml-2">map</span>
              </Button>
            </Link>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* AI Assistant Floating */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
        <div className="bg-surface-dark border border-white/10 p-4 rounded-2xl rounded-br-none shadow-2xl max-w-[280px] pointer-events-auto transform transition-all hover:scale-105 origin-bottom-right">
          <div className="flex items-center gap-2 mb-2">
            <div className="size-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-bold text-white/80 uppercase tracking-wide">Assistant Tandem</span>
          </div>
          <p className="text-sm text-white leading-snug">
            Bonjour, une question sur les allergènes ou besoin d&apos;une table au calme ?
          </p>
        </div>
        <button className="bg-primary hover:bg-gold-accent text-[#1a1a1a] size-14 rounded-full shadow-[0_0_15px_rgba(242,185,13,0.4)] flex items-center justify-center transition-transform hover:rotate-12 pointer-events-auto">
          <span className="material-symbols-outlined text-3xl">chat_bubble</span>
        </button>
      </div>
    </>
  );
}
