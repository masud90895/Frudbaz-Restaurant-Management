"use client";
import React, { useState } from "react";

import Image from "next/image";
import { navList } from "@/helpers/Navlist";
import Link from "next/link";
import { CloseOutlined, ProfileOutlined } from "@ant-design/icons";

import Logo from "../../../../public/images/logo.png";
import { ProductsList } from "@/helpers/ProductsList";
import { ProductsType } from "@/types/ProductsType";
import Empty from "../Empty/Empty";

const Header = () => {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const [isSearch, setIsSearch] = useState(false);

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header!.classList.toggle("active", window.scrollY > 100);
  });

  const isLogin = false;

  let ProductsLists: ProductsType[] = ProductsList;

  if (search.length > 0) {
    ProductsLists = ProductsList.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <>
      <header className="header">
        <div className="container paddingTB flexSB">
          {/* ------  logo  --------- */}
          <Link href={"/"} className="logo">
            <Image src={Logo} alt="" width={120} height={100} />
          </Link>
          {/* ------  menu list  --------- */}
          <div className="nav utext">
            <ul className={show ? "mobile-nav" : "flexSB"}>
              {navList.map((nav, index) => (
                <li key={index} className="mlr">
                  <Link href={nav.path}>{nav.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* ------  search box --------- */}
          <div className="relative inline-block text-left">
            <div
              style={{
                border: "1px solid gray",
                padding: "10px 15px",
              }}
              className="search flexSB"
            >
              <input
                type="text"
                placeholder="Search Products"
                onChange={(e) => setSearch(e.target.value)}
                onFocus={() => setIsSearch(true)}
                onBlur={() => setIsSearch(false)}

              />
              <i className="fa fa-search"></i>
            </div>

            {/* drop */}

            {isSearch && (
              <div
                className="absolute right-0 z-10 mt-2 w-[300px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex={-1}
              >
                <div className="py-1" role="none">
                  {ProductsLists?.length > 0 ? (
                    ProductsLists.map((product, index) => (
                      <Link
                        href={`/products/${product.id}`}
                        key={index}
                        className="flex items-center gap-2 px-4 border-b hover:bg-orange-200 "
                      >
                        <Image
                          src={product.cover}
                          alt=""
                          width={60}
                          height={60}
                        />

                        <div className="px-4 py-2 text-sm text-gray-700 ">
                          <p className="font-semibold">{product.title}</p>
                          <p className="text-[10px]">
                            {product.category} | {product.sub}
                          </p>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <Empty description="No Product Found" />
                  )}
                </div>
              </div>
            )}
          </div>

          {/* login/Register */}

          <div>
            {!isLogin ? (
              <button
                style={{
                  border: "1px solid #ff8e28",
                }}
                className="bg-primary text-white  px-4 py-2 rounded-lg border-2   hover:bg-white hover:text-primary "
              >
                Login
              </button>
            ) : (
              <button
                style={{
                  border: "1px solid #ff8e28",
                }}
                className="bg-primary text-white  px-4 py-2 rounded-lg border-2   hover:bg-white hover:text-primary "
              >
                Register
              </button>
            )}
          </div>

          {/* ------  toggle  --------- */}
          <div
            style={{
              background: "#ff8e28",
              color: "white",
              padding: "10px 15px",
              borderRadius: "10%",
              fontSize: "20px",
            }}
            className="toggle"
            onClick={() => setShow(!show)}
          >
            <button>{show ? <CloseOutlined /> : <ProfileOutlined />}</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
