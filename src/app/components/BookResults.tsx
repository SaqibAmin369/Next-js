import Image from 'next/image'
import DropDown from './Dropdown'

const books = [
  { id: 1, title: 'Todiste', author: 'Agata Kristof', price: '18,00 €', image: '/placeholder.svg' },
  { id: 2, title: 'Todiste', author: 'Agata Kristof', price: '18,00 €', image: '/placeholder.svg' },
  { id: 3, title: 'Todiste', author: 'Agata Kristof', price: '18,00 €', image: '/placeholder.svg' },
  { id: 4, title: 'Todiste', author: 'Agata Kristof', price: '18,00 €', image: '/placeholder.svg' },
  { id: 5, title: 'Todiste', author: 'Agata Kristof', price: '18,00 €', image: '/placeholder.svg' },
]

export default function BookResults() {
  return (
    <div className="text-black mt-[55px]">
      <h2 className="text-2xl font-bold mb-4">Hakutulokset</h2>
      <div className="flex items-center justify-between mb-4">
        <p>Haulle löytyi 107 tuotetta (sivu 1 / 6)</p>

      </div>
      <div>
        <DropDown />
      </div>
      <div className="space-y-6 mt-3">
        {books.map((book) => (
          <div key={book.id} className="flex bg-white p-4 rounded-lg shadow">
            <div className="w-1/4">
              <Image src="/Image.png" alt={book.title} width={150} height={200} className="object-cover" />
            </div>
            <div className="w-3/4 ml-4 text-black flex justify-between">
                <div>
                <h3 className="text-xl font-semibold">{book.title}</h3>
              <p>{book.author}</p>
              <p className="text-gray-600">2004 • Tammi</p>
              <p className="text-gray-600">Sidottu • Myyntipaikka: KVK</p>
              <button className="mt-2 bg-[#F0F0F0] p-3 text-black font-semibold hover:underline">Näytä kuvailutiedot +</button>
                  </div>

              <div className=" flex flex-col  ml-3 justify-between  ">

          <div className="flex flex-col">      <span className="text-2xl font-bold">{book.price}</span>
                <span className="text-[14px] text-[#757575] font-bold">Saatavilla 1 kpl</span></div>
               <div className="flex flex-col"> <span className="text-[14px] text-[#757575]">Lähetetään 1-2 arkipäivässä.</span>
                <span className="text-[14px] text-[#757575]">Toimitus Suomeen 6,00 €</span>
                <button className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500">
                  Lisää ostoskoriin +
                </button></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}