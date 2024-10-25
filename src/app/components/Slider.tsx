'use client'

import { useState } from 'react';

const Sliders = () => {
  const [kuntoValue, setKuntoValue] = useState(4);
  const [paivaValue, setPaivaValue] = useState(14);

  return (
    <div className="w-full max-w-md mx-auto mt-6">
      <h1 className="text-xl font-bold mb-4">Tuotteen ominaisuudet</h1>

      {/* Kuntoluokitus Slider */}
      <div className="mb-8">
        <p className="font-semibold">Kuntoluokitus</p>
        <input
          type="range"
          min="1"
          max="6"
          step="1"
          value={kuntoValue}
          onChange={(e) => setKuntoValue(Number(e.target.value))}
          className="w-full h-2 appearance-none bg-gray-300 rounded-lg cursor-pointer"
          style={{
            background: `linear-gradient(to right, #e5e7eb ${((kuntoValue - 1) / 5) * 100}%, #e5e7eb ${((kuntoValue - 1) / 5) * 100}%)`,
          }}
        />
        <div className="flex justify-between text-sm mt-2">
          <span>K1</span>
          <span>K2</span>
          <span>K3</span>
          <span>K4</span>
          <span>K5</span>
          <span>Kaikki</span>
        </div>
      </div>

      {/* Päivärajaus Slider */}
      <div>
        <p className="font-semibold">Päivärajaus</p>
        <input
          type="range"
          min="1"
          max="30"
          step="1"
          value={paivaValue}
          onChange={(e) => setPaivaValue(Number(e.target.value))}
          className="w-full h-2 appearance-none bg-gray-300 rounded-lg cursor-pointer"
          style={{
            background: `linear-gradient(to right, #e5e7eb ${(paivaValue / 30) * 100}%, #e5e7eb ${(paivaValue / 30) * 100}%)`,
          }}
        />
        <div className="flex justify-between text-sm mt-2">
          <span>1</span>
          <span>7</span>
          <span>14</span>
          <span>30</span>
          <span>*</span>
        </div>
      </div>
    </div>
  );
};

export default Sliders;
