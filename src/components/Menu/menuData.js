import { RxDashboard } from "react-icons/rx";
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdPeopleAlt } from "react-icons/md";

export const menuDate = {
  admin: [
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: <RxDashboard size={20} />,
    },
    {
      name: "Users",
      link: "/users",
      icon: <HiOutlineUserGroup size={20} />,
    },
  ],
};
