import Events from "../pages/Events/Events";
import Home from "../pages/Home/Home";

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
    component: () => "latest news"
  },
  {
    name: "my country's news",
    path: "/local-news",
    icon: "flag outline",
    component: () => "local news"
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
    component: () => "Log in for your notes to be saved"
  },
  {
    name: "my drawings",
    path: "/drawings",
    icon: "paw",
    component: () => "Log in for your drawings to be saved"
  }
];
