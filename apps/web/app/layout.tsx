import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="is" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-stone-50 text-stone-900`}
      >
        <nav className="sticky top-0 z-50 bg-stone-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <Link href="/" className="shrink-0 flex items-center">
                <img 
                  src="/logo.png" 
                  alt="Vagnar & Þjónusta" 
                  className="h-16 w-auto object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                />
              </Link>
              <div className="hidden md:flex items-center gap-1">
                <Link 
                  href="/hestakerrur" 
                  className="text-stone-300 hover:text-white hover:bg-stone-800 px-4 py-2 transition-colors font-medium text-sm tracking-wide"
                >
                  Kerrur
                </Link>
                <Link 
                  href="/vorukassar" 
                  className="text-stone-300 hover:text-white hover:bg-stone-800 px-4 py-2 transition-colors font-medium text-sm tracking-wide"
                >
                  Vörukassar
                </Link>
                <Link 
                  href="/voruliftur" 
                  className="text-stone-300 hover:text-white hover:bg-stone-800 px-4 py-2 transition-colors font-medium text-sm tracking-wide"
                >
                  Vörulyftur
                </Link>
                <Link 
                  href="/thjonusta" 
                  className="text-stone-300 hover:text-white hover:bg-stone-800 px-4 py-2 transition-colors font-medium text-sm tracking-wide"
                >
                  Þjónusta
                </Link>
                <Link 
                  href="/feed" 
                  className="text-stone-300 hover:text-white hover:bg-stone-800 px-4 py-2 transition-colors font-medium text-sm tracking-wide"
                >
                  Fréttir
                </Link>
                <Link 
                  href="/contact" 
                  className="bg-blue-600 text-white px-6 py-2.5 ml-4 hover:bg-blue-700 transition-colors font-semibold text-sm tracking-wide"
                >
                  Hafðu Samband
                </Link>
              </div>
              {/* Mobile menu button */}
              <div className="md:hidden">
                <Link 
                  href="/contact" 
                  className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition-colors font-semibold text-sm"
                >
                  Samband
                </Link>
              </div>
            </div>
          </div>
        </nav>
        
        <main>
          {children}
        </main>

        <footer className="bg-stone-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-1">VAGNAR &</h3>
                  <h3 className="text-2xl font-bold text-blue-500">ÞJÓNUSTA</h3>
                </div>
                <p className="text-stone-400 mb-6 max-w-md leading-relaxed">
                  Sérhæfum okkur í sölu og þjónustu á hágæða hestakerrur, vörukassa og vörulyftur. 
                  Viðurkenndur dreifingaraðili Dhollandia á Íslandi með áratuga reynslu.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-sm tracking-wider text-stone-300">VÖRUR</h4>
                <ul className="space-y-2 text-stone-400">
                  <li><Link href="/hestakerrur" className="hover:text-blue-500 transition-colors">Kerrur</Link></li>
                  <li><Link href="/vorukassar" className="hover:text-blue-500 transition-colors">Vörukassar</Link></li>
                  <li><Link href="/voruliftur" className="hover:text-blue-500 transition-colors">Vörulyftur</Link></li>
                  <li><Link href="/thjonusta" className="hover:text-blue-500 transition-colors">Þjónusta</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-sm tracking-wider text-stone-300">HAFA SAMBAND</h4>
                <div className="text-stone-400 space-y-2">
                  <p>Tunguháls 10</p>
                  <p>110 Reykjavík</p>
                  <p className="pt-2">
                    Sími: <a href="tel:5673440" className="hover:text-blue-500 transition-colors">567-3440</a>
                  </p>
                  <p>
                    <a href="mailto:vagnar@vagnar.is" className="hover:text-blue-500 transition-colors">vagnar@vagnar.is</a>
                  </p>
                  <p className="pt-2 text-sm">Mán-Fös: 08:00 - 16:00</p>
                </div>
              </div>
            </div>
            <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-stone-500 text-sm">&copy; {new Date().getFullYear()} Vagnar & Þjónusta. Allur réttur áskilinn.</p>
              <div className="flex gap-6">
                <Link href="/contact" className="text-stone-400 hover:text-white text-sm transition-colors">Hafðu Samband</Link>
                <Link href="/feed" className="text-stone-400 hover:text-white text-sm transition-colors">Fréttir</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
