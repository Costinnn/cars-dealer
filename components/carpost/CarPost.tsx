import "./CarPost.scss";

import FuelSvg from "../svg/FuelSvg";
import MileageSvg from "../svg/MileageSvg";
import HpSvg from "../svg/HpSvg";
import CapacitySvg from "../svg/CapacitySvg";
import GearboxSvg from "../svg/GearboxSvg";
import DateSvg from "../svg/DateSvg";

import Link from "next/link";
import Image from "next/image";

const svgColor = "#8f8f8f";

const CarPost = ({ carData }: any) => {
 

  return (
    <Link href={`/post/${carData?.slug}`} className="car_post">
      <div className="header">
        <span className="title">
          {carData?.brand} {carData?.model}
        </span>
        <span className="price">{carData?.price.toLocaleString()} &euro;</span>
      </div>

      <div className="img_box">
        <Image src={carData?.images.url} fill sizes="300px" alt="" />
      </div>

      <ul className="info">
        <li className="box">
          <FuelSvg color={svgColor} /> <span>{carData?.fuel}</span>
        </li>
        <li className="box">
          <MileageSvg color={svgColor} />{" "}
          <span>{carData?.km.toLocaleString()} km</span>
        </li>
        <li className="box">
          <HpSvg color={svgColor} />{" "}
          <span>{carData?.hp.toLocaleString()} cp</span>
        </li>
        <li className="box">
          <CapacitySvg color={svgColor} />{" "}
          <span>{carData?.engineSize.toLocaleString()} cm3</span>
        </li>
        <li className="box">
          <GearboxSvg color={svgColor} /> <span>{carData?.gearbox}</span>
        </li>
        <li className="box">
          <DateSvg color={svgColor} />{" "}
          <span>{carData?.regDate.slice(0, 7)}</span>
        </li>
      </ul>
    </Link>
  );
};

export default CarPost;
