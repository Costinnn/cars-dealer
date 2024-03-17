import React from "react";

import { client } from "@/sanity/lib/client";
import { SanityDocument } from "next-sanity";

import CarPost from "./CarPost";

import "./ListCarPost.scss";

const ListCarPost = async () => {
  const dbData = await client.fetch<SanityDocument>(
    `*[_type == "carPost"]
    {model, brand, "slug":slug.current, 
    price, fuel, km, hp, engineSize, gearbox, regDate, 
    images[0]{"url":asset->url}}`
  );

  return (
    <section className="list_carpost section_narrow">
      {dbData.map((car: any) => (
        <CarPost key={car.slug} carData={car} />
      ))}
    </section>
  );
};

export default ListCarPost;
