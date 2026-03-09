"use client";

import { motion } from "framer-motion";
import { Phone, PenTool, Code, Link } from "lucide-react";

const steps = [
  { icon: Phone, number: "01", title: "שיחת אפיון", description: "מבינים ביחד מה העסק צריך ומגדירים יעדים" },
  { icon: PenTool, number: "02", title: "תכנון הפתרון", description: "מתכננים את המבנה, העיצוב וחווית המשתמש" },
  { icon: Code, number: "03", title: "פיתוח", description: "בונים את המוצר בטכנולוגיות מתקדמות" },
  { icon: Link, number: "04", title: "חיבור מערכת פניות", description: "מחברים טפסים, אוטומציות ומתחילים להביא לידים" },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 px-4">
      <div className="section-divider max-w-md mx-auto mb-24" />

      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-medium text-sm tracking-widest uppercase text-center mb-4"
        >
          תהליך עבודה
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-16"
        >
          איך זה <span className="text-primary">עובד?</span>
        </motion.h2>

        <div className="relative">
          {/* Vertical line connector */}
          <div className="absolute right-[31px] top-8 bottom-8 w-px bg-gradient-to-b from-primary/30 via-primary/10 to-transparent hidden md:block" />

          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="flex items-start gap-6 p-6 md:p-8 rounded-2xl bg-bg-card border border-white/5 hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors relative">
                  <span className="text-primary font-bold text-lg">{step.number}</span>
                </div>
                <div className="pt-1">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
