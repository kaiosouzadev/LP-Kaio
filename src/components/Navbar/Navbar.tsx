"use client";

import { useState, useEffect, useCallback } from "react";
import { navLinks } from "@/data/content";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setScrolled(window.scrollY > 60);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollTo = useCallback((id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    }, []);

    useEffect(() => {
        const translations: Record<string, any> = {
            pt: {
                navServices: "Serviços", navAbout: "Sobre", navProcess: "Processo", navContactBtn: "Falar Comigo →",
                heroTitleWeb: "Web /", heroTitleDev: "Desenvolvimento",
                heroDesc: "Desenvolvedor Full Stack especializado em tecnologias modernas de front-end e soluções digitais de alta performance. Mais de 4 anos transformando ideias em resultados reais para negócios.",
                heroAsideLabel: "Soluções web orientadas a conversão, performance máxima e arquitetura impecável.",
                heroStatsTitle: "Stack Status", heroCtaLabel: "Explorar<br/>Projetos",
                heroStack: ["WordPress / Elementor", "Supabase / PostgreSQL", "N8N / Automações", "Landing Pages / CRO", "Inteligência Artificial"],
                aboutLabel: "Sobre o Especialista", aboutHeading: "Estrategista em<br/><em>Sistemas Digitais</em><br/>de Alto Impacto.",
                aboutBio1: "Sou desenvolvedor web com mais de 4 anos de experiência consolidada na criação de sistemas modernos, tecnologias modernas de front-end, arquitetura de software e landing pages otimizadas. Minha atuação une tecnologia de ponta com visão estratégica de negócios para gerar ROI real.",
                aboutBio2: "Especialista em ecossistemas Supabase, automações de workflow e gestão técnica completa. Meu compromisso é com a performance máxima e a escalabilidade de cada projeto digital.",
                aboutSkillsLabel: "Habilidades técnicas",
                aboutSkills: ["WordPress / Elementor", "Landing Pages / CRO", "SEO / Performance", "Supabase / PostgreSQL", "N8N / Automações / IA"],
                servicesSrOnly: "Serviços Digitais Especializados",
                services: [
                    { title: "Landing Pages & Conversão", desc: "Páginas de alta performance focadas em conversão real e resultados mensuráveis. Antigravity e as ferramentas mais modernas." },
                    { title: "Sites & Autoridade", desc: "Desenvolvimento de sites estratégicos para fortalecer sua presença digital e gerar autoridade. Projetos com performance e clareza." },
                    { title: "Sistemas Simples & Eficiência", desc: "Criação de sistemas diretos e eficientes para otimizar sua gestão e relacionamento com clientes. Tecnologia que facilita o dia a dia." }
                ],
                processHeading: "Metodologia", processHeadingAccent: "Estratégica.", processDesc: "Do planejamento à entrega de alta performance.",
                steps: [
                    { title: "Briefing", desc: "Entendimento profundo do negócio, objetivos e público-alvo antes de escrever qualquer linha de código." },
                    { title: "Estratégia", desc: "Definição da stack ideal, arquitetura do projeto e cronograma com entregas claras e mensuráveis." },
                    { title: "Desenvolvimento", desc: "Execução técnica com atualizações frequentes, testes rigorosos e atenção a cada detalhe." },
                    { title: "Entrega & Suporte", desc: "Lançamento com suporte completo, monitoramento pós-entrega e ajustes para garantir performance máxima." }
                ],
                stats: ["Anos de experiência", "Projetos entregues", "Foco em resultados"],
                contactHeading1: "Inicie sua", contactHeading2: "Estratégia", contactHeading3: "Digital",
                contactSub: "Pronto para elevar o patamar do seu negócio? Vamos converter sua visão em uma presença digital dominante e lucrativa.",
                contactCta: "Falar com Especialista ↗",
                contactLabel: "Contato",
                contactLabels: ["Email", "WhatsApp", "LinkedIn", "GitHub", "Instagram", "Localização"],
                footerRights: "© 2025 · Desenvolvedor Web"
            },
            en: {
                navServices: "Services", navAbout: "About", navProcess: "Process", navContactBtn: "Let's Talk →",
                heroTitleWeb: "Web /", heroTitleDev: "Development",
                heroDesc: "Full Stack Developer specialized in modern front-end technologies and high-performance digital solutions. Over 4 years transforming ideas into real business results.",
                heroAsideLabel: "Web solutions driven by conversion, peak performance, and flawless architecture.",
                heroStatsTitle: "Stack Status", heroCtaLabel: "Explore<br/>Projects",
                heroStack: ["WordPress / Elementor", "Supabase / PostgreSQL", "N8N / Automations", "Landing Pages / CRO", "Artificial Intelligence"],
                aboutLabel: "About the Specialist", aboutHeading: "Strategist in<br/><em>Digital Systems</em><br/>of High Impact.",
                aboutBio1: "I am a web developer with over 4 years of solid experience creating modern systems, modern front-end technologies, software architecture, and optimized landing pages. My approach merges cutting-edge tech with strategic business vision to generate real ROI.",
                aboutBio2: "Expert in Supabase ecosystems, workflow automations, and full technical management. My commitment is to maximum performance and scalability for every digital project.",
                aboutSkillsLabel: "Technical skills",
                aboutSkills: ["WordPress / Elementor", "Landing Pages / CRO", "SEO / Performance", "Supabase / PostgreSQL", "N8N / Automations / AI"],
                servicesSrOnly: "Specialized Digital Services",
                services: [
                    { title: "Landing Pages & Conversion", desc: "High-performance pages focused on real conversion and measurable results. Antigravity and the most modern tools." },
                    { title: "Sites & Authority", desc: "Strategic website development to strengthen your digital presence and generate authority. Projects with performance and clarity." },
                    { title: "Simple Systems & Efficiency", desc: "Creation of direct and efficient systems to optimize your management and customer relationships. Tech that simplifies your daily routine." }
                ],
                processHeading: "Strategic", processHeadingAccent: "Methodology.", processDesc: "From planning to high-performance delivery.",
                steps: [
                    { title: "Briefing", desc: "In-depth understanding of the business, objectives, and target audience before writing any line of code." },
                    { title: "Strategy", desc: "Definition of the ideal stack, project architecture, and schedule with clear and measurable deliveries." },
                    { title: "Development", desc: "Technical execution with frequent updates, rigorous testing, and attention to every detail." },
                    { title: "Delivery & Support", desc: "Launch with full support, post-delivery monitoring, and adjustments to ensure maximum performance." }
                ],
                stats: ["Years of experience", "Projects delivered", "Focus on results"],
                contactHeading1: "Start your", contactHeading2: "Digital", contactHeading3: "Strategy",
                contactSub: "Ready to take your business to the next level? Let's convert your vision into a dominant and profitable digital presence.",
                contactCta: "Talk to Specialist ↗",
                contactLabel: "Contact",
                contactLabels: ["Email", "WhatsApp", "LinkedIn", "GitHub", "Instagram", "Location"],
                footerRights: "© 2025 · Web Developer"
            }
        };

        let currentLang = localStorage.getItem('lp_lang') || 'pt';

        const apply = () => {
            const t = translations[currentLang];
            if (!t) return;

            const q = (s: string) => document.querySelector(s);
            const qa = (s: string) => document.querySelectorAll(s);

            // Active buttons
            qa('.lang-btn').forEach(btn => {
                if (btn.getAttribute('data-lang') === currentLang) btn.classList.add('active');
                else btn.classList.remove('active');
            });

            // Navbar links
            const navLinksEls = qa('[class*="navLink"]');
            if (navLinksEls.length >= 3) {
                navLinksEls[0].textContent = t.navServices;
                navLinksEls[1].textContent = t.navAbout;
                navLinksEls[2].textContent = t.navProcess;
            }
            const navCta = q('[class*="ctaBtn"]');
            if (navCta) navCta.textContent = t.navContactBtn;

            // Hero
            const titleWeb = q('[class*="titleTop"]');
            if (titleWeb && titleWeb.firstChild) titleWeb.firstChild.textContent = t.heroTitleWeb + ' ';
            const titleDev = q('[class*="titleBottom"]');
            if (titleDev) titleDev.textContent = t.heroTitleDev;
            const heroDesc = q('[class*="heroDescription"]');
            if (heroDesc) heroDesc.textContent = t.heroDesc;
            const heroAsideLabel = q('[class*="asideLabel"]');
            if (heroAsideLabel) heroAsideLabel.textContent = t.heroAsideLabel;
            const heroStatsTitle = q('[class*="statsTitle"]');
            if (heroStatsTitle) heroStatsTitle.textContent = t.heroStatsTitle;
            const heroCtaLabel = q('[class*="ctaLabel"]');
            if (heroCtaLabel) heroCtaLabel.innerHTML = t.heroCtaLabel;
            const stackItems = qa('[class*="statsItem"] span');
            stackItems.forEach((item, i) => { if (t.heroStack[i]) item.textContent = (i + 1) + '. ' + t.heroStack[i]; });

            // About
            const aboutLabel = q('[class*="About_sectionLabel"]');
            if (aboutLabel) {
                const textNode = Array.from(aboutLabel.childNodes).find(n => n.nodeType === 3 && (n.textContent ?? "").trim().length > 2);
                if (textNode) textNode.textContent = ' ' + t.aboutLabel;
            }
            const aboutHeading = q('[class*="About_heading"]');
            if (aboutHeading) aboutHeading.innerHTML = t.aboutHeading;
            const aboutBio = q('[class*="About_bio"]');
            if (aboutBio && aboutBio.childNodes.length > 3) {
                aboutBio.childNodes[0].textContent = t.aboutBio1;
                aboutBio.childNodes[3].textContent = t.aboutBio2;
            }
            const aboutSkillsLabel = q('[class*="About_skillsLabel"]');
            if (aboutSkillsLabel) aboutSkillsLabel.textContent = t.aboutSkillsLabel;
            const skillsNames = qa('[class*="About_skillName"]');
            skillsNames.forEach((name, i) => { if (t.aboutSkills[i]) name.textContent = t.aboutSkills[i]; });

            // Services
            const servicesSr = q('[class*="Services_srOnly"]');
            if (servicesSr) servicesSr.textContent = t.servicesSrOnly;
            const serviceTitles = qa('.service-card-title');
            const serviceDescs = qa('.service-card-desc');
            const serviceBtns = qa('[class*="exploreBtn"]');

            serviceTitles.forEach((el, i) => { if (t.services[i]) el.textContent = t.services[i].title; });
            serviceDescs.forEach((el, i) => { if (t.services[i]) el.textContent = t.services[i].desc; });
            serviceBtns.forEach((el) => { (el as HTMLElement).textContent = currentLang === 'pt' ? 'Contratar →' : 'Hire →'; });

            // Process
            const processTitleMain = q('.process-title-main');
            if (processTitleMain) processTitleMain.textContent = t.processHeading;
            const processAccent = q('[class*="Process_headingAccent"]');
            if (processAccent) processAccent.textContent = t.processHeadingAccent;
            const processSub = q('[class*="Process_headerSub"]');
            if (processSub) processSub.textContent = t.processDesc;

            const stepTitles = qa('.process-step-title');
            const stepDescs = qa('.process-step-desc');

            stepTitles.forEach((el, i) => { if (t.steps[i]) el.textContent = t.steps[i].title; });
            stepDescs.forEach((el, i) => { if (t.steps[i]) el.textContent = t.steps[i].desc; });

            const statLabels = qa('[class*="statLabel"]');
            statLabels.forEach((label, i) => { if (t.stats[i]) label.textContent = t.stats[i]; });

            // Contact
            const contactLabel = q('[class*="infoLabel"]');
            if (contactLabel) contactLabel.textContent = t.contactLabel;
            const contactHeading = q('[class*="Contact_heading"]');
            if (contactHeading && contactHeading.childNodes.length > 4) {
                contactHeading.childNodes[0].textContent = t.contactHeading1;
                contactHeading.childNodes[2].textContent = t.contactHeading2;
                contactHeading.childNodes[4].textContent = t.contactHeading3;
            }
            const contactSub = q('[class*="Contact_subtext"]');
            if (contactSub) contactSub.textContent = t.contactSub;
            const contactCta = q('[class*="Contact_ctaLink"]');
            if (contactCta) contactCta.textContent = t.contactCta;
            const contactInfoLabels = qa('[class*="infoItemLabel"]');
            contactInfoLabels.forEach((label, i) => { if (t.contactLabels[i]) label.textContent = t.contactLabels[i]; });

            const copyright = q('[class*="copyright"]');
            if (copyright) copyright.textContent = t.footerRights;
        };

        const onClick = (e: MouseEvent) => {
            const btn = (e.target as HTMLElement).closest('.lang-btn');
            if (btn) {
                const lang = btn.getAttribute('data-lang');
                if (lang) {
                    currentLang = lang;
                    localStorage.setItem('lp_lang', lang);
                    apply();

                    document.querySelectorAll('h1, h2, h3, p').forEach(el => {
                        el.classList.remove('lang-fade');
                        void (el as HTMLElement).offsetWidth;
                        el.classList.add('lang-fade');
                    });
                }
            }
        };

        document.addEventListener('click', onClick, true);

        // Try to apply multiple times during load to catch delayed renders without a permanent observer
        apply();
        setTimeout(apply, 300);
        setTimeout(apply, 1000);
        setTimeout(apply, 2500);

        return () => {
            document.removeEventListener('click', onClick, true);
        };
    }, []);

    return (
        <nav
            className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}
            aria-label="Navegação principal"
        >
            <div className={styles.logo}>
                <span className={styles.logoMark}>KS</span>
                <span
                    className={`${styles.logoText} ${scrolled ? styles.logoTextScrolled : ""}`}
                >
                    Kaio de Souza
                </span>
            </div>

            <div className={styles.links}>
                {navLinks.map(({ id, label }) => (
                    <button
                        key={id}
                        onClick={() => scrollTo(id)}
                        className={`${styles.navLink} ${scrolled ? styles.navLinkScrolled : ""}`}
                    >
                        {label}
                    </button>
                ))}

                <button
                    onClick={() => scrollTo("contato")}
                    className={styles.ctaBtn}
                >
                    Falar Comigo →
                </button>

                <div className="lang-switcher" id="langSwitcher">
                    <button className="lang-btn active" data-lang="pt" aria-label="Mudar para Português">
                        <span className="lang-flag">🇧🇷</span>
                        <span className="lang-code">PT</span>
                    </button>
                    <div className="lang-divider"></div>
                    <button className="lang-btn" data-lang="en" aria-label="Switch to English">
                        <span className="lang-flag">🇺🇸</span>
                        <span className="lang-code">EN</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
