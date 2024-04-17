import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LogoutIcon from '@mui/icons-material/Logout';


export const Sidebarmenu = [

        {
          id: 1,
          icon: HomeIcon,
          title: "Home",
          url: "/dashboard",
        },
        {
          id: 2,
          icon: FavoriteIcon,
          title: "Favorite",
          url: "/favorite",
        },
        {
          id: 3,
          icon: EqualizerIcon,
          title: "Monitor",
          url: "/monitor",
        },
        {
          id: 4,
          icon: SettingsIcon,
          title: "Setting",
          url: "/setting",
        },
        {
          id: 5,
          icon: HelpOutlineIcon,
          title: "Help",
          url: "/help",
        },
        {
          id: 6,
          icon: LogoutIcon,
          title: "Logout",
          url: "/login",
        },
      ]

import Project1 from "../Images/project1.png"
import Project2 from "../Images/project2.png"
import Project3 from "../Images/project3.png"

export const Project = [
    {
        id:1,
        img:Project1,
        name:"Project 1"
    },
    {
        id:2,
        img:Project2,
        name:"Project 2"
    },
    {
        id:3,
        img:Project3,
        name:"Project 3"
    }
]

export const areaChart = [
  {
    name: "Mon",
    use: 15,
  },
  {
    name: "Tue",
    use: 10,
  },
  {
    name: "Wed",
    use: 25,
  },
  {
    name: "Thu",
    use: 35,
  },
  {
    name: "Fri",
    use: 20,
  },
  {
    name: "Sat",
    use: 50,
  },
  {
    name: "Sun",
    use: 80,
  },
];

export const pieChart = [
  {
    name: "Car ",
    use: 41,
    color: "#93C4FD",
  },
  {
    name: "Automobile system",
    use: 9,
    color: "#19BDF9",
  },
  {
    name: "Engine System",
    use: 30,
    color: "#F09A63",
  },
  {
    name: "Electrical System",
    use: 15,
    color: "#FF8042",
  },
  {
    name: "Car Body ",
    use: 5,
    color: "#0088FE",
  },
];
