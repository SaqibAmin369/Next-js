export default function Footer() {
  return (
    <footer className="bg-footerColor py-8 text-[#757575]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div>
            <h3 className="  mb-2 font-mono font-extrabold text-4xl">Salpakirja Oy</h3>
            <p>Salpakirja Oy © 2024</p>
            <p>Tietosuojaseloste</p>
            <p>Evästeet</p>
          </div>
          <div>
           <div className="mb-5"> <h3 >Yhteystiedot:</h3>
           <p>Salpakirja Oy asiakaspalvelu</p></div>
            <p>asiakaspalvelu@salpakija.com, puh. 050 339 5724</p>
         <div className="mb-5">
         <p>Kirjakauppa Hannu</p>
            <p>Avoinna ma, ke-pe klo 9-17, ti klo 9-16</p>
            <p>Raatihuoneenkatu 15, 49400 Hamina</p>
            <p>asiakaspalvelu@salpakija.com, puh. 050 339 5724</p>
         </div>
          <div className="mb-5">
            <h3>Kirjakauppa Keijo</h3>
            <p>Avoinna ma-pe klo 10-15-16, la suljettu</p>
            <p>Keskuskatu 5, 48100 Kotka, Keskuspuiston Pasaati kauppakeskus</p>
            <p>kirjakauppa.kotka@gmail.com, puh. 041 314 7501</p>
            </div>
          </div>



        </div>
      </div>
    </footer>
  )
}