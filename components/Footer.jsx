import Image from "next/image";
import logoFooter from "../components/images/logo-footer.png";
import { Facebook, Twitter, Youtube, Instagram, Code } from "react-feather";

function Footer() {
  return (
    <div className="px-48 pb-2 bg-gray-800 pt-28">
      <div className="grid items-center grid-cols-2 px-32 mt-2">
        <div>
          <h1 className="font-black text-white text-48">
            SUBSCRIBE NEWS LETTER
          </h1>
        </div>
        {/* SUBSCRIBE BUTTON */}
        <div className="flex justify-end mr-28">
          <div className="py-3 pl-4 bg-gray-700 border-2 border-r-0 border-gray-500 rounded-l-lg pr-36">
            <input
              type="text"
              placeholder="Enter your email"
              className="bg-gray-700"
            />
          </div>
          <button className="relative px-6 -ml-4 font-medium text-white transition duration-150 bg-yellow-600 rounded-lg filter brightness-110 active:scale-95">
            SUBSCRIBE NOW
          </button>
        </div>
      </div>

      {/* ABOUT FOODBAZ */}
      <div className="grid grid-cols-4 px-32 text-white bg-gray-800 mt-14 py-14">
        <div className="space-y-3 text-xs text-white">
          <div>
            <h1 className="font-bold text-20">ABOUT FOODBAZ</h1>
            <p className="pt-4 text-gray-400 text-18">
              Lorem ipsum dolor sit consectetur <br />
              adipisicing elit, sed do eiusmod tempor <br /> inclidiunt ut
              labore et dolore
            </p>
            <div className="flex flex-row items-center mt-8">
              <div className="flex items-center justify-center w-24 h-24 bg-yellow-600 rounded-lg">
                <div className="flex items-center justify-center w-16 h-16 border-2 rounded-full">
                  <h1>24H</h1>
                </div>
              </div>
              <div className="grid grid-rows-2 ml-4">
                <h1 className="font-bold text-18">OPENING HOURS</h1>
                <div className="text-gray-400 text-16">
                  <p>Mon - Sat (8:00 - 6:00)</p>
                  <p>Sunday Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CONTACT US */}
        <div className="flex flex-col ml-16 space-y-3">
          <h5 className="font-bold text-20">CONTACT US</h5>
          <div className="flex flex-col font-bold text-18">
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
        <div className="ml-32 space-y-3">
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
        <div className="items-center space-y-3">
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
            <div className="flex flex-row items-center pb-24 mt-8">
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
      <div className="mt-4 mr-56 border-t-2 border-gray-600 ml-28">
        <div className="grid grid-cols-3 mt-4">
          <div className="relative">
            <div className="px-12 py-12">
              <Image
                src={logoFooter}
                layout="fill"
                objectFit="contain"
                objectPosition="left"
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <p className="text-gray-500">
              COPYRIGHT © EXAMPLE 2020.DESIGN BY XPRESSROW
            </p>
          </div>

          <div className="flex items-center justify-end text-white">
            <div className="grid grid-cols-5 space-x-4">
              <div className="flex items-center justify-center px-3 py-3 ml-3.5 bg-gray-800 rounded-md filter brightness-125">
                <Twitter />
              </div>
              <div className="flex items-center justify-center px-3 py-3 bg-gray-800 rounded-md filter brightness-125">
                <Facebook />
              </div>
              <div className="flex items-center justify-center px-3 py-3 bg-gray-800 rounded-md filter brightness-125">
                <Instagram />
              </div>
              <div className="flex items-center justify-center px-3 py-3 bg-gray-800 rounded-md filter brightness-125">
                <Youtube />
              </div>
              <div className="flex items-center justify-center px-3 py-3 bg-yellow-600 rounded-md filter brightness-110">
                Bë
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
