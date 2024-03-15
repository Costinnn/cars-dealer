"use client";

import { MouseEvent, useState } from "react";
import axios from "axios";

import LoadingSvg from "@/components/svg/LoadingSvg";
import ErrorSvg from "@/components/svg/ErrorSvg";
import SuccessSvg from "@/components/svg/SuccessSvg";

import "./ContactForm.scss";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [btnState, setBtnState] = useState("");

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setBtnState("loading");
    if (
      name &&
      email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) &&
      message
    ) {
      try {
        const res = await axios.post("/en/api/contactForm", {
          name,
          email,
          phone,
          message,
        });

        if (res.data.message == "OK") {
          setBtnState("success");
          setEmail("");
          setMessage("");
          setName("");
        }
        if (res.data.error) setBtnState("error");

        setTimeout(() => {
          setBtnState("");
        }, 5000);
      } catch (err) {
        setBtnState("error");
        setTimeout(() => {
          setBtnState("");
        }, 5000);
      }
    } else {
      setBtnState("error");
      setTimeout(() => {
        setBtnState("");
      }, 5000);
    }
  };

  return (
    <form>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        required
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="email">E-mail</label>
      <input
        type="email"
        name="email"
        id="email"
        required
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="phone">Phone</label>
      <input
        type="phone"
        name="phone"
        id="phone"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <label htmlFor="message">Message</label>
      <textarea
        rows={5}
        cols={35}
        wrap="hard"
        name="message"
        id="message"
        required
        placeholder="Tell us something..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        className={`${
          !btnState
            ? ""
            : btnState === "loading"
            ? "btn-loading"
            : btnState === "success"
            ? "btn-success"
            : "btn-error"
        }`}
        disabled={
          btnState === "loading" ||
          btnState === "error" ||
          btnState === "success"
        }
        onClick={(e) => handleSubmit(e)}
      >
        {!btnState ? (
          "Send"
        ) : btnState === "loading" ? (
          <LoadingSvg color="#ffffff" />
        ) : btnState === "success" ? (
          <SuccessSvg />
        ) : (
          <ErrorSvg />
        )}
      </button>
    </form>
  );
};

export default ContactForm;
