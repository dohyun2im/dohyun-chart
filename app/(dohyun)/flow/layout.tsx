import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Flow"
};

const FlowLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};

export default FlowLayout;
