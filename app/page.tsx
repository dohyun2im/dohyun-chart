import { PATH } from "@/constants/path";
import { redirect } from "next/navigation";

const Root = () => {
  redirect(PATH.dashboard);
};

export default Root;
