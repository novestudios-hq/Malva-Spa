/**
 * HACIENDA HERBARIUM — Malva Spa
 * A quiet-luxury Mexican botanical retreat: deep forest surfaces, sand paper cards,
 * terracotta price marks, editorial asymmetry, and calm tactile interaction.
 */
import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Clock3,
  Flower2,
  Instagram,
  Leaf,
  MapPin,
  Menu,
  MessageCircle,
  Sparkles,
  X,
} from "lucide-react";

type Service = {
  name: string;
  price: string;
  duration?: string;
  detail?: string;
};

const couples: Service[] = [
  { name: "Momento Místico", duration: "60 min", price: "$1,150", detail: "2 masajes relajantes con velas" },
  { name: "Vida Sin Estrés", duration: "50 min", price: "$1,810", detail: "2 masajes de tejido profundo + 2 pedicure spa" },
  { name: "Elementos Spa", duration: "50 min", price: "$990", detail: "2 masajes de relajación profunda con piedras calientes y aromaterapia" },
  { name: "Elixir Renovador", duration: "50 min + 30 min", price: "$1,650", detail: "2 masajes relajantes + 2 faciales hidratantes" },
  { name: "Grata Compañía", duration: "50 min + 10 min", price: "$1,150", detail: "2 masajes de tejido profundo + reflexología" },
  { name: "Dúo Acompañante", duration: "50 min", price: "$1,100", detail: "2 masajes Malva Spa" },
];

const bodyTreatments: Service[] = [
  { name: "Masaje reductivo", duration: "45 min", price: "$550" },
  { name: "Exfoliación de espalda", duration: "25 min", price: "$520" },
  { name: "Exfoliación cuerpo completo", duration: "50 min", price: "$890" },
  { name: "Envolvente de Barro", price: "$1,379" },
  { name: "Envolvente Vino", duration: "115 min", price: "$1,380" },
  { name: "Envolvente de Chocolate", price: "$1,390" },
];

const facials: Service[] = [
  { name: "Facial hidratante", price: "$550" },
  { name: "Facial limpieza profunda", price: "$690" },
  { name: "Facial anti-edad", price: "$890" },
  { name: "Facial control acné", price: "$780" },
  { name: "Facial aclarante", price: "$630" },
];

const nailCare: Service[] = [
  { name: "Pedicure regular", price: "$320" }, { name: "Manicure regular", price: "$360" },
  { name: "Pedi spa + gel", price: "$420" }, { name: "Mani spa + gel", price: "$440" },
  { name: "Aplicación de gel", price: "$190" }, { name: "Retiro de gel", price: "$60" },
  { name: "Retiro de acrílico", price: "$160" }, { name: "Aplicación rubber", price: "$260" },
  { name: "Pedicure caballero", price: "$350" }, { name: "Manicure caballero", price: "$320" },
  { name: "Vitamina gel", price: "$140" }, { name: "Diseño francés", price: "$220" },
  { name: "Uñas softgel", price: "$420" }, { name: "Retiro softgel", price: "$110" },
];

const waxingGroups = [
  { label: "Cuerpo Completo", items: [
    ["Pies", "$85"], ["Medias piernas", "$320"], ["Piernas completas", "$540"], ["Muslos", "$340"], ["Axila", "$120"], ["Entre glúteo", "$98"], ["Brazos", "$360"], ["Espalda", "$495"], ["Brasileño", "$420"], ["Bikini", "$280"], ["Bikini latino", "$320"], ["Glúteos", "$220"], ["Vientre", "$340"], ["Línea de vientre", "$70"], ["Medios brazos", "$290"],
  ] },
  { label: "Facial", items: [["Bigote", "$94"], ["Frente", "$120"], ["Nuca", "$145"], ["Patillas", "$135"], ["Ceja", "$145"], ["Barbilla", "$138"], ["Cara completa", "$525"]] },
  { label: "Hombre", items: [["Espalda", "$560"], ["Piernas completas", "$590"], ["Cara", "$430"], ["Abdomen", "$280"], ["Brazos completos", "$420"]] },
];

const kids: Service[] = [
  { name: "Masaje Jungla", price: "$310" }, { name: "Facial Arcoíris", price: "$380" },
  { name: "Manicure", price: "$260" }, { name: "Pedicure", price: "$270" },
  { name: "Esmaltado", price: "$80" }, { name: "Gelish niña", price: "$110" },
];

function PriceRow({ service }: { service: Service }) {
  return (
    <div className="price-row">
      <div className="price-copy">
        <h3>{service.name}</h3>
        {service.detail && <p>{service.detail}</p>}
      </div>
      <div className="price-meta">
        {service.duration && <span>{service.duration}</span>}
        <strong>{service.price}</strong>
      </div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <a className="brand-lockup" href="#inicio" onClick={closeMenu} aria-label="Malva Spa, inicio">
          <img src="/manus-storage/malva-botanical-mark_5b66015a.png" alt="Símbolo botánico de Malva Spa" />
          <span><b>Malva</b><small>S P A</small></span>
        </a>
        <nav className={`main-nav ${menuOpen ? "active" : ""}`} aria-label="Navegación principal">
          <a href="#pareja" onClick={closeMenu}>Rituales</a>
          <a href="#menu" onClick={closeMenu}>Menú</a>
          <a href="#contacto" onClick={closeMenu}>Visítanos</a>
          <a className="nav-whatsapp" href="https://wa.me/" target="_blank" rel="noreferrer" onClick={closeMenu}><MessageCircle size={16} /> WhatsApp</a>
        </nav>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen}>
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-image" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <div className="eyebrow light"><Flower2 size={15} /> Puerto Vallarta · México</div>
            <p className="hero-wordmark">Malva <span>Spa</span></p>
            <h1>Un ritual para<br /><em>volver a ti.</em></h1>
            <p className="hero-intro">Nail salon, day spa y bienestar en un espacio pensado para detener el tiempo y cuidar cada detalle.</p>
            <div className="hero-actions">
              <a className="button button-sand" href="https://wa.me/" target="_blank" rel="noreferrer"><MessageCircle size={18} /> Reserva por WhatsApp</a>
              <a className="text-link light" href="#menu">Explorar el menú <ArrowDownRight size={18} /></a>
            </div>
          </div>
          <div className="hero-hours"><Clock3 size={17} /><span><b>Horario</b> Lun–Sáb 09:00–20:00<br />Dom 10:00–18:00</span></div>
          <span className="hero-note">Calle Tucán 144 · Puerto Vallarta</span>
        </section>

        <section className="opening section-pad" aria-label="Presentación">
          <div className="opening-mark"><img src="/manus-storage/malva-botanical-mark_5b66015a.png" alt="" /></div>
          <div className="opening-copy">
            <div className="eyebrow"><Leaf size={15} /> Un refugio botánico</div>
            <h2>El bienestar <em>empieza</em><br />en el cuidado.</h2>
          </div>
          <p className="opening-text">Cada visita a Malva Spa es una invitación a respirar más lento. Descubre tratamientos corporales, faciales, cuidado de uñas y rituales para compartir, en el corazón de Puerto Vallarta.</p>
        </section>

        <section className="couples-section section-pad" id="pareja">
          <div className="section-intro light">
            <div><div className="eyebrow light"><Sparkles size={15} /> Para compartir</div><h2>Paquetes<br /><em>en pareja</em></h2></div>
            <p>Seis formas de hacer una pausa a dos. Cada ritual se vive con el tiempo y la atención que merece.</p>
          </div>
          <div className="couples-list">
            {couples.map((service, index) => <article className="couple-card" key={service.name}><span className="card-number">0{index + 1}</span><PriceRow service={service} /></article>)}
          </div>
        </section>

        <section className="body-section section-pad" id="menu">
          <div className="body-visual"><img src="/manus-storage/malva-menu-still-life_ecb19045.jpg" alt="Bodegón de elementos naturales para spa" /></div>
          <div className="body-menu paper-panel">
            <div className="eyebrow"><Leaf size={15} /> Tratamientos</div>
            <h2>Rituales para<br /><em>el cuerpo</em></h2>
            <div className="service-list">{bodyTreatments.map((service) => <PriceRow key={service.name} service={service} />)}</div>
          </div>
        </section>

        <section className="facials-section section-pad">
          <div className="section-title-block"><span>03</span><div><div className="eyebrow"><Flower2 size={15} /> Rostro</div><h2>Faciales</h2></div><p>Momentos de calma y atención para una piel luminosa.</p></div>
          <div className="facial-grid">{facials.map((service) => <article key={service.name} className="facial-card"><Flower2 size={19} /><h3>{service.name}</h3><strong>{service.price}</strong></article>)}</div>
        </section>

        <section className="nails-section section-pad">
          <div className="nails-heading"><div className="eyebrow light"><Sparkles size={15} /> Manos y pies</div><h2>Pequeños gestos.<br /><em>Gran cuidado.</em></h2></div>
          <div className="nails-panel"><h3>Cuidado de Pies y Manos</h3><div className="nail-grid">{nailCare.map((service) => <PriceRow key={service.name} service={service} />)}</div></div>
        </section>

        <section className="wax-section section-pad">
          <div className="wax-lead"><div className="eyebrow"><Leaf size={15} /> Depilaciones</div><h2>Suavidad que<br /><em>se siente.</em></h2><p>Una selección precisa de servicios para rostro y cuerpo.</p></div>
          <div className="wax-groups">{waxingGroups.map((group) => <article className="wax-group" key={group.label}><h3>{group.label}</h3>{group.items.map(([name, price]) => <div className="compact-price" key={name}><span>{name}</span><b>{price}</b></div>)}</article>)}</div>
        </section>

        <section className="kids-section section-pad">
          <div className="kids-content"><div className="eyebrow light"><Flower2 size={15} /> Para las pequeñas</div><h2>Menú <em>Kids</em></h2><p>Una pausa de color y cuidado, hecha especialmente para ellas.</p><div className="kids-grid">{kids.map((service) => <div key={service.name}><span>{service.name}</span><b>{service.price}</b></div>)}</div></div>
          <div className="kids-photo"><img src="/manus-storage/malva-ritual-leaves_fa45ff4c.jpg" alt="Ritual botánico en Malva Spa" /></div>
        </section>

        <section className="visit-section section-pad" id="contacto">
          <div className="visit-copy"><div className="eyebrow"><MapPin size={15} /> Encuéntranos</div><h2>Tu pausa empieza<br /><em>aquí.</em></h2><p>Calle Tucán 144, 48328 Puerto Vallarta, Jal., México</p><a className="text-link" href="mailto:malva.spa@hotmail.com">malva.spa@hotmail.com <ArrowUpRight size={17} /></a><div className="visit-actions"><a className="button button-forest" href="https://wa.me/" target="_blank" rel="noreferrer"><MessageCircle size={18} /> Escribir por WhatsApp</a><a className="social-link" href="https://www.instagram.com/malva_spamx/" target="_blank" rel="noreferrer"><Instagram size={17} /> @malva_spamx</a></div></div>
          <div className="map-wrap"><iframe title="Ubicación de Malva Spa" src="https://www.google.com/maps?q=Calle%20Tuc%C3%A1n%20144%2C%2048328%20Puerto%20Vallarta%2C%20Jal.%2C%20M%C3%A9xico&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand"><img src="/manus-storage/malva-botanical-mark_5b66015a.png" alt="" /><p className="footer-wordmark">Malva <span>Spa</span></p></div>
        <div className="footer-hours"><span>Horario de atención</span><p>Lun–Sáb 09:00–20:00<br />Dom 10:00–18:00</p></div>
        <div className="footer-links"><a href="https://wa.me/" target="_blank" rel="noreferrer">WhatsApp</a><a href="https://www.instagram.com/malva_spamx/" target="_blank" rel="noreferrer">Instagram</a><a href="#inicio">Volver arriba <ArrowUpRight size={14} /></a></div>
        <small>© {new Date().getFullYear()} Malva Spa · Puerto Vallarta</small>
      </footer>
    </div>
  );
}
