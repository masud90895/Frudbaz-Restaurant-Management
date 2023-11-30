import { ProductsType } from "@/types/ProductsType";
import Image from "next/image";
import React from "react";
import { Taka } from "@/helpers/SocialIcon";
import NoProduct from "../../../public/images/noProduct.png";
import Link from "next/link";

const Products = ({ cover, sub, category, title, price, id }: ProductsType) => {
  return (
    <div className="dishes bg-gray-100 border-gray-200 rounded-lg hover:scale-105 transition-all    ">
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
          <h4 className="text-[12xl]">
            {sub} ,{category}
          </h4>
        </div>
        <h3>{title}</h3>
        <label>
          PRICE {Taka}
          {price}
        </label>
      </div>

      {/* button */}

      <div className="p-4">
        {/* add to cart */}
        <button className="text-[12px] p-3 rounded-lg ">ADD TO CART</button>

        {/* Details */}
        <Link
          href={`/products/${id}`}
          className="text-[12px] p-3 rounded-lg bg-white hover:bg-primary hover:text-white"
        >
          DETAILS
        </Link>
      </div>
    </div>
  );
};

export default Products;
