import Image from "next/image";
import Link from "next/link";

import { typeArr } from "@/public/data/FiltersData";

import "./SearchType.scss";

const SearchType = () => {
  return (
    <section className="searchtype section_narrow ">
      <h2>Search by categories</h2>
      <ul className="white_box">
        {typeArr.map((item) => (
          <li key={item.type}>
            <Link href={`/filteredPosts?type=${item.type}`}>
              <Image src={item.img} alt={item.type} width={50} height={50} />
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SearchType;
