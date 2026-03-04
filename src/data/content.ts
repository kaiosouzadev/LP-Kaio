/* ═══════════════════════════════════════════════════
   Static Content Data
   All LP copy and structured data lives here for
   easy editing and future i18n support.
   ═══════════════════════════════════════════════════ */

export interface Service {
    num: string;
    title: string;
    desc: string;
    iconType: "radial" | "triangle" | "sphere";
}

export interface Step {
    num: string;
    title: string;
    desc: string;
}

export interface Skill {
    name: string;
    pct: number;
}

export interface ContactItem {
    label: string;
    val: string;
    href: string | null;
}

/* ── Services ──────────────────────────────────── */

export const services: Service[] = [
    {
        num: "01.",
        title: "Landing Pages & Conversão",
        desc: "Páginas de alta performance com Antigravity, WordPress e as ferramentas mais modernas. Foco em conversão real e resultados mensuráveis.",
        iconType: "radial",
    },
    {
        num: "02.",
        title: "Sites Profissionais Sob Medida",
        desc: "Desenvolvimento de sites para fortalecer sua presença digital e gerar mais oportunidades. Projetos pensados para oferecer performance, clareza e conversão.",
        iconType: "triangle",
    },
    {
        num: "03.",
        title: "IA & Automações",
        desc: "Integração de Inteligência Artificial e automações com N8N. Processos otimizados e escaláveis para maximizar a eficiência do seu negócio.",
        iconType: "sphere",
    },
];

/* ── Process Steps ─────────────────────────────── */

export const steps: Step[] = [
    {
        num: "01 —",
        title: "Briefing",
        desc: "Entendimento profundo do negócio, objetivos e público-alvo antes de escrever qualquer linha de código.",
    },
    {
        num: "02 —",
        title: "Estratégia",
        desc: "Definição da stack ideal, arquitetura do projeto e cronograma com entregas claras e mensuráveis.",
    },
    {
        num: "03 —",
        title: "Desenvolvimento",
        desc: "Execução técnica com atualizações frequentes, testes rigorosos e atenção a cada detalhe.",
    },
    {
        num: "04 —",
        title: "Entrega & Suporte",
        desc: "Lançamento com suporte completo, monitoramento pós-entrega e ajustes para garantir performance máxima.",
    },
];

/* ── Skills ────────────────────────────────────── */

export const skills: Skill[] = [
    { name: "WordPress / Elementor", pct: 95 },
    { name: "Landing Pages / CRO", pct: 90 },
    { name: "SEO / Performance", pct: 85 },
    { name: "Supabase / PostgreSQL", pct: 80 },
    { name: "N8N / Automações / IA", pct: 75 },
];

/* ── Stack Status ──────────────────────────────── */

export const stackStatus: string[] = [
    "WordPress / Elementor",
    "Supabase / PostgreSQL",
    "N8N / Automações",
    "Landing Pages / CRO",
    "Inteligência Artificial",
];

/* ── Stats ─────────────────────────────────────── */

export const stats: { num: string; label: string }[] = [
    { num: "4+", label: "Anos de experiência" },
    { num: "50+", label: "Projetos entregues" },
    { num: "100%", label: "Foco em resultados" },
];

/* ── Contact Info ──────────────────────────────── */

export const contactInfo: ContactItem[] = [
    {
        label: "Email",
        val: "kaiodesouzadev@gmail.com",
        href: "mailto:kaiodesouzadev@gmail.com",
    },
    {
        label: "WhatsApp",
        val: "+55 11 99313-2686",
        href: "https://wa.me/5511993132686",
    },
    {
        label: "LinkedIn",
        val: "kaiosouza.dev",
        href: "https://www.linkedin.com/in/kaiosouzadev/",
    },
    {
        label: "GitHub",
        val: "kaiosouza.dev",
        href: "https://github.com/kaiosouzadev",
    },
    {
        label: "Instagram",
        val: "kaiosouza.dev",
        href: "https://www.instagram.com/kaiosouza.dev/",
    },
    {
        label: "Localização",
        val: "São Paulo, Brasil",
        href: null,
    },
];

/* ── Navigation Links ──────────────────────────── */

export const navLinks: { id: string; label: string }[] = [
    { id: "servicos", label: "Serviços" },
    { id: "sobre", label: "Sobre" },
    { id: "processo", label: "Processo" },
];

/* ── Footer Links ──────────────────────────────── */

export const footerLinks: { label: string; href: string }[] = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/kaiosouzadev/" },
    { label: "GitHub", href: "https://github.com/kaiosouzadev" },
    { label: "Instagram", href: "https://www.instagram.com/kaiosouza.dev/" },
    { label: "Email", href: "mailto:kaiodesouzadev@gmail.com" },
];

/* ── WhatsApp CTA ──────────────────────────────── */

export const whatsappUrl = "https://wa.me/5511993132686";
