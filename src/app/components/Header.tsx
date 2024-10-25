export default function Header() {
  return (
    <header className="bg-customYellow h- text-black">
      <div className="container mx-auto px-4 py-12">
        <nav className="flex justify-between items-center">
          <div className="w-32 h-8 bg-gray-200"></div>

          <div className="text-sm">
            <a href="#" className="hover:underline">Ostoskori</a>
          </div>
        </nav>
      </div>
    </header>
  )
}