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
            </div>
        </nav>
    );
}
