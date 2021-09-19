import Image from "next/image";
import bannerPic from "../components/images/banner.png";
import fiftyOff from "../components/images/50-off.png";

function BannerImg() {
  return (
    <div className="flex justify-center">
      <div className="absolute z-10 pl-40 mr-64 transform translate-x-96">
        <Image src={fiftyOff} width={150} height={150} />
      </div>
      <div className="absolute top-40">
        <Image
          src={bannerPic}
          alt="banner pizza"
          width={800}
          height={800}
          objectFit="contain"
          objectPosition="center"
        />
      </div>
    </div>
  );
}

export default BannerImg;
