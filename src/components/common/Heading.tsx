import React from "react";

type HeadingProps = {
  subtitle: string;
  title: string;
};

const Heading = ({ subtitle, title }: HeadingProps) => {
  return (
    <>
      <div className="heading tc">
        <h3>{subtitle}</h3>
        <h1>{title}</h1>
      </div>
    </>
  );
};

export default Heading;
