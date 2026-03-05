import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata = {
  title: "Kaio de Souza — Desenvolvedor Web em São Paulo | Sites, Landing Pages e Lojas Online",
  description: "Desenvolvedor web com +4 anos de experiência em São Paulo. Criação de sites modernos, landing pages de alta conversão, lojas online e automações. Solicite um orçamento.",
  keywords: "desenvolvedor web São Paulo, criação de sites, landing page alta conversão, loja online, WordPress, SEO, e-commerce, automação web",
  authors: [{ name: "Kaio de Souza" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://kaiodesouza.dev/",
  },
  openGraph: {
    type: "website",
    url: "https://kaiodesouza.dev/",
    title: "Kaio de Souza — Desenvolvedor Web | Sites & Landing Pages em São Paulo",
    description: "Sites modernos, landing pages de alta conversão e lojas online. +4 anos de experiência. São Paulo, BR.",
    locale: "pt_BR",
    images: [
      {
        url: "/images/hero/hero-banner.png",
        width: 1200,
        height: 630,
        alt: "Kaio de Souza — Web Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaio de Souza — Desenvolvedor Web",
    description: "Sites modernos, landing pages de alta conversão e lojas online com +4 anos de experiência.",
    images: ["/images/hero/hero-banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500&family=Barlow+Condensed:wght@700;900&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Analytics />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Kaio de Souza",
              "jobTitle": "Desenvolvedor Web",
              "url": "https://kaiodesouza.dev",
              "email": "kaiodesouza04@gmail.com",
              "telephone": "+55-11-95390-6280",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "São Paulo",
                "addressCountry": "BR"
              },
              "sameAs": [
                "https://linkedin.com/in/kaio-de-souza",
                "https://github.com/kaiodeSouza"
              ],
              "knowsAbout": [
                "Criação de Sites",
                "Landing Pages",
                "Lojas Online",
                "WordPress",
                "SEO",
                "E-commerce",
                "Automações Web",
                "Inteligência Artificial"
              ]
            })
          }}
        />

        {/* Efeitos JavaScript solicitados */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
/* ══ EFEITO 1: Reveal por scroll com stagger — padrão de mercado ══ */
const revealEls = document.querySelectorAll('.service-card, .stat-item, .process-step, .skill-item, .about-left, .about-right');
revealEls.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(36px)';
  el.style.transition = \`opacity 0.75s cubic-bezier(0.16,1,0.3,1) \${(i % 4) * 0.1}s, transform 0.75s cubic-bezier(0.16,1,0.3,1) \${(i % 4) * 0.1}s\`;
});
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => revealObs.observe(el));

/* ══ EFEITO 2: Parallax suave no hero ao fazer scroll ══ */
const heroMain = document.querySelector('.hero-main');
window.addEventListener('scroll', () => {
  if (!heroMain) return;
  const y = window.scrollY;
  heroMain.style.transform = \`translateY(\${y * 0.18}px)\`;
}, { passive: true });

/* ══ EFEITO 3: Hover magnético nos botões CTA ══ */
document.querySelectorAll('.cta-btn, .cta-btn-dark, .service-explore').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const r = btn.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    btn.style.transform = \`translate(\${x * 0.22}px, \${y * 0.22}px)\`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'translate(0, 0)';
    btn.style.transition = 'transform 0.45s cubic-bezier(0.34,1.56,0.64,1)';
  });
  btn.addEventListener('mouseenter', () => {
    btn.style.transition = 'transform 0.12s ease';
  });
});

/* ══ EFEITO 4: Número counter animado ao entrar na viewport ══ */
document.querySelectorAll('.stat-num').forEach(el => {
  const raw = el.textContent.trim();
  const num = parseFloat(raw.replace(/[^0-9.]/g, ''));
  const prefix = raw.match(/^\\D+/) ? raw.match(/^\\D+/)[0] : '';
  const suffix = raw.match(/\\D+$/) ? raw.match(/\\D+$/)[0] : '';
  if (!num) return;
  let started = false;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting && !started) {
        started = true;
        const duration = 1400;
        const start = performance.now();
        const ease = t => 1 - Math.pow(1 - t, 4);
        (function tick(now) {
          const t = Math.min((now - start) / duration, 1);
          el.textContent = prefix + Math.round(ease(t) * num) + suffix;
          if (t < 1) requestAnimationFrame(tick);
        })(start);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  obs.observe(el);
});

/* ══ EFEITO 5: Travamento suave da seção Stats (sticky scroll) ══ */
const statsSection = document.querySelector('.stats');
if (statsSection) {
  statsSection.style.position = 'sticky';
  statsSection.style.top = '0';
  statsSection.style.zIndex = '10';
}
`
          }}
        />
      </body>
    </html>
  );
}
