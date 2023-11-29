import React from "react";
import { Empty as EmptyD } from "antd";

type EmptyProps = {
  description?: string;
  className?: string;
};

const Empty = ({ description,className }: EmptyProps) => {
  return (
    <EmptyD image={EmptyD.PRESENTED_IMAGE_SIMPLE} description={description} className={className} />
  );
};

export default Empty;
