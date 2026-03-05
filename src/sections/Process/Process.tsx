import { steps } from "@/data/content";
import styles from "./Process.module.css";

export default function Process() {
    return (
        <section id="processo" className={styles.process} aria-label="Nosso Processo de Trabalho">
            <div className={styles.header}>
                <h2 className={styles.heading}>
                    <span className="process-title-main">Metodologia</span>
                    <br />
                    <span className={styles.headingAccent}>Estratégica.</span>
                </h2>
                <p className={styles.headerSub}>Do planejamento à entrega de alta performance.</p>
            </div>

            <div className={styles.grid}>
                {steps.map((s, i) => (
                    <article key={i} className={`${styles.card} process-step-card`}>
                        <div className={styles.num}>{s.num}</div>
                        <h3 className={`${styles.cardTitle} process-step-title`}>{s.title}</h3>
                        <p className={`${styles.desc} process-step-desc`}>{s.desc}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
