import Gallery from "@/components/Gallery";
import Image from "next/image";

const images = [
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/8.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
  "/images/7.jpg",
  "/images/9.jpg",
  "/images/1.jpg",
  "/images/2.jpg",
];

export default function Home() {
  return (
    <main className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <section className="hero-section" aria-labelledby="page-title">
        <div className="brand-row">
          <Image
            src="/logo-abio-rho.jpg"
            alt="ABIO Rho - Associazione per il bambino in ospedale"
            width={88}
            height={191}
            priority
            className="brand-logo"
          />
        </div>

        <div className="hero-copy">
          <p className="eyebrow">UNISCITI A NOI</p>
          <h1 id="page-title">
            DIVENTA <span>VOLONTARIO</span>
          </h1>
          <p className="intro">
            Cherchiamo persone che vogliano mettersi in gioco e hanno il desiderio
            di portare un sorriso ai <strong>bambini</strong> ospedalizzati dei{" "}
            <strong>reparti di pediatria</strong> di Garbagnate Milanese e Rho
          </p>
        </div>

        <div className="hero-badge" aria-hidden="true">
          <span>un sorriso</span>
          <span>alla volta</span>
          <b>✦</b>
        </div>

        <a className="scroll-cue" href="#come-partecipare" aria-label="Vai alla sezione come partecipare">
          <span>SCOPRI COME</span>
          <b aria-hidden="true">↓</b>
        </a>
      </section>

      <section id="come-partecipare" className="details-section" aria-labelledby="requirements-title">
        <div className="section-kicker">COME PARTECIPARE</div>
        <h2 id="requirements-title">PER DIVENTARE VOLONTARIO:</h2>
        <ul className="requirements-list">
          <li><span>01</span>Età compresa tra i 18 e i 69</li>
          <li><span>02</span>Frequentare il corso di formazione da 5 incontri</li>
        </ul>
      </section>

      <section className="contact-section" aria-labelledby="contact-title">
        <div className="contact-heading">
          <span className="line" />
          <h2 id="contact-title">Per maggiori informazioni:</h2>
          <span className="arrow">↓</span>
        </div>

        <div className="contact-actions">
          <a className="contact-card" href="tel:+393****7579">
            <span className="contact-icon"><Image src="/phone.png" alt="" width={28} height={28} /></span>
            <span className="contact-label">CHIAMA ORA</span>
            <span className="contact-value">+39 3338257579</span>
          </a>
          <a className="contact-card" href="mailto:formazione@abiorho.org">
            <span className="contact-icon"><Image src="/envelope.png" alt="" width={28} height={28} /></span>
            <span className="contact-label">SCRIVI UNA MAIL</span>
            <span className="contact-value">formazione@abiorho.org</span>
          </a>
        </div>

        <div className="social-row">
          <span>SEGUICI</span>
          <a href="https://www.facebook.com/ABIORHO/?locale=it_IT" target="_blank" rel="noreferrer" aria-label="Facebook ABIO Rho">
            <Image width={22} height={22} src="/images/facebook-brands-solid.svg" alt="facebook" />
          </a>
          <a href="https://www.instagram.com/abio_rho/" target="_blank" rel="noreferrer" aria-label="Instagram ABIO Rho">
            <Image width={22} height={22} src="/images/instagram-brands-solid.svg" alt="instagram" />
          </a>
        </div>
      </section>

      <section className="gallery-section" aria-label="Momenti ABIO Rho">
        <div className="gallery-heading">
          <span>ABIO RHO</span>
          <span>INSIEME È PIÙ BELLO</span>
        </div>
        <Gallery images={images} photoType="vertical" />
      </section>

      <footer>ABIO RHO · VOLONTARI PER I BAMBINI IN OSPEDALE</footer>
    </main>
  );
}
