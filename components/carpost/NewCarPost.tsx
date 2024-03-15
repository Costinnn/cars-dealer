import Link from "next/link";
import Image from "next/image";

import "./NewCarPost.scss";

const NewCarPost = ({ image, price, title, link }: any) => {
  return (
    <Link href={link} className="newcarpost">
      <div className="img_box">
        <Image src={image} fill sizes="150px" alt="img" />
        <span className="price">{price} &euro;</span>
      </div>
      <h2>{title}</h2>
    </Link>
  );
};

export default NewCarPost;
