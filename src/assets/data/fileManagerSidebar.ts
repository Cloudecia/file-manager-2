import { BiSolidDashboard } from "react-icons/bi";
import { BsWindowFullscreen } from "react-icons/bs";

const sidebar = [
  {
    id: 1,
    title: "Main",
    children: [
      {
        id: 0,
        url: "/",
        title: "Your Dashboard",
        icon: BiSolidDashboard,
      },
      {
        id: 0,
        url: "/r",
        title: "Root",
        icon: BiSolidDashboard,
      },
    ],
  },
  {
    id: 2,
    title: "More",
    children: [
      {
        id: 21,
        url: "/rr",
        title: "Recent",
        icon: BsWindowFullscreen,
      },
      {
        id: 22,
        url: "/f",
        title: "Favourites",
        icon: BsWindowFullscreen,
      },
    ],
  },
  {
    id: 3,
    title: "Others",
    children: [
      {
        id: 31,
        url: "/q",
        title: "Quarantine",
        icon: BsWindowFullscreen,
      },
      {
        id: 32,
        url: "/t",
        title: "Trash",
        icon: BsWindowFullscreen,
      },
      {
        id: 33,
        url: "/s",
        title: "Storage",
        icon: BsWindowFullscreen,
      },
    ],
  },
];

export default sidebar;
