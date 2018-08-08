//import Events from "../pages/Events/Events";
import Home from "../pages/Home/Home";
import LatestNews from "../pages/LatestNews/LatestNews";
import MyCountryNews from "../pages/MyCountryNews/MyCountryNews";
import MyDrawings from "../pages/MyDrawings/MyDrawings";
import MyMusic from "../pages/MyMusic/MyMusic";
import MyNotes from "../pages/MyNotes/MyNotes";
import RandomComic from "../pages/RandomComic/RandomComic";

//Pages
//Note: the Icon property is the name of the SEMANTIC UI alternative icon

export const pages = [
  { name: "home", path: "/home", icon: "home", component: Home },
  {
    name: "my music",
    path: "/music",
    icon: "itunes note",
    component: MyMusic
  },
  {
    name: "latest news",
    path: "/news",
    icon: "newspaper outline",
    component: LatestNews
  },
  {
    name: "my country's news",
    path: "/local-news",
    icon: "flag outline",
    component: MyCountryNews
  },
  {
    name: "random comic",
    path: "/random-comic",
    icon: "smile",
    component: RandomComic
  },
  // {
  //   name: "events around me",
  //   path: "/events",
  //   icon: "eye",
  //   component: Events
  // },
  {
    name: "my notes",
    path: "/notes",
    icon: "sticky note outline",
    component: MyNotes
  },
  {
    name: "my drawings",
    path: "/drawings",
    icon: "paw",
    component: MyDrawings
  }
];
