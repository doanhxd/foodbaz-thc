import Image from "next/image";
import specOff from "../components/images/special-offer.png";
import fiftyOff from "../components/images/50-off.png";

function SpecialOffer() {
  return (
    <div className="grid grid-cols-2 mt-32">
      {/* Left */}
      <div className="pt-20 pb-48 bg-white">
        <div className="flex flex-col pl-10 ml-72">
          <p className="font-serif text-yellow-500 text-24">Special Offer</p>
          <h1 className="flex flex-row mt-2 font-black text-44">
            GOOD FOOD, DRINKS & <br />
            GREAT COMPANY.
          </h1>
          <p className="mt-4 text-gray-500 text-18">
            As well known and we are very busy all days advice you. advice{" "}
            <br />
            you to call us of before arriving, so we can guarantee your seat.
            <br />
            advice you to call us of before arriving and we <br />
            are very busy all days advice you
          </p>
          <div className="flex mt-8">
            <button className="px-10 py-4 my-3 font-bold text-white transition duration-150 bg-green-500 rounded-lg shadow-md hover:shadow-xl active:scale-90">
              ORDER NOW
            </button>
            <div className="grid grid-cols-2 ml-14">
              <h1 className="flex items-end font-bold text-yellow-500 text-44">
                $46.99
              </h1>
              <h2 className="flex items-end mb-3 ml-3 text-gray-600 line-through text-24">
                %59.99
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Mid */}
      {/* <div className="bg-black"></div> */}

      {/* Right */}
      <div className="flex">
        <div className="px-32 bg-white rounded-r-3xl"></div>
        <div className="absolute mt-10">
          <Image src={specOff} width={600} height={600} />
        </div>
        <div className="relative mt-4 transform translate-y-0 translate-x-60">
          <Image src={fiftyOff} width={150} height={150} />
        </div>
      </div>
    </div>
  );
}

export default SpecialOffer;
