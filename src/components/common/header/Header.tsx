"use client";
import React, { useState } from "react";

import Image from "next/image";
import { navList } from "@/helpers/Navlist";
import Link from "next/link";
import { CloseOutlined, ProfileOutlined } from "@ant-design/icons";

import Logo from "../../../../public/images/logo.png";

const Header = () => {
  const [show, setShow] = useState(false);

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header!.classList.toggle("active", window.scrollY > 100);
  });

  const isLogin = false;




  return (
    <>
      <header className="header">
        <div className="container paddingTB flexSB">
          {/* ------  logo  --------- */}
          <div className="logo">
            <Image src={Logo} alt="" width={100} height={100} />
          </div>
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
          <div className="search flexSB">
            <input type="text" placeholder="Search Products" />
            <i className="fa fa-search"></i>
          </div>

          {/* login/Register */}

          <div>

            {
              !isLogin ? <button className="bg-primary text-white  px-4 py-2 rounded-lg border-2   hover:bg-white hover:text-primary ">
              Login
            </button> : <button className="bg-primary text-white  px-4 py-2 rounded-lg border-2   hover:bg-white hover:text-primary ">
              Register
            </button>
            } 
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
