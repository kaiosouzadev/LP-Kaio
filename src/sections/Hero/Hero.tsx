import { stackStatus } from "@/data/content";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section id="hero" className={styles.heroHome} aria-label="Introdução Profissional">
            <div className={styles.content}>
                {/* Left Side (Red Block & Video) */}
                <div className={styles.heroBlock}>
                    <div className={styles.blockItem}>
                        <div className={styles.blockItemBg} />
                        <h1 className={styles.heroTitle}>
                            <span className={styles.titleTopRow}>
                                <span className={styles.titleTop}>
                                    Web <span className={styles.slash}>/</span>
                                </span>
                                <span className={styles.heroDescription}>
                                    Desenvolvedor Full Stack especializado em tecnologias modernas de front-end e
                                    soluções digitais de alta performance. Mais de 4 anos
                                    transformando ideias em resultados reais para negócios.
                                </span>
                            </span>
                            <span className={styles.titleBottom}>Desenvolvimento</span>
                        </h1>
                    </div>
                    <div className={styles.heroImage}>
                        <Image
                            src="/images/hero/hero-banner.png"
                            alt="Kaio de Souza - Desenvolvedor Web Full Stack e Especialista em tecnologias modernas de front-end"
                            fill
                            priority
                            className={styles.coverImage}
                        />
                    </div>
                </div>

                {/* Right Side (Aside) */}
                <div className={styles.heroAside}>
                    <div className={styles.asideBlock}>
                        <p className={styles.asideLabel}>
                            Soluções web orientadas a conversão, performance máxima e arquitetura impecável.
                        </p>
                    </div>

                    <div className={styles.asideStats}>
                        <p className={styles.statsTitle}>Stack Status</p>
                        <ul className={styles.statsList}>
                            {stackStatus.map((item, i) => (
                                <li key={i} className={styles.statsItem}>
                                    <span>{String(i + 1).padStart(1, '0')}. {item}</span>
                                    <div className={styles.dot} />
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.asideCta}>
                        <a
                            className={styles.ctaLink}
                            href="#servicos"
                            aria-label="Explorar meus serviços e projetos de desenvolvimento"
                        >
                            <svg className={styles.ctaIcon} viewBox="0 0 132 132" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M112.967 19.8906L19.9668 111.891" stroke="currentColor" strokeWidth="20" />
                                <path d="M110 27L110 106" stroke="currentColor" strokeWidth="20" />
                                <path d="M106.498 23L26.9993 23.4458" stroke="currentColor" strokeWidth="20" />
                            </svg>
                            <p className={styles.ctaLabel}>Explorar<br />Projetos</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
