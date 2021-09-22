import { Facebook, Twitter, Youtube, Play } from "react-feather";

function Banner() {
  return (
    <div className="grid grid-cols-2">
      {/* Banner Left */}
      <div className="flex flex-col bg-white rounded-br-2xl lg:rounded-none">
        {/* Order field */}
        <div className="inline-flex flex-col mt-4 ml-4 lg:mt-44 lg:ml-28">
          <h3 className="font-serif text-yellow-500 xl:text-24">
            Medium 2-topping* Burger
          </h3>

          <h1 className="mt-2 font-black uppercase text-24 lg:text-72">
            Are you
          </h1>
          <h1 className="font-black uppercase text-24 lg:text-72">hungry?</h1>
          <p className="hidden mt-4 font-light text-gray-500 lg:inline-flex text-20">
            As well known and we are very busy all days advice
            <br /> you. Advice you to call us of before arriving.
          </p>

          <div className="inline-flex mt-3 -ml-2 space-x-2 md:ml-0 md:space-x-8 md:flex-col text-11 lg:text-13 lg:flex-row">
            <button className="w-20 h-10 font-semibold text-white uppercase bg-green-500 rounded-lg md:mt-4 lg:w-40 lg:h-14">
              Try it now
            </button>
            <button className="w-20 h-10 font-semibold text-white uppercase bg-yellow-500 rounded-lg md:mt-6 lg:w-40 lg:h-14">
              See our menu
            </button>
          </div>
        </div>

        <div className="flex flex-col items-end my-4 mr-4 font-medium uppercase bg-white cursor-pointer lg:space-x-8 text-13 lg:inline-flex lg:text-14 lg:mt-48 lg:flex-row lg:ml-20">
          <div className="flex items-center mr-8 lg:mr-0">
            <Facebook className="h-4 mr-2 lg:ml-4" />
            Facebook
          </div>
          <div className="flex items-center mt-2 mr-4 lg:mr-0">
            <Twitter className="h-4 mr-2" /> Twitter
          </div>
          <div className="flex items-center mt-2">
            <Youtube className="h-4 mr-2" /> YouTube
          </div>
        </div>
      </div>

      {/* Banner Right */}
      <div className="inline-flex justify-end">
        <div className="mt-4 mr-4 lg:mt-20 lg:mr-44">
          <div className="flex flex-col text-black">
            {/* Number 1 - 2 - 3 */}
            <div className="flex flex-row-reverse items-center lg:mt-24">
              <button className="w-8 h-8 font-medium bg-white rounded-full shadow-md lg:w-16 lg:h-16 text-13 lg:text-24 hover:shadow-md active:scale-95">
                01
              </button>
              <div className="flex flex-col mr-2 text-right lg:mr-12">
                <h1 className="font-medium text-14 lg:text-20">
                  GREAT LOCATION
                </h1>
                <div className="hidden text-gray-500 text-18 lg:inline">
                  <p>Lorem ipsum dolor, sit amet, etur</p>
                  <p>adipisicing voluptatum</p>
                </div>
              </div>
            </div>

            <div className="flex flex-row-reverse items-center mt-8 lg:mt-24">
              <button className="w-8 h-8 font-medium bg-white rounded-full shadow-md lg:w-16 lg:h-16 text-13 lg:text-24 active:scale-95">
                02
              </button>
              <div className="flex flex-col mr-2 text-right lg:mr-12">
                <h1 className="font-medium text-14 lg:text-20">NATURE FIRST</h1>
                <div className="hidden text-gray-500 text-18 lg:inline">
                  <p>Lorem ipsum dolor, sit amet, etur</p>
                  <p>adipisicing voluptatum</p>
                </div>
              </div>
            </div>

            <div className="flex flex-row-reverse items-center mt-8 lg:mt-24">
              <button className="w-8 h-8 font-medium bg-white rounded-full shadow-md lg:w-16 lg:h-16 text-13 lg:text-24 active:scale-95">
                03
              </button>
              <div className="flex flex-col mr-2 text-right lg:mr-12">
                <h1 className="font-medium text-14 lg:text-20">HEALTHY FOOD</h1>
                <div className="hidden text-gray-500 text-18 lg:inline">
                  <p>Lorem ipsum dolor, sit amet, etur</p>
                  <p>adipisicing voluptatum</p>
                </div>
              </div>
            </div>

            <div className="flex flex-row-reverse items-center mt-16 lg:mt-40">
              <button className="inline-flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md lg:w-16 lg:h-16 active:scale-95">
                <Play className="h-4 lg:h-8 ml-0.5" />
              </button>
              <h1 className="mr-2 font-medium lg:mr-4 text-14 lg:text-20">
                PLAY VIDEO
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
