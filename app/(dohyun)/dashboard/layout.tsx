import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Dashboard"
};

const DashboardLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};

export default DashboardLayout;
