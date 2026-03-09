import Header from "@/components/header";
import Hero from "@/components/hero";
import Audience from "@/components/audience";
import Services from "@/components/services";
import WhyMe from "@/components/why-me";
import Process from "@/components/process";
import ContactForm from "@/components/contact-form";
import WhatsAppButton from "@/components/whatsapp-button";

export default function Home() {
  return (
    <main className="relative z-10">
      <Header />
      <Hero />
      <Audience />
      <Services />
      <WhyMe />
      <Process />
      <ContactForm />
      <WhatsAppButton />

      <footer className="py-10 text-center text-text-secondary text-sm border-t border-white/5">
        <p>
          &copy; {new Date().getFullYear()} אופיר סגל | OS Digital. כל הזכויות
          שמורות.
        </p>
      </footer>
    </main>
  );
}
