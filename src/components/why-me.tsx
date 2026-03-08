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
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
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
              className="text-center p-6 rounded-2xl bg-bg-card border border-white/5 hover:border-primary/30 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-text-secondary text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
