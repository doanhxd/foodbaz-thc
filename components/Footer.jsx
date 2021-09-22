import Image from "next/image";
import logoFooter from "./images/logo-footer.png";
import { Facebook, Twitter, Youtube, Instagram, Code } from "react-feather";

function Footer() {
  return (
    <div className="pt-12 bg-gray-800 lg:px-48 lg:pt-28">
      <div className="flex flex-col mt-2 ml-6 lg:items-center lg:ml-0 lg:grid lg:px-32 lg:grid-cols-2">
        <div>
          <h1 className="font-black text-white text-24 lg:text-48">
            SUBSCRIBE NEWS LETTER
          </h1>
        </div>

        {/* SUBSCRIBE BUTTON */}
        <div className="items-center lg:justify-end lg:flex lg:mr-12">
          <div className="items-center mt-4 bg-gray-700 border-2 border-gray-500 rounded-lg lg:mt-0 h-14 w-80 lg:rounded-l-lg lg:border-r-0 lg:pl-4 lg:pr-36">
            <input
              type="text"
              placeholder="Enter your email"
              className="py-4 pl-4 text-white bg-transparent outline-none lg:pl-0 text-16"
            />
          </div>
          <button className="relative w-40 h-12 mt-6 font-medium text-white transition duration-150 bg-yellow-600 rounded-lg lg:mt-0 lg:h-14 lg:w-40 lg:-ml-4 filter brightness-110 active:scale-95">
            SUBSCRIBE NOW
          </button>
        </div>
      </div>

      <div className="grid text-white bg-gray-800 lg:px-32 lg:grid-cols-4 lg:mt-14 py-14">
        <div className="space-y-3 text-xs text-white">
          {/* ABOUT FOODBAZ */}
          <div className="ml-6 lg:ml-0">
            <h1 className="font-bold text-20">ABOUT FOODBAZ</h1>
            <p className="hidden pt-4 text-gray-400 lg:inline text-18">
              Lorem ipsum dolor sit consectetur <br />
              adipisicing elit, sed do eiusmod tempor <br /> inclidiunt ut
              labore et dolore
            </p>
            <div className="flex flex-row items-center mt-8">
              <div className="flex items-center justify-center w-16 h-16 bg-yellow-600 rounded-lg lg:w-24 lg:h-24">
                <div className="flex items-center justify-center w-12 h-12 border-2 rounded-full lg:w-16 lg:h-16">
                  <h1 className="text-13 lg:text-16">24H</h1>
                </div>
              </div>
              <div className="flex flex-col ml-4">
                <h1 className="font-bold lg:text-18 lg:pb-2">OPENING HOURS</h1>
                <div className="text-gray-400 lg:pt-2 lg:text-16">
                  <p>Mon - Sat (8:00 - 6:00)</p>
                  <p>Sunday Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CONTACT US */}
        <div className="flex flex-col mt-8 ml-6 space-y-3 lg:mt-0 lg:ml-16">
          <h5 className="font-bold text-20">CONTACT US</h5>
          <div className="flex flex-col font-bold lg:text-18">
            <p className="mt-2">
              ADRESS
              <span className="font-normal text-gray-400">
                : 8638 Amarica Stranfod <br /> Mailbon Star
              </span>
            </p>
            <p className="mt-6">
              MAIL
              <span className="font-normal text-gray-400">
                : Israfilsupol836@gmail.com
              </span>
            </p>
            <p className="mt-6">
              PHONE
              <span className="font-normal text-gray-400">
                : +7464 0187 645
              </span>
            </p>
            <p className="mt-6">
              FAX ID
              <span className="font-normal text-gray-400">
                : +9 659459 49594
              </span>
            </p>
          </div>
        </div>

        {/* LINKS */}
        <div className="hidden mt-8 ml-8 space-y-3 lg:inline lg:mt-0 lg:ml-32">
          <h5 className="font-bold text-20">LINKS</h5>
          <div className="pt-2 space-y-3 text-gray-400 text-16">
            <p>Home</p>
            <p>About</p>
            <p>News</p>
            <p>Shop</p>
            <p>Faq</p>
            <p>Contact</p>
          </div>
        </div>

        {/* RECENT BLOG */}
        <div className="items-center hidden mt-8 ml-8 space-y-3 lg:inline lg:mt-0 lg:ml-0">
          <h5 className="font-bold text-20">RECENT BLOG</h5>
          <div className="pt-4">
            <div className="flex flex-row items-center">
              <div className="h-4 px-8 py-8 bg-yellow-500 rounded-xl">
                <img src="" alt="" />
              </div>
              <div className="ml-4">
                <h1>
                  Best Smell of Americano <br /> Coffee Trins
                </h1>
                <p className="mt-2 text-13">DECEMBER 30 - 2020</p>
              </div>
            </div>
            <div className="flex flex-row items-center mt-8 lg:pb-24">
              <div className="h-4 px-8 py-8 bg-yellow-500 rounded-xl">
                <img src="" alt="" />
              </div>
              <div className="ml-4">
                <h1>
                  Best Smell of Americano <br /> Coffee Trins
                </h1>
                <p className="text-13">DECEMBER 30 - 2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Under footer :D */}
      <div className="items-center pb-4 border-t-2 border-gray-700 md:pb-0 lg:mt-4 lg:mx-32">
        <div className="grid grid-rows-3 pb-4 mt-4 space-x-2 md:grid-rows-none lg:space-x-0 lg:grid-cols-3">
          <div className="ml-4 lg:ml-0">
            <div className="relative h-full w-36 ">
              <Image src={logoFooter} layout="fill" objectFit="cover" />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <p className="text-gray-500 truncate lg:text-16 text-13">
              COPYRIGHT © EXAMPLE 2020.DESIGN BY XPRESSROW
            </p>
          </div>

          <div className="flex items-center justify-center mt-4 text-white lg:mt-0 lg:justify-end">
            <div className="flex space-x-3 lg:grid lg:grid-cols-5">
              <div className="flex items-center justify-center transition duration-200 cursor-pointer hover:bg-yellow-600 filter hover:brightness-105 h-10 w-10 lg:h-12 lg:w-12 ml-3.5 bg-gray-800 rounded-md brightness-125">
                <Twitter className="h-5 lg:h-8" />
              </div>
              <div className="flex items-center justify-center w-10 h-10 transition duration-200 bg-gray-800 rounded-md cursor-pointer hover:bg-yellow-600 hover:brightness-105 lg:h-12 lg:w-12 filter brightness-125">
                <Facebook className="h-5 lg:h-8" />
              </div>
              <div className="flex items-center justify-center w-10 h-10 transition duration-200 bg-gray-800 rounded-md cursor-pointer hover:bg-yellow-600 hover:brightness-105 lg:h-12 lg:w-12 filter brightness-125">
                <Instagram className="h-5 lg:h-8" />
              </div>
              <div className="flex items-center justify-center w-10 h-10 transition duration-200 bg-gray-800 rounded-md cursor-pointer hover:bg-yellow-600 filter hover:brightness-105 lg:h-12 lg:w-12 brightness-125">
                <Youtube className="h-5 lg:h-8" />
              </div>
              <div className="flex items-center justify-center w-10 h-10 bg-yellow-600 rounded-md cursor-pointer lg:h-12 lg:w-12 filter brightness-110">
                <p className="text-13 lg:text-16">Bë</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
