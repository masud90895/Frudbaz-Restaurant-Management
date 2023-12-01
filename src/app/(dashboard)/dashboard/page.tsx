"use client";
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

import {
  CheckCircleOutlined as CheckCircleIcon,
  DeleteOutlined as TrashIcon,
} from "@ant-design/icons";

import Image from "next/image";
import { Empty, message } from "antd";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { removeFromCart } from "@/redux/features/addToCartSlice";

import { useForm } from "react-hook-form";
import InputField from "@/components/common/InputField/InputField";
import { ProductsType } from "@/types/ProductsType";
import { Taka } from "@/helpers/SocialIcon";

const deliveryMethods = [
  {
    id: 1,
    title: "Standard",
    turnaround: "4–10 business days",
    price: "৳120.00",
  },
  { id: 2, title: "Express", turnaround: "2–5 business days", price: "৳60.00" },
];
const paymentMethods = [
  { id: "credit-card", title: "Credit card" },
  { id: "Bkash", title: "Bkash" },
  { id: "Nagod", title: "Nagod" },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Checkout() {
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(
    deliveryMethods[0]
  );
  const { cart } = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();

  const handleRemoveFromCart = (serviceId: string | number) => {
    dispatch(removeFromCart(serviceId));
    message.success("Service removed from cart");
  };

  const subtotal = cart?.reduce(
    (total: any, single: any) => total + single.price,
    0
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmitData = (data: any) => {
    message.info("This feature not added.");
  };

  return (
    <div className="bg-gray-100">
      <div className="mx-auto  px-4 pb-24 pt-16 sm:px-6 lg:px-8">
        <h2 className="sr-only">Checkout</h2>

        <form onSubmit={handleSubmit(handleSubmitData)}>
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
            {/* contact info */}
            <div className="flex mt-4 rounded-lg border border-gray-200 bg-white shadow-sm p-4 ">
              <div>
                <div>
                  <h2 className="text-lg font-medium text-gray-900">
                    Contact information
                  </h2>

                  <div className="mt-4">
                    <InputField
                      label="Email address"
                      type="email"
                      placeholder="Email address"
                      name="email"
                      register={register}
                      errors={errors}
                    />
                  </div>
                </div>

                <div className="mt-10 border-t border-gray-200 pt-10">
                  <h2 className="text-lg font-medium text-gray-900">
                    Shipping information
                  </h2>

                  <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                    <div>
                      <InputField
                        label="First name"
                        type="text"
                        placeholder="First name"
                        name="first-name"
                        register={register}
                        errors={errors}
                      />
                    </div>

                    <div>
                      <InputField
                        label="Last name"
                        type="text"
                        placeholder="Last name"
                        name="last-name"
                        register={register}
                        errors={errors}
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <InputField
                        label="Address"
                        type="text"
                        placeholder="Address"
                        name="address"
                        register={register}
                        errors={errors}
                      />
                    </div>

                    <InputField
                      label="City"
                      type="text"
                      placeholder="City"
                      name="city"
                      register={register}
                      errors={errors}
                    />

                    <InputField
                      label="Postal Code"
                      type="text"
                      placeholder="Postal Code"
                      name="postalCode"
                      register={register}
                      errors={errors}
                    />

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Country / Region
                      </label>
                      <div className="mt-1">
                        <select
                          id="country"
                          name="country"
                          autoComplete="country"
                          className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary/60 focus:border-primary/60 sm:text-sm"
                        >
                          <option>Bangladesh</option>
                          <option>Canada</option>
                          <option>USA</option>
                        </select>
                      </div>

                      <div className="sm:col-span-2">
                        <InputField
                          label="Phone"
                          type="text"
                          placeholder="Phone"
                          name="phone"
                          register={register}
                          errors={errors}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 border-t border-gray-200 pt-10">
                    <RadioGroup
                      value={selectedDeliveryMethod}
                      onChange={setSelectedDeliveryMethod}
                    >
                      <RadioGroup.Label className="text-lg font-medium text-gray-900">
                        Delivery method
                      </RadioGroup.Label>

                      <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                        {deliveryMethods.map((deliveryMethod) => (
                          <RadioGroup.Option
                            key={deliveryMethod.id}
                            value={deliveryMethod}
                            className={({ checked, active }) =>
                              classNames(
                                checked
                                  ? "border-transparent"
                                  : "border-gray-300",
                                active ? "ring-2 ring-primary/60" : "",
                                "relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none"
                              )
                            }
                          >
                            {({ checked, active }) => (
                              <>
                                <span className="flex flex-1">
                                  <span className="flex flex-col">
                                    <RadioGroup.Label
                                      as="span"
                                      className="block text-sm font-medium text-gray-900"
                                    >
                                      {deliveryMethod.title}
                                    </RadioGroup.Label>
                                    <RadioGroup.Description
                                      as="span"
                                      className="mt-1 flex items-center text-sm text-gray-500"
                                    >
                                      {deliveryMethod.turnaround}
                                    </RadioGroup.Description>
                                    <RadioGroup.Description
                                      as="span"
                                      className="mt-6 text-sm font-medium text-gray-900"
                                    >
                                      {deliveryMethod.price}
                                    </RadioGroup.Description>
                                  </span>
                                </span>
                                {checked ? (
                                  <CheckCircleIcon
                                    className="h-5 w-5 text-indigo-600"
                                    aria-hidden="true"
                                  />
                                ) : null}
                                <span
                                  className={classNames(
                                    active ? "border" : "border-2",
                                    checked
                                      ? "border-primary/60"
                                      : "border-transparent",
                                    "pointer-events-none absolute -inset-px rounded-lg"
                                  )}
                                  aria-hidden="true"
                                />
                              </>
                            )}
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Payment */}
                  <div className="mt-10 border-t border-gray-200 pt-10">
                    <h2 className="text-lg font-medium text-gray-900">
                      Payment
                    </h2>

                    <fieldset className="mt-4">
                      <legend className="sr-only">Payment type</legend>
                      <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                        {paymentMethods.map(
                          (paymentMethod, paymentMethodIdx) => (
                            <div
                              key={paymentMethod.id}
                              className="flex items-center"
                            >
                              {paymentMethodIdx === 0 ? (
                                <input
                                  id={paymentMethod.id}
                                  name="payment-type"
                                  type="radio"
                                  defaultChecked
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                              ) : (
                                <input
                                  id={paymentMethod.id}
                                  name="payment-type"
                                  type="radio"
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                              )}

                              <label
                                htmlFor={paymentMethod.id}
                                className="ml-3 block text-sm font-medium text-gray-700"
                              >
                                {paymentMethod.title}
                              </label>
                            </div>
                          )
                        )}
                      </div>
                    </fieldset>

                    <div className="mt-6 grid grid-cols-4 gap-x-4 gap-y-6">
                      <div className="col-span-4">
                        <InputField
                          label="Card number"
                          type="text"
                          placeholder="Card number"
                          name="card-number"
                          register={register}
                          errors={errors}
                        />
                      </div>

                      <div className="col-span-4">
                        <InputField
                          label="Name on card"
                          type="text"
                          placeholder="Name on card"
                          name="name-on-card"
                          register={register}
                          errors={errors}
                        />
                      </div>

                      <div className="col-span-3">
                        <InputField
                          label="Expiration date (MM/YY)"
                          type="text"
                          placeholder="Expiration date (MM/YY)"
                          name="expiration-date"
                          register={register}
                          errors={errors}
                        />
                      </div>

                      <div>
                        <InputField
                          label="CVC"
                          type="text"
                          placeholder="CVC"
                          name="cvc"
                          register={register}
                          errors={errors}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Order summary */}
            <div className="mt-10 lg:mt-0 w-full">
              <h2 className="text-lg font-medium text-gray-900">
                Order summary
              </h2>

              <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
                <h3 className="sr-only">Items in your cart</h3>
                <ul role="list" className="divide-y divide-gray-200">
                  {cart?.length > 0 ? (
                    cart?.map((service: ProductsType) => (
                      <li key={service?.id} className="flex px-4 py-6 sm:px-6">
                        <div className="flex-shrink-0">
                          <Image
                            src={
                              service?.cover ??
                              "https://i.ibb.co/BgGFYTL/noproduct.png"
                            }
                            alt={service?.title}
                            className="w-20 rounded-md"
                            height={80}
                            width={80}
                          />
                        </div>

                        <div className="ml-6 flex flex-1 flex-col">
                          <div className="flex">
                            <div className="min-w-0 flex-1">
                              <h4 className="text-sm">
                                <Link
                                  href={`/products/${service?.id}`}
                                  className="font-medium text-gray-700 hover:text-gray-800"
                                >
                                  {service?.title}
                                </Link>
                              </h4>

                              <p className="mt-1 text-sm text-gray-500">
                                {service?.category}
                              </p>
                            </div>

                            <div className="ml-4 flow-root flex-shrink-0">
                              <button
                                onClick={() => handleRemoveFromCart(service.id)}
                                type="button"
                                className="-m-2.5 flex items-center justify-center bg-white p-2.5 text-gray-400 hover:text-gray-500"
                              >
                                <span className="sr-only">Remove</span>
                                <TrashIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </button>
                            </div>
                          </div>

                          <div className="flex flex-1 items-end justify-between pt-2">
                            <p className="mt-1 text-sm font-medium text-gray-900">
                              {Taka} {service?.price}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))
                  ) : (
                    <Empty description="No Product Fount" />
                  )}
                </ul>
                <dl className="space-y-6 border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex items-center justify-between">
                    <dt className="text-sm">Subtotal</dt>
                    <dd className="text-sm font-medium text-gray-900">
                      ৳{subtotal}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-sm">Shipping</dt>
                    <dd className="text-sm font-medium text-gray-900">
                      ৳120.00
                    </dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-sm">Taxes</dt>
                    <dd className="text-sm font-medium text-gray-900">৳5.52</dd>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                    <dt className="text-base font-medium">Total</dt>
                    <dd className="text-base font-medium text-gray-900">
                      ৳{cart?.length > 0 ? `${subtotal + 125.52}` : "0"}
                    </dd>
                  </div>
                </dl>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <button
                    type="submit"
                    className="w-full rounded-md border border-transparent bg-primary px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-primary/70 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-gray-50"
                  >
                    Confirm order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
