import { ArrowLeft, ArrowRight } from "react-feather";

function BannerNav() {
  return (
    <div className="grid grid-cols-2">
      <div className="justify-end hidden pb-8 bg-white md:inline-flex rounded-br-2xl">
        <button className="px-5 py-3 my-3 -mt-4 font-medium text-black transition duration-150 bg-pink-100 filter brightness-105 text-18 rounded-l-xl hover:shadow-sm active:scale-95">
          <ArrowLeft />
        </button>
      </div>

      <div className="justify-start hidden pb-8 md:inline-flex ">
        <button className="px-5 py-3 my-3 -mt-4 font-medium text-white transition duration-150 bg-yellow-500 text-18 rounded-r-xl hover:shadow-sm active:scale-95">
          <ArrowRight className="h-6" />
        </button>
      </div>
    </div>
  );
}

export default BannerNav;
