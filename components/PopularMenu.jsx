import Image from "next/image";
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
    <div className="flex flex-col mt-36">
      {/* Title Area */}
      <div className="flex justify-center">
        <p className="font-serif text-yellow-500 text-24">Our Popular Menu</p>
      </div>
      <div className="flex justify-center mt-4">
        <h1 className="font-black uppercase text-48">Went to eat?</h1>
      </div>
      {/* Product Menu */}
      <div className="flex justify-center">
        <div className="grid grid-cols-6 mt-12 ">
          {/* Button Left */}
          <div className="flex items-center justify-center">
            <button className="px-[24px] py-[18px] text-black bg-white rounded-full shadow-md text-24">
              ←
            </button>
          </div>
          {/* Product Item Menu */}
          <div className="px-10 py-10 bg-white rounded-l-3xl mr-0.5">
            <div className="relative px-8 py-8 mt-4">
              <Image
                src={comboThumb}
                layout="fill"
                objectFit="contain"
                objectPosition="left"
              />
            </div>
            <h1 className="mt-8 font-medium uppercase text-20">Combo pack</h1>
            <div className="mt-4 text-gray-500 text-18">
              <p>
                Rorem ipsum advolu ptateme
                <br />
                volupta tem Rorem ipsuey
              </p>
            </div>
            <div className="relative py-20 mt-14">
              <Image
                src={comboPic}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
          </div>

          {/* Combo Pack */}
          <div className="px-10 py-10 bg-white mr-0.5">
            <div className="relative px-8 py-8 mt-4">
              <Image
                src={chickenThumb}
                layout="fill"
                objectFit="contain"
                objectPosition="left"
              />
            </div>
            <h1 className="mt-8 font-medium uppercase text-20">Combo pack</h1>
            <div className="mt-4 text-gray-500 text-18">
              <p>
                Rorem ipsum advolu ptateme
                <br />
                volupta tem Rorem ipsuey
              </p>
            </div>
            <div className="relative py-20 mt-14">
              <Image
                src={chickenPic}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
          </div>

          {/* Product Picked */}
          <div className="px-10 py-10 bg-yellow-500 mr-0.5">
            <div className="flex justify-between">
              <div className="relative px-8 py-8">
                <Image
                  src={pizzaThumb}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="left"
                />
              </div>
              <h1 className="font-bold text-gray-100 text-opacity-20 text-64">
                03
              </h1>
            </div>

            <h1 className="mt-4 font-medium text-white uppercase text-20">
              Pizza & Drinks
            </h1>
            <div className="mt-4 text-white text-18">
              <p>
                Rorem ipsum advolu ptateme
                <br />
                volupta tem Rorem ipsuey
              </p>
            </div>
            <div className="relative py-20 mt-14">
              <Image
                src={pizzaPic}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
          </div>

          <div className="px-10 py-10 bg-white rounded-r-3xl mr-0.5">
            <div className="relative px-8 py-8 mt-4">
              <Image
                src={boxThumb}
                layout="fill"
                objectFit="contain"
                objectPosition="left"
              />
            </div>
            <h1 className="mt-8 font-medium uppercase text-20">Combo pack</h1>
            <div className="mt-4 text-gray-500 text-18">
              <p>
                Rorem ipsum advolu ptateme
                <br />
                volupta tem Rorem ipsuey
              </p>
            </div>
            <div className="relative py-20 mt-14">
              <Image
                src={boxPic}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
          </div>

          {/* Button Right */}
          <div className="flex items-center justify-center">
            <button className="px-[24px] py-[18px] text-black bg-white rounded-full shadow-md text-24">
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularMenu;
