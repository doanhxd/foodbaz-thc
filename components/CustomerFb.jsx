import Image from "next/image";
import { Bookmark } from "react-feather";
import avtCus from "./images/avt-cus.png";
import avtCry from "./images/avt-cry.png";
import starIc from "./images/stars/star.png";
import staredIc from "./images/stars/stared.png";

function CustomerFb() {
  return (
    <div className="grid grid-cols-2 mt-12 md:mt-32">
      {/* Left */}
      <div className="py-6 bg-gray-900 md:pb-48 md:pt-20">
        <div className="flex flex-col ml-6 md:mt-16 md:ml-80">
          <p className="font-serif text-yellow-500 md:text-24">
            Customer Feedback
          </p>
          <h1 className="flex flex-row mt-4 font-black text-white text-24 md:text-44">
            WHAT OUR CLIENT SAY?
          </h1>
          <p className="hidden mt-4 text-gray-500 md:inline text-18">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Dolore quidem odit pariatur nostrum ut excepturi fugiat?
            <br />
            Consectetur hic eos tempore fugit reprehenderit id sed <br />
            architecto at magnam quisquam, corrupti debitis. <br />
            Dolore quidem odit pariatur nostrum ut excepturi fugiat?
          </p>
          <div className="flex flex-row mt-6 md:mt-12">
            <div className="flex flex-col justify-between space-y-6 truncate md:space-y-0 md:space-x-20 md:flex-row">
              <div className="font-bold text-yellow-500 md:text-44">
                <h1>
                  14k<span className="ml-1 md:text-24">+</span>
                </h1>
                <h2 className="text-white text-14 md:text-16">
                  HAPPY CUSTOMER
                </h2>
              </div>
              <div className="font-bold text-yellow-500 md:text-44">
                <h1>
                  14<span className="ml-1 md:text-24">+</span>
                </h1>
                <h2 className="text-white text-14 md:text-16">AWARD WINING</h2>
              </div>
              <div className="font-bold text-yellow-500 md:text-44">
                <h1>
                  68<span className="ml-1 md:text-24">+</span>
                </h1>
                <h2 className="text-white text-14 md:text-16">FOOD MENU</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right */}

      <div className="relative flex overflow-x-hidden">
        <div className="relative px-12 bg-gray-900 rounded-r-2xl md:px-48 md:rounded-r-3xl"></div>

        <div className="absolute flex">
          <div className="absolute mt-14 md:mt-32 md:ml-28">
            <div className="relative flex flex-col justify-center px-6 py-6 bg-white md:w-full w-60 md:py-12 md:px-12 rounded-3xl">
              <div className="flex justify-between">
                <div className="relative flex items-center justify-center w-16 h-16 border-2 border-pink-100 rounded-lg">
                  <Image src={avtCus} />
                </div>
                <div className="flex">
                  <Bookmark className="h-8 text-yellow-500" />
                  <Bookmark className="h-8 text-yellow-500" />
                </div>
              </div>
              <div className="mt-4 md:mt-8">
                <p className="font-light text-gray-500 truncate md:text-18">
                  <p className="truncate">
                    Great food! Fresh, quick, friendly, delicious,
                    <br />
                    affordable! Very flexible with orders. Great service!
                  </p>
                  <p className="hidden md:inline">
                    Great portions! If you want great seafood, this place <br />
                    will not dissapoint you. Definitelyy.
                  </p>
                </p>
              </div>
              <div className="flex justify-between mt-4 truncate md:mt-20 md:space-x-12">
                <div className="w-24 mt-1 md:mt-0">
                  <div className="font-semibold truncate text-14 md:text-20">
                    RASALINA DE WILLAMSON
                  </div>
                  <div className="font-semibold text-green-500 text-13 md:text-18">
                    FOUNDER & CO
                  </div>
                </div>
                <div className="w-20 truncate md:w-auto">
                  <div className="flex w-16 space-x-0.5 md:w-auto md:space-x-1">
                    <div>
                      <Image src={staredIc} />
                    </div>
                    <div className="">
                      <Image src={staredIc} />
                    </div>
                    <div className="">
                      <Image src={staredIc} />
                    </div>
                    <div className="">
                      <Image src={starIc} />
                    </div>
                    <div className="">
                      <Image src={starIc} />
                    </div>
                  </div>
                  <div className="text-13 md:text-16">3 RATING</div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute hidden mt-32 md:inline translate-x-96 -translate-y-0">
            <div className="relative flex flex-col justify-center pt-12 pb-12 pl-12 pr-12 transform bg-white rounded-3xl translate-x-72 -translate-y-0">
              <div className="flex justify-between">
                <div className="relative flex items-center justify-center w-16 h-16 border-2 border-pink-100 rounded-lg">
                  <Image src={avtCry} />
                </div>
                <div className="flex">
                  <Bookmark className="h-8 text-yellow-500" />
                  <Bookmark className="h-8 text-yellow-500" />
                </div>
              </div>

              <div className="mt-8">
                <p className="font-light text-gray-500 truncate text-18">
                  Lorem ipsum dolor sit amet, comor
                  <br />
                  affordable! Very flexible with orders. Great service! <br />
                  Great portions! If you want great seafood, this place <br />
                  will not dissapoint you. Definitelyy.
                </p>
              </div>
              <div className="flex justify-between mt-20 space-x-12">
                <div>
                  <div className="font-semibold truncate text-20">
                    ALEXTINA DITARSON
                  </div>
                  <div className="font-semibold text-green-500 truncate text-18">
                    OWNER OF VISION TRUST
                  </div>
                </div>
                <div>
                  <div className="flex">
                    <div>
                      <Image src={staredIc} />
                    </div>
                    <div className="ml-1">
                      <Image src={staredIc} />
                    </div>
                    <div className="ml-1">
                      <Image src={staredIc} />
                    </div>
                    <div className="ml-1">
                      <Image src={starIc} />
                    </div>
                    <div className="ml-1">
                      <Image src={starIc} />
                    </div>
                  </div>
                  <div className="truncate">3 RATING</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CustomerFb;
