import Image from "next/image";
import iPhone from "./images/iphone.png";
import appSto from "./images/appstore.png";
import ggPlay from "./images/gg-play.png";

function DownloadApp() {
  return (
    <div className="md:mx-6 md:mt-48">
      <div className="items-center justify-center hidden bg-white lg:flex rounded-3xl mx-80">
        <div className="grid grid-cols-2 text-black">
          <div className="-mt-32 transform -translate-x-12 -translate-y-0">
            <Image src={iPhone} />
          </div>
          <div className="flex flex-col mt-20 ml-20">
            <div>
              <p className="font-serif text-yellow-500 text-24">Download App</p>
            </div>
            <div className="mt-4">
              <h1 className="font-black uppercase text-48">
                Best app for <br /> food delivery
              </h1>
            </div>
            <div className="flex justify-between mt-4 space-x-2">
              <div className="border-2 rounded-2xl">
                <Image src={appSto} />
              </div>
              <div className="border-2 rounded-2xl">
                <Image src={ggPlay} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadApp;
