import { INavigation } from "../../../models/Navigation/INavigation";

export const menuLinks: INavigation[] = [
  { title: "Home", url: "/", underCategory: [] },
  {
    title: "News",
    url: "/",
    underCategory: [],
  },
  {
    title: "Furniture",
    url: "/products/search?category=Furniture&detailedType=null",
    underCategory: [
      {
        title: "Tables",
        url: "/products/search?category=Furniture&detailedType=Table",
        icon: "fa-solid fa-archway",
      },
      {
        title: "Chairs",
        url: "/products/search?category=Furniture&detailedType=Chair",
        icon: "fa-solid fa-chair",
      },
      {
        title: "TV Benches",
        url: "/products/search?category=Furniture&detailedType=TvBench",
        icon: "fa-solid fa-tv",
      },
      {
        title: "Sofas",
        url: "/products/search?category=Furniture&detailedType=Sofa",
        icon: "fa-solid fa-couch",
      },
    ],
  },
  {
    title: "Exterior",
    url: "/products/search?category=Exterior",
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
    url: "/products/search?category=Lighting",
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
    url: "/products/search?category=Storage",
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
    url: "/products/search?category=Textile",
    underCategory: [
      { title: "Mats", url: "/" },
      { title: "Blankets", url: "/" },
      { title: "Pillows", url: "/" },
    ],
  },
  {
    title: "Decoration",
    url: "/products/search?category=Decoration",
    underCategory: [
      { title: "Vases", url: "/" },
      { title: "Test", url: "/" },
      { title: "Test", url: "/" },
    ],
  },
];
