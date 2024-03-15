import CarPost from "./CarPost";

import { client } from "@/sanity/lib/client";
import { SanityDocument } from "next-sanity";

import "./RecomCarPosts.scss";

const RecomCarPosts = async () => {
  const recommendedDbCars = await client.fetch<SanityDocument>(
    `*[_type == "carPost" && recommended==true ]{model, brand,
      "slug":slug.current, price, vat, fuel, km, hp, 
      engineSize, gearbox, regDate, 
      images[0]{"url":asset->url},}`
  );

  return (
    <section className="recomcarposts section_narrow">
      <h2>Recommended posts</h2>
      <div className="content">
        {recommendedDbCars.map((item: any) => (
          <CarPost key={item.slug} carData={item} />
        ))}
      </div>
    </section>
  );
};

export default RecomCarPosts;
