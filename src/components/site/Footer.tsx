import { Facebook, Instagram, Twitter, Youtube, Heart } from "lucide-react";
import logo from "@/assets/galdilogo.png";

export function Footer() {
  return (
    <footer className="bg-[oklch(0.22_0.02_150)] text-[oklch(0.92_0.01_100)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="bg-white/10 rounded-full p-1.5">
              <img src={logo} alt="Logo GALDI" width={36} height={36} className="h-9 w-9" />
            </div>
            <span className="font-display text-2xl font-semibold">GALDI</span>
          </div>
          <p className="mt-5 max-w-md text-sm text-white/70 leading-relaxed">
            Ensemble, offrons à chaque enfant un foyer, une éducation et un avenir. GALDI
            accompagne depuis plus de 15 ans les enfants vulnérables avec amour et dignité.
          </p>
          <div className="flex items-center gap-3 mt-6">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Réseau social"
                className="h-9 w-9 grid place-items-center rounded-full bg-white/10 hover:bg-primary transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-base text-white mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><a href="#apropos" className="hover:text-white">À propos</a></li>
            <li><a href="#actions" className="hover:text-white">Nos actions</a></li>
            <li><a href="#galerie" className="hover:text-white">Galerie</a></li>
            <li><a href="#temoignages" className="hover:text-white">Témoignages</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base text-white mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>123 Avenue de l'Espoir</li>
            <li>75001 Paris, France</li>
            <li>+33 1 23 45 67 89</li>
            <li>contact@galdi.org</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>© {new Date().getFullYear()} GALDI. Tous droits réservés.</p>
          <p className="inline-flex items-center gap-1.5">
            Fait avec <Heart className="h-3.5 w-3.5 text-primary" /> pour les enfants
          </p>
        </div>
      </div>
    </footer>
  );
}
