import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: " Our mission is to revolutionize the way people furnish their homes, making the process of finding the perfect furniture an enjoyable and inspiring experience.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Our vision is to be the leading destination for furniture and interior design inspiration, where every customer can effortlessly discover, create, and curate their dream living spaces.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "Founded in 2020, Comfy Sloth was born out of the desire to create a seamless and inspiring online platform that would cater to the diverse needs and preferences of furniture enthusiasts.",
  },
];

export const products_url = "/react-store-products";

export const single_product_url = `/react-store-single-product?id=`;
