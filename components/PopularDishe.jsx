import Image from "next/image";
import { EyeIcon, HeartIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import unliChick from "./images/unli-chick.png";
import starIc from "./images/stars/star.png";
import staredIc from "./images/stars/stared.png";

function PopularDishe() {
  return (
    <div className="flex flex-col lg:mt-20">
      {/* Title Area */}
      <div className="flex flex-col items-center">
        <p className="font-serif text-yellow-500 lg:text-24">Popular Dishe</p>

        <h1 className="mt-4 font-black uppercase text-24 lg:text-48">
          Popular Dishes
        </h1>
      </div>

      {/* Suggestions Menu */}
      <div className="flex justify-center lg:mt-12">
        <div className="flex-row justify-between hidden space-x-6 lg:inline-flex">
          <div>
            <button className="px-6 py-5 my-3 font-semibold transition duration-200 bg-white rounded-lg shadow-md hover:bg-yellow-500 hover:text-white active:scale-90">
              ALL CATEGORY
            </button>
          </div>
          <div>
            <button className="px-8 py-5 my-3 font-semibold text-white transition duration-200 bg-yellow-500 rounded-lg shadow-md active:scale-90">
              PIZZA
            </button>
          </div>
          <div>
            <button className="px-10 py-5 my-3 font-semibold transition duration-200 bg-white rounded-lg shadow-md hover:bg-yellow-500 hover:text-white active:scale-90">
              BURGER
            </button>
          </div>
          <div>
            <button className="px-10 py-5 my-3 font-semibold transition duration-200 transform bg-white rounded-lg shadow-md hover:bg-yellow-500 hover:text-white active:scale-90">
              BLUEBERRY SHAKE
            </button>
          </div>
          <div>
            <button className="px-10 py-5 my-3 font-semibold transition duration-200 bg-white rounded-lg shadow-md hover:bg-yellow-500 hover:text-white active:scale-90">
              CHICK SHUP
            </button>
          </div>
          <div>
            <button className="px-10 py-5 my-3 font-semibold transition duration-200 bg-white rounded-lg shadow-md hover:bg-yellow-500 hover:text-white active:scale-90">
              ICE CREAM
            </button>
          </div>
          <div>
            <button className="px-10 py-5 my-3 font-semibold transition duration-200 bg-white rounded-lg shadow-md hover:bg-yellow-500 hover:text-white active:scale-90">
              DRINK
            </button>
          </div>
        </div>
      </div>

      {/* Product Menu */}
      <div className="mt-8">
        <div className="flex mx-2 space-x-4 overflow-scroll lg:space-x-0 scrollbar-hide lg:grid lg:gap-12 lg:grid-cols-3 lg:mx-80">
          {/* 1 */}
          <div className="flex flex-col px-20 py-8 bg-white rounded-xl">
            <div className="flex justify-center mt-3 space-x-3">
              <div className="px-3 py-3 transition duration-200 rounded-lg button-bg hover:bg-green-500 hover:text-white">
                <ShoppingCartIcon className="h-6" />
              </div>
              <div className="px-3 py-3 transition duration-200 rounded-lg button-bg hover:bg-green-500 hover:text-white">
                <HeartIcon className="h-6" />
              </div>
              <div className="px-3 py-3 bg-green-500 rounded-lg">
                <EyeIcon className="h-6 text-white" />
              </div>
            </div>
            <div className="relative h-44 mt-14">
              <Image
                src={unliChick}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
            <div className="mt-12">
              <div className="flex flex-col">
                <p className="flex font-bold text-gray-500 text-16">
                  FULL BURGAR
                  <div className="flex ml-2">
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
                </p>
                <h1 className="mt-4 font-bold truncate text-20">
                  UNLIMITED CHICKEN FRY
                </h1>
              </div>
              <p className="mt-4 font-medium text-16">
                PRICE - <span className="text-pink-600">$325.00</span> /{" "}
                <span className="text-gray-500 line-through">$348</span>{" "}
              </p>
            </div>
          </div>

          {/* 2 */}
          <div className="flex flex-col px-20 py-8 bg-white rounded-xl">
            <div className="flex justify-end mt-3">
              <span class="relative inline-flex -top-8 -right-16 items-center transform h-7 translate-x-0 translate-y-0 justify-center px-3 py-1 text-14 font-semibold leading-none text-white bg-pink-600 rounded-lg">
                10%-
              </span>
            </div>
            <div className="relative mt-20 h-44">
              <Image
                src={unliChick}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
            <div className="mt-12">
              <div className="flex flex-col">
                <p className="flex font-bold text-gray-500 text-16">
                  FULL BURGAR
                  <div className="flex ml-2">
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
                </p>
                <h1 className="mt-4 font-bold truncate text-20">
                  BANGLADESI SENDRUES
                </h1>
              </div>
              <p className="mt-4 font-medium text-16">
                PRICE - <span className="text-pink-600">$325.00</span> /{" "}
                <span className="text-gray-500 line-through">$348</span>{" "}
              </p>
            </div>
          </div>

          {/* 3 */}
          <div className="flex flex-col px-20 py-8 bg-white rounded-xl">
            <div className="flex justify-end mt-3">
              <span class="relative -top-8 -right-16 inline-flex border items-center justify-center px-3 py-3 text-13 h-4 text-white transform translate-x-0 translate-y-0 bg-white border-white rounded-lg font-medium">
                10%-
              </span>
            </div>
            <div className="relative mt-20 h-44">
              <Image
                src={unliChick}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
            <div className="mt-12">
              <div className="flex flex-col">
                <p className="flex font-bold text-gray-500 text-16">
                  FULL BURGAR
                  <div className="flex ml-2">
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
                </p>
                <h1 className="mt-4 font-bold truncate text-20">
                  DOUBLE STUCK BURGAR
                </h1>
              </div>
              <p className="mt-4 font-medium text-16">
                PRICE - <span className="text-pink-600">$325.00</span> /{" "}
                <span className="text-gray-500 line-through">$348</span>{" "}
              </p>
            </div>
          </div>

          {/* 4 */}
          <div className="flex flex-col px-20 py-8 bg-white rounded-xl">
            <div className="flex justify-end mt-3">
              <span class="relative -top-8 -right-16 inline-flex border items-center justify-center px-3 py-3 text-13 h-4 text-white transform translate-x-0 translate-y-0 bg-white border-white rounded-lg font-medium">
                10%-
              </span>
            </div>
            <div className="relative mt-20 h-44">
              <Image
                src={unliChick}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
            <div className="mt-12">
              <div className="flex flex-col">
                <p className="flex font-bold text-gray-500 text-16">
                  FULL BURGAR
                  <div className="flex ml-2">
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
                </p>
                <h1 className="mt-4 font-bold truncate text-20">
                  CHINIS POPULAR NOUDLUS
                </h1>
              </div>
              <p className="mt-4 font-medium text-16">
                PRICE - <span className="text-pink-600">$325.00</span> /{" "}
                <span className="text-gray-500 line-through">$348</span>{" "}
              </p>
            </div>
          </div>

          {/* 5 */}
          <div className="flex flex-col px-20 py-8 bg-white rounded-xl">
            <div className="flex justify-end mt-3">
              <span class="relative -top-8 -right-16 inline-flex border items-center justify-center px-3 py-3 text-13 h-4 text-white transform translate-x-0 translate-y-0 bg-white border-white rounded-lg font-medium">
                10%-
              </span>
            </div>
            <div className="relative mt-20 h-44">
              <Image
                src={unliChick}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
            <div className="mt-12">
              <div className="flex flex-col">
                <p className="flex font-bold text-gray-500 text-16">
                  FULL BURGAR
                  <div className="flex ml-2">
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
                </p>
                <h1 className="mt-4 font-bold truncate text-20">
                  UNLIMITED FULL CHICKEN
                </h1>
              </div>
              <p className="mt-4 font-medium text-16">
                PRICE - <span className="text-pink-500">$325.00</span> /{" "}
                <span className="text-gray-500 line-through">$348</span>{" "}
              </p>
            </div>
          </div>

          {/* 6 */}
          <div className="flex flex-col px-20 py-8 bg-white rounded-xl">
            <div className="flex justify-end mt-3">
              <span class="relative inline-flex -top-8 -right-16 items-center transform h-7 translate-x-0 translate-y-0 justify-center px-4 py-1 text-14 font-semibold leading-none text-white bg-pink-600 rounded-lg">
                NEW
              </span>
            </div>
            <div className="relative mt-20 h-44">
              <Image
                src={unliChick}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
            <div className="mt-12">
              <div className="flex flex-col">
                <p className="flex font-bold text-gray-500 text-16">
                  FULL BURGAR
                  <div className="flex ml-2">
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
                </p>
                <h1 className="mt-4 font-bold truncate text-20">
                  UNLIMITED FULL CHICKEN
                </h1>
              </div>
              <p className="mt-4 font-medium text-16">
                PRICE - <span className="text-pink-600">$325.00</span> /{" "}
                <span className="text-gray-500 line-through">$348</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Button SEE ALL PRODUCT */}
      <div className="flex justify-center mt-8">
        <button className="mt-4 font-bold text-white truncate transition duration-150 bg-green-500 rounded-lg shadow-md w-44 h-14 lg:w-52 lg:h-16 lg:mt-8 active:scale-95">
          SEE ALL PRODUCT
        </button>
      </div>
    </div>
  );
}

export default PopularDishe;
