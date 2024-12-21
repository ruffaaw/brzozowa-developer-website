"use client";
import Image from "next/image";

export default function Investment() {
  return (
    <section
      id="investment"
      className="w-full h-full flex flex-col items-center bg-grey relative scroll-mt-20"
    >
      <div>
        <p className="text-6xl text-green4 pt-10 font-bold break-words max-w-full">
          O INWESTYCJI
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center w-full p-10 relative">
        <div className="bg-green2 rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row w-full md:w-4/5">
          <div className="p-8 md:w-3/5 text-white">
            <h2 className="text-2xl font-bold mb-6">Lokalizacja inwestycji</h2>
            <p className="text-lg mb-6">
              Inwestycja położona jest w doskonałej lokalizacji, zapewniając
              szybki dostęp do głównych punktów Krakowa i okolicznych miast.
              Zjazd z autostrady A4 w odległości 1,2 km sprawia, że podróże są
              wygodne, a przystanek MPK w odległości 700 metrów umożliwia łatwy
              dostęp do komunikacji miejskiej.
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                Odległości do miast
              </h3>
              <ul className="list-disc list-inside text-lg ml-6">
                <li>Kraków - 25 km (centrum, 4,5 km do granic miasta)</li>
                <li>Niepołomice - 5 km</li>
                <li>Wieliczka - 6,5 km</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Wygoda codzienna</h3>
              <p className="text-lg">
                W pobliżu znajdują się szkoły, sklepy, restauracje oraz tereny
                zielone, co sprawia, że ta lokalizacja jest idealnym miejscem do
                życia. Bliskość do wszystkich udogodnień zapewnia komfort
                codziennego funkcjonowania.
              </p>
            </div>

            <div className="flex justify-center">
              <button
                className="bg-green4 text-white px-6 py-3 rounded-md hover:bg-green1 transition"
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
        <div className="relative md:absolute md:w-1/3 md:-right-0 md: mr-32 flex justify-center items-center -mt-20 md:mt-0">
          <Image
            src="/render1.jpg"
            alt="Modern houses"
            layout="responsive"
            objectFit="cover"
            className="rounded-lg shadow-lg w-full"
            width={533}
            height={400}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center w-full p-10 relative">
        <div className="relative md:absolute md:w-3/10 md:-left-0 md: ml-32 flex justify-center items-center -mt-20 md:mt-0">
          <Image
            src="/render2.jpg"
            alt="Modern houses"
            layout="responsive"
            objectFit="cover"
            className="rounded-lg shadow-lg w-full"
            width={533}
            height={400}
          />
        </div>
        <div className="bg-green2 rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row w-full md:w-4/5 justify-end ">
          <div className="p-8 md:w-3/5 text-white">
            <h2 className="text-2xl font-bold mb-6">Własność i prywatność</h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                Pełna własność działki
              </h3>
              <p className="text-lg">
                Działka jest w pełni własnością przyszłych mieszkańców. Zarówno
                budynek, jak i teren są objęte prawem własności na 100%, co
                zapewnia pełną kontrolę nad nieruchomością.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                Bezpieczeństwo i prywatność
              </h3>
              <p className="text-lg">
                Otoczenie działki zostało w pełni ogrodzone z każdej strony, co
                zapewnia poczucie bezpieczeństwa oraz prywatności dla
                mieszkańców.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                Strefa tarasowo-ogrodowa
              </h3>
              <p className="text-lg">
                Każdy dom posiada przestronną strefę tarasowo-ogrodową o
                powierzchni od 300 do 400 m². Umiejscowienie tarasu biegunowo
                względem sąsiedniego budynku maksymalizuje prywatność i zapewnia
                komfortową przestrzeń do wypoczynku.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center w-full p-10 relative">
        <div className="bg-green2 rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row w-full md:w-4/5">
          <div className="p-8 md:w-3/5 text-white">
            <h2 className="text-2xl font-bold mb-6">
              Architektura i funkcjonalność
            </h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                Przestronność i komfort
              </h3>
              <p className="text-lg">
                W domach zaprojektowano dużą, przeszkloną strefę dzienną z
                bezpośrednim wyjściem do ogrodu. Dzięki temu wnętrza są
                doskonale doświetlone naturalnym światłem, a przestronność
                pomieszczeń wpływa na komfort codziennego życia.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                Dodatkowy pokój na parterze
              </h3>
              <p className="text-lg">
                Na parterze znajduje się dodatkowy pokój, który może pełnić
                funkcję biura, gabinetu lub miejsca do pracy zdalnej – doskonale
                wpisując się w nowoczesny styl życia.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                Sypialnie i przestronność
              </h3>
              <p className="text-lg">
                Na piętrze znajdują się trzy pełnowymiarowe sypialnie (brak
                skosów), co zapewnia wygodę i przestronność. Dodatkowo, znajduje
                się tam również przestronna łazienka, która zwiększa komfort
                użytkowania.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                Możliwości adaptacji dachu
              </h3>
              <p className="text-lg">
                Dach można zaadoptować na zieloną strefę relaksu lub miejsce do
                odpoczynku. Może również stanowić idealną przestrzeń do
                zamontowania paneli fotowoltaicznych, co jest dodatkowym atutem.
              </p>
            </div>
          </div>
        </div>
        <div className="relative md:absolute md:w-1/3 md:-right-0 md: mr-32 flex justify-center items-center -mt-20 md:mt-0">
          <Image
            src="/render3.jpg"
            alt="Modern houses"
            layout="responsive"
            objectFit="cover"
            className="rounded-lg shadow-lg w-full"
            width={533}
            height={400}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center w-full px-10 pt-10 relative">
        <div className="relative md:absolute md:w-1/3 md:-left-0 md: ml-32 flex justify-center items-center -mt-20 md:mt-0">
          <Image
            src="/render4.jpg"
            alt="Modern houses"
            layout="responsive"
            objectFit="cover"
            className="rounded-lg shadow-lg w-full"
            width={533}
            height={400}
          />
        </div>
        <div className="bg-green2 rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row w-full md:w-4/5 justify-end ">
          <div className="p-8 md:w-3/5 text-white">
            <h2 className="text-2xl font-bold mb-6">
              Standard deweloperski Premium
            </h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                Wysoka jakość wykonania
              </h3>
              <p className="text-lg">
                Standard deweloperski Premium zapewnia najwyższą jakość
                wykonania oraz zastosowanie nowoczesnych technologii. Każdy dom
                został zaprojektowany z dbałością o szczegóły, aby zapewnić
                komfort i funkcjonalność.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                Pompowanie ciepła i wentylacja
              </h3>
              <p className="text-lg">
                Domy są wyposażone w pompę ciepła oraz wentylację mechaniczną
                (rekuperację), co zapewnia energooszczędność oraz komfort
                cieplny przez cały rok.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                Okna, rolety i brama
              </h3>
              <p className="text-lg">
                Okna tarasowe typu HST oraz elektrycznie sterowane rolety
                podtynkowe podnoszą funkcjonalność i estetykę wnętrz, a
                przesuwana brama wjazdowa z furtką zapewnia wygodny dostęp do
                nieruchomości.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                Izolacja termiczna i instalacje
              </h3>
              <p className="text-lg">
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