import Image from "next/image";
import Link from "next/link";

const Error = () => {
  return (
    <div className="bg-white">
      <div className="flex items-center justify-center ">
        <div className="bg-white  rounded-md flex items-center justify-center mx-4 md:w-2/3 ">
          <div className="flex flex-col items-center ">
            

            <Image
              src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
              alt=""
              width={500}
              height={500}
              className="px-4 hidden md:block"
            />

            <Image
              src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
              alt=""
              width={500}
              height={500}
              className="md:hidden"
            />

            <h1 className="px-4 pt-8 pb-4 text-center text-5xl font-bold leading-10 text-gray-800">
              OOPS! <span className="text-primary">Something went wrong</span>
            </h1>
            <p className="px-4 pb-10 text-base leading-none text-center text-gray-600">
              <span className="text-primary">404</span> <br />
              <br />
              No signal here! we cannot find the page you are looking for{" "}
            </p>
            <Link href={'/'}>
              <button className="mx-4 h-10 w-44 border rounded-md text-white text-base bg-primary hover:bg-primary/75 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-[#43efb9]">
                Go Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
