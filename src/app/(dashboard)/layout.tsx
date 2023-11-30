"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/lib/Providers";
import AuthProvider, { AuthContext } from "@/firebase/AuthProvider";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { Layout, message } from "antd";
import DashboardSiteBar from "@/components/dashboard/DashboardSiteBar";
import DashboardContents from "@/components/dashboard/DashboardContent";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);

  const router = useRouter();

  // user
  const { loading, user, signOutUser }: any = useContext(AuthContext);
  

  if (!user && typeof window !== "undefined") {
    router.push("/login");
    return message.error("You are not Authorize user.please login");
  }

  // handle logout
  const handleLogOut = async () => {
    try {
      await signOutUser();
      await message.success("Logout Successfully");
    } catch (error: any) {
      message.error(error.message);
    }
  };

  return (
    <Layout hasSider>
      <DashboardSiteBar collapsed={collapsed} />
      <DashboardContents
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        user={user}
        handleLogOut={handleLogOut}
      >
        <AuthProvider>{children}</AuthProvider>
      </DashboardContents>
    </Layout>
  );
}
