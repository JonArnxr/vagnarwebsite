"use client";

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
  { id: "silver", name: "Silfur", hex: "#a8a29e", price: 50000 },
  { id: "blue", name: "Blár", hex: "#1e40af", price: 75000 },
  { id: "red", name: "Rauður", hex: "#b91c1c", price: 75000 },
  { id: "green", name: "Grænn", hex: "#166534", price: 75000 },
];

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
      <section className="relative bg-stone-900 text-white py-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#44403c_1px,transparent_1px),linear-gradient(to_bottom,#44403c_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 px-4 py-2 mb-6">
              <span className="text-blue-400 text-sm font-medium tracking-wide">Kerrur</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Kerrur fyrir<br />
              <span className="text-blue-500">íslenskar aðstæður</span>
            </h1>
            <p className="text-lg text-stone-300 leading-relaxed max-w-2xl">
              Kerrur frá Vögnum & Þjónustu eru hannaðar með velferð hestsins og öryggi í forgrunni, 
              án þess að gera nokkurn afslátt af styrk og endingu.
            </p>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Gæði og ending</h2>
              <div className="text-stone-600 space-y-4 leading-relaxed">
                <p>
                  Kerrurnar eru byggðar á heitgalvaniseraðri grind og yfirbyggðar með sterku 
                  trefjasamlokuefni sem þolir íslenskar aðstæður og mikla notkun til langs tíma.
                </p>
                <p>
                  Mikil áhersla er lögð á þægindi og hagkvæmni í notkun, með vel útbúinni 
                  hnakkageymslu, anti-slip gólfi og vönduðum innréttingum sem tryggja öruggan flutning.
                </p>
                <p>
                  Ryðfríar lamir og læsingar, LED ljós og gæðabúnaður frá viðurkenndum framleiðendum 
                  tryggja áreiðanleika í hverri ferð.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6">
                <div className="w-12 h-12 bg-blue-100 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-bold text-stone-900 mb-2">Öryggi</h3>
                <p className="text-stone-600 text-sm">Heitgalvaniseruð grind og öruggir festingar</p>
              </div>
              <div className="bg-white p-6">
                <div className="w-12 h-12 bg-blue-100 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-bold text-stone-900 mb-2">Ending</h3>
                <p className="text-stone-600 text-sm">Trefjasamlokuefni sem þolir mikið</p>
              </div>
              <div className="bg-white p-6">
                <div className="w-12 h-12 bg-blue-100 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-stone-900 mb-2">Þægindi</h3>
                <p className="text-stone-600 text-sm">Anti-slip gólfefni og góð loftræsting</p>
              </div>
              <div className="bg-white p-6">
                <div className="w-12 h-12 bg-blue-100 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="font-bold text-stone-900 mb-2">Sérútfærslur</h3>
                <p className="text-stone-600 text-sm">Aðlöguð að þínum þörfum</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Configurator Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">Stilltu þína kerru</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Veldu stærð, lit og aukabúnað til að fá verðmat. Endanlegt verð getur verið breytilegt.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Preview */}
            <div className="lg:col-span-2">
              <div 
                className="aspect-[16/10] relative flex items-center justify-center transition-colors duration-300"
                style={{ backgroundColor: selectedColor.hex }}
              >
                <div className="text-center p-8">
                  <div 
                    className="text-6xl font-bold mb-4"
                    style={{ color: selectedColor.id === 'white' || selectedColor.id === 'silver' ? '#1c1917' : '#f5f5f4' }}
                  >
                    {selectedModel.horses}H
                  </div>
                  <div 
                    className="text-xl font-medium"
                    style={{ color: selectedColor.id === 'white' || selectedColor.id === 'silver' ? '#44403c' : '#d6d3d1' }}
                  >
                    {selectedModel.name}
                  </div>
                  <div 
                    className="text-sm mt-2"
                    style={{ color: selectedColor.id === 'white' || selectedColor.id === 'silver' ? '#78716c' : '#a8a29e' }}
                  >
                    {selectedColor.name}{selectedWheels ? ' • ' + selectedWheels.name : ''}
                  </div>
                  <div 
                    className="text-sm mt-4"
                    style={{ color: selectedColor.id === 'white' || selectedColor.id === 'silver' ? '#78716c' : '#a8a29e' }}
                  >
                    <div>{selectedModel.specs}</div>
                    <div>{selectedModel.weight}</div>
                  </div>
                </div>
              </div>

              {/* Color Selection */}
              <div className="mt-8">
                <h3 className="font-bold text-stone-900 mb-4">Litur</h3>
                <div className="flex flex-wrap gap-3">
                  {colors.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(color)}
                      className={`w-12 h-12 border-2 transition-all ${
                        selectedColor.id === color.id
                          ? "border-blue-600 scale-110"
                          : "border-stone-300 hover:border-stone-400"
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Options Panel */}
            <div className="bg-stone-100 p-6">
              {/* Model Selection */}
              <div className="mb-8">
                <h3 className="font-bold text-stone-900 mb-4">Stærð</h3>
                <div className="space-y-2">
                  {trailerModels.map((model) => (
                    <button
                      key={model.id}
                      onClick={() => setSelectedModel(model)}
                      className={`w-full text-left px-4 py-3 transition-colors ${
                        selectedModel.id === model.id
                          ? "bg-blue-600 text-white"
                          : "bg-white text-stone-900 hover:bg-stone-200"
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
                <h3 className="font-bold text-stone-900 mb-4">Felgur</h3>
                <div className="space-y-2">
                  {wheelOptions.map((wheel) => (
                    <button
                      key={wheel.id}
                      onClick={() => setSelectedWheels(wheel)}
                      className={`w-full text-left px-4 py-3 transition-colors ${
                        selectedWheels?.id === wheel.id
                          ? "bg-blue-600 text-white"
                          : "bg-white text-stone-900 hover:bg-stone-200"
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
                <h3 className="font-bold text-stone-900 mb-4">Aukabúnaður</h3>
                <div className="space-y-2">
                  {extras.map((extra) => (
                    <button
                      key={extra.id}
                      onClick={() => toggleExtra(extra.id)}
                      className={`w-full text-left px-4 py-3 transition-colors ${
                        selectedExtras.includes(extra.id)
                          ? "bg-blue-600 text-white"
                          : "bg-white text-stone-900 hover:bg-stone-200"
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
              <div className="border-t border-stone-300 pt-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-stone-600">Áætlað verð:</span>
                  <span className="text-2xl font-bold text-stone-900">{formatPrice(totalPrice)} + vsk</span>
                </div>
                <p className="text-xs text-stone-500 mb-4">
                  *Verð getur breyst eftir nákvæmri útfærslu. Hafðu samband fyrir nákvæmt tilboð.
                </p>
                <Link
                  href="/contact"
                  className="block w-full bg-blue-600 text-white text-center py-4 font-semibold hover:bg-blue-700 transition-colors"
                >
                  Óska eftir tilboði
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Hvort sem um er að ræða daglega notkun eða lengri flutninga
          </h2>
          <p className="text-stone-400 mb-8 max-w-2xl mx-auto">
            Kerrur Vagna & Þjónustu bjóða upp á örugga, endingargóða og faglega lausn 
            sem stenst kröfur íslenskra hestamanna.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 font-semibold hover:bg-blue-700 transition-colors"
            >
              Hafðu samband
            </Link>
            <a
              href="tel:5673440"
              className="inline-flex items-center justify-center bg-stone-800 text-white border border-stone-700 px-8 py-4 font-semibold hover:bg-stone-700 transition-colors"
            >
              Hringdu: 567-3440
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
