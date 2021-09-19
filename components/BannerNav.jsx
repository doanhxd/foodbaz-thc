function BannerNav() {
  return (
    <div className="grid grid-cols-2">
      <div className="flex justify-end pb-8 bg-white rounded-br-2xl">
        <button className="py-3 my-3 -mt-4 font-medium text-black transition duration-150 bg-pink-100 filter brightness-105 text-18 px-7 rounded-l-xl hover:shadow-sm active:scale-95">
          ←
        </button>
      </div>
      <div className="flex justify-start pb-8 ">
        <button className="py-3 my-3 -mt-4 font-medium text-white transition duration-150 bg-yellow-500 text-18 px-7 rounded-r-xl hover:shadow-sm active:scale-95">
          →
        </button>
      </div>
    </div>
  );
}

export default BannerNav;
