'use client'
import { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('all');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full max-w mx-auto mt-6 text-black">
      <h1 className="text-2xl font-bold mb-4">Haku</h1>
      <div className="flex border rounded-xl overflow-hidden  mb-4">
        <button
          className={`w-1/3 py-2 px-4 text-center font-semibold ${
            activeTab === 'all' ? 'bg-yellow-400 text-black' : 'bg-gray-100 text-black'
          }`}
          onClick={() => handleTabClick('all')}
        >
          Kaikki
        </button>
        <button
          className={`w-1/3 py-2 px-4 text-center font-semibold ${
            activeTab === 'new' ? 'bg-yellow-400 text-black' : 'bg-gray-100 text-black'
          }`}
          onClick={() => handleTabClick('new')}
        >
          Uudet
        </button>
        <button
          className={`w-1/3 py-2 px-4 text-center font-semibold ${
            activeTab === 'used' ? 'bg-yellow-400 text-black' : 'bg-gray-100 text-black'
          }`}
          onClick={() => handleTabClick('used')}
        >
          Käytetyt
        </button>
      </div>
    </div>
  );
};

export default Tabs;
