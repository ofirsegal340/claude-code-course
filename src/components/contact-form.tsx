"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(2, "נא להזין שם"),
  phone: z.string().min(9, "נא להזין מספר טלפון תקין"),
  businessName: z.string().optional(),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error();

      toast.success("הפנייה נשלחה בהצלחה! נחזור אליך בהקדם.");
      reset();
    } catch {
      toast.error("שגיאה בשליחה, נסו שוב.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClassName =
    "w-full px-5 py-4 rounded-2xl bg-bg-card border border-white/10 text-text-primary placeholder:text-text-secondary/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-300 text-base";

  return (
    <section id="contact" className="py-24 md:py-32 px-4 relative">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-lg mx-auto">
        <div className="section-divider max-w-md mx-auto mb-24" />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-medium text-sm tracking-widest uppercase text-center mb-4"
        >
          צור קשר
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-4"
        >
          בואו <span className="text-primary">נדבר</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-text-secondary text-center mb-12 text-lg"
        >
          השאירו פרטים ואחזור אליכם תוך 24 שעות
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          <div>
            <input
              {...register("name")}
              placeholder="שם מלא *"
              className={inputClassName}
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-2 mr-2">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              {...register("phone")}
              type="tel"
              placeholder="טלפון *"
              className={inputClassName}
            />
            {errors.phone && (
              <p className="text-red-400 text-sm mt-2 mr-2">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <input
              {...register("businessName")}
              placeholder="שם העסק"
              className={inputClassName}
            />
          </div>

          <div>
            <textarea
              {...register("message")}
              placeholder="ספרו לי על הפרויקט שלכם..."
              rows={4}
              className={`${inputClassName} resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="glow-primary w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark disabled:opacity-50 text-white font-semibold rounded-2xl transition-all duration-300 text-lg hover:scale-[1.02] mt-2"
          >
            <Send className="w-5 h-5" />
            {isSubmitting ? "שולח..." : "שלחו פנייה"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
