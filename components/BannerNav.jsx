import { ArrowLeft, ArrowRight } from "react-feather";

function BannerNav() {
  return (
    <div className="grid grid-cols-2">
      <div className="justify-end hidden pb-8 bg-white lg:inline-flex rounded-br-2xl">
        <button className="px-5 py-3 my-3 -mt-4 font-medium text-black transition duration-150 button-bg text-18 rounded-l-xl active:scale-90">
          <ArrowLeft />
        </button>
      </div>

      <div className="justify-start hidden pb-8 lg:inline-flex ">
        <button className="px-5 py-3 my-3 -mt-4 font-medium text-white transition duration-150 bg-yellow-500 text-18 rounded-r-xl active:scale-90">
          <ArrowRight className="h-6" />
        </button>
      </div>
    </div>
  );
}

export default BannerNav;
