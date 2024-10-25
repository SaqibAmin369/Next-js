import Sliders from "./Slider"

export default function SearchForm() {
  return (
    <div>
    <div className="bg-[#f5f5f5] p-6 rounded-lg shadow text-black">
      <h2 className="text-2xl font-bold mb-4">Haku</h2>
      <form className="space-y-4">
        <div>
          <h3 className="font-semibold mb-2">Hakuehdot</h3>
          <input type="text" placeholder="Tekijä" className="w-full p-2 border rounded" />
          <input type="text" placeholder="Nimike" className="w-full p-2 border rounded mt-2" />
          <input type="text" placeholder="ISBN" className="w-full p-2 border rounded mt-2" />
          <input type="text" placeholder="Tuoteryhma" className="w-full p-2 border rounded mt-2" />
        </div>
        <div>
          <h3 className="font-semibold mb-2">Tarkemmat kirjahaku</h3>
          <input type="text" placeholder="Kustantaja" className="w-full p-2 border rounded" />
          <input type="text" placeholder="Painosvuosi" className="w-full p-2 border rounded mt-2" />
          <input type="text" placeholder="Aihepiiri" className="w-full p-2 border rounded mt-2" />
          <input type="text" placeholder="Kieli" className="w-full p-2 border rounded mt-2" />
        </div>
        <div>
          <h3 className="font-semibold mb-2">Tuotteen ominaisuudet</h3>
          <div className="flex items-center space-x-2 mb-3">
              <Sliders />
          </div>

        </div>

      </form>

    </div>
    <div className="mt-7 text-center">    <button type="submit" className="w-full bg-orange-400 text-white py-2 rounded hover:bg-orange-500">
          Hae
        </button>      <span className="text-black text-center mt-5">Tyhjennä haku</span></div>

    </div>
  )
}