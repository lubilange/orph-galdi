import { useState } from "react";
import {
  GraduationCap,
  Stethoscope,
  Utensils,
  Home,
  Smile,
  Heart,
  Phone,
  Mail,
  MapPin,
  Quote,
  Users,
  HandHeart,
  Sparkles,
  Send,
} from "lucide-react";
import { toast } from "sonner";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import educationImg from "@/assets/education.jpg";
import healthImg from "@/assets/health.jpg";
import foodImg from "@/assets/food.jpg";
import housingImg from "@/assets/housing.jpg";
import activitiesImg from "@/assets/activities.jpg";
import g1 from "@/assets/gallery1.jpg";
import g2 from "@/assets/gallery2.jpg";
import g3 from "@/assets/gallery3.jpg";
import g4 from "@/assets/gallery4.jpg";
import g5 from "@/assets/gallery5.jpg";
import g6 from "@/assets/gallery6.jpg";

/* ---------- HERO ---------- */
export function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-[var(--color-cream)]"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -left-20 h-72 w-72 rounded-full bg-[var(--color-sage)]/40 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-[var(--color-accent)]/50 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
        <div className="fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-4 py-1.5 text-xs font-medium text-primary border border-primary/15">
            <Sparkles className="h-3.5 w-3.5" /> Orphelinat solidaire depuis 2009
          </span>
          <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-display font-semibold leading-[1.05] text-foreground">
            Donner à chaque enfant <span className="text-primary italic">un avenir</span> à construire.
          </h1>
          <p className="mt-6 text-lg text-foreground/70 max-w-xl leading-relaxed">
            Chez GALDI, nous offrons un foyer aimant, une éducation de qualité et un
            accompagnement quotidien aux enfants en situation de vulnérabilité.
            Chaque geste compte, chaque sourire change une vie.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#don"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-medium hover:opacity-90 transition shadow-lg shadow-primary/20"
            >
              <Heart className="h-4 w-4" /> Faire un don
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-7 py-3.5 text-sm font-medium text-foreground hover:bg-accent transition"
            >
              Nous contacter
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { n: "1 200+", l: "Enfants aidés" },
              { n: "180", l: "Bénévoles" },
              { n: "45", l: "Projets actifs" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl font-display font-semibold text-primary">{s.n}</div>
                <div className="text-xs text-foreground/60 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/15">
            <img
              src={heroImg}
              alt="Enfants souriants à l'orphelinat GALDI"
              width={1600}
              height={1100}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-3 max-w-xs hidden sm:flex">
            <div className="h-12 w-12 rounded-full bg-[var(--color-accent)] grid place-items-center">
              <HandHeart className="h-6 w-6 text-primary" />
            </div>
            <div>
              <div className="text-sm font-semibold">98% de réussite</div>
              <div className="text-xs text-foreground/60">scolarisation des enfants accueillis</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
export function About() {
  return (
    <section id="apropos" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
        <div className="reveal relative">
          <img
            src={aboutImg}
            alt="Bénévole serrant un enfant dans ses bras"
            width={1200}
            height={900}
            loading="lazy"
            className="rounded-3xl shadow-xl w-full object-cover aspect-[4/3]"
          />
          <div className="absolute -bottom-6 -right-6 bg-[var(--color-cream)] rounded-2xl p-5 shadow-lg hidden md:block">
            <div className="font-display text-3xl text-primary font-semibold">15 ans</div>
            <div className="text-sm text-foreground/70">d'engagement auprès des enfants</div>
          </div>
        </div>

        <div className="reveal">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">À propos</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display font-semibold leading-tight">
            Une famille, une maison, un avenir pour chaque enfant.
          </h2>
          <p className="mt-6 text-foreground/70 leading-relaxed">
            Fondé en 2009 par un collectif de familles engagées, GALDI est né d'une conviction
            simple : aucun enfant ne devrait grandir seul. Depuis, nous avons construit un foyer
            chaleureux où plus de 1 200 enfants ont retrouvé sécurité, éducation et sourires.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-5">
            {[
              { icon: HandHeart, title: "Notre mission", text: "Offrir un environnement aimant et sécurisé à chaque enfant." },
              { icon: Users, title: "Nos valeurs", text: "Bienveillance, dignité, écoute et transparence." },
              { icon: Sparkles, title: "Notre vision", text: "Que chaque enfant puisse rêver et accomplir son avenir." },
              { icon: Smile, title: "Notre équipe", text: "Éducateurs, soignants et bénévoles à temps plein." },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl bg-[var(--color-cream)] p-5">
                <c.icon className="h-6 w-6 text-primary" />
                <div className="mt-3 font-display font-semibold">{c.title}</div>
                <p className="text-sm text-foreground/70 mt-1.5">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- ACTIONS ---------- */
const actions = [
  { icon: GraduationCap, title: "Éducation", img: educationImg, text: "Scolarisation, soutien scolaire et accès à la formation pour tous." },
  { icon: Stethoscope, title: "Santé", img: healthImg, text: "Suivi médical complet, prévention et soutien psychologique." },
  { icon: Utensils, title: "Nourriture", img: foodImg, text: "Trois repas équilibrés par jour, préparés avec soin." },
  { icon: Home, title: "Hébergement", img: housingImg, text: "Un toit sûr, chaleureux et adapté à chaque âge." },
  { icon: Smile, title: "Activités", img: activitiesImg, text: "Sport, art, musique et sorties pour s'épanouir." },
];

export function Actions() {
  return (
    <section id="actions" className="py-24 lg:py-32 bg-[var(--color-cream)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl reveal">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Nos actions</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display font-semibold leading-tight">
            Cinq engagements quotidiens pour leur bien-être.
          </h2>
          <p className="mt-5 text-foreground/70 leading-relaxed">
            Notre approche globale couvre tous les besoins essentiels des enfants accueillis,
            pour leur permettre de grandir sereinement et de construire leur avenir.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {actions.map((a, i) => (
            <article
              key={a.title}
              className="reveal group rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={a.img}
                  alt={a.title}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="h-11 w-11 rounded-xl bg-[var(--color-accent)] grid place-items-center">
                  <a.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 font-display text-2xl font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{a.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- GALLERY ---------- */
const gallery = [
  { src: g1, alt: "Atelier peinture", h: "row-span-1" },
  { src: g2, alt: "Plantation d'arbres", h: "row-span-2" },
  { src: g3, alt: "Fête d'anniversaire", h: "row-span-1" },
  { src: g4, alt: "Coin lecture", h: "row-span-2" },
  { src: g5, alt: "Événement communautaire", h: "row-span-1" },
  { src: g6, alt: "Mains tendues", h: "row-span-1" },
];

export function Gallery() {
  return (
    <section id="galerie" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 reveal">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Galerie</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-display font-semibold">
              Des instants de vie, partagés ensemble.
            </h2>
          </div>
          <p className="text-foreground/70 max-w-md">
            Quelques moments capturés au fil des activités, événements et journées passées avec les enfants.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {gallery.map((g, i) => (
            <div
              key={i}
              className={`reveal relative overflow-hidden rounded-2xl group ${g.h}`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white text-sm font-medium">{g.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- DON ---------- */
export function Don() {
  const [amount, setAmount] = useState(50);
  const presets = [20, 50, 100, 250];
  return (
    <section id="don" className="py-24 lg:py-32 bg-gradient-to-br from-[var(--color-sage)]/30 via-[var(--color-cream)] to-[var(--color-accent)]/40">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-5 gap-10 items-center">
        <div className="lg:col-span-3 reveal">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Faire un don</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display font-semibold leading-tight">
            Votre générosité change leur quotidien.
          </h2>
          <p className="mt-5 text-foreground/70 leading-relaxed max-w-xl">
            Chaque don, même modeste, finance les repas, la scolarité, les soins et les activités
            de nos enfants. Nous nous engageons à une transparence totale : 92 % des dons vont
            directement aux enfants.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-foreground/80">
            <li>• 20 $ — Un mois de fournitures scolaires pour un enfant</li>
            <li>• 50 $ — Une consultation médicale et ses médicaments</li>
            <li>• 100 $ — Une semaine de repas équilibrés pour 5 enfants</li>
          </ul>
        </div>

        <div className="lg:col-span-2 reveal" style={{ transitionDelay: "0.15s" }}>
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-border/50">
            <div className="font-display text-xl font-semibold">Je choisis mon don</div>
            <div className="mt-5 grid grid-cols-4 gap-2">
              {presets.map((p) => (
                <button
                  key={p}
                  onClick={() => setAmount(p)}
                  className={`rounded-xl py-3 text-sm font-medium transition ${
                    amount === p
                      ? "bg-primary text-primary-foreground"
                      : "bg-[var(--color-cream)] text-foreground hover:bg-accent"
                  }`}
                >
                  {p}$
                </button>
              ))}
            </div>
            <div className="mt-4">
              <label className="text-xs text-foreground/60">Montant libre ($)</label>
              <input
                type="number"
                min={1}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="mt-1 w-full rounded-xl border border-input bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
            <button
              onClick={() => toast.success("Merci ! Le système de paiement sécurisé sera bientôt disponible.")}
              className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground py-3.5 text-sm font-medium hover:opacity-90 transition"
            >
              <Heart className="h-4 w-4" /> Donner {amount}$ maintenant
            </button>
            <p className="mt-3 text-xs text-foreground/60 text-center">
              Paiement sécurisé · Reçu fiscal envoyé par email
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
const testimonials = [
  {
    name: "Aïcha M.",
    role: "Bénévole depuis 4 ans",
    text: "GALDI m'a appris ce qu'est l'engagement vrai. Voir un enfant retrouver le sourire après quelques mois, c'est un cadeau pour la vie.",
  },
  {
    name: "Jean-Pierre L.",
    role: "Donateur régulier",
    text: "Je donne chaque mois car je sais où va mon argent. La transparence et le sérieux de l'équipe sont remarquables.",
  },
  {
    name: "Sophie R.",
    role: "Marraine",
    text: "Parrainer un enfant via GALDI a profondément changé ma vie. Les nouvelles régulières et les rencontres sont précieuses.",
  },
];

export function Testimonials() {
  return (
    <section id="temoignages" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl reveal">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Témoignages</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display font-semibold leading-tight">
            Ils donnent de leur temps, ils racontent.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="reveal rounded-3xl bg-[var(--color-cream)] p-8 flex flex-col"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <Quote className="h-8 w-8 text-primary/60" />
              <blockquote className="mt-4 text-foreground/80 leading-relaxed flex-1">
                « {t.text} »
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-primary/15 grid place-items-center font-display font-semibold text-primary">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-foreground/60">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
export function Contact() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Merci ! Votre message a bien été envoyé. Nous vous répondrons rapidement.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[var(--color-cream)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12">
        <div className="reveal">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Contact</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display font-semibold leading-tight">
            Parlons. Une question, une envie d'aider ?
          </h2>
          <p className="mt-5 text-foreground/70 leading-relaxed">
            Notre équipe vous répond du lundi au vendredi, de 9h à 18h. N'hésitez pas, nous serons
            ravis d'échanger avec vous.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              { Icon: MapPin, label: "Adresse", val: "123 Avenue de l'Espoir, 75001 Paris" },
              { Icon: Phone, label: "Téléphone", val: "+33 1 23 45 67 89" },
              { Icon: Mail, label: "Email", val: "contact@galdi.org" },
            ].map((c) => (
              <li key={c.label} className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-white grid place-items-center shadow-sm">
                  <c.Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-foreground/60">{c.label}</div>
                  <div className="font-medium">{c.val}</div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl overflow-hidden shadow-md border border-border/50 aspect-[16/10]">
            <iframe
              title="Carte GALDI"
              src="https://www.openstreetmap.org/export/embed.html?bbox=2.32%2C48.85%2C2.36%2C48.87&layer=mapnik"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="reveal bg-white rounded-3xl shadow-xl p-8 border border-border/50 h-fit"
          style={{ transitionDelay: "0.1s" }}
        >
          <div className="font-display text-xl font-semibold">Envoyez-nous un message</div>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <Field label="Nom" name="nom" required />
            <Field label="Email" name="email" type="email" required />
          </div>
          <div className="mt-4">
            <Field label="Sujet" name="sujet" required />
          </div>
          <div className="mt-4">
            <label className="text-xs uppercase tracking-wider text-foreground/60">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              className="mt-1.5 w-full rounded-xl border border-input bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>
          <button
            type="submit"
            className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground py-3.5 text-sm font-medium hover:opacity-90 transition"
          >
            <Send className="h-4 w-4" /> Envoyer le message
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-foreground/60">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-xl border border-input bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
      />
    </div>
  );
}
