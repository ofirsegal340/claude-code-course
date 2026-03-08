import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "אופיר סגל | פיתוח אתרים ופתרונות AI לעסקים",
  description:
    "פיתוח אתרים, דפי נחיתה ומערכות חכמות לעסקים באמצעות AI. פתרונות מהירים, מודרניים ומותאמים אישית.",
  openGraph: {
    title: "אופיר סגל | פיתוח אתרים ופתרונות AI לעסקים",
    description:
      "פיתוח אתרים, דפי נחיתה ומערכות חכמות לעסקים באמצעות AI.",
    type: "website",
    locale: "he_IL",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <body className={inter.className}>
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
