"use client";
import Image from "next/image";

export default function Investment() {
  return (
    <section
      id="investment"
      className="w-full h-full flex flex-col items-center bg-grey relative scroll-mt-20"
    >
      <div>
        <p className="text-3xl sm:text-4xl lg:text-6xl text-green4 pt-10 font-bold text-center break-words max-w-full">
          O INWESTYCJI
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center pt-4 p-2 w-full sm:px-10 gap-2 relative">
        <div className="lg:hidden relative  flex justify-center items-center overflow-hidden">
          <Image
            data-aos="fade-left"
            src="/render1.jpg"
            alt="Modern houses"
            layout="responsive"
            objectFit="cover"
            className="rounded-lg shadow-lg "
            width={533}
            height={400}
          />
        </div>
        <div className="bg-green2 rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row w-full lg:w-4/5">
          <div className="p-6 sm:p-8 lg:w-3/5 text-white" data-aos="fade-right">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Lokalizacja inwestycji
            </h2>
            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              Inwestycja położona jest w doskonałej lokalizacji, zapewniając
              szybki dostęp do głównych punktów Krakowa i okolicznych miast.
              Zjazd z autostrady A4 w odległości 1,2 km sprawia, że podróże są
              wygodne, a przystanek MPK w odległości 700 metrów umożliwia łatwy
              dostęp do komunikacji miejskiej.
            </p>
            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Odległości do miast
              </h3>
              <ul className="list-disc list-inside text-base sm:text-lg ml-4 sm:ml-6">
                <li>Kraków - 25 km (centrum, 4,5 km do granic miasta)</li>
                <li>Niepołomice - 5 km</li>
                <li>Wieliczka - 6,5 km</li>
              </ul>
            </div>
            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Wygoda codzienna
              </h3>
              <p className="text-base sm:text-lg">
                W pobliżu znajdują się szkoły, sklepy, restauracje oraz tereny
                zielone, co sprawia, że ta lokalizacja jest idealnym miejscem do
                życia. Bliskość do wszystkich udogodnień zapewnia komfort
                codziennego funkcjonowania.
              </p>
            </div>
            <div className="flex justify-center">
              <button
                className="bg-green4 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-green1 transition"
                onClick={() =>
                  window.open(
                    "https://maps.app.goo.gl/jd3WxKn6J2PKWtyv9",
                    "_blank"
                  )
                }
              >
                Zobacz na mapie
              </button>
            </div>
          </div>
        </div>
        <div className="max-lg:hidden relative md:absolute md:w-1/3 max-w-[551px] max-h-[413px] md:-right-0 lg:mr-32 flex justify-center items-center -mt-20 md:mt-0">
          <Image
            data-aos="fade-left"
            src="/render1.jpg"
            alt="Modern houses"
            layout="responsive"
            objectFit="contain"
            className="rounded-lg shadow-lg "
            width={533}
            height={400}
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center w-full p-2 sm:px-10 gap-2 relative">
        <div className="lg:hidden relative flex justify-center items-center overflow-hidden">
          <Image
            data-aos="fade-right"
            src="/render2.jpg"
            alt="Modern houses"
            layout="responsive"
            objectFit="cover"
            className="rounded-lg shadow-lg"
            width={533}
            height={400}
          />
        </div>

        <div className=" max-lg:hidden max-w-[551px] max-h-[413px] relative md:absolute md:w-3/10 lg:-left-0 lg:ml-32 flex justify-center items-center -mt-20 md:mt-0">
          <Image
            src="/render2.jpg"
            alt="Modern houses"
            layout="responsive"
            objectFit="cover"
            className="rounded-lg shadow-lg w-full"
            width={533}
            height={400}
            data-aos="fade-right"
          />
        </div>
        <div className="bg-green2 rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row w-full lg:w-4/5 justify-end ">
          <div className="p-6 sm:p-8 lg:w-3/5 text-white" data-aos="fade-left">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 ">
              Własność i prywatność
            </h2>
            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 ">
                Pełna własność działki
              </h3>
              <p className="text-base sm:text-lg ">
                Działka jest w pełni własnością przyszłych mieszkańców. Zarówno
                budynek, jak i teren są objęte prawem własności na 100%, co
                zapewnia pełną kontrolę nad nieruchomością.
              </p>
            </div>

            <div className="mb-4 sm:mb-6 ">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 ">
                Bezpieczeństwo i prywatność
              </h3>
              <p className="text-base sm:text-lg ">
                Otoczenie działki zostało w pełni ogrodzone z każdej strony, co
                zapewnia poczucie bezpieczeństwa oraz prywatności dla
                mieszkańców.
              </p>
            </div>

            <div className="mb-4 sm:mb-6 ">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 ">
                Strefa tarasowo-ogrodowa
              </h3>
              <p className="text-base sm:text-lg ">
                Każdy dom posiada przestronną strefę tarasowo-ogrodową o
                powierzchni od 300 do 400 m². Umiejscowienie tarasu biegunowo
                względem sąsiedniego budynku maksymalizuje prywatność i zapewnia
                komfortową przestrzeń do wypoczynku.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center w-full p-2 sm:px-10 gap-2 relative">
        <div className="lg:hidden relative flex justify-center items-center overflow-hidden">
          <Image
            data-aos="fade-left"
            src="/render4.jpg"
            alt="Modern houses"
            layout="responsive"
            objectFit="cover"
            className="rounded-lg shadow-lg w-full"
            width={533}
            height={400}
          />
        </div>
        <div className="bg-green2 rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row w-full lg:w-4/5">
          <div className="p-6 sm:p-8 lg:w-3/5 text-white" data-aos="fade-right">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Architektura i funkcjonalność
            </h2>

            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Przestronność i komfort
              </h3>
              <p className="text-base sm:text-lg">
                W domach zaprojektowano dużą, przeszkloną strefę dzienną z
                bezpośrednim wyjściem do ogrodu. Dzięki temu wnętrza są
                doskonale doświetlone naturalnym światłem, a przestronność
                pomieszczeń wpływa na komfort codziennego życia.
              </p>
            </div>

            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Dodatkowy pokój na parterze
              </h3>
              <p className="text-base sm:text-lg">
                Na parterze znajduje się dodatkowy pokój, który może pełnić
                funkcję biura, gabinetu lub miejsca do pracy zdalnej – doskonale
                wpisując się w nowoczesny styl życia.
              </p>
            </div>

            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Sypialnie i przestronność
              </h3>
              <p className="text-base sm:text-lg">
                Na piętrze znajdują się trzy pełnowymiarowe sypialnie (brak
                skosów), co zapewnia wygodę i przestronność. Dodatkowo, znajduje
                się tam również przestronna łazienka, która zwiększa komfort
                użytkowania.
              </p>
            </div>

            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Możliwości adaptacji dachu
              </h3>
              <p className="text-base sm:text-lg">
                Dach można zaadoptować na zieloną strefę relaksu lub miejsce do
                odpoczynku. Może również stanowić idealną przestrzeń do
                zamontowania paneli fotowoltaicznych, co jest dodatkowym atutem.
              </p>
            </div>
          </div>
        </div>
        <div className="max-lg:hidden max-w-[551px] max-h-[413px] relative md:absolute md:w-1/3 md:-right-0 lg:mr-32 flex justify-center items-center -mt-20 md:mt-0">
          <Image
            src="/render4.jpg"
            alt="Modern houses"
            layout="responsive"
            objectFit="cover"
            className="rounded-lg shadow-lg w-full"
            width={533}
            height={400}
            data-aos="fade-left"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center w-full p-2 sm:px-10 sm:pb-10 gap-2 relative">
        <div className="max-lg:hidden max-w-[551px] max-h-[413px] relative md:absolute md:w-3/10 lg:-left-0 lg:ml-32 flex justify-center items-center -mt-20 md:mt-0">
          <Image
            src="/render3.jpg"
            alt="Modern houses"
            layout="responsive"
            objectFit="cover"
            className="rounded-lg shadow-lg w-full"
            width={533}
            height={400}
            data-aos="fade-right"
          />
        </div>
        <div className="lg:hidden relative flex justify-center items-center overflow-hidden">
          <Image
            data-aos="fade-right"
            src="/render3.jpg"
            alt="Modern houses"
            layout="responsive"
            objectFit="cover"
            className="rounded-lg shadow-lg w-full"
            width={533}
            height={400}
          />
        </div>
        <div className="bg-green2 rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row w-full lg:w-4/5 justify-end ">
          <div className="p-6 sm:p-8 lg:w-3/5 text-white" data-aos="fade-left">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 ">
              Standard deweloperski Premium
            </h2>

            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 ">
                Wysoka jakość wykonania
              </h3>
              <p className="text-base sm:text-lg ">
                Standard deweloperski Premium zapewnia najwyższą jakość
                wykonania oraz zastosowanie nowoczesnych technologii. Każdy dom
                został zaprojektowany z dbałością o szczegóły, aby zapewnić
                komfort i funkcjonalność.
              </p>
            </div>

            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 ">
                Pompowanie ciepła i wentylacja
              </h3>
              <p className="text-base sm:text-lg ">
                Domy są wyposażone w pompę ciepła oraz wentylację mechaniczną
                (rekuperację), co zapewnia energooszczędność oraz komfort
                cieplny przez cały rok.
              </p>
            </div>

            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 ">
                Okna, rolety i brama
              </h3>
              <p className="text-base sm:text-lg ">
                Okna tarasowe typu HST oraz elektrycznie sterowane rolety
                podtynkowe podnoszą funkcjonalność i estetykę wnętrz, a
                przesuwana brama wjazdowa z furtką zapewnia wygodny dostęp do
                nieruchomości.
              </p>
            </div>

            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 ">
                Izolacja termiczna i instalacje
              </h3>
              <p className="text-base sm:text-lg ">
                Budynki zostały zaprojektowane z bardzo dobrą izolacją termiczną
                (ściany grubości 50 cm), co zapewnia komfort cieplny. Dodatkowo
                instalacje są przygotowane pod klimatyzację i fotowoltaikę, co
                podnosi standard użytkowy domu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
