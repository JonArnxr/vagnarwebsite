"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const trailerModels = [
  {
    id: "4-5h",
    name: "4/5 HESTA",
    horses: 4,
    basePrice: 2950000,
    specs: "4 gluggar, 2 topplúgur, 2700kg",
    weight: "Eigin þyngd um 1.040 kg"
  },
  {
    id: "5h",
    name: "5 HESTA",
    horses: 5,
    basePrice: 3100000,
    specs: "6 gluggar, 2 topplúgur, 3000kg",
    weight: "Eigin þyngd um 1.100 kg"
  },
  {
    id: "6-7h",
    name: "6-7 HESTA",
    horses: 6,
    basePrice: 3500000,
    specs: "8 gluggar, 2 topplúgur, 3500kg",
    weight: "Eigin þyngd um 1.300 kg"
  },
];

const colors = [
  { id: "white", name: "Hvítur", hex: "#f5f5f4", price: 0 },
  { id: "black", name: "Svartur", hex: "#1c1917", price: 0 },
  { id: "brown", name: "Brúnn", hex: "#78501a", price: 75000 },
];

function getTrailerImage(modelId: string, colorId: string, hasExtraWindow: boolean): string | null {
  const imageMap: Record<string, Record<string, { normal: string; extraWindow: string }>> = {
    "4-5h": {
      brown: {
        normal: "/images/hestakerrur/4-5 hesta brún svartar felgur 1 gluggi.png",
        extraWindow: "/images/hestakerrur/4-5 hesta brún svartar felgur 2 gluggar.png",
      },
      white: {
        normal: "/images/hestakerrur/4-5 hesta hvít svartar felgur 1 gluggi.png",
        extraWindow: "/images/hestakerrur/4-5 hesta hvít svartar felgur 1 gluggi.png",
      },
    },
    "6-7h": {
      brown: {
        normal: "/images/hestakerrur/6-7 hesta brún svartar felgur 2 gluggar.png",
        extraWindow: "/images/hestakerrur/6-7 hesta brún svartar felgur 3 gluggar.png",
      },
      white: {
        normal: "/images/hestakerrur/6-7 hesta hvít svartar felgur 2 gluggar.png",
        extraWindow: "/images/hestakerrur/6-7 hesta hvít svartar felgur 3 gluggar.png",
      },
      black: {
        normal: "/images/hestakerrur/6-7 hesta svört svartar felgur 2 gluggar.png",
        extraWindow: "/images/hestakerrur/6-7 hesta svört svartar felgur 3 gluggar.png",
      },
    },
  };

  const modelImages = imageMap[modelId];
  if (!modelImages) return null;
  const colorImages = modelImages[colorId];
  if (!colorImages) return null;
  return hasExtraWindow ? colorImages.extraWindow : colorImages.normal;
}

const wheelOptions = [
  { id: "aluminum-wheels", name: "Álfelgur í stað stáls", price: 68000 },
];

const extras = [
  { id: "pressure-lock", name: "Slár með þrýstilæsingu", price: 25000 },
  { id: "extra-window", name: "Auka gluggi", price: 26000 },
  { id: "camera-7inch", name: "Myndavél með 7\" skjá", price: 80000 },
  { id: "small-tack-room", name: "Lítið graðhestaskilrúm", price: 33000 },
  { id: "large-tack-room", name: "Stórt graðhestaskilrúm", price: 110000 },
];

function formatPrice(price: number) {
  return price.toLocaleString("is-IS") + " kr.";
}

export default function KerrurPage() {
  const [selectedModel, setSelectedModel] = useState(trailerModels[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedWheels, setSelectedWheels] = useState<typeof wheelOptions[0] | null>(null);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);

  const toggleExtra = (extraId: string) => {
    setSelectedExtras((prev) =>
      prev.includes(extraId)
        ? prev.filter((id) => id !== extraId)
        : [...prev, extraId]
    );
  };

  const extrasTotal = selectedExtras.reduce((total, extraId) => {
    const extra = extras.find((e) => e.id === extraId);
    return total + (extra?.price || 0);
  }, 0);

  const totalPrice =
    selectedModel.basePrice +
    selectedColor.price +
    (selectedWheels?.price || 0) +
    extrasTotal;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-stone-900 text-white overflow-hidden min-h-[550px] lg:min-h-[700px]">
        <Image
          src="/images/kerrurHero.png"
          alt="Hestakerru frá Vögnum og Þjónustu"
          fill
          priority
          className="object-cover object-[center_65%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-40">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 px-5 py-2.5 rounded-full mb-6">
              <span className="text-blue-300 text-sm font-medium tracking-wide">Kerrur</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Kerrur fyrir<br />
              íslenskar aðstæður
            </h1>
            <p className="text-lg text-stone-300 leading-relaxed max-w-2xl">
              Kerrur frá Vögnum & Þjónustu eru hannaðar með velferð hestsins og öryggi í forgrunni,
              án þess að gera málamiðlanir á styrk eða endingu.
            </p>
          </div>
        </div>
      </section>

      {/* Features — Bento Grid */}
      <section className="py-24 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">Gæði og ending</h2>
            <p className="text-stone-400 mt-4 text-lg max-w-2xl">
              Kerrurnar eru byggðar á heitgalvaniseraðri grind og yfirbyggðar með sterku
              trefjasamlokuefni sem þolir íslenskar aðstæður.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Large feature card */}
            <div className="md:col-span-2 bg-gradient-to-br from-blue-600/20 to-blue-900/10 rounded-3xl p-10 flex flex-col justify-between min-h-[200px] border border-white/5">
              <div>
                <span className="text-blue-400 text-sm font-medium uppercase tracking-widest">Öryggi</span>
                <h3 className="text-3xl font-bold text-white mt-3">Heitgalvaniseruð grind og öruggir festingar</h3>
              </div>
              <p className="text-stone-300 text-lg mt-6 max-w-lg">
                Ryðfríar lamir og læsingar, LED ljós og gæðabúnaður frá viðurkenndum framleiðendum
                tryggja áreiðanleika í hverri ferð.
              </p>
            </div>

            {/* Tall card */}
            <div className="bg-stone-800/80 rounded-3xl p-8 flex flex-col justify-between min-h-[200px] border border-white/5">
              <span className="text-5xl font-bold text-white">30+</span>
              <div>
                <h3 className="text-xl font-bold text-white">Ára reynsla</h3>
                <p className="text-stone-400 mt-2">Áratuga þekking á smíði og viðhaldi á kerrum</p>
              </div>
            </div>

            {/* Bottom row — two cards */}
            <div className="bg-stone-800/80 rounded-3xl p-8 border border-white/5">
              <h3 className="text-xl font-bold text-white mb-3">Ending</h3>
              <p className="text-stone-400 leading-relaxed">
                Trefjasamlokuefni sem þolir mikið álag og mikla notkun til langs tíma.
              </p>
            </div>
            <div className="bg-stone-800/80 rounded-3xl p-8 border border-white/5">
              <h3 className="text-xl font-bold text-white mb-3">Þægindi</h3>
              <p className="text-stone-400 leading-relaxed">
                Anti-slip gólfefni, góð loftræsting og vel útbúin hnakkageymsla.
              </p>
            </div>
            <div className="bg-stone-800/80 rounded-3xl p-8 border border-white/5">
              <h3 className="text-xl font-bold text-white mb-3">Sérútfærslur</h3>
              <p className="text-stone-400 leading-relaxed">
                Allar kerrur aðlagaðar að þínum þörfum og óskum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Configurator Section */}
      <section className="py-16 bg-stone-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">Hönnun</span>
            <h2 className="text-3xl font-bold text-white mb-4">Hannaðu þína hestakerru</h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              Veldu stærð, lit og aukabúnað sem hentar þínum þörfum.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Preview */}
            <div className="lg:col-span-2">
              {(() => {
                const hasExtraWindow = selectedExtras.includes("extra-window");
                const trailerImage = getTrailerImage(selectedModel.id, selectedColor.id, hasExtraWindow);
                if (trailerImage) {
                  return (
                    <div className="aspect-[16/10] relative rounded-2xl overflow-hidden bg-stone-800">
                      <Image
                        src={trailerImage}
                        alt={`${selectedModel.name} - ${selectedColor.name}`}
                        fill
                        className="object-cover transition-opacity duration-500"
                      />
                    </div>
                  );
                }
                return (
                  <div
                    className="aspect-[16/10] relative flex items-center justify-center transition-colors duration-500 rounded-2xl overflow-hidden"
                    style={{ backgroundColor: selectedColor.hex }}
                  >
                    <div className="text-center p-8">
                      <div
                        className="text-7xl font-bold mb-4 transition-colors duration-300"
                        style={{ color: selectedColor.id === 'white' ? '#1c1917' : '#f5f5f4' }}
                      >
                        {selectedModel.horses}H
                      </div>
                      <div
                        className="text-xl font-medium transition-colors duration-300"
                        style={{ color: selectedColor.id === 'white' ? '#44403c' : '#d6d3d1' }}
                      >
                        {selectedModel.name}
                      </div>
                      <div
                        className="text-sm mt-2 transition-colors duration-300"
                        style={{ color: selectedColor.id === 'white' ? '#78716c' : '#a8a29e' }}
                      >
                        {selectedColor.name}{selectedWheels ? ' • ' + selectedWheels.name : ''}
                      </div>
                      <div
                        className="text-sm mt-4 transition-colors duration-300"
                        style={{ color: selectedColor.id === 'white' ? '#78716c' : '#a8a29e' }}
                      >
                        <div>{selectedModel.specs}</div>
                        <div>{selectedModel.weight}</div>
                      </div>
                    </div>
                  </div>
                );
              })()}

              {/* Color Selection */}
              <div className="mt-8">
                <h3 className="font-bold text-white mb-4">Litur</h3>
                <div className="flex flex-wrap gap-3">
                  {colors.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(color)}
                      className={`w-12 h-12 rounded-xl border-2 transition-all duration-300 ${
                        selectedColor.id === color.id
                          ? "border-blue-600 scale-110 shadow-lg"
                          : "border-stone-600 hover:border-stone-500 hover:scale-105"
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Options Panel */}
            <div className="bg-stone-800/50 rounded-2xl p-6 border border-stone-700/50">
              {/* Model Selection */}
              <div className="mb-8">
                <h3 className="font-bold text-white mb-4">Stærð</h3>
                <div className="space-y-2">
                  {trailerModels.map((model) => (
                    <button
                      key={model.id}
                      onClick={() => setSelectedModel(model)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                        selectedModel.id === model.id
                          ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                          : "bg-stone-800 text-white hover:bg-stone-700 border border-stone-700/50"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{model.name}</span>
                        <span className="text-sm opacity-80">{formatPrice(model.basePrice)}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Wheel Selection */}
              <div className="mb-8">
                <h3 className="font-bold text-white mb-4">Felgur</h3>
                <div className="space-y-2">
                  {wheelOptions.map((wheel) => (
                    <button
                      key={wheel.id}
                      onClick={() => setSelectedWheels(selectedWheels?.id === wheel.id ? null : wheel)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                        selectedWheels?.id === wheel.id
                          ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                          : "bg-stone-800 text-white hover:bg-stone-700 border border-stone-700/50"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{wheel.name}</span>
                        <span className="text-sm opacity-80">
                          {wheel.price === 0 ? "Innifalið" : `+${formatPrice(wheel.price)}`}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Extras */}
              <div className="mb-8">
                <h3 className="font-bold text-white mb-4">Aukabúnaður</h3>
                <div className="space-y-2">
                  {extras.map((extra) => (
                    <button
                      key={extra.id}
                      onClick={() => toggleExtra(extra.id)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                        selectedExtras.includes(extra.id)
                          ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                          : "bg-stone-800 text-white hover:bg-stone-700 border border-stone-700/50"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{extra.name}</span>
                        <span className="text-sm opacity-80">+{formatPrice(extra.price)}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Total Price */}
              <div className="border-t border-stone-700 pt-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-stone-600">Áætlað verð:</span>
                  <span className="text-2xl font-bold text-white">{formatPrice(totalPrice)} + vsk</span>
                </div>
                <p className="text-xs text-stone-500 mb-4">
                  *Verð getur breyst eftir nákvæmri útfærslu. Hafðu samband fyrir nákvæmt tilboð.
                </p>
                <Link
                  href="/contact"
                  className="block w-full bg-blue-600 text-white text-center py-4 rounded-xl font-semibold hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/25 transition-all duration-300"
                >
                  Óska eftir tilboði
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8">
            VÞ kerrur eru endingargóðar og standast allar kröfur íslenskra hestamanna
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/25 transition-all duration-300"
            >
              Hafðu samband
            </Link>
            <a
              href="tel:5673440"
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
            >
              Hringdu: 567-3440
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
