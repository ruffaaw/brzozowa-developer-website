import Image from "next/image";
import houseOffer from "@/config/houseOffer";
import Link from "next/link";
import { FaDownload } from "react-icons/fa6";

export default function Houses() {
  return (
    <section
      id="houses"
      className="w-full flex flex-col items-center bg-grey relative scroll-mt-20"
    >
      <div>
        <p className="text-6xl text-green4 pt-10 font-bold break-words max-w-full">
          DOMY
        </p>
      </div>
      <div className="w-full px-10 pt-10 flex flex-col md:flex-row h-80vh">
        <div className="w-full md:w-3/4 flex justify-center md:justify-end items-start relative ">
          <div className="w-11/12 relative">
            <Image
              src="/renderZGory.jpg"
              alt="Estate"
              layout="responsive"
              objectFit="cover"
              className="rounded-lg shadow-lg w-1/2"
              width={533}
              height={400}
              data-aos="fade-down"
            />
            {houseOffer.map((house, index) => (
              <Link
                href={house.linkDoOferty}
                key={index}
                className="absolute flex justify-center items-center text-white bg-green2 rounded-full text-sm font-bold"
                style={{
                  top: `${house.y}%`,
                  left: `${house.x}%`,
                  width: "30px",
                  height: "30px",
                  transform: "translate(-50%, -50%)",
                }}
                data-aos="fade-down"
                data-aos-delay="200"
              >
                {house.numer}
              </Link>
            ))}
          </div>
        </div>
        <div
          className="w-full h-full md:w-1/2 flex justify-center items-start pt-10 md:pt-0"
          data-aos="fade-up"
        >
          <div className="w-3/4  flex flex-col justify-start items-center space-y-4 h-full overflow-y-auto">
            {houseOffer.map((house, index) => (
              <div
                key={index}
                className="flex flex-row w-full bg-white p-4 rounded-lg shadow-md space-y-2"
                data-aos-delay={`${index * 100}`}
              >
                <div className="w-3/5">
                  <p className="text-green4 text-xl font-semibold">
                    Dom nr {house.numer}
                  </p>
                  <p className="text-gray-600">
                    Status:{" "}
                    <span
                      className={`${
                        house.status === "Dostępny"
                          ? "text-green-500"
                          : "text-red-500"
                      } font-semibold`}
                    >
                      {house.status}
                    </span>
                  </p>
                  <p className="text-gray-600">Metraż: {house.metraz} m²</p>
                  <p className="text-gray-600">Pokoje: {house.pokoje}</p>
                  <p className="text-gray-600">Poziom: {house.poziom}</p>
                  <p className="text-gray-600">Ogródek: {house.ogrodek} m²</p>
                  <p className="text-gray-600 font-bold">
                    Cena: {house.cena} zł
                  </p>
                </div>
                <div>
                  <Link
                    className="w-full bg-green2 p-4 rounded-xl text-white flex justify-center items-center flex-col"
                    href={house.linkDoOferty}
                  >
                    <FaDownload className="size-4" />
                    <p className="text-base">Szczegóły oferty</p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
