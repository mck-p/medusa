import type { Page } from "../store/types";
import type { Request } from "express";

export const getByReq = (_: Request): Page[] => [
  {
    id: 1,
    slug: "/",
    exact: true,
    components: [
      {
        id: 7,
        name: "PageMeta:One",
        props: {
          title: "My Awesome Title",
          description: "This is the description for this webpage",
        },
      },
      {
        id: 3,
        name: "Header:One",
        props: {
          name: "FooBar",
          navItems: [
            {
              label: "Home",
              href: "/",
            },
            {
              label: "About",
              href: "/about",
            },
          ],
        },
      },
      {
        id: 5,
        name: "Footer:One",
        props: {
          name: "BAZBORP",
          navItems: [
            {
              label: "Home",
              href: "/",
            },
            {
              label: "About",
              href: "/about",
            },
          ],
        },
      },
    ],
  },
  {
    id: 2,
    slug: "/about",
    components: [
      {
        id: 4,
        name: "Header:Two",
        props: {
          name: "BAZBORP",
          navItems: [
            {
              label: "Home",
              href: "/",
            },
            {
              label: "About",
              href: "/about",
            },
          ],
        },
      },
    ],
  },
];
