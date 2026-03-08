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

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          בואו <span className="text-primary">נדבר</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-text-secondary text-center mb-10"
        >
          השאירו פרטים ואחזור אליכם תוך 24 שעות
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <div>
            <input
              {...register("name")}
              placeholder="שם מלא *"
              className="w-full px-4 py-3 rounded-xl bg-bg-card border border-white/10 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-primary transition-colors"
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              {...register("phone")}
              type="tel"
              placeholder="טלפון *"
              className="w-full px-4 py-3 rounded-xl bg-bg-card border border-white/10 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-primary transition-colors"
            />
            {errors.phone && (
              <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <input
              {...register("businessName")}
              placeholder="שם העסק"
              className="w-full px-4 py-3 rounded-xl bg-bg-card border border-white/10 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div>
            <textarea
              {...register("message")}
              placeholder="הודעה"
              rows={4}
              className="w-full px-4 py-3 rounded-xl bg-bg-card border border-white/10 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark disabled:opacity-50 text-white font-semibold rounded-xl transition-colors text-lg"
          >
            <Send className="w-5 h-5" />
            {isSubmitting ? "שולח..." : "שלחו פנייה"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
