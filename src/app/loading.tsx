"use client";
import { Alert, Spin } from "antd";
import React from "react";

const Loading = () => {
  return (
    <Spin tip="Loading...">
      <Alert
        message="Loading..."
        description="Please wait while we load the page."
        type="info"
      />
    </Spin>
  );
};

export default Loading;
