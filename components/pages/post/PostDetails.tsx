import React from "react";
import Image from "next/image";
import Link from "next/link";

import { client } from "@/sanity/lib/client";
import { SanityDocument } from "next-sanity";

import FuelSvg from "@/components/svg/FuelSvg";
import MileageSvg from "@/components/svg/MileageSvg";
import HpSvg from "@/components/svg/HpSvg";
import CapacitySvg from "@/components/svg/CapacitySvg";
import GearboxSvg from "@/components/svg/GearboxSvg";
import DateSvg from "@/components/svg/DateSvg";
import PhoneSvg from "@/components/svg/PhoneSvg";
import WhatsappSvg from "@/components/svg/WhatsappSvg";
import EmailSvg from "@/components/svg/EmailSvg";
import CheckSvg from "@/components/svg/CheckSvg";
import CheckFilledSvg from "@/components/svg/CheckFilledSvg";

import "./PostDetails.scss";
import NewCarPost from "@/components/carpost/NewCarPost";

const svgColor = "#8f8f8f";

const PostDetails = async ({ dbData }: any) => {
  const newDbCars = await client.fetch<SanityDocument>(
    `*[_type == "carPost" && newPost == true]{model, brand,
      "slug":slug.current, price, vat, images[0]{"url":asset->url},}`
  );

  return (
    <section className="postdetails section_narrow">
      <div className="row1">
        <ul className="info">
          <li className="box">
            <FuelSvg color={svgColor} /> <span>{dbData.fuel}</span>
          </li>
          <li className="box">
            <MileageSvg color={svgColor} /> <span>{dbData.km} km</span>
          </li>
          <li className="box">
            <HpSvg color={svgColor} /> <span>{dbData.hp} cp</span>
          </li>
          <li className="box">
            <CapacitySvg color={svgColor} />{" "}
            <span>{dbData.engineSize} cm3</span>
          </li>
          <li className="box">
            <GearboxSvg color={svgColor} /> <span>{dbData.gearbox}</span>
          </li>
          <li className="box">
            <DateSvg color={svgColor} />{" "}
            <span>{dbData.regDate.slice(0, 7)}</span>
          </li>
        </ul>
        <ul className="general_info">
          <li className="box">
            <span>Listed</span>
            <span>{dbData.listingDate}</span>
          </li>
          <li className="box">
            <span>Availability</span>
            <span>In stock</span>
          </li>
          <li className="box">
            <span>Brand</span>
            <span>{dbData.brand}</span>
          </li>
          <li className="box">
            <span>Model</span>
            <span>{dbData.model}</span>
          </li>
          <li className="box">
            <span>Fabrication date</span>
            <span>{dbData.regDate.slice(0, 4)}</span>
          </li>
          <li className="box">
            <span>Price</span>
            <span>{dbData.price} &euro;</span>
          </li>
          <li className="box">
            <span>Condition</span>
            <span>{dbData.condition}</span>
          </li>
          <li className="box">
            <span>Location</span>
            <span>{dbData.location}</span>
          </li>
          <li className="box">
            <span>Origin country</span>
            <span>{dbData.countryOrigin}</span>
          </li>
        </ul>
      </div>
      <div className="row2">
        <div className="left">
          <ul className="general_options white_box">
            {dbData.standardOptions.map((item: any) => (
              <li className="box" key={item}>
                <CheckSvg color={svgColor} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <ul className="custom_options white_box">
            {dbData.extraOptions.map((item: any) => (
              <li className="box" key={item}>
                <CheckFilledSvg color={svgColor} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="description white_box">
            {dbData.description.map((item: string) => (
              <p key={item}>
                {item} <br />
                <br />
              </p>
            ))}
          </div>

          <div className="contact white_box">
            <div className="box1">
              <div className="img_box">
                <Image
                  src={dbData.agent.portret.url}
                  fill
                  sizes="200px"
                  alt="portret"
                />
              </div>
              <div className="text">
                <h3>{dbData.agent.name}</h3>
                <p>
                  {dbData.agent.details.map((item: string) => (
                    <span key={item}>{item}, </span>
                  ))}
                </p>
              </div>
            </div>

            <ul className="box2">
              <li>
                <Link href={`tel:${dbData.agent.phone}`}>
                  <PhoneSvg color={"darkmagenta"} />
                  <span>Make a call</span>
                </Link>
              </li>
              <li>
                <Link href={`https://wa.me/${dbData.agent.whatsapp}`}>
                  <WhatsappSvg color={"green"} />
                  <span>Leave a message</span>
                </Link>
              </li>
              <li>
                <Link href={`mailto:${dbData.agent.email}`}>
                  <EmailSvg color={"blue"} />
                  <span>Send an email</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="newposts white_box">
          <h2 className="title">New listings</h2>
          {newDbCars.map((item: any) => (
            <NewCarPost
              key={item?.slug}
              image={item.images.url}
              title={item.brand + " " + item.model}
              price={item.price.toLocaleString()}
              link={`/post/${item.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostDetails;
