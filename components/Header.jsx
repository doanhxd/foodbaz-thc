import Image from "next/image";
import {
  SearchIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import logoPic from "./images/logo.png";

function Header() {
  return (
    <header className="top-0 z-50 grid grid-cols-2">
      {/* Left Header */}
      <div className="inline-flex items-center p-4 bg-white lg:pt-8 lg:p-5 justify-evenly">
        <div className="relative flex items-center w-40 h-20 my-auto cursor-pointer lg:h-24">
          <Image
            src={logoPic}
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
        </div>
        {/* Menu item */}
        <div className="flex-row items-center hidden ml-8 space-x-12 font-bold uppercase cursor-pointer lg:inline-flex text-16">
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
      <div className="flex p-8 lg:p-5 lg:pt-8 header-bg justify-evenly">
        {/* flex py-2 text-sm text-gray-500 rounded-full lg:border-2 lg:shadow-sm */}
        <div className="bg-white rounded-lg shadow-md lg:p-3 lg:my-5 lg:px-4 lg:inline-flex">
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow pt-4 pl-3 bg-transparent outline-none lg:pt-0 text-13 lg:text-16 lg:pr-20"
          />
          <SearchIcon className="hidden h-8 p-1 text-black cursor-pointer xl:inline-flex" />
        </div>

        {/* Icon Cart & Heart */}
        <div className="items-center justify-end hidden space-x-12 text-gray-600 lg:inline-flex">
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
