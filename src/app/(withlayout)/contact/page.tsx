"use client";
import React from "react";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { useForm } from "react-hook-form";
import InputField from "@/components/common/InputField/InputField";
import { useSendEmailMutation } from "@/redux/features/sendEmail";
import { Button, message } from "antd";

const Contact = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
    reset,
  } = useForm();

  const [sendEmail, { isLoading }] = useSendEmailMutation();

  const onSubmit = async (data: any) => {
    try {
      await sendEmail(data).unwrap();
      await message.success("Message sent successfully");
      reset();
    } catch (error) {
      console.log(error);
      message.error("Something went wrong");
    }
  };

  return (
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
              <svg
                className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} fill="white" />
                <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                  fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Get in touch
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Frudbaz is a restaurant management system that helps you manage
              your restaurant, we provide you with the best services and we are
              always ready to help you.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  {/* <BuildingOffice2Icon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  /> */}
                  <span className="h-7 w-6 text-gray-400">➤</span>
                </dt>
                <dd>
                  Thakurgaon Sadar,
                  <br />
                  Thakurgaon, Bangladesh
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Phone</span>
                  <PhoneOutlined
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    className="hover:text-gray-900"
                    href="tel:+1 (555) 234-5678"
                  >
                    (+880) 1745296294
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <MailOutlined
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    className="hover:text-gray-900"
                    href="mailto:masudhossainmbs129@gmail.com"
                  >
                    masudhossainmbs129@gmail.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <InputField
              errors={errors}
              register={register}
              label="Name"
              name="name"
              placeholder="Name"
              required
              type="text"
            />

            {/* email */}
            <InputField
              errors={errors}
              register={register}
              label="Email"
              name="email"
              placeholder="Email"
              required
              type="email"
            />

            {/* subject */}

            <InputField
              errors={errors}
              register={register}
              label="Subject"
              name="subject"
              placeholder="Subject"
              required
              type="text"
            />

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Message <span className="text-red-600">*</span>
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  {...register("message", { required: true })}
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-primary/60 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
            {errors?.message && (
              <p className="text-rose-500 text-[12px]">message is required</p>
            )}
          </div>
          <div className="mt-8 flex justify-end">
            <Button
              htmlType="submit"
              loading={isLoading}
              className="rounded-md bg-primary px-3.5  text-center text-sm font-semibold text-white shadow-sm hover:bg-primary/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary/70"
            >
              Send message
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
