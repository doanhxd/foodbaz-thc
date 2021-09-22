import Image from "next/image";
import { EyeIcon, HeartIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { Facebook, Twitter, Youtube, Twitch, Chrome } from "react-feather";

function OurProfessional() {
  return (
    <div className="flex flex-col px-2 mt-12 lg:mt-24">
      <div className="flex flex-row justify-between lg:-mx-12 lg:justify-around">
        {/* Title Area */}
        <div className="grid grid-rows-2 lg:mt-0">
          <p className="font-serif text-yellow-500 lg:text-24">
            Our Professional
          </p>
          <h1 className="font-black uppercase truncate text-20 lg:text-48">
            Meet our stuff
          </h1>
        </div>
        {/* Button Area */}
        <div className="mt-1 lg:mt-16">
          <button className="px-5 py-3 font-bold text-white truncate transition duration-150 bg-yellow-500 rounded-lg shadow-md lg:px-10 lg:py-5 hover:shadow-xl active:scale-95">
            VIEW ALL STAFF
          </button>
        </div>
      </div>

      {/* Professor Menu */}
      <div className="flex items-center justify-center mt-12">
        <div className="flex flex-row space-x-4 overflow-scroll lg:space-x-8 scrollbar-hide">
          {/* 1 */}
          <div className="flex flex-col pt-4 mx-auto bg-white rounded-xl">
            <div className="flex items-center justify-center mx-8 mt-4 rounded-full rasalina"></div>

            <div className="flex flex-col items-center justify-center mt-4">
              <div className="flex flex-col justify-center">
                <h1 className="mt-4 font-bold text-20">
                  RASALINA DE WILLIAMSON
                </h1>
              </div>
              <p className="mt-2 font-medium text-yellow-500 text-16">
                12 YEARS EXPERIENCE
              </p>
            </div>

            <div className="flex justify-center mt-8 space-x-3">
              <div className="px-3 py-3 bg-yellow-500 rounded-t-lg cursor-pointer btn-bg ">
                <Twitter className="h-6 text-white" />
              </div>
              <div className="px-3 py-3 transition duration-200 rounded-t-lg cursor-pointer button-bg hover:bg-yellow-500 hover:text-white">
                <Chrome className="h-6" />
              </div>
              <div className="px-3 py-3 transition duration-200 rounded-t-lg cursor-pointer hover:bg-yellow-500 hover:text-white button-bg">
                <Youtube className="h-6 " />
              </div>
              <div className="px-3 py-3 transition duration-200 rounded-t-lg cursor-pointer button-bg hover:bg-yellow-500 hover:text-white">
                <Facebook className="h-6" />
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="flex flex-col pt-4 mx-auto bg-white rounded-xl">
            <div className="flex items-center justify-center mx-8 mt-4 rounded-full mark-hen"></div>

            <div className="flex flex-col items-center justify-center mt-4">
              <div className="flex flex-col justify-center">
                <h1 className="mt-4 font-bold text-20">MARK HENERYTIX</h1>
              </div>
              <p className="mt-2 font-medium text-yellow-500 text-16">
                09 YEARS EXPERIENCE
              </p>
            </div>

            <div className="flex justify-center mt-8 space-x-3">
              <div className="px-3 py-3 bg-white rounded-t-lg">
                <ShoppingCartIcon className="h-6 text-white" />
              </div>
              <div className="px-3 py-3 bg-white rounded-t-lg">
                <HeartIcon className="h-6 text-white" />
              </div>
              <div className="px-3 py-3 bg-white rounded-t-lg">
                <EyeIcon className="h-6 text-white" />
              </div>
              <div className="px-3 py-3 bg-white rounded-t-lg">
                <EyeIcon className="h-6 text-white" />
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className="flex flex-col pt-4 mx-auto bg-white rounded-xl">
            <div className="flex items-center justify-center mx-8 mt-4 rounded-full ylina"></div>

            <div className="flex flex-col items-center justify-center mt-4">
              <div className="flex flex-col justify-center">
                <h1 className="mt-4 font-bold text-20">YLINA PITERSON KIM</h1>
              </div>
              <p className="mt-2 font-medium text-yellow-500 text-16">
                6 YEARS EXPERIENCE
              </p>
            </div>

            <div className="flex justify-center mt-8 space-x-3">
              <div className="px-3 py-3 bg-white rounded-t-lg">
                <ShoppingCartIcon className="h-6 text-white" />
              </div>
              <div className="px-3 py-3 bg-white rounded-t-lg">
                <HeartIcon className="h-6 text-white" />
              </div>
              <div className="px-3 py-3 bg-white rounded-t-lg">
                <EyeIcon className="h-6 text-white" />
              </div>
              <div className="px-3 py-3 bg-white rounded-t-lg">
                <EyeIcon className="h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurProfessional;
