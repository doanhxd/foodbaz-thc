import Image from "next/image";
import bannerPic from "../components/images/banner.png";
import fiftyOff from "../components/images/50-off.png";

function BannerImg() {
  return (
    <div className="flex justify-center">
      <div className="absolute z-20 hidden mt-10 ml-64 md:inline-flex">
        <Image src={fiftyOff} width={150} height={150} />
      </div>
      <div className="hidden absolute md:inline-flex mt-20 w-[300px] h-[300px] xl:w-[600px] lg:w-[500px] lg:h-[500px] xl:h-[600px] 2xl:w-[700px] 2xl:h-[700px]">
        <Image src={bannerPic} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}

export default BannerImg;
