import React from "react";
import Image from "next/image";
import { hero } from "@/helpers/HeroList";
import { socialIcon } from "@/helpers/SocialIcon";
import { PlayCircleOutlined } from "@ant-design/icons";
import HeroImage from "../../../public/images/hero.png";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="hero w-full">
        <div className="container pt">
          <div className="content lg:flex items-center w-full">
            <div className="text">
              <h2>Medium 2-topping | Burger</h2>
              <h1>ARE YOU HUNGRY?</h1>
              <p>
                Order now and get your food delivered to your door in 30
                minutes, or pick it up at your local restaurant.
              </p>
              <div className="button">
                <button className="btn1">learn more</button>
                <button className="btn2">see our menu</button>
              </div>
            </div>
            <div className="img">
              <Image src={HeroImage} alt="hero" width={500} height={500} />
            </div>
            <div className="details">
              {hero.map((val, index) => {
                return (
                  <div className="box flexSB" key={index}>
                    <div className="id">
                      <h3 className="icon">0{val.id}</h3>
                    </div>
                    <div className="title">
                      <h3>{val.title}</h3>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="socialIcon hidden md:flex justify-between items-center ">
            <div className="social flex">
              {socialIcon.slice(0, 3).map((val, index) => {
                return (
                  <Link href={val.link} key={index}>
                    <label> {val.icon}</label>
                    <span>{val.name}</span>
                  </Link>
                );
              })}
            </div>
            <div className="play flexSB">
              <h5>PLAY VIDEO</h5>
              <PlayCircleOutlined />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
