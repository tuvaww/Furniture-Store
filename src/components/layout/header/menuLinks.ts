import { INavigation } from "../../../models/Navigation/INavigation";

export const menuLinks: INavigation[] = [
  {
    title: "News",
    url: "/",
    underCategory: [],
  },
  {
    title: "Furniture",
    url: "/",
    underCategory: [
      { title: "Tables", url: "/" },
      { title: "Chairs", url: "/" },
      { title: "TV Benches", url: "/" },
      { title: "Couches", url: "/" },
    ],
  },
  {
    title: "Exterior",
    url: "/",
    underCategory: [
      { title: "Outdoor Tables", url: "/" },
      { title: "Outdoor Chairs", url: "/" },
      { title: "Sofa Groups", url: "/" },
      { title: "Outdoor Couches", url: "/" },
      { title: "Parasoles", url: "/" },
    ],
  },
  {
    title: "Lighting",
    url: "/",
    underCategory: [
      { title: "Wall Lamps", url: "/" },
      { title: "Floor Lamps", url: "/" },
      { title: "Ceiling Lamps", url: "/" },
      { title: "Table Lamps", url: "/" },
      { title: "Led Lights", url: "/" },
      { title: "Solar Lights", url: "/" },
    ],
  },
  {
    title: "Storage",
    url: "/",
    underCategory: [
      { title: "Bookshelfs", url: "/" },
      { title: "Cabinets", url: "/" },
      { title: "Drawers", url: "/" },
      { title: "Hangers", url: "/" },
      { title: "Baskets", url: "/" },
    ],
  },
  {
    title: "Textile",
    url: "/",
    underCategory: [
      { title: "Mats", url: "/" },
      { title: "Drapers", url: "/" },
      { title: "Pillows", url: "/" },
    ],
  },
  {
    title: "Decorations",
    url: "/",
    underCategory: [
      { title: "Vases", url: "/" },
      { title: "Test", url: "/" },
      { title: "Test", url: "/" },
    ],
  },
];
