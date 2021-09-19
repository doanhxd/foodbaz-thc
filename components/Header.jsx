import Image from "next/image";
import {
  SearchIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import logoPic from "../components/images/logo.png";

function Header() {
  return (
    <header className="top-0 z-50 grid grid-cols-2">
      {/* Left Header */}
      <div className="flex items-center p-5 pt-12 bg-white justify-evenly">
        <div className="cursor-pointer ">
          {/* <Image
            src="https://jehangirs.restaurant/img/logo.png"
            alt="brand logo"
            width={137}
            height={86}
          /> */}
          <Image src={logoPic} alt="logo pic" width={200} height={80} />
        </div>
        {/* Menu item */}
        <div className="flex flex-row items-center space-x-12 font-bold uppercase cursor-pointer text-18">
          <div>
            <span className="text-yellow-500">\\</span> Home
          </div>
          <div>About</div>
          <div>
            <div className="relative items-center inline-block p-4 space-x-2 bg-white ">
              Our menu
              <span class="absolute top-2 right-1/4 inline-flex border items-center justify-center px-2 py-0.5 text-11 h-5  text-white transform translate-x-1 -translate-y-2 bg-red-500 rounded-full font-normal">
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
      <div className="flex p-5 pt-12 justify-evenly">
        <div className="flex items-center px-5 mt-5 mb-5 bg-white shadow-md rounded-xl">
          <input
            type="text"
            placeholder="Search..."
            className="text-gray-600"
          />
          <SearchIcon className="h-6 m-4 -mr-1 text-black cursor-pointer" />
        </div>

        {/* Icon Cart & Heart */}
        <div className="flex items-center justify-end space-x-12 text-gray-600">
          <div className="relative items-center inline-block px-4 py-4 space-x-2 bg-white rounded-full shadow-md cursor-pointer ">
            <ShoppingCartIcon className="h-8" />

            <span class="absolute top-8 -right-1 inline-flex border items-center justify-center px-2 py-2 text-13 font-bold  text-white transform translate-x-1/2 -translate-y-1/2 bg-yellow-500 rounded-full">
              03
            </span>
          </div>

          <div className="relative items-center inline-block p-4 space-x-2 bg-white rounded-full shadow-md cursor-pointer">
            <HeartIcon className="h-8" />
            <span class="absolute top-8 -right-1 inline-flex border items-center justify-center px-2 py-2 text-13 font-bold  text-white transform translate-x-1/2 -translate-y-1/2 bg-yellow-500 rounded-full">
              09
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
