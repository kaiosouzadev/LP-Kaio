import { steps } from "@/data/content";
import styles from "./Process.module.css";

export default function Process() {
    return (
        <section id="processo" className={styles.process}>
            <div className={styles.header}>
                <h2 className={styles.heading}>
                    Como
                    <br />
                    <span className={styles.headingAccent}>trabalho.</span>
                </h2>
                <p className={styles.headerSub}>Do briefing à entrega final.</p>
            </div>

            <div className={styles.grid}>
                {steps.map((s, i) => (
                    <article key={i} className={styles.card}>
                        <div className={styles.num}>{s.num}</div>
                        <h3 className={styles.cardTitle}>{s.title}</h3>
                        <p className={styles.desc}>{s.desc}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
