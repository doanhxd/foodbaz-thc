import Image from "next/image";
import recentOne from "../components/images/recent-1.jpeg";

function RecentArticle() {
  return (
    <div className="flex flex-col items-center mt-36">
      {/* Title Area */}
      <div className="">
        <p className="font-serif text-yellow-500 text-24">Recent Article</p>
      </div>
      <div className="mt-4">
        <h1 className="font-black uppercase text-48">Latest News & Blog</h1>
      </div>

      {/* Product Menu */}
      <div className="flex justify-around mt-12 space-x-8">
        <div className="flex flex-col py-8 bg-white shadow-md rounded-xl">
          <div className="flex flex-col mt-2 ml-8">
            <p className="text-yellow-500">13 DECEMBER 2021</p>
            <h1 className="mt-4 font-bold text-20">
              BEST BURGER IN YOUR SOCI...
            </h1>
          </div>
          <div className="mt-10 mb-6">
            <Image src={recentOne} width={370} height={240} />
          </div>
          <p className="ml-6 -mb-1 text-green-600 text-18">→ READ MORE</p>
        </div>

        <div className="flex flex-col py-8 bg-white shadow-md rounded-xl">
          <div className="flex flex-col mt-2 ml-8">
            <p className="text-yellow-500">02 JANUARY 2021</p>
            <h1 className="mt-4 font-bold text-20">
              12 SPEEDY SEAFOOD RECIPES..
            </h1>
          </div>
          <div className="mt-10 mb-6">
            <Image src={recentOne} width={370} height={240} />
          </div>
          <p className="ml-6 -mb-1 text-18">→ READ MORE</p>
        </div>

        <div className="flex flex-col py-8 bg-white shadow-md rounded-xl">
          <div className="flex flex-col mt-2 ml-8">
            <p className="text-yellow-500">09 JULY 2021</p>
            <h1 className="mt-4 font-bold text-20">
              WHO'S WINNING THE FAST...
            </h1>
          </div>
          <div className="mt-10 mb-6">
            <Image src={recentOne} width={370} height={240} />
          </div>
          <p className="ml-6 -mb-1 text-18">→ READ MORE</p>
        </div>
      </div>

      {/* Button SEE ALL BLOG */}
      <div>
        <button className="px-10 py-5 my-3 font-bold text-white transition duration-150 bg-green-500 rounded-lg shadow-md mt-14 hover:shadow-xl active:scale-95">
          SEE ALL BLOG
        </button>
      </div>
    </div>
  );
}

export default RecentArticle;
