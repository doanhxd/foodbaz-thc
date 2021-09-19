import Image from "next/image";
import { Facebook, Twitter, Youtube } from "react-feather";

function Banner() {
  return (
    <div className="grid grid-cols-2">
      {/* Banner Left */}
      <div className="flex flex-col bg-white">
        {/* Order field */}
        <div className="mt-48 ml-36">
          <h3 className="font-serif text-yellow-500 text-24">
            Medium 2-topping* Burger
          </h3>

          <h1 className="mt-2 font-black uppercase text-72">Are you </h1>
          <h1 className="-mt-6 font-black uppercase text-72">hungry?</h1>
          <p className="mt-4 font-light text-gray-500 text-20">
            As well known and we are very busy all days advice
            <br /> you. Advice you to call us of before arriving.
          </p>

          <div className="flex mt-8 space-x-8">
            <button className="px-10 py-4 my-3 font-bold text-white transition duration-150 transform bg-green-500 rounded-lg shadow-md hover:shadow-xl active:scale-95">
              Try it now
            </button>
            <button className="px-10 py-4 my-3 font-bold text-white transition duration-150 transform bg-yellow-500 rounded-lg shadow-md hover:shadow-xl active:scale-95">
              See our menu
            </button>
          </div>
        </div>

        <div className="flex flex-row mt-48 space-x-8 font-medium uppercase bg-white cursor-pointer ml-36">
          <div className="flex">
            <Facebook className="mr-2" />
            Facebook
          </div>

          <div className="flex">
            <Twitter className="mr-2" /> Twitter
          </div>
          <div className="flex">
            <Youtube className="mr-2" /> YouTube
          </div>
        </div>
      </div>

      {/* Banner Right */}
      <div className="flex justify-end">
        <div className="mt-16 mr-52">
          <div className="flex flex-col text-black">
            <div className="flex flex-row-reverse mt-24">
              <button className="w-16 h-16 font-medium bg-white rounded-full shadow-md text-24 hover:shadow-md active:scale-95">
                01
              </button>
              <div className="flex flex-col mr-12 text-right">
                <h1 className="font-medium text-20">GREAT LOCATION</h1>
                <div className="text-gray-500 text-18">
                  <p>Lorem ipsum dolor, sit amet, etur</p>
                  <p>adipisicing voluptatum</p>
                </div>
              </div>
            </div>

            <div className="flex flex-row-reverse mt-24">
              <button className="w-16 h-16 font-medium bg-white rounded-full shadow-md text-24 active:scale-95">
                02
              </button>
              <div className="flex flex-col mr-12 text-right">
                <h1 className="font-medium text-20">NATURE FIRST</h1>
                <div className="text-gray-500 text-18">
                  <p>Lorem ipsum dolor, sit amet, etur</p>
                  <p>adipisicing voluptatum</p>
                </div>
              </div>
            </div>

            <div className="flex flex-row-reverse mt-24">
              <button className="w-16 h-16 font-medium bg-white rounded-full shadow-md text-24 active:scale-95">
                03
              </button>
              <div className="flex flex-col mr-12 text-right">
                <h1 className="font-medium text-20">HEALTHY FOOD</h1>
                <div className="text-gray-500 text-18">
                  <p>Lorem ipsum dolor, sit amet, etur</p>
                  <p>adipisicing voluptatum</p>
                </div>
              </div>
            </div>

            <div className="flex flex-row-reverse items-center mt-44">
              <button className="w-16 h-16 font-bold bg-white rounded-full shadow-md text-24 active:scale-95">
                ►
              </button>
              <h1 className="mr-12 font-medium text-20">PLAY VIDEO</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
