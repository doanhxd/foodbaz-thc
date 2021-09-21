import Image from "next/image";
import {
  SearchIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import logoPic from "../components/images/logo.png";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-2 shadow-md">
      {/* Left Header */}
      <div className="inline-flex items-center p-5 pt-8 bg-white justify-evenly">
        <div className="relative flex items-center w-64 my-auto cursor-pointer sm:h-8">
          <Image src={logoPic} width={200} height={80} />
        </div>
        {/* Menu item */}
        <div className="flex-row items-center hidden ml-8 space-x-12 font-bold uppercase cursor-pointer md:inline-flex text-16">
          <div>
            <span className="text-yellow-500">\\</span> Home
          </div>
          <div>About</div>
          <div>
            <div className="relative items-center inline-block p-4 space-x-2 bg-white ">
              Our menu
              <span class="absolute top-3 right-1/4 inline-flex border items-center justify-center px-2 py-0.5 text-11 h-4  text-white transform translate-x-1 -translate-y-2 bg-red-500 rounded-full font-normal">
                New
              </span>
            </div>
          </div>
          <div>Blog</div>
          <div>Contact</div>
        </div>
      </div>

      {/* Right Header */}
      {/* Search Input */}
      <div className="flex p-5 pt-8 header-bg justify-evenly">
        {/* flex py-2 text-sm text-gray-500 rounded-full md:border-2 md:shadow-sm */}
        <div className="px-4 py-3 my-5 bg-white rounded-lg shadow-md sm:inline-flex ">
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow bg-transparent outline-none md:pr-20"
          />
          <SearchIcon className="hidden h-8 p-1 text-black cursor-pointer xl:inline-flex" />
        </div>

        {/* Icon Cart & Heart */}
        <div className="items-center justify-end hidden space-x-12 text-gray-600 md:inline-flex">
          <div className="relative items-center inline-block px-4 py-4 space-x-2 bg-white rounded-full shadow-md cursor-pointer ">
            <ShoppingCartIcon className="h-6" />

            <span class="absolute top-8 -right-1 inline-flex border items-center justify-center h-8 w-8 text-11 font-bold  text-white transform translate-x-1/2 -translate-y-5 bg-yellow-500 rounded-full">
              03
            </span>
          </div>

          <div className="relative items-center inline-block p-4 space-x-2 bg-white rounded-full shadow-md cursor-pointer">
            <HeartIcon className="h-6" />
            <span class="absolute top-8 -right-1 inline-flex border items-center justify-center h-8 w-8 text-11 font-bold  text-white transform translate-x-1/2 -translate-y-5 bg-yellow-500 rounded-full">
              09
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
