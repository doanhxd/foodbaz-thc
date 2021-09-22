import Image from "next/image";
import fiftyOff from "./images/50-off.png";
import specKombo from "./images/spekombo.png";

function SpecialKombo() {
  return (
    <div className="grid grid-cols-2 mt-12 md:mt-32">
      {/* Left */}
      <div className="bg-gray-900 md:py-24">
        <div className="flex flex-col my-6 ml-6 md:ml-80">
          <p className="font-serif text-yellow-500 md:text-24">
            Special Kombo Pack
          </p>
          <h1 className="flex flex-row mt-2 font-black text-white md:text-48">
            WE MAKE THE BEST*
            <br />
            BURGER IN YOUR TOWN
          </h1>
          <p className="hidden mt-4 text-gray-400 md:inline text-18">
            As well known and we are very busy all days advice you. advice{" "}
            <br />
            you to call us of before arriving, so we can guarantee your seat.
            <br />
            advice you to call us of before arriving and we <br />
            are very busy all days advice you. advice you to call us <br />
            of before arriving
          </p>

          <div className="flex mt-8 truncate">
            <button className="w-40 h-12 mt-6 font-semibold text-white uppercase bg-green-500 rounded-lg md:h-14 md:text-16 text-14">
              Order now
            </button>
            <div className="grid grid-cols-2 ml-12">
              <h1 className="items-end hidden font-bold text-yellow-500 md:inline-flex text-44">
                $46.99
              </h1>
              <h2 className="items-end hidden mb-3 ml-3 text-white line-through md:inline-flex text-24">
                $59.99
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex bg-gray-900">
        <div className="flex flex-col justify-end">
          <div className="inline-flex flex-col pb-4 lg:hidden">
            <h1 className="flex font-bold text-yellow-500 text-24">$46.99</h1>
            <h2 className="flex mb-1 text-gray-400 line-through items-left text-14 lg:hidden">
              %59.99
            </h2>
          </div>
        </div>
        <div className="absolute items-start md:relative md:flex md:items-center">
          <div className="relative mt-10 w-[160px] filter brightness-110 h-[85px] md:w-[900px] md:h-[490px] md:inline-flex">
            <Image src={specKombo} layout="fill" objectFit="cover" />
          </div>

          <div className="absolute bottom-0 right-0 hidden -mr-10 transform md:inline">
            <Image src={fiftyOff} width={150} height={150} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialKombo;
