import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/sections/Hero/Hero";
import Services from "@/sections/Services/Services";
import About from "@/sections/About/About";
import Process from "@/sections/Process/Process";
import Contact from "@/sections/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <Services />
            <About />
            <Process />
            <Contact />
            <Footer />
        </main>
    );
}
