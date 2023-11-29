import React from "react";
import Heading from "../common/Heading";
import Image from "next/image";

import Offer_image from "../../../public/images/offer_img.png";
import { Taka } from "@/helpers/SocialIcon";

const Offer = () => {
  return (
    <>
      <section className="offer">
        <div className="scontainer flexSB">
          <div className="row">
            <Heading
              subtitle="Special Offer"
              title="GOOD FOOD, DRINKS & GREAT COMPANY."
            />
            <p>
              We are a family owned restaurant with a passion for service and
              quality food. We are proud to serve a variety of delicious
              authentic dishes from our homeland, Ethiopia. We are committed to
              serving our customers with the highest quality foods and
              ingredients. We are also committed to providing a great
              experience, excellent customer service and a clean and friendly
              environment.
            </p>
            <div className="button flex ">
              <button className="btn2">Order now</button>
              <h1>
                {Taka} 499.00{" "}
                <span
                  style={{
                    textDecoration: "line-through",
                    color: "gray",
                    fontSize: "20px",
                  }}
                >
                  {Taka}599.00
                </span>
              </h1>
            </div>
          </div>
          <div className="row">
            <Image src={Offer_image} alt="offer" width={500} height={500} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Offer;
