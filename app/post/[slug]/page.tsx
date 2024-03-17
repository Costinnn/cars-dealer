import React from "react";

import { client } from "@/sanity/lib/client";
import { SanityDocument } from "next-sanity";

import PostHeader from "@/components/pages/post/PostHeader";
import PostGallery from "@/components/pages/post/PostGallery";
import PostDetails from "@/components/pages/post/PostDetails";
import RecomCarPosts from "@/components/carpost/RecomCarPosts";

type SlugType = {
  params: { slug: string };
};

const page = async ({ params }: SlugType) => {
  const dbData = await client.fetch<SanityDocument>(
    `*[_type == "carPost" && slug.current == "${params.slug}"]
    {model, brand, category, carType,
      "slug":slug.current, price, vat, fuel, km, hp,
      engineSize, gearbox, regDate, condition,
      standardOptions, countryOrigin, extraOptions,
      location, listingDate, description,
      agent->{name, email, phone, whatsapp, details, portret{"url":asset->url}},
      images[]{"url":asset->url}}`
  );

  // console.log(dbData);
  // console.log("===========");

  return (
    <main>
      <PostHeader
        carBrand={dbData[0].brand}
        carModel={dbData[0].model}
        carPrice={dbData[0].price}
        carVat={dbData[0].vat}
      />
      <PostGallery carImages={dbData[0].images} />
      <PostDetails dbData={dbData[0]} />
      <RecomCarPosts />
    </main>
  );
};

export default page;
