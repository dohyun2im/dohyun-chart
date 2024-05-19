import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Dohyun-Oneline / Flow"
};

const FlowLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};

export default FlowLayout;
