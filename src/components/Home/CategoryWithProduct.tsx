"use client";

import React, { useState } from "react";
import Heading from "../common/Heading";

import Products from "../Products/Products";
import { useGetProductsQuery } from "@/redux/features/products";
import { Spin } from "antd";

const Category = [
  {
    id: 1,
    category: "ALL",
    title: "ALL",
  },
  {
    id: 2,
    category: "BURGER",
    title: "BURGER",
  },
  {
    id: 3,
    category: "PIZZA",
    title: "PIZZA",
  },
  {
    id: 4,
    category: "BLUEBERRY_SHAKE",
    title: "BLUEBERRY SHAKE",
  },
  {
    id: 5,
    category: "CHICKEN_CHUP",
    title: "CHICKEN CHUP",
  },
  {
    id: 6,
    category: "ICE_CREAM",
    title: "ICE CREAM",
  },
  {
    id: 7,
    category: "DRINK",
    title: "DRINK",
  },
];

const CategoryWithProduct = () => {
  const [category, setCategory] = useState("");

  const { data: products, isLoading } = useGetProductsQuery(category);


  const handleFilter = (category: string) => {
    if (category === "ALL") {
      setCategory("");
      return;
    }

    setCategory(category);
  };

 

  if (isLoading) {
    return (
      <Spin tip="Loading" size="large">
        <div className="content" />
      </Spin>
    );
  }

  return (
    <>
      <section className="dishes">
        <div className="scontainer">
          <Heading subtitle="Popular Products" title="POPULAR PRODUCTS" />

          <div className="button">
            {Category.map((items, index) => (
              <button
                onClick={() => handleFilter(items.category)}
                key={index}
                className="btn1"
              >
                {items.title}
              </button>
            ))}
          </div>

          <div className="content grid grid-cols-1 gap-4  ">
            {isLoading ? (
              <Spin tip="Loading" size="large">
                <div className="content" />
              </Spin>
            ) : (
              products?.map((items: any, index: number) => (
                <Products
                  key={index}
                  category={items.category}
                  title={items.title}
                  price={items.price}
                  cover={items.cover}
                  sub={items.sub}
                  id={items.id}
                />
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryWithProduct;
