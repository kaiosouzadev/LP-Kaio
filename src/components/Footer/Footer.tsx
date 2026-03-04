import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.brand}>Kaio de Souza</div>
            <div className={styles.copyright}>© 2025 · Desenvolvedor Web</div>
        </footer>
    );
}
