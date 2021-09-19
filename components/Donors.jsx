import Image from "next/image";
import turboLogo from "../components/images/turbologo.png";
import terrenoLogo from "../components/images/terreno.svg";
import maxtonDes from "../components/images/maxton.png";
import hidenLogo from "../components/images/Hiden.png";
import duragas from "../components/images/duragas.svg";
import zaiaEnt from "../components/images/zaia-ent.png";

function Donors() {
  return (
    <div className="grid items-center grid-cols-6 mt-10 bg-white ">
      <div className="flex justify-center px-10 py-10 bg-white border-r-2">
        <Image src={hidenLogo} width={195} height={55} />
      </div>
      <div className="flex justify-center px-10 py-10 bg-white border-r-2">
        <Image src={turboLogo} width={200} height={100} />
      </div>
      <div className="flex justify-center px-10 py-10 bg-white border-r-2">
        <Image src={terrenoLogo} width={200} height={100} />
      </div>
      <div className="flex justify-center px-10 py-10 bg-white border-r-2">
        <Image src={maxtonDes} width={359.8} height={100} />
      </div>
      <div className="flex justify-center px-10 py-10 bg-white border-r-2">
        <Image src={duragas} width={200} height={100} />
      </div>
      <div className="flex justify-center px-10 py-10 bg-white">
        <Image src={zaiaEnt} width={200} height={100} />
      </div>
    </div>
  );
}

export default Donors;
