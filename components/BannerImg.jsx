import Image from "next/image";
import bannerPic from "./images/banner.png";
import fiftyOff from "./images/50-off.png";

function BannerImg() {
  return (
    <div className="flex justify-center">
      <div className="absolute z-20 hidden pl-40 top-52 ml-96 lg:inline-flex">
        <Image src={fiftyOff} width={150} height={150} />
      </div>
      <div className=" absolute inline-flex sm:ml-96 lg:ml-0 mt-52 ml-48 lg:mt-20 w-[120px] h-[120px] xl:w-[600px] lg:w-[500px] lg:h-[500px] xl:h-[600px] 2xl:w-[700px] 2xl:h-[700px]">
        <Image src={bannerPic} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}

export default BannerImg;
