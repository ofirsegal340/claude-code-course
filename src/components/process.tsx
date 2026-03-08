"use client";

import { motion } from "framer-motion";
import { Phone, PenTool, Code, Link } from "lucide-react";

const steps = [
  { icon: Phone, number: "01", title: "שיחת אפיון", description: "מבינים ביחד מה העסק צריך" },
  { icon: PenTool, number: "02", title: "תכנון הפתרון", description: "מתכננים את המבנה והעיצוב" },
  { icon: Code, number: "03", title: "פיתוח", description: "בונים את המוצר" },
  { icon: Link, number: "04", title: "חיבור מערכת פניות", description: "מחברים טפסים ואוטומציות" },
];

export default function Process() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          איך זה <span className="text-primary">עובד?</span>
        </motion.h2>

        <div className="space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex items-center gap-6 p-6 rounded-2xl bg-bg-card border border-white/5"
            >
              <div className="shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <span className="text-primary text-sm font-bold">{step.number}</span>
                <h3 className="text-lg font-bold">{step.title}</h3>
                <p className="text-text-secondary text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
