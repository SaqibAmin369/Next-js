import Image from "next/image";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import BookResults from "./components/BookResults";
import Footer from "./components/Footer";
import Tabs from "./components/Tabs";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
    <Header />

    <main className="flex-grow container mx-auto px-4 py-8">

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3">
        <div className="text-black mb-8 font-bold ">
      <ul className="flex space-x-4 text-xl ">
            <li><a href="#" >ETUSIVU</a></li>
            <li><a href="#" >AIHEALUEET</a></li>
            <li><a href="#" >OSTAMME</a></li>
            <li><a href="#" >MESSUKALIENTER</a></li>
            <li><a href="#" >MYYNTIPISTEET</a></li>
            <li><a href="#" >TOIMITUSEHDOT</a></li>
          </ul>
      </div>
          <div>
            <Tabs />
          </div>
          <SearchForm />
        </div>
        <div className="w-full md:w-2/3 mt-12">
          <BookResults />
        </div>
      </div>

    </main>
    <Footer />

  </div>
  );
}
