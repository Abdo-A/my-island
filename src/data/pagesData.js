import Home from "../pages/Home/Home";

//Pages

//Note: the Icon property is the name of the SEMANTIC UI alternative icon

export const pages = [
  { name: "home", path: "/home", icon: "home", component: Home },
  {
    name: "another page",
    path: "/another-page",
    icon: "camera",
    component: () => "Another page"
  },
  { name: "Globe", path: "/globe", icon: "globe", component: () => "Globe!!" }
];
