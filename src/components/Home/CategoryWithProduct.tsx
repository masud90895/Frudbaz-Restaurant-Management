"use client";

import React, { useState } from "react";
import Heading from "../common/Heading";
import { ProductsList } from "@/helpers/ProductsList";
import { ProductsType } from "@/types/ProductsType";

import Products from "../Products/Products";

const CategoryWithProduct = () => {
  const [menuItems, setMenuItem] = useState(ProductsList);

  const filterItems = (category: string) => {
    const newItems = ProductsList.filter(
      (item: ProductsType) => item.category === category
    );
    setMenuItem(newItems);

    // for all data show
    if (category === "all") {
      setMenuItem(ProductsList);
      return;
    }
  };
  return (
    <>
      <section className="dishes">
        <div className="scontainer">
          <Heading subtitle="Popular Products" title="POPULAR PRODUCTS" />

          <div className="button">
            <button onClick={() => filterItems("all")} className="btn1">
              all
            </button>
            <button onClick={() => filterItems("BURGER")} className="btn1">
              BURGER
            </button>
            <button onClick={() => filterItems("PIZZA")} className="btn1">
              PIZZA
            </button>
            <button onClick={() => filterItems("BURGER")} className="btn1">
              BLUEBERRY SHAKE
            </button>
            <button onClick={() => filterItems("PIZZA")} className="btn1">
              CHICKEN CHUP
            </button>
            <button onClick={() => filterItems("BURGER")} className="btn1">
              ICE CREAM
            </button>
            <button onClick={() => filterItems("DRINK")} className="btn1">
              DRINK
            </button>
          </div>

          <div className="content grid grid-cols-1 gap-4  ">
            {menuItems.map((items, index) => (
              <Products
                key={index}
                category={items.category}
                title={items.title}
                price={items.price}
                cover={items.cover}
                sub={items.sub}
                id={items.id}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryWithProduct;
