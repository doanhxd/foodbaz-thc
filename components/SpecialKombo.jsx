import Image from "next/image";
import fiftyOff from "../components/images/50-off.png";
import specKombo from "../components/images/spekombo.png";

function SpecialKombo() {
  return (
    <div className="grid grid-cols-2 mt-32">
      {/* Left */}
      <div className="pt-32 bg-gray-900 pb-44">
        <div className="flex flex-col pl-10 ml-96">
          <p className="font-serif text-yellow-500 text-24">
            Special Kombo Pack
          </p>
          <h1 className="flex flex-row mt-2 font-black text-white text-48">
            WE MAKE THE BEST*
            <br />
            BURGER IN YOUR TOWN
          </h1>
          <p className="mt-4 text-gray-400 text-18">
            As well known and we are very busy all days advice you. advice{" "}
            <br />
            you to call us of before arriving, so we can guarantee your seat.
            <br />
            advice you to call us of before arriving and we <br />
            are very busy all days advice you. advice you to call us <br />
            of before arriving
          </p>
          <div className="flex mt-8">
            <button className="px-10 py-4 my-3 font-bold text-white transition duration-150 bg-green-500 rounded-lg shadow-md hover:shadow-xl active:scale-90">
              ORDER NOW
            </button>
            <div className="grid grid-cols-2 ml-14">
              <h1 className="flex items-end font-bold text-yellow-500 text-44">
                $46.99
              </h1>
              <h2 className="flex items-end mb-3 ml-3 text-white line-through text-24">
                $59.99
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Mid */}
      {/* <div className="bg-black"></div> */}

      {/* Right */}
      <div className="flex items-center bg-gray-900">
        <div className="relative mt-10">
          <Image src={specKombo} width={1200} height={630} />

          <div className="absolute mr-2 -mt-24 transform right-4">
            <Image src={fiftyOff} width={150} height={150} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialKombo;
