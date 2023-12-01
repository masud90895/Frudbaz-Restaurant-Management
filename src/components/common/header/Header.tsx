"use client";
import React, { Fragment, useContext, useState } from "react";

import Image from "next/image";
import { navList } from "@/helpers/Navlist";
import Link from "next/link";
import {
  CloseOutlined,
  ProfileOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

import Logo from "../../../../public/images/logo.png";

import { ProductsType } from "@/types/ProductsType";
import Empty from "../Empty/Empty";
import AddToCard from "@/components/AddToCard/AddToCard";
import { Menu, Transition } from "@headlessui/react";
import { AuthContext } from "@/firebase/AuthProvider";
import { message } from "antd";
import { useSearchProductByTitleQuery } from "@/redux/features/products";

const Header = () => {
  const [isCardOpen, setIsCardOpen] = useState(false);

  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const [isSearch, setIsSearch] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", function () {
      const header = document.querySelector(".header");
      header!.classList.toggle("active", window.scrollY > 100);
    });
  }

  // products
  const { data, isLoading } = useSearchProductByTitleQuery(search);

  const handleHide = () => {
    // set timeout to hide the search box
    setTimeout(() => {
      setIsSearch(false);
    }, 300);
  };

  // user
  const { loading, user, signOutUser }: any = useContext(AuthContext);

  // handle logout
  const handleLogOut = async () => {
    try {
      await signOutUser();
      await message.success("Logout Successfully");
    } catch (error: any) {
      message.error(error.message);
    }
  };

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
          <div
            onFocus={() => setIsSearch(true)}
            onBlur={() => handleHide()}
            className="relative inline-block text-left"
          >
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
              />
              <i className="fa fa-search"></i>
            </div>

            {/* drop */}

            {isSearch && (
              <div
                className="absolute right-0 z-10 mt-2 w-[300px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none h-[400px] overflow-y-scroll scrollbar-hidden"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex={-1}
              >
                <div className="py-1 " role="none">
                  {data?.length > 0 ? (
                    data.map((product: ProductsType, index: number) => (
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
                          className="h-[50px] w-[50px]"
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

          <div className="flex items-center gap-3">
            {/* Cart */}

            <button
              onClick={() => setIsCardOpen(true)}
              style={{
                border: "1px solid gray",
                padding: "6px 10px",
              }}
              className="bg-white shadow-xl rounded-full hover:bg-primary hover:text-white hover:border-primary "
            >
              <ShoppingCartOutlined className="text-2xl" />
            </button>

            {/* login/Register */}
            {/* user */}

            {user ? (
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="">
                    <Image
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                      src={
                        user?.photoURL ??
                        "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                      }
                      alt=""
                      width={100}
                      height={100}
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-50">
                    <div className="px-1 py-1 ">
                      <Menu.Item>
                        <Link
                          href="/dashboard"
                          className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray-300 hover:text-black rounded "
                          role="menuitem"
                        >
                          Dashboard
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <button
                          onClick={() => setIsCardOpen(true)}
                          className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray-300 hover:text-black rounded "
                          role="menuitem"
                        >
                          My Cart
                        </button>
                      </Menu.Item>
                    </div>
                    <div className="py-1">
                      <button
                        onClick={handleLogOut}
                        className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-red-500 hover:text-white rounded"
                        role="menuitem"
                      >
                        Sign out
                      </button>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            ) : (
              <Link href={"/login"}>
                <div className="relative inline-flex  group">
                  <div className="absolute transitiona-all duration-1000  rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                  <p
                    title="Login"
                    className="relative inline-flex items-center justify-center px-4 py-2 text-lg  text-primary bg-white border border-primary  transition-all duration-200  font-pj rounded-xl hover:bg-primary hover:text-white hover:border-transparent "
                    role="button"
                  >
                    Login
                  </p>
                </div>
              </Link>
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

      {/* card */}

      <AddToCard setOpen={setIsCardOpen} open={isCardOpen} />
    </>
  );
};

export default Header;
