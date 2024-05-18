import { PATH } from "@/constants/path";
import { redirect } from "next/navigation";

const NotFound = () => {
  redirect(PATH.dashboard);
};

export default NotFound;
