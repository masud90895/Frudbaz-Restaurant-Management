"use client";

import { Disclosure, Tab } from "@headlessui/react";
import NoProduct from "../../../../../public/images/noproduct.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  HeartOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import { ProductsList } from "@/helpers/ProductsList";
import { Taka } from "@/helpers/SocialIcon";
import { useAppDispatch } from "@/redux/hook";
import { ProductsType } from "@/types/ProductsType";
import { addToCart } from "@/redux/features/addToCartSlice";
import { message } from "antd";
import { AuthContext } from "@/firebase/AuthProvider";
import { useContext } from "react";

const product = {
  name: "POTATO WEDGES",
  price: "$140",
  rating: 4,
  images: [
    {
      id: 1,
      name: "Angled view",
      src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    // More images...
  ],
  description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
  details: [
    {
      name: "Features",
      items: [
        "We Provide 100% Organic Food",
        "Our Food is Fresh and Healthy",
        "Food is Ready in 10 Minutes",
        "Pickup or Delivery",
        "Our Food is Fresh and Healthy",
        "Our Restaurant is Open 24/7",
      ],
    },
    // More sections...
  ],
};

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function SingleProduct({
  params,
}: {
  params: { productId: string };
}) {
  const productData = ProductsList.find(
    (pr) => pr.id.toString() === params.productId.toString()
  );

  // console.log(productData);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  // add to cart
  const dispatch = useAppDispatch();
  const { user }: any = useContext(AuthContext);

  const handleAddToCart = (addedService: ProductsType) => {
    if (!user) {
      return message.error("You are not Authorize user.please login");
    }
    dispatch(addToCart(addedService));
    message.success("Product added to cart");
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image gallery */}
          <Tab.Group as="div" className="flex flex-col-reverse">
            {/* Image selector */}
            <Tab.List className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
              <Slider {...settings} className="grid grid-cols-4 gap-6">
                {productData?.images?.map((image, i) => (
                  <Tab
                    key={i}
                    className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50  "
                  >
                    {({ selected }) => (
                      <>
                        <span className=" inset-0 overflow-hidden rounded-md">
                          <Image
                            src={image}
                            alt=""
                            className="h-full w-full object-cover object-center"
                            width={500}
                            height={500}
                          />
                        </span>
                      </>
                    )}
                  </Tab>
                ))}
              </Slider>
            </Tab.List>

            <div className="aspect-h-1 aspect-w-1 w-full">
              <Image
                src={productData?.cover ?? NoProduct}
                alt={productData?.title ?? "No Product"}
                width={500}
                height={500}
                className="h-[400px] w-full sm:rounded-lg border  "
              />
            </div>
          </Tab.Group>

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {productData?.title}
            </h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                {Taka} {productData?.price}
              </p>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>

              <p className="space-y-6 text-base text-gray-700">
                {productData?.description}
              </p>
            </div>

            <div className="mt-6">
              <div className="sm:flex-col1 mt-10 flex">
                <button
                  type="submit"
                  onClick={() => handleAddToCart(productData!)}
                  className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-primary px-8 py-3 text-base font-medium text-white hover:bg-primary/75 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                >
                  Add to Cart
                </button>

                <button
                  type="button"
                  className="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                >
                  <HeartOutlined
                    className="h-6 w-6 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Add to favorites</span>
                </button>
              </div>
            </div>

            <section aria-labelledby="details-heading" className="mt-12">
              <h2 id="details-heading" className="sr-only">
                Additional details
              </h2>

              <div className="divide-y divide-gray-200 border-t">
                {product.details.map((detail) => (
                  <Disclosure as="div" key={detail.name}>
                    {({ open }) => (
                      <>
                        <h3>
                          <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                            <span
                              className={classNames(
                                open ? "text-primary" : "text-gray-900",
                                "text-sm font-medium"
                              )}
                            >
                              {detail.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusCircleOutlined
                                  className="block h-6 w-6 text-primary/60 group-hover:text-primary/50"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusCircleOutlined
                                  className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel
                          as="div"
                          className="prose prose-sm pb-6"
                        >
                          <ul role="list" className="list-disc">
                            {detail.items.map((item, i) => (
                              <li key={item}>
                                <span>{i + 1}.</span> {item}
                              </li>
                            ))}
                          </ul>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
