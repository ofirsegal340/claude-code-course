"use client";

import { motion } from "framer-motion";
import { Store, Scissors, UtensilsCrossed, ShoppingBag, MapPin, Lightbulb } from "lucide-react";

const audiences = [
  { icon: Store, label: "בעלי עסקים קטנים" },
  { icon: Scissors, label: "קוסמטיקאיות וקליניקות" },
  { icon: UtensilsCrossed, label: "מסעדות ובתי קפה" },
  { icon: ShoppingBag, label: "חנויות" },
  { icon: MapPin, label: "עסקים מקומיים" },
  { icon: Lightbulb, label: "יזמים" },
];

export default function Audience() {
  return (
    <section id="audience" className="py-24 md:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-medium text-sm tracking-widest uppercase text-center mb-4"
        >
          קהל היעד
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-16"
        >
          למי השירות <span className="text-primary">מתאים?</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {audiences.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="flex items-center gap-4 p-5 md:p-6 rounded-2xl bg-bg-card border border-white/5 hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-text-primary font-medium">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
