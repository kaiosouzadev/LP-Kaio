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
        <section id="sobre" className={styles.about} aria-label="Sobre o Especialista">
            {/* ── Text panel ── */}
            <div className={styles.textPanel}>
                <div className={styles.sectionLabel}>
                    <span className={styles.labelLine} />
                    Sobre o Especialista
                </div>
                <h2 className={styles.heading}>
                    Estrategista em
                    <br />
                    <em className={styles.headingAccent}>Sistemas Digitais</em>
                    <br />
                    de Alto Impacto.
                </h2>
                <p className={styles.bio}>
                    Sou desenvolvedor web com mais de 4 anos de experiência consolidada na
                    criação de sistemas modernos, tecnologias modernas de front-end, arquitetura de software e
                    landing pages otimizadas. Minha atuação une tecnologia de ponta com
                    visão estratégica de negócios para gerar ROI real.
                    <br />
                    <br />
                    Especialista em ecossistemas Supabase, automações de workflow e gestão
                    técnica completa. Meu compromisso é com a performance máxima e a
                    escalabilidade de cada projeto digital.
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
