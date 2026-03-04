import type { Metadata } from "next";
import { Barlow, DM_Mono } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
    subsets: ["latin"],
    weight: ["300", "400", "600", "700", "900"],
    style: ["normal", "italic"],
    variable: "--font-display",
    display: "swap",
});

const dmMono = DM_Mono({
    subsets: ["latin"],
    weight: ["300", "400", "500"],
    variable: "--font-mono",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Kaio de Souza — Desenvolvedor Web | Landing Pages, Sistemas & IA",
    description:
        "Desenvolvedor web com mais de 4 anos de experiência em landing pages de alta conversão, sistemas web completos e automações com IA. São Paulo, Brasil.",
    keywords: [
        "desenvolvedor web",
        "landing page",
        "wordpress",
        "elementor",
        "sistemas web",
        "automação",
        "inteligência artificial",
        "são paulo",
    ],
    authors: [{ name: "Kaio de Souza" }],
    openGraph: {
        title: "Kaio de Souza — Desenvolvedor Web",
        description:
            "Sites modernos, landing pages e sistemas digitais com foco em resultados reais para negócios.",
        url: "https://kaiodesouza.com",
        siteName: "Kaio de Souza",
        locale: "pt_BR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Kaio de Souza — Desenvolvedor Web",
        description:
            "Sites modernos, landing pages e sistemas digitais com foco em resultados reais.",
    },
    robots: {
        index: true,
        follow: true,
    },
    icons: {
        icon: "/favicon.png",
        shortcut: "/favicon.png",
        apple: "/favicon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" className={`${barlow.variable} ${dmMono.variable}`}>
            <body suppressHydrationWarning>{children}</body>
        </html>
    );
}
