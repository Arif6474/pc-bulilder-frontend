import { Carousel } from "antd";
import Image from "next/image";
import banner from "../../assets/images/banner-images/pc-builds.jpg";
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

function Banner() {
  return (
    <Carousel autoplay >
      <div>
        <Image
          src={banner}
          width={500}
          height={500}
          alt="Picture of the banner"
        />
      </div>
      <div>
        <div>
          <Image
            src={banner}
            width={500}
            height={500}
            alt="Picture of the banner"
          />
        </div>
      </div>
      <div>
        <div>
          <Image
            src={banner}
            width={500}
            height={500}
            alt="Picture of the banner"
          />
        </div>
      </div>
    </Carousel>
  );
}

export default Banner;
