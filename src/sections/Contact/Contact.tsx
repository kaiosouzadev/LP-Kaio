import { contactInfo, whatsappUrl } from "@/data/content";
import styles from "./Contact.module.css";

export default function Contact() {
    return (
        <section id="contato" className={styles.contact}>
            {/* ── CTA panel ── */}
            <div className={styles.ctaPanel}>
                <h2 className={styles.heading}>
                    Vamos
                    <br />
                    trabalhar
                    <br />
                    juntos?
                </h2>
                <p className={styles.subtext}>
                    Você tem o projeto, eu tenho a expertise. Vamos transformar sua ideia
                    em uma solução digital de alto impacto.
                </p>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.ctaLink}>
                    Enviar mensagem ↗
                </a>
            </div>

            {/* ── Info panel ── */}
            <div className={styles.infoPanel}>
                <div className={styles.infoLabel}>Contato</div>
                {contactInfo.map((c, i) => (
                    <div key={i} className={styles.infoItem}>
                        <div className={styles.infoItemLabel}>{c.label}</div>
                        <div className={styles.infoItemValue}>
                            {c.href ? (
                                <a
                                    href={c.href}
                                    target={c.href.startsWith("http") ? "_blank" : "_self"}
                                    rel={
                                        c.href.startsWith("http")
                                            ? "noopener noreferrer"
                                            : undefined
                                    }
                                    className={styles.infoLink}
                                >
                                    {c.val}
                                </a>
                            ) : (
                                c.val
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
