import Image from "next/image";
import { Bookmark } from "react-feather";
import avtCus from "../components/images/avt-cus.png";
import avtCry from "../components/images/avt-cry.png";
import starIc from "../components/images/stars/star.png";
import staredIc from "../components/images/stars/stared.png";

function CustomerFb() {
  return (
    <div className="grid grid-cols-2 mt-32">
      {/* Left */}
      <div className="pt-20 pb-48 bg-gray-900">
        <div className="flex flex-col pl-10 mt-20 ml-96">
          <p className="font-serif text-yellow-500 text-24">
            Customer Feedback
          </p>
          <h1 className="flex flex-row mt-2 font-black text-white text-44">
            WHAT OUR CLIENT SAY?
          </h1>
          <p className="mt-4 text-gray-500 text-18">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Dolore quidem odit pariatur nostrum ut excepturi fugiat?
            <br />
            Consectetur hic eos tempore fugit reprehenderit id sed <br />
            architecto at magnam quisquam, corrupti debitis. <br />
            Dolore quidem odit pariatur nostrum ut excepturi fugiat?
          </p>

          <div className="flex flex-row mt-8">
            <div className="flex flex-row justify-between space-x-20">
              <div className="font-bold text-yellow-500 text-44">
                <h1>
                  14k<span className="ml-1 text-24">+</span>
                </h1>
                <h2 className="text-white text-16">HAPPY CUSTOMER</h2>
              </div>
              <div className="font-bold text-yellow-500 text-44">
                <h1>
                  14<span className="ml-1 text-24">+</span>
                </h1>
                <h2 className="text-white text-16">AWARD WINING</h2>
              </div>
              <div className="font-bold text-yellow-500 text-44">
                <h1>
                  68<span className="ml-1 text-24">+</span>
                </h1>
                <h2 className="text-white text-16">FOOD MENU</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mid */}
      {/* <div className="bg-black"></div> */}

      {/* Right */}
      <div className="flex">
        <div className="px-48 bg-gray-900 rounded-r-3xl"></div>
        <div className="absolute mt-32 ml-28">
          <div className="relative flex flex-col justify-center pt-12 pb-12 pl-12 pr-12 bg-white rounded-3xl">
            <div className="flex justify-between">
              <div className="relative flex items-center justify-center w-16 h-16 border-2 border-pink-100 rounded-lg">
                <Image src={avtCus} />
              </div>
              <div className="flex">
                <Bookmark className="h-8 text-yellow-500" />
                <Bookmark className="h-8 text-yellow-500" />
              </div>
            </div>

            <div className="mt-8">
              <p className="font-light text-gray-500 text-20">
                Great food! Fresh, quick, friendly, delicious,
                <br />
                affordable! Very flexible with orders. Great service! <br />
                Great portions! If you want great seafood, this place <br />
                will not dissapoint you. Definitelyy.
              </p>
            </div>
            <div className="flex justify-between mt-20 space-x-12">
              <div>
                <div className="font-semibold text-20">
                  RASALINA DE WILLAMSON
                </div>
                <div className="font-semibold text-green-500 text-18">
                  FOUNDER & CO
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
                <div>3 RATING</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute mt-32 translate-x-96 -translate-y-0">
          <div className="relative flex flex-col justify-center pt-12 pb-12 pl-12 pr-12 transform bg-white rounded-3xl translate-x-80 -translate-y-0">
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
              <p className="font-light text-gray-500 text-20">
                Lorem ipsum dolor sit amet, comor
                <br />
                affordable! Very flexible with orders. Great service! <br />
                Great portions! If you want great seafood, this place <br />
                will not dissapoint you. Definitelyy.
              </p>
            </div>
            <div className="flex justify-between mt-20 space-x-12">
              <div>
                <div className="font-semibold text-20">ALEXTINA DITARSON</div>
                <div className="font-semibold text-green-500 text-18">
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
                <div>3 RATING</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CustomerFb;
