"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowDown } from "lucide-react";
import Image from "next/image";

const WHATSAPP_URL = "https://wa.me/972584594488";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-secondary/8 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-3xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-10"
        >
          <Image
            src="/logo.jpeg"
            alt="OS Digital"
            width={180}
            height={108}
            className="mx-auto rounded-2xl shadow-2xl shadow-primary/10"
            priority
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="text-primary font-medium text-sm tracking-widest uppercase mb-6"
        >
          AI & Vibe Coding Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.15] tracking-tight"
        >
          פיתוח אתרים ופתרונות{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-primary to-accent">
            AI
          </span>{" "}
          לעסקים
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-xl text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          דפי נחיתה, אתרים מקצועיים ומערכות חכמות שמביאים לעסק שלך יותר לקוחות.
          פתרונות מהירים, מודרניים ומותאמים אישית.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="glow-primary inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all duration-300 text-lg hover:scale-[1.03]"
          >
            <ArrowDown className="w-5 h-5" />
            השאירו פרטים
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-green inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-xl transition-all duration-300 text-lg hover:scale-[1.03]"
          >
            <MessageCircle className="w-5 h-5" />
            דברו איתי בוואטסאפ
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-2.5 bg-primary/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
