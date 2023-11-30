"use client";
import React from "react";

import logo from "../../../public/images/logo.png";

import { Layout, Menu } from "antd";
import Image from "next/image";
import Link from "next/link";
import { AppstoreOutlined } from "@ant-design/icons";

const { Sider } = Layout;

interface ISiteBar {
  collapsed: boolean;
}

const DashboardSiteBar = ({ collapsed }: ISiteBar) => {
  return (
    <Sider
      style={{
        background: "white",
        borderRight: "1px solid #c8cbf2",
      }}
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <div className="demo-logo-vertical " />

      {/* add logo */}
      <div className="my-[23px] w-full flex items-center justify-center">
        {collapsed ? (
          <Link href={"/"}>
            <Image
              alt="Logo"
              src={logo}
              width={50}
              height={50}
              className="w-[30px]"
            />
          </Link>
        ) : (
          <Link href={"/"}>
            <Image alt="Logo" src={logo} width={100} height={100} />
          </Link>
        )}
      </div>

      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            label: "Order History",
            key: "dashboard",
            icon: <AppstoreOutlined />,
          },
        ]}
      />
    </Sider>
  );
};

export default DashboardSiteBar;
