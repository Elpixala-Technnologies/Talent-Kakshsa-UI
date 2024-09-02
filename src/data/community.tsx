import { FaCode } from "react-icons/fa";
import { IoPeopleOutline, IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import {
  LuLayoutDashboard,
  LuMessagesSquare,
  LuUserPlus,
} from "react-icons/lu";

export const community = {
  tabs: [
    {
      id: "1",
      label: "News Feed",
      icon: <LuLayoutDashboard />,
    },
    {
      id: "2",
      label: "Messages",
      icon: <LuMessagesSquare />,
    },
    {
      id: "3",
      label: "Code Snippets",
      icon: <FaCode />,
    },
    {
      id: "4",
      label: "Videos",
      icon: <HiOutlineVideoCamera />,
    },
    {
      id: "5",
      label: "Friends",
      icon: <LuUserPlus />,
    },
    {
      id: "6",
      label: "Community",
      icon: <IoPeopleOutline />,
    },
    {
      id: "7",
      label: "My Profile",
      icon: <CgProfile />,
    },
    {
      id: "8",
      label: "Settings",
      icon: <IoSettingsOutline />,
    },
  ],
};
