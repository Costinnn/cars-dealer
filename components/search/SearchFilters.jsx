"use client";
import React, { useState } from "react";
import Link from "next/link";

import ArrowDownSvg from "../svg/ArrowDownSvg";

import { brandArr, pricesArray, yearsArray } from "@/public/data/FiltersData";

import "./SearchFilters.scss";

const SearchFilters = () => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState({ min: 0, max: 0 });
  const [year, setYear] = useState({
    min: 0,
    max: 0,
  });
  //const [km, setKm] = useState({ min: 0, max: 300000 });

  const [isDropdownOpen, setIsDropdownOpen] = useState({
    brand: false,
    priceMin: false,
    priceMax: false,
    yearMin: false,
    yearMax: false,
    mileageMin: false,
    mileageMax: false,
  });

  const handleDropdown = (filterName) => {
    if (isDropdownOpen[filterName] === true) {
      setIsDropdownOpen({ ...isDropdownOpen, [filterName]: false });
    }
    if (isDropdownOpen[filterName] === false) {
      setIsDropdownOpen({
        brand: false,
        priceMin: false,
        priceMax: false,
        yearMin: false,
        yearMax: false,
        kmMin: false,
        kmMax: false,
        [filterName]: true,
      });
    }
  };

  const handleSelectedBrand = (newValue) => {
    setBrand(newValue);
    setIsDropdownOpen({ ...isDropdownOpen, ["brand"]: false });
  };
  const handleSelectedPrice = (fieldName, fieldToClose, newValue) => {
    setPrice({ ...price, [fieldName]: newValue });
    setIsDropdownOpen({ ...isDropdownOpen, [fieldToClose]: false });
  };
  const handleSelectedYear = (fieldName, fieldToClose, newValue) => {
    setYear({ ...year, [fieldName]: newValue });
    setIsDropdownOpen({ ...isDropdownOpen, [fieldToClose]: false });
  };

  return (
    <section className="searchfilters section_narrow">
      <div className="content white_box">
        {/* --BRAND + MODEL-- */}
        <div className="box">
          <div className="brand">
            <button
              className={`${isDropdownOpen.brand ? "rotate_svg" : ""}`}
              onClick={() => {
                handleDropdown("brand");
              }}
            >
              {brand ? brand : "Brand"}
              <ArrowDownSvg size="20" />
            </button>

            <ul
              className={`dropdown ${isDropdownOpen.brand ? "open" : "close"}`}
            >
              {brandArr.map((item) => (
                <li
                  key={item.brand}
                  onClick={() => handleSelectedBrand(item.brand)}
                >
                  <span>{item.brand}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* MODEL */}
          <input
            type="text"
            className="model_input"
            placeholder="Model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
        </div>
        {/* --PRICE-- */}
        <div className="box">
          <div className="price">
            <button
              className={`${isDropdownOpen.priceMin ? "rotate_svg" : ""}`}
              onClick={() => {
                handleDropdown("priceMin");
              }}
            >
              {price.min !== 0 ? price.min : "Lowest price"}
              <ArrowDownSvg size="20" />
            </button>

            <ul
              className={`dropdown ${
                isDropdownOpen.priceMin ? "open" : "close"
              }`}
            >
              {pricesArray.map((item) => (
                <li
                  key={item}
                  className={`${
                    price.max !== 0 && item >= price.max ? "hidden" : ""
                  }`}
                  onClick={() => handleSelectedPrice("min", "priceMin", item)}
                >
                  <span>{item}&euro;</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="price">
            <button
              className={`${isDropdownOpen.priceMax ? "rotate_svg" : ""}`}
              onClick={() => {
                handleDropdown("priceMax");
              }}
            >
              {price.max !== 0 ? price.max : "Highest price"}
              <ArrowDownSvg size="20" />
            </button>

            <ul
              className={`dropdown ${
                isDropdownOpen.priceMax ? "open" : "close"
              }`}
            >
              {pricesArray.toReversed().map((item) => (
                <li
                  key={item}
                  className={`${
                    price.min !== 0 && item <= price.min ? "hidden" : ""
                  }`}
                  onClick={() => handleSelectedPrice("max", "priceMax", item)}
                >
                  <span>{item}&euro;</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* --YEARS-- */}
        <div className="box">
          <div className="year">
            <button
              className={`${isDropdownOpen.yearMin ? "rotate_svg" : ""}`}
              onClick={() => {
                handleDropdown("yearMin");
              }}
            >
              {year.min !== 0 ? year.min : "After year"}
              <ArrowDownSvg size="20" />
            </button>

            <ul
              className={`dropdown ${
                isDropdownOpen.yearMin ? "open" : "close"
              }`}
            >
              {yearsArray.map((item) => (
                <li
                  key={item}
                  className={`${
                    year.max !== 0 && item >= year.max ? "hidden" : ""
                  }`}
                  onClick={() => handleSelectedYear("min", "yearMin", item)}
                >
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="year">
            <button
              className={`${isDropdownOpen.yearMax ? "rotate_svg" : ""}`}
              onClick={() => {
                handleDropdown("yearMax");
              }}
            >
              {year.max !== 0 ? year.max : "Before year"}
              <ArrowDownSvg size="20" />
            </button>

            <ul
              className={`dropdown ${
                isDropdownOpen.yearMax ? "open" : "close"
              }`}
            >
              {yearsArray.toReversed().map((item) => (
                <li
                  key={item}
                  className={`${
                    year.min !== 0 && item <= year.min ? "hidden" : ""
                  }`}
                  onClick={() => handleSelectedYear("max", "yearMax", item)}
                >
                  <span>{item}&euro;</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Link
          href={`/filteredPosts?brand=${brand}&model=${model}&yearMin=${year.min}&yearMax=${year.max}&priceMin=${price.min}&priceMax=${price.max}`}
          className="btn_gray"
        >
          Search
        </Link>
      </div>
    </section>
  );
};

export default SearchFilters;
