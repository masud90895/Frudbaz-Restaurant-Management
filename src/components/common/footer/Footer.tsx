import { navList } from "@/helpers/Navlist";
import { socialIcon } from "@/helpers/SocialIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../../../public/images/logo.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="scontainer">
          <div className="newletter flexSB">
            <h1 className="row">SUBSCRIBE NEWSLETTER</h1>
            <div className="input flex row">
              <input type="text" placeholder="Enter your email" />
              <button className="btn1">SUBSCRIBE NOW</button>
            </div>
          </div>

          <div className="content grid ">
            <div className="items">
              <h3>ABOUT FRUDBAZ</h3>
              <p>
                Frudbaz is a restaurant management system that helps you manage
                your restaurant, we provide you with the best services and we
                are always ready to help you.
              </p>
            </div>

            <div className="items">
              <h3>CONTACT US</h3>
              <h4>
                <span>ADDRESS: </span>Thakurgaon Sadar Bangladesh
              </h4>
              <h4>
                <span>MAIL: </span>masudhossainmbs129@gmail.com
              </h4>
              <h4>
                <span>PHONE: </span>+880 1745296294
              </h4>
              <h4>
                <span>FAX ID: </span>+880 1821286235
              </h4>
            </div>

            <div className="items">
              <h3>LINKS</h3>
              <ul>
                {navList.map((val, index) => {
                  return (
                    <li key={index}>
                      <Link href={val.path}>{val.text}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <section className="legal">
        <div className="scontainer flexSB">
          <div className="logo">
            <Image src={Logo} alt="" width={200} height={100} />
          </div>
          <p>Copy Right © Md Mahafujur Rahaman Masud</p>

          <div className="social">
            {socialIcon.map((val, i) => {
              return <span key={i}>{val.icon}</span>;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
