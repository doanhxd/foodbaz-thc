import Image from "next/image";
import { ArrowLeft, ArrowRight } from "react-feather";
import comboThumb from "./images/combo.png";
import comboPic from "./images/combopack.png";
import chickenThumb from "./images/boiled.png";
import chickenPic from "./images/chicken.png";
import pizzaThumb from "./images/pizza.svg";
import pizzaPic from "./images/pizzandrink.png";
import boxThumb from "./images/boxthumb.png";
import boxPic from "./images/boxmeal.png";

function PopularMenu() {
  return (
    <div className="flex flex-col mt-12 lg:mt-36">
      {/* Title Area */}
      <div className="flex justify-center">
        <p className="font-serif text-yellow-500 lg:text-24">
          Our Popular Menu
        </p>
      </div>
      <div className="flex justify-center mt-4">
        <h1 className="font-black uppercase text-36 lg:text-48">
          Went to eat?
        </h1>
      </div>
      {/* Product Menu */}
      <div className="flex justify-center">
        <div className="flex mt-4 space-x-2 mr-2 overflow-scroll lg:space-x-0.5 scrollbar-hide lg:grid-cols-6 lg:grid lg:mt-12">
          {/* Button Left */}
          <div className="items-center justify-center hidden lg:flex">
            <button className="flex items-center justify-center w-16 h-16 text-black bg-white rounded-full shadow-md text-24">
              <ArrowLeft className="h-8" />
            </button>
          </div>

          {/* 1 Product Item Menu */}
          <div className="px-10 py-6 bg-white lg:py-10 rounded-2xl lg:rounded-l-3xl lg:rounded-r-none">
            <div className="relative w-12 h-12 mt-4">
              <Image src={comboThumb} layout="fill" objectFit="cover" />
            </div>
            <h1 className="mt-8 font-medium uppercase lg:text-20">
              Combo pack
            </h1>
            <div className="hidden mt-4 text-gray-500 text-18 lg:inline">
              <p>
                Rorem ipsum advolu ptateme
                <br />
                volupta tem Rorem ipsuey
              </p>
            </div>
            <div className="relative p-16 mt-8 lg:py-20 lg:mt-14">
              <Image
                src={comboPic}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
          </div>

          {/* 2 Combo Pack */}
          <div className="px-10 py-6 bg-white lg:py-10 lg:rounded-none rounded-2xl">
            <div className="relative w-12 h-12 mt-4">
              <Image src={chickenThumb} layout="fill" objectFit="cover" />
            </div>
            <h1 className="mt-8 font-medium uppercase lg:text-20">
              Combo pack
            </h1>
            <div className="hidden mt-4 text-gray-500 text-18 lg:inline">
              <p>
                Rorem ipsum advolu ptateme
                <br />
                volupta tem Rorem ipsuey
              </p>
            </div>
            <div className="relative p-16 mt-8 lg:py-20 lg:mt-14">
              <Image
                src={chickenPic}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
          </div>

          {/* 3 Product Picked */}
          <div className="px-10 py-6 bg-yellow-500 lg:py-10 rounded-2xl lg:rounded-none">
            <div className="flex justify-between">
              <div className="relative w-12 h-12 mt-4">
                <Image src={pizzaThumb} layout="fill" objectFit="cover" />
              </div>
              <h1 className="inline-flex font-bold text-gray-100 text-48 text-opacity-20 lg:text-56">
                03
              </h1>
            </div>

            <h1 className="mt-6 font-medium text-white uppercase lg:mt-4 lg:text-20">
              Pizza & drinks
            </h1>
            <div className="hidden mt-4 text-white lg:inline text-18">
              <p>
                Rorem ipsum advolu ptateme
                <br />
                volupta tem Rorem ipsuey
              </p>
            </div>
            <div className="relative p-16 mt-8 lg:py-20 lg:mt-14">
              <Image
                src={pizzaPic}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
          </div>

          {/* 4 Combo Pack */}
          <div className="px-10 py-6 bg-white rounded-2xl lg:py-10 lg:rounded-r-3xl lg:rounded-l-none">
            <div className="relative w-12 h-12 mt-4">
              <Image src={boxThumb} layout="fill" objectFit="cover" />
            </div>
            <h1 className="mt-8 font-medium uppercase lg:text-20">Box Meals</h1>
            <div className="hidden mt-4 text-gray-500 lg:inline text-18">
              <p>
                Rorem ipsum advolu ptateme
                <br />
                volupta tem Rorem ipsuey
              </p>
            </div>
            <div className="relative p-16 mt-8 lg:py-20 lg:mt-14">
              <Image
                src={boxPic}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
          </div>

          {/* Button Right */}
          <div className="items-center justify-center hidden lg:flex">
            <button className="flex items-center justify-center w-16 h-16 text-black bg-white rounded-full shadow-md text-24">
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularMenu;
