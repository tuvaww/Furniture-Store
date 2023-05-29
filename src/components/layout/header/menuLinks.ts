import { INavigation } from "../../../models/Navigation/INavigation";

export const menuLinks: INavigation[] = [
  {
    title: "News",
    url: "/",
    underCategory: [],
  },
  {
    title: "Furniture",
    url: "/products/search?category=furniture",
    underCategory: [
      { title: "Tables", url: "/" },
      { title: "Chairs", url: "/" },
      { title: "TV Benches", url: "/" },
      { title: "Sofas", url: "/" },
    ],
  },
  {
    title: "Exterior",
    url: "/products/search?category=exterior",
    underCategory: [
      { title: "Outdoor Tables", url: "/" },
      { title: "Outdoor Chairs", url: "/" },
      { title: "Lounge Groups", url: "/" },
      { title: "Outdoor Sofas", url: "/" },
      { title: "Parasoles", url: "/" },
    ],
  },
  {
    title: "Lighting",
    url: "/products/search?category=lighting",
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
    url: "/products/search?category=storage",
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
    url: "/products/search?category=textile",
    underCategory: [
      { title: "Mats", url: "/" },
      { title: "Blankets", url: "/" },
      { title: "Pillows", url: "/" },
    ],
  },
  {
    title: "Decoration",
    url: "/products/search?category=decoration",
    underCategory: [
      { title: "Vases", url: "/" },
      { title: "Test", url: "/" },
      { title: "Test", url: "/" },
    ],
  },
];
