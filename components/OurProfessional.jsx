import Image from "next/image";
import { EyeIcon, HeartIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { Facebook, Twitter, Youtube, Twitch, Chrome } from "react-feather";

function OurProfessional() {
  return (
    <div>
      {/* Title Area */}
      <div className="flex flex-row items-center justify-between px-2 mx-52 mt-36">
        <div className="flex flex-col">
          <div>
            <p className="font-serif text-yellow-500 text-24">
              Our Professional
            </p>
          </div>
          <div className="mt-4">
            <h1 className="font-black uppercase text-48">Meet our stuff</h1>
          </div>
        </div>

        <div>
          <button className="px-10 py-5 my-3 font-bold text-white transition duration-150 bg-yellow-500 rounded-lg shadow-md mt-14 hover:shadow-xl active:scale-90">
            VIEW ALL STAFF
          </button>
        </div>
      </div>

      {/* Professor Menu */}
      <div className="flex flex-col items-center mt-12">
        <div className="flex flex-row space-x-8 overflow-scroll scrollbar-hide">
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
              <div className="px-3 py-3 bg-yellow-500 rounded-t-lg">
                <Twitter className="h-6 text-white" />
              </div>
              <div className="px-3 py-3 bg-pink-100 rounded-t-lg">
                <Chrome className="h-6" />
              </div>
              <div className="px-3 py-3 bg-pink-100 rounded-t-lg">
                <Youtube className="h-6 " />
              </div>
              <div className="px-3 py-3 bg-pink-100 rounded-t-lg">
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
