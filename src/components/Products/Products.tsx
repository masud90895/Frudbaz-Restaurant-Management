import { ProductsType } from "@/types/ProductsType";
import Image from "next/image";
import React from "react";
import { Taka } from "@/helpers/SocialIcon";
import NoProduct from "../../../public/images/noProduct.png";

const Products = ({ cover, sub, category, title, price }: ProductsType) => {
  return (
    <div className="bg-gray-100 border-gray-200 rounded-lg ">
      <div className="img">
        {cover ? (
          <Image
            src={cover}
            alt="hero"
            width={500}
            height={500}
            style={{
              width: "100%",
              height: "300px",
            }}
          />
        ) : (
          <Image
            src={NoProduct}
            alt="hero"
            width={500}
            height={500}
            style={{
              width: "100%",
              height: "300px",
            }}
          />
        )}
      </div>

      <div className="px-4 pb-3">
        <div className="title flex">
          <h4>
            {sub} ,{category}
          </h4>
        </div>
        <h3>{title}</h3>
        <label>
          PRICE {Taka}
          {price}
        </label>
      </div>
    </div>
  );
};

export default Products;
