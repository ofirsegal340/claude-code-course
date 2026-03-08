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
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          למי השירות <span className="text-primary">מתאים?</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {audiences.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-bg-card border border-white/5 hover:border-primary/30 transition-colors"
            >
              <item.icon className="w-6 h-6 text-primary shrink-0" />
              <span className="text-text-primary font-medium">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
