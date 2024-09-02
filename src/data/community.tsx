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
      label: "feeds",
      icon: <LuLayoutDashboard />,
    },
    {
      id: "2",
      label: "messages",
      icon: <LuMessagesSquare />,
    },
    {
      id: "3",
      label: "community",
      icon: <IoPeopleOutline />,
    },
    {
      id: "4",
      label: "my-Profile",
      icon: <CgProfile />,
    },
  ],
};
