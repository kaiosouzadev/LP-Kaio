"use client";

import { useEffect, useRef, useState } from "react";
import { skills } from "@/data/content";
import styles from "./About.module.css";

export default function About() {
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.2 }
        );

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="sobre" className={styles.about}>
            {/* ── Text panel ── */}
            <div className={styles.textPanel}>
                <div className={styles.sectionLabel}>
                    <span className={styles.labelLine} />
                    Sobre mim
                </div>
                <h2 className={styles.heading}>
                    Dev de
                    <br />
                    <em className={styles.headingAccent}>impacto</em>
                    <br />
                    real.
                </h2>
                <p className={styles.bio}>
                    Sou desenvolvedor web com mais de 4 anos de experiência em criação de
                    sites modernos, landing pages e sistemas digitais. Atuo com WordPress,
                    Elementor, Supabase e automações — sempre focado em entregar
                    soluções que geram resultados concretos.
                    <br />
                    <br />
                    Gestão completa de hospedagens, suporte técnico e resolução de
                    problemas em ambientes de produção. Sempre atualizado com as melhores
                    ferramentas do mercado.
                </p>
            </div>

            {/* ── Skills panel ── */}
            <div ref={ref} className={styles.skillsPanel}>
                <div className={styles.skillsLabel}>Habilidades técnicas</div>
                {skills.map((sk, i) => (
                    <div key={i} className={styles.skillItem}>
                        <div className={styles.skillHeader}>
                            <span className={styles.skillName}>{sk.name}</span>
                            <span className={styles.skillPct}>{sk.pct}%</span>
                        </div>
                        <div className={styles.skillTrack}>
                            <div
                                className={styles.skillFill}
                                style={{
                                    transform: visible ? `scaleX(${sk.pct / 100})` : "scaleX(0)",
                                    transitionDelay: `${i * 0.1 + 0.2}s`,
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
