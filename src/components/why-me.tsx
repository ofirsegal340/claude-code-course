"use client";

import { motion } from "framer-motion";
import { Zap, Settings, Sparkles, TrendingUp } from "lucide-react";

const advantages = [
  {
    icon: Zap,
    title: "פיתוח מהיר",
    description: "מהרעיון לתוצאה בזמן קצר, בלי לחכות שבועות.",
  },
  {
    icon: Settings,
    title: "פתרונות מותאמים",
    description: "כל פרויקט נבנה בהתאמה מלאה לצרכים של העסק שלך.",
  },
  {
    icon: Sparkles,
    title: "גישה מודרנית",
    description: "שימוש בטכנולוגיות העדכניות ביותר כולל AI.",
  },
  {
    icon: TrendingUp,
    title: "חשיבה עסקית",
    description: "לא רק קוד — הבנה של מה באמת מביא תוצאות לעסק.",
  },
];

export default function WhyMe() {
  return (
    <section id="why-me" className="py-24 md:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-medium text-sm tracking-widest uppercase text-center mb-4"
        >
          יתרונות
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-16"
        >
          למה <span className="text-primary">לעבוד איתי?</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="text-center p-8 rounded-2xl bg-bg-card border border-white/5 hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3">{item.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
