import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import MobileMenu from "./MobileMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vagnar & Þjónusta - Kerrur, Vörukassar og Vörulyftur",
  description: "Vagnar & Þjónusta - Sérhæfum okkur í sölu og þjónustu á hágæða hestakerrur, vörukassa og vörulyftur. Dhollandia dreifingaraðili á Íslandi.",
};

const navLinks = [
  { href: "/hestakerrur", label: "Kerrur" },
  { href: "/vorukassar", label: "Vörukassar" },
  { href: "/voruliftur", label: "Vörulyftur" },
  { href: "/thjonusta", label: "Þjónusta" },
  { href: "/feed", label: "Fréttir" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="is">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-stone-900 text-stone-100`}
      >
        <nav className="sticky top-0 z-50 bg-stone-900 border-b border-stone-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-24">
              <Link href="/" className="shrink-0 flex items-center group">
                <img
                  src="/logo.png"
                  alt="Vagnar & Þjónusta"
                  className="h-20 w-auto object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-all duration-300"
                />
              </Link>
              <div className="hidden md:flex items-center gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative text-stone-300 hover:text-white px-4 py-2 transition-all duration-300 font-medium text-sm tracking-wide group/link"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-500 group-hover/link:w-3/4 transition-all duration-300 rounded-full"></span>
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white px-6 py-2.5 ml-4 rounded-lg hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/25 transition-all duration-300 font-semibold text-sm tracking-wide"
                >
                  Hafðu Samband
                </Link>
              </div>
              <MobileMenu navLinks={navLinks} />
            </div>
          </div>
        </nav>

        <main>
          {children}
        </main>

        <footer className="bg-stone-900 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-1">VAGNAR &</h3>
                  <h3 className="text-2xl font-bold gradient-text">ÞJÓNUSTA</h3>
                </div>
                <p className="text-stone-400 mb-6 max-w-md leading-relaxed">
                  Sérhæfum okkur í sölu og þjónustu á hágæða hestakerrur, vörukassa og vörulyftur.
                  Viðurkenndur dreifingaraðili Dhollandia á Íslandi með áratuga reynslu.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-sm tracking-wider text-stone-300">VÖRUR</h4>
                <ul className="space-y-3 text-stone-400">
                  <li><Link href="/hestakerrur" className="hover:text-blue-400 transition-colors duration-300">Kerrur</Link></li>
                  <li><Link href="/vorukassar" className="hover:text-blue-400 transition-colors duration-300">Vörukassar</Link></li>
                  <li><Link href="/voruliftur" className="hover:text-blue-400 transition-colors duration-300">Vörulyftur</Link></li>
                  <li><Link href="/thjonusta" className="hover:text-blue-400 transition-colors duration-300">Þjónusta</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-sm tracking-wider text-stone-300">HAFA SAMBAND</h4>
                <div className="text-stone-400 space-y-3">
                  <p>Tunguháls 10</p>
                  <p>110 Reykjavík</p>
                  <p className="pt-2">
                    Sími: <a href="tel:5673440" className="hover:text-blue-400 transition-colors duration-300">567-3440</a>
                  </p>
                  <p>
                    <a href="mailto:vagnar@vagnar.is" className="hover:text-blue-400 transition-colors duration-300">vagnar@vagnar.is</a>
                  </p>
                  <p className="pt-2 text-sm text-stone-500">Mán-Fös: 08:00 - 16:00</p>
                </div>
              </div>
            </div>
            <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-stone-500 text-sm">&copy; {new Date().getFullYear()} Vagnar & Þjónusta. Allur réttur áskilinn.</p>
              <div className="flex gap-6">
                <Link href="/contact" className="text-stone-400 hover:text-white text-sm transition-colors duration-300">Hafðu Samband</Link>
                <Link href="/feed" className="text-stone-400 hover:text-white text-sm transition-colors duration-300">Fréttir</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
