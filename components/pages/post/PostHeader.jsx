import "./PostHeader.scss";

const VATvalue = 0.19;

const PostHeader = ({ carBrand, carModel, carPrice, carVat }) => {
  return (
    <section className="postheader section_narrow first_pagesection">
      <div className="title_box">
        <h1>{carBrand}</h1>
        <h2>{carModel}</h2>
      </div>

      <div className="price_box">
        <span>{carPrice.toLocaleString()} &euro;</span>
        <span>
          {carVat
            ? `${(carPrice * VATvalue).toLocaleString()} €  Deductible VAT`
            : "Non-Deductible VAT"}
        </span>
      </div>
    </section>
  );
};

export default PostHeader;
