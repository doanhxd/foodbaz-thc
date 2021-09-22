import Image from "next/image";
import turboLogo from "./images/turbologo.png";
import terrenoLogo from "./images/terreno.svg";
import maxtonDes from "./images/maxton.png";
import hidenLogo from "./images/Hiden.png";
import duragas from "./images/duragas.svg";
import zaiaEnt from "./images/zaia-ent.png";

function Donors() {
  return (
    <div className="flex flex-row items-center justify-around flex-grow mt-10 overflow-scroll bg-white scrollbar-hide">
      <div className="flex items-center justify-center flex-grow bg-white border-r-2 h-28 w-52">
        <div className="relative w-36 lg:h-28">
          <Image
            src={hidenLogo}
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>
      </div>
      <div className="flex items-center justify-center flex-grow bg-white border-r-2 h-28 w-52">
        <div className="relative h-16 w-36 lg:h-28">
          <Image
            src={turboLogo}
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>
      </div>
      <div className="flex items-center justify-center flex-grow bg-white border-r-2 h-28 w-52">
        <div className="relative w-36 h-28 lg:h-28">
          <Image
            src={terrenoLogo}
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>
      </div>
      <div className="flex items-center justify-center flex-grow bg-white border-r-2 h-28 w-52">
        <div className="relative h-8 w-36 lg:h-12">
          <Image
            src={maxtonDes}
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>
      </div>
      <div className="flex items-center justify-center flex-grow bg-white border-r-2 h-28 w-52">
        <div className="relative h-8 w-36 lg:h-12">
          <Image
            src={duragas}
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>
      </div>
      <div className="flex items-center justify-center flex-grow bg-white h-28 w-52">
        <div className="relative h-8 w-36 lg:h-12">
          <Image
            src={zaiaEnt}
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>
      </div>
    </div>
  );
}

export default Donors;
