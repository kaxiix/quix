import { FloatingNav } from "../../components/ui/floating-navbar";

import React from "react";

const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
      // icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      // icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Services",
      link: "#services",
      // icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "#contact",
      // icon: (
      //   // <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      // ),
    },
  ];
  return <FloatingNav navItems={navItems} />;
};

export default Navbar;
