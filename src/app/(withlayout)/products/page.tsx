"use client";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { CloseOutlined } from "@ant-design/icons";
import { DownOutlined } from "@ant-design/icons";
import { PlusOutlined } from "@ant-design/icons";
import { ProductsList } from "@/helpers/ProductsList";
import Products from "@/components/Products/Products";
import Empty from "@/components/common/Empty/Empty";
import Pagination from "@/components/Pagination/Pagination";
import { useForm } from "react-hook-form";

const filters = [
  {
    id: "category",
    name: "Category",
    options: [
      { value: "BURGER", label: "BURGER" },
      { value: "PIZZA", label: "PIZZA" },
      { value: "BLUEBERRY_SHAKE", label: "BLUEBERRY SHAKE" },
      { value: "CHICKEN_CHUP", label: "CHICKEN CHUP" },
      { value: "ICE_CREAM", label: "ICE CREAM" },
      { value: "DRINK", label: "DRINK" },
    ],
  },
  {
    id: "price",
    name: "Price Range",
    options: [
      { value: "0-99", label: "৳0-৳99" },
      { value: "100-199", label: "৳100-৳199" },
      { value: "200-299", label: "৳200-৳299" },
      { value: "300-399", label: "৳300-৳399" },
      { value: "400-499", label: "৳400-৳499" },
      { value: "500+", label: "৳500+" },
    ],
  },

  {
    id: "sort_by",
    name: "Sort by",
    options: [
      { value: "Relevance", label: "Relevance" },
      { value: "Fastest delivery", label: "Fastest delivery" },
      { value: "Distance", label: "Distance" },
    ],
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductsPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  console.log(watch());

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <CloseOutlined className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters mobail*/}
                  <form className="mt-4">
                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.name}
                        className="border-t border-gray-200 pb-4 pt-4"
                      >
                        {({ open }) => (
                          <fieldset>
                            <legend className="w-full px-2">
                              <Disclosure.Button className="flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500">
                                <span className="text-sm font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex h-7 items-center">
                                  <DownOutlined
                                    className={classNames(
                                      open ? "-rotate-180" : "rotate-0",
                                      "h-5 w-5 transform"
                                    )}
                                    aria-hidden="true"
                                  />
                                </span>
                              </Disclosure.Button>
                            </legend>
                            <Disclosure.Panel className="px-4 pb-2 pt-4">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`${section.id}-${optionIdx}-mobile`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`${section.id}-${optionIdx}-mobile`}
                                      className="ml-3 text-sm text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </fieldset>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="w-full px-4 py-2 lg:px-8">
          <div className="border-b border-gray-200 pb-10">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              All Products
            </h1>
            <p className="mt-4 text-base text-gray-500">
              We provide the best quality products for you.
            </p>
          </div>

          <div className="pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
            <aside className="border-r">
              <h2 className="sr-only">Filters</h2>

              <button
                type="button"
                className="inline-flex items-center lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="text-sm font-medium text-gray-700">
                  Filters
                </span>
                <PlusOutlined
                  className="ml-1 h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
              </button>

              <div className="hidden lg:block">
                {/* Category */}
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-10 divide-y divide-gray-200"
                >
                  {/* sort */}
                  {filters.map((section, sectionIdx) => (
                    <div
                      key={sectionIdx}
                      className={sectionIdx === 0 ? "" : "pt-10"}
                    >
                      <label className="text-base  font-semibold text-gray-900">
                        {section.name}
                      </label>

                      <fieldset className="mt-4">
                        <legend className="sr-only"> {section.name}</legend>
                        <div className="space-y-4">
                          {section.options.map((category) => (
                            <div
                              key={category.value}
                              className="flex items-center"
                            >
                              <input
                                id={category.value}
                                name={section.id}
                                {...register(section.id)}
                                type="radio"
                                value={category.value}
                                className="h-4 w-4  accent-primary focus:ring-none  "
                              />
                              <label
                                htmlFor={category.label}
                                className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                              >
                                {category.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </fieldset>
                    </div>
                  ))}
                </form>
              </div>
            </aside>

            {/* Product grid */}
            <div className=" mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3 grid gap-5">
              {/* Products */}

              {ProductsList?.length > 0 ? (
                ProductsList.map((product, index) => (
                  <Products
                    key={product.id}
                    category={product.category}
                    cover={product.cover}
                    id={product.id}
                    price={product.price}
                    sub={product.sub}
                    title={product.title}
                  />
                ))
              ) : (
                <div className="flex items-center justify-center h-96">
                  <Empty description="No Product Found" />
                </div>
              )}
            </div>
          </div>
        </main>
        {/* Pagination */}
        <Pagination productLength={ProductsList?.length} />
      </div>
    </div>
  );
}
