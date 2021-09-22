import { Facebook, Twitter, Youtube, Play } from "react-feather";

function Banner() {
  return (
    <div className="grid grid-cols-2">
      {/* Banner Left */}
      <div className="flex flex-col bg-white rounded-br-2xl lg:rounded-none">
        {/* Order field */}
        <div className="inline-flex flex-col ml-4 lg:mt-44 lg:ml-28">
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

          <div className="inline-flex mt-3 -ml-4 space-x-0.5 md:justify-start justify-evenly md:ml-0 md:space-x-8 md:flex-col text-9 md:text-13 lg:flex-row">
            <button className="w-16 font-semibold text-white uppercase transition duration-150 bg-green-500 rounded-md h-7 md:rounded-lg md:mt-6 lg:w-40 lg:h-14 active:scale-90">
              Try it now
            </button>
            <button className="w-20 px-1 font-semibold text-white uppercase truncate transition duration-150 bg-yellow-500 rounded-md h-7 md:rounded-lg md:mt-6 lg:w-40 lg:h-14 active:scale-90">
              See our menu
            </button>
          </div>
        </div>

        <div className="flex items-end my-4 mr-4 font-medium uppercase bg-white cursor-pointer justify-evenly md:justify-start md:space-x-8 text-11 md:inline-flex md:text-14 md:mt-48 md:flex-row md:ml-20">
          <div className="flex items-center ml-4 md:ml-0 lg:mr-0">
            <Facebook className="h-4 mr-2 lg:ml-4" />
            <p className="hidden md:inline">Facebook</p>
          </div>
          <div className="flex items-center mt-2 lg:mr-0">
            <Twitter className="h-4 mr-2" />
            <p className="hidden md:inline">Twitter</p>
          </div>
          <div className="flex items-center mt-2">
            <Youtube className="h-4 mr-2" />
            <p className="hidden md:inline">YouTube</p>
          </div>
        </div>
      </div>

      {/* Banner Right */}
      <div className="inline-flex justify-end">
        <div className="mr-4 lg:mt-20 lg:mr-44">
          <div className="flex flex-col text-black">
            {/* Number 1 - 2 - 3 */}
            <div className="flex flex-row-reverse items-center lg:mt-24">
              <button className="w-8 h-8 font-medium transition duration-200 bg-white rounded-full shadow-md lg:w-16 lg:h-16 text-13 lg:text-24 hover:shadow-md active:scale-90">
                01
              </button>
              <div className="flex flex-col mr-2 text-right lg:mr-12">
                <h1 className="font-medium text-14 lg:text-20">
                  GREAT LOCATION
                </h1>
                <div className="hidden text-gray-500 text-14 lg:inline">
                  <p>Rorem ipsum dolor, sit amet, etur</p>
                  <p>adipisicing voluptatum</p>
                </div>
              </div>
            </div>

            <div className="flex flex-row-reverse items-center mt-6 lg:mt-24">
              <button className="w-8 h-8 font-medium transition duration-200 bg-white rounded-full shadow-md lg:w-16 lg:h-16 text-13 lg:text-24 active:scale-90">
                02
              </button>
              <div className="flex flex-col mr-2 text-right lg:mr-12">
                <h1 className="font-medium text-14 lg:text-20">NATURE FIRST</h1>
                <div className="hidden text-gray-500 text-14 lg:inline">
                  <p>Rorem ipsum dolor, sit amet, etur</p>
                  <p>adipisicing voluptatum</p>
                </div>
              </div>
            </div>

            <div className="flex flex-row-reverse items-center mt-6 lg:mt-24">
              <button className="w-8 h-8 font-medium transition duration-200 bg-white rounded-full shadow-md lg:w-16 lg:h-16 text-13 lg:text-24 active:scale-90">
                03
              </button>
              <div className="flex flex-col mr-2 text-right lg:mr-12">
                <h1 className="font-medium text-14 lg:text-20">HEALTHY FOOD</h1>
                <div className="hidden text-gray-500 text-14 lg:inline">
                  <p>Rorem ipsum dolor, sit amet, etur</p>
                  <p>adipisicing voluptatum</p>
                </div>
              </div>
            </div>

            <div className="flex flex-row-reverse items-center mt-10 lg:mt-40">
              <button className="inline-flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md lg:w-16 lg:h-16 active:scale-90">
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
