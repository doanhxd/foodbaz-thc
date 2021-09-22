import Image from "next/image";
import specOff from "./images/special-offer.png";
import fiftyOff from "./images/50-off.png";

function SpecialOffer() {
  return (
    <div className="grid grid-cols-2 pb-20 mt-20 lg:mt-32">
      {/* Left */}
      <div className="py-8 pl-4 bg-white lg:pb-48 lg:pt-20">
        <div className="flex flex-col lg:pl-4 lg:ml-72">
          <p className="font-serif text-yellow-500 text-18 lg:text-24">
            Special Offer
          </p>
          <h1 className="flex flex-row mt-2 font-black text-24 lg:text-44">
            GOOD FOOD, DRINKS & <br />
            GREAT COMPANY.
          </h1>
          <p className="hidden mt-4 text-gray-500 lg:inline text-11 lg:text-18">
            As well known and we are very busy all days advice you. advice
            <br />
            you to call us of before arriving, so we can guarantee your seat.
            <br />
            advice you to call us of before arriving and we <br />
            are very busy all days advice you
          </p>
          {/* <div className="inline-flex mt-8"> */}

          <div className="inline-flex flex-row space-x-8 text-13 lg:flex-row">
            <button className="w-40 mt-8 font-semibold text-white uppercase transition duration-150 bg-green-500 rounded-lg active:scale-95 h-14">
              Try it now
            </button>
            <div className="grid grid-cols-2 -mb-3">
              <h1 className="items-end hidden font-bold text-yellow-500 lg:inline-flex text-44">
                $46.99
              </h1>
              <h2 className="items-end hidden mb-2 ml-3 text-gray-600 line-through lg:inline-flex text-24">
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
        <div className="flex flex-col justify-end px-4 bg-white lg:px-32 rounded-r-2xl">
          <div className="inline-flex flex-col pb-4 lg:hidden">
            <h1 className="flex font-bold text-yellow-500 text-24">$46.99</h1>
            <h2 className="flex mb-3 text-gray-600 line-through items-left text-14 lg:hidden">
              %59.99
            </h2>
          </div>
        </div>

        <div className="absolute mt-4 lg:mt-12 ml-4 lg:inline-flex w-[160px] h-[160px] xl:w-[500px] lg:w-[400px] lg:h-[400px] xl:h-[500px] 2xl:w-[600px] 2xl:h-[600px]">
          <Image src={specOff} layout="fill" objectFit="cover" />
        </div>
        <div className="hidden mt-4 transform translate-y-0 lg:inline translate-x-60">
          <Image src={fiftyOff} width={150} height={150} />
        </div>
      </div>
    </div>
  );
}

export default SpecialOffer;
