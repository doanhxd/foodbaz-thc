import Image from "next/image";
import { ArrowLeft, ArrowRight } from "react-feather";
import comboThumb from "../components/images/combo.png";
import comboPic from "../components/images/combopack.png";
import chickenThumb from "../components/images/boiled.png";
import chickenPic from "../components/images/chicken.png";
import pizzaThumb from "../components/images/pizza.svg";
import pizzaPic from "../components/images/pizzandrink.png";
import boxThumb from "../components/images/boxthumb.png";
import boxPic from "../components/images/boxmeal.png";

function PopularMenu() {
  return (
    <div className="flex flex-col mt-12 md:mt-36">
      {/* Title Area */}
      <div className="flex justify-center">
        <p className="font-serif text-yellow-500 md:text-24">
          Our Popular Menu
        </p>
      </div>
      <div className="flex justify-center mt-4">
        <h1 className="font-black uppercase text-36 md:text-48">
          Went to eat?
        </h1>
      </div>
      {/* Product Menu */}
      <div className="flex justify-center">
        <div className="flex mt-4 space-x-2 overflow-scroll md:space-x-0.5 scrollbar-hide md:grid-cols-6 md:grid md:mt-12">
          {/* Button Left */}
          <div className="items-center justify-center hidden md:flex">
            <button className="flex items-center justify-center w-16 h-16 text-black bg-white rounded-full shadow-md text-24">
              <ArrowLeft className="h-8" />
            </button>
          </div>
          {/* Product Item Menu */}
          <div className="px-10 py-6 bg-white md:py-10 rounded-2xl md:rounded-l-3xl md:rounded-r-none">
            <div className="relative w-12 h-12 mt-4">
              <Image src={comboThumb} layout="fill" objectFit="cover" />
            </div>
            <h1 className="mt-8 font-medium uppercase md:text-20">
              Combo pack
            </h1>
            <div className="hidden mt-4 text-gray-500 text-18 md:inline">
              <p>
                Rorem ipsum advolu ptateme
                <br />
                volupta tem Rorem ipsuey
              </p>
            </div>
            <div className="relative py-16 md:py-20 md:mt-14">
              <Image
                src={comboPic}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
          </div>

          {/* Combo Pack */}
          <div className="px-10 py-6 bg-white md:py-10 md:rounded-none rounded-2xl">
            <div className="relative w-12 h-12 mt-4">
              <Image src={chickenThumb} layout="fill" objectFit="cover" />
            </div>
            <h1 className="mt-8 font-medium uppercase md:text-20">
              Combo pack
            </h1>
            <div className="hidden mt-4 text-gray-500 text-18 md:inline">
              <p>
                Rorem ipsum advolu ptateme
                <br />
                volupta tem Rorem ipsuey
              </p>
            </div>
            <div className="relative py-16 md:py-20 md:mt-14">
              <Image
                src={chickenPic}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
          </div>

          {/* Product Picked */}
          <div className="px-10 py-6 bg-yellow-500 md:py-10 rounded-2xl md:rounded-none">
            <div className="flex justify-between">
              <div className="relative w-12 h-12 mt-4">
                <Image src={pizzaThumb} layout="fill" objectFit="cover" />
              </div>
              <h1 className="hidden font-bold text-gray-100 md:inline-flex text-opacity-20 text-56">
                03
              </h1>
            </div>

            <h1 className="mt-4 font-medium text-white uppercase md:text-20">
              Pizza & drinks
            </h1>
            <div className="hidden mt-4 text-white md:inline text-18">
              <p>
                Rorem ipsum advolu ptateme
                <br />
                volupta tem Rorem ipsuey
              </p>
            </div>
            <div className="relative py-16 md:py-20 md:mt-14">
              <Image
                src={pizzaPic}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
          </div>
          {/* Combo Pack */}
          <div className="px-10 py-6 bg-white rounded-2xl md:py-10 md:rounded-r-3xl md:rounded-l-none">
            <div className="relative w-12 h-12 mt-4">
              <Image src={boxThumb} layout="fill" objectFit="cover" />
            </div>
            <h1 className="mt-8 font-medium uppercase md:text-20">Box Meals</h1>
            <div className="hidden mt-4 text-gray-500 md:inline text-18">
              <p>
                Rorem ipsum advolu ptateme
                <br />
                volupta tem Rorem ipsuey
              </p>
            </div>
            <div className="relative py-16 md:py-20 md:mt-14">
              <Image
                src={boxPic}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
          </div>

          {/* Button Right */}
          <div className="items-center justify-center hidden md:flex">
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
