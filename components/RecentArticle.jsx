import Image from "next/image";
import recentOne from "./images/recent-1.jpeg";

function RecentArticle() {
  return (
    <div className="flex flex-col mt-12 md:mt-28">
      {/* Title Area */}
      <div className="flex flex-col items-center">
        <p className="font-serif text-yellow-500 md:text-24">Recent Article</p>

        <h1 className="font-black uppercase text-24 md:text-48">
          Latest News & Blog
        </h1>
      </div>

      {/* Product Menu overflow-scroll scrollbar-hide  */}
      <div className="mt-8">
        <div className="flex mx-2 space-x-6 overflow-scroll md:space-x-0 scrollbar-hide md:grid md:gap-12 md:grid-cols-3 md:mx-80">
          {/* 1 */}
          <div className="flex flex-col py-8 bg-white rounded-xl">
            <div className="flex flex-col mx-6 mt-2">
              <p className="text-yellow-500">13 DECEMBER 2021</p>
              <h1 className="mt-4 font-bold truncate text-20">
                BEST BURGER IN YOUR SOCI...
              </h1>
            </div>
            <div className="relative h-56 mt-8 mb-6">
              <Image
                src={recentOne}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <p className="ml-6 -mb-1 font-semibold text-green-600 cursor-pointer text-18">
              → READ MORE
            </p>
          </div>

          {/* 2 */}
          <div className="flex flex-col py-8 bg-white rounded-xl">
            <div className="flex flex-col mx-6 mt-2">
              <p className="text-yellow-500">02 JANUARY 2021</p>
              <h1 className="mt-4 font-bold truncate text-20">
                12 SPEEDY SEAFOOD RECIPES..
              </h1>
            </div>
            <div className="relative h-full mt-8 mb-6">
              <Image
                src={recentOne}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <p className="ml-6 -mb-1 font-semibold transition duration-200 cursor-pointer text-18 hover:text-green-500">
              → READ MORE
            </p>
          </div>

          {/* 3 */}
          <div className="flex flex-col py-8 bg-white rounded-xl">
            <div className="flex flex-col mx-6 mt-2">
              <p className="text-yellow-500">09 JULY 2021</p>
              <h1 className="mt-4 font-bold truncate text-20">
                WHO'S WINNING THE FAST...
              </h1>
            </div>
            <div className="relative h-full mt-8 mb-6">
              <Image
                src={recentOne}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <p className="ml-6 -mb-1 font-semibold transition duration-200 cursor-pointer text-18 hover:text-green-500">
              → READ MORE
            </p>
          </div>
        </div>
      </div>

      {/* Button SEE ALL BLOG */}
      <div className="flex justify-center">
        <button className="px-10 py-5 my-3 font-bold text-white transition duration-150 bg-green-500 rounded-lg shadow-md mt-14 hover:shadow-xl active:scale-95">
          SEE ALL BLOG
        </button>
      </div>
    </div>
  );
}

export default RecentArticle;
