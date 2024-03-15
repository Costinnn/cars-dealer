import "./ContactInfo.scss";

const ContactInfo = () => {
  return (
    <section className="contactinfo">
      <div>
        <p>Phone</p>
        <a href="tel:0700000000">0700 000 000</a>
      </div>
      <div>
        <p>E-mail</p>
        <a href="BRAND_NAME@gmail.com">AUTOS_WORLD@gmail.com</a>
      </div>
      <div>
        <p>Location</p>
        <p>
          <span>Bucuresti, Romania</span>
        </p>
      </div>
    </section>
  );
};

export default ContactInfo;
