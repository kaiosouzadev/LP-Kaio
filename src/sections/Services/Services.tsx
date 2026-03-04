import { services, whatsappUrl } from "@/data/content";
import { RadialIcon, TriangleIcon, SphereIcon } from "@/icons";
import styles from "./Services.module.css";

const iconMap = {
    radial: RadialIcon,
    triangle: TriangleIcon,
    sphere: SphereIcon,
} as const;

export default function Services() {
    return (
        <section id="servicos" className={styles.services} aria-label="Nossos Serviços de Desenvolvimento">
            <h2 className={styles.srOnly}>Serviços Digitais Especializados</h2>
            {services.map((s, i) => {
                const Icon = iconMap[s.iconType];
                return (
                    <article key={i} className={styles.card}>
                        <div className={styles.iconWrap}>
                            <div className={styles.iconSvg}>
                                <Icon />
                            </div>
                        </div>
                        <div>
                            <div className={styles.num}>{s.num}</div>
                            <h3 className={styles.cardTitle}>{s.title}</h3>
                            <p className={styles.desc}>{s.desc}</p>
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.exploreBtn}
                                aria-label={`Solicitar orçamento para ${s.title}`}
                            >
                                Contratar →
                            </a>
                        </div>
                    </article>
                );
            })}
        </section>
    );
}
