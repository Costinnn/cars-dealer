import React from "react";

import { client } from "@/sanity/lib/client";
import { SanityDocument } from "next-sanity";

import { FilteredPostsTypes } from "@/types/globalTypes";
import CarPost from "@/components/carpost/CarPost";

import "./style.scss";
import SearchType from "@/components/search/SearchType";
import SearchFilters from "@/components/search/SearchFilters";

const page = async ({ searchParams }: { searchParams: FilteredPostsTypes }) => {
  // make sure to exist spaces before && in GROQ
  const dbData = await client.fetch<SanityDocument>(
    `*[_type == "carPost" 
    ${searchParams.category ? ` && category == "${searchParams.category}"` : ""}
    ${
      searchParams.type && searchParams.type !== "all"
        ? ` && carType == "${searchParams.type}"`
        : ""
    }
    ${searchParams.brand ? ` && brand match "${searchParams.brand}"` : ""}
    ${searchParams.model ? ` && model match "${searchParams.model}"` : ""}
    ${
      Number(searchParams.yearMin) > 0
        ? ` && year >= ${Number(searchParams.yearMin)}`
        : ""
    }
    ${
      Number(searchParams.yearMax) > 0
        ? ` && year <= ${Number(searchParams.yearMax)}`
        : ""
    }
    ${
      Number(searchParams.priceMin) > 0
        ? ` && price >= ${Number(searchParams.priceMin)}`
        : ""
    }
    ${
      Number(searchParams.priceMax) > 0
        ? ` && price <= ${Number(searchParams.priceMax)}`
        : ""
    }
  ]
    {model, brand, "slug":slug.current, 
    price, fuel, km, hp, engineSize, gearbox, regDate, 
    images[0]{"url":asset->url}}`
  );

  return (
    <main className="page-filteredPosts ">
      <h1>Find your next best car</h1>
      <SearchType activeParam={searchParams.type} />
      <SearchFilters />
      <section className="filterlist_carpost section_narrow ">
        {dbData?.map((car: any) => (
          <CarPost key={car.slug} carData={car} />
        ))}
      </section>
    </main>
  );
};

export default page;
