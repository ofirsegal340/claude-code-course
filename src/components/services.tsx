"use client";

import { motion } from "framer-motion";
import { FileText, Globe, Bot, Workflow } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "דפי נחיתה",
    description: "דפי נחיתה ממירים שמייצרים פניות ולידים לעסק שלך.",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Globe,
    title: "אתרים לעסקים",
    description: "אתרים מקצועיים שנראים מעולה ועובדים מצוין בכל מכשיר.",
    gradient: "from-secondary/20 to-secondary/5",
  },
  {
    icon: Bot,
    title: "פתרונות AI",
    description: "מערכות חכמות מבוססות בינה מלאכותית שחוסכות זמן ומייעלות תהליכים.",
    gradient: "from-accent/20 to-accent/5",
  },
  {
    icon: Workflow,
    title: "אוטומציות",
    description: "טפסים, מערכות פניות ואוטומציות שעובדות בשבילך 24/7.",
    gradient: "from-primary/20 to-secondary/5",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-4">
      <div className="section-divider max-w-md mx-auto mb-24" />

      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-medium text-sm tracking-widest uppercase text-center mb-4"
        >
          שירותים
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-16"
        >
          מה אני <span className="text-primary">מציע?</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="relative p-8 rounded-2xl bg-bg-card border border-white/5 hover:border-primary/20 transition-all duration-300 group overflow-hidden"
            >
              {/* Subtle gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-text-secondary leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
