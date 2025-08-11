import "./../styles/globals.css";
import { Geist } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// ⬇️ Bruk provider fra i18n/messages
import { I18nProvider } from "@/i18n/messages/I18nProvider";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata = {
  title: "Trevl – Dine reiser, dine minner",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no">
      <body className={`${geist.variable} bg-background text-foreground font-sans`}>
        <I18nProvider defaultLang="no">
          <Header />
          <main className="min-h-screen max-w-6xl mx-auto px-4 py-10">{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
