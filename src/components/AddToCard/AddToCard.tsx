"use client";
/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CloseOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Empty, message } from "antd";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { removeFromCart } from "@/redux/features/addToCartSlice";
import { ProductsType } from "@/types/ProductsType";
import { Taka } from "@/helpers/SocialIcon";

type IAddToCardProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AddToCard({ open, setOpen }: IAddToCardProps) {
  const { cart } = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();

  const handleRemoveFromCart = (serviceId: string | number) => {
    dispatch(removeFromCart(serviceId));
    message.success("Product removed from cart");
  };

  const subtotal = cart?.reduce(
    (total: any, single: any) => total + Number(single.price),
    0
  );

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-30" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Shopping cart
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <CloseOutlined className="h-6 w-6" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {cart?.length > 0 ? (
                              cart?.map((service: ProductsType) => (
                                <li key={service?.id} className="flex py-6">
                                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                      src={
                                        service?.cover ??
                                        "https://i.ibb.co/BgGFYTL/noproduct.png"
                                      }
                                      alt={service?.title}
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                          <Link
                                            href={`/product/${service?.id}`}
                                          >
                                            {service?.title}
                                          </Link>
                                        </h3>
                                        <p className="ml-4">
                                          {Taka} {service?.price}
                                        </p>
                                      </div>
                                      {/* <p className="mt-1 text-sm text-gray-500">
                                        {service.color}
                                      </p> */}
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <p className="text-gray-500">Qty 1</p>

                                      <div className="flex">
                                        <button
                                          onClick={() =>
                                            handleRemoveFromCart(service?.id!)
                                          }
                                          type="button"
                                          className="font-medium text-red-600 hover:text-red-800"
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))
                            ) : (
                              <Empty description="No Products" />
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>৳{subtotal}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <Link
                          href="/dashboard"
                          className="flex items-center justify-center rounded-md border border-transparent bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary/80"
                        >
                          Checkout
                        </Link>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or{" "}
                          <button
                            type="button"
                            className="font-medium text-primary hover:text-primary/70"
                            onClick={() => setOpen(false)}
                          >
                            {" "}
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
