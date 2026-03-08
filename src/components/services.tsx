"use client";

import { motion } from "framer-motion";
import { FileText, Globe, Bot, Workflow } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "דפי נחיתה",
    description: "דפי נחיתה ממירים שמייצרים פניות ולידים לעסק שלך.",
  },
  {
    icon: Globe,
    title: "אתרים לעסקים",
    description: "אתרים מקצועיים שנראים מעולה ועובדים מצוין בכל מכשיר.",
  },
  {
    icon: Bot,
    title: "פתרונות AI",
    description: "מערכות חכמות מבוססות בינה מלאכותית שחוסכות זמן ומייעלות תהליכים.",
  },
  {
    icon: Workflow,
    title: "אוטומציות",
    description: "טפסים, מערכות פניות ואוטומציות שעובדות בשבילך 24/7.",
  },
];

export default function Services() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          מה אני <span className="text-primary">מציע?</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-bg-card border border-white/5 hover:border-primary/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-text-secondary">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
