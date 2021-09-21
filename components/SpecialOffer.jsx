import Image from "next/image";
import specOff from "../components/images/special-offer.png";
import fiftyOff from "../components/images/50-off.png";

function SpecialOffer() {
  return (
    <div className="grid grid-cols-2 mt-32">
      {/* Left */}
      <div className="py-8 pl-8 bg-white md:pb-48 md:pt-20">
        <div className="flex flex-col md:pl-10 md:ml-72">
          <p className="font-serif text-yellow-500 md:text-24">Special Offer</p>
          <h1 className="flex flex-row mt-2 font-black text-36 md:text-44">
            GOOD FOOD, DRINKS & <br />
            GREAT COMPANY.
          </h1>
          <p className="mt-4 text-gray-500 md:text-18">
            As well known and we are very busy all days advice you. advice{" "}
            <br />
            you to call us of before arriving, so we can guarantee your seat.
            <br />
            advice you to call us of before arriving and we <br />
            are very busy all days advice you
          </p>
          {/* <div className="inline-flex mt-8"> */}
          <div className="inline-flex flex-row space-x-8 text-13 md:flex-row">
            <button className="w-40 mt-6 font-semibold text-white uppercase bg-green-500 rounded-lg h-14">
              Try it now
            </button>
            <div className="grid grid-cols-2 ml-14">
              <h1 className="items-end hidden font-bold text-yellow-500 md:inline-flex text-44">
                $46.99
              </h1>
              <h2 className="items-end hidden mb-3 ml-3 text-gray-600 line-through md:inline-flex text-24">
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
        <div className="flex flex-col justify-end px-4 bg-white md:px-32 rounded-r-3xl">
          <div className="inline-flex pb-6 md:hidden">
            <h1 className="flex items-end font-bold text-yellow-500 text-36">
              $46.99
            </h1>
            <h2 className="flex items-end mx-4 mb-3 text-gray-600 line-through md:hidden">
              %59.99
            </h2>
          </div>
        </div>
        <div className="absolute mt-12">
          <Image src={specOff} width={600} height={600} />
        </div>
        <div className="hidden mt-4 transform translate-y-0 md:inline translate-x-60">
          <Image src={fiftyOff} width={150} height={150} />
        </div>
      </div>
    </div>
  );
}

export default SpecialOffer;
