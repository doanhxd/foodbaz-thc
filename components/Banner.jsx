import { Facebook, Twitter, Youtube, Play } from "react-feather";

function Banner() {
  return (
    <div className="grid grid-cols-2">
      {/* Banner Left */}
      <div className="flex flex-col bg-white rounded-br-2xl md:rounded-none">
        {/* Order field */}
        <div className="inline-flex flex-col mt-12 ml-10 md:mt-44 md:ml-28">
          <h3 className="font-serif text-yellow-500 sm:text-14 xl:text-24">
            Medium 2-topping* Burger
          </h3>

          <h1 className="mt-2 font-black uppercase text-36 md:text-72">
            Are you
          </h1>
          <h1 className="-mt-4 font-black uppercase text-36 md:text-72">
            hungry?
          </h1>
          <p className="hidden mt-4 font-light text-gray-500 md:inline-flex text-20">
            As well known and we are very busy all days advice
            <br /> you. Advice you to call us of before arriving.
          </p>

          <div className="inline-flex flex-col space-x-8 text-13 md:flex-row">
            <button className="w-40 mt-6 font-semibold text-white uppercase bg-green-500 rounded-lg h-14">
              Try it now
            </button>
            <button className="w-40 mt-6 font-semibold text-white uppercase bg-yellow-500 rounded-lg h-14">
              See our menu
            </button>
          </div>
        </div>

        <div className="flex flex-col items-end mt-8 mb-8 mr-12 font-medium uppercase bg-white cursor-pointer md:space-x-8 md:inline-flex text-14 md:mt-48 md:flex-row md:ml-20">
          <div className="flex">
            <Facebook className="mr-2 md:ml-4" />
            Facebook
          </div>
          <div className="flex mt-2">
            <Twitter className="mr-2" /> Twitter
          </div>
          <div className="flex mt-2">
            <Youtube className="mr-2" /> YouTube
          </div>
        </div>
      </div>

      {/* Banner Right */}
      <div className="inline-flex justify-end">
        <div className="mt-12 mr-8 md:mt-20 md:mr-44">
          <div className="flex flex-col text-black">
            {/* Number 1 - 2 - 3 */}
            <div className="flex flex-row-reverse items-center md:mt-24">
              <button className="w-16 h-16 font-medium bg-white rounded-full shadow-md text-24 hover:shadow-md active:scale-95">
                01
              </button>
              <div className="flex flex-col mr-4 text-right md:mr-12">
                <h1 className="font-medium md:text-20">GREAT LOCATION</h1>
                <div className="hidden text-gray-500 text-18 md:inline">
                  <p>Lorem ipsum dolor, sit amet, etur</p>
                  <p>adipisicing voluptatum</p>
                </div>
              </div>
            </div>

            <div className="flex flex-row-reverse items-center mt-8 md:mt-24">
              <button className="w-16 h-16 font-medium bg-white rounded-full shadow-md text-24 active:scale-95">
                <p className="h-8">02</p>
              </button>
              <div className="flex flex-col mr-4 text-right md:mr-12">
                <h1 className="font-medium md:text-20">NATURE FIRST</h1>
                <div className="hidden text-gray-500 text-18 md:inline">
                  <p>Lorem ipsum dolor, sit amet, etur</p>
                  <p>adipisicing voluptatum</p>
                </div>
              </div>
            </div>

            <div className="flex flex-row-reverse items-center mt-8 md:mt-24">
              <button className="w-16 h-16 font-medium bg-white rounded-full shadow-md text-24 active:scale-95">
                <p className="h-8">03</p>
              </button>
              <div className="flex flex-col mr-4 text-right md:mr-12">
                <h1 className="font-medium md:text-20">HEALTHY FOOD</h1>
                <div className="hidden text-gray-500 text-18 md:inline">
                  <p>Lorem ipsum dolor, sit amet, etur</p>
                  <p>adipisicing voluptatum</p>
                </div>
              </div>
            </div>

            <div className="flex flex-row-reverse items-center mt-20 md:mt-40">
              <button className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md active:scale-95">
                <Play className="h-8 ml-0.5" />
              </button>
              <h1 className="mr-4 font-medium md:text-20">PLAY VIDEO</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
