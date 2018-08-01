import Events from "../pages/Events/Events";
import Home from "../pages/Home/Home";
import MyDrawings from "../pages/MyDrawings/MyDrawings";
import MyNotes from "../pages/MyNotes/MyNotes";
import MyCountryNews from "../pages/MyCountryNews/MyCountryNews";
import LatestNews from "../pages/LatestNews/LatestNews";

//Pages
//Note: the Icon property is the name of the SEMANTIC UI alternative icon

export const pages = [
  { name: "home", path: "/home", icon: "home", component: Home },
  {
    name: "my music",
    path: "/music",
    icon: "itunes note",
    component: () => "Log in for more music features!"
  },
  {
    name: "latest news!",
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
    name: "events around me",
    path: "/events",
    icon: "eye",
    component: Events
  },
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
