import { Timestamp } from "firebase/firestore";

export interface IItem {
  colors: string[];
  depth: string;
  detailedType: string;
  height: string;
  id: string;
  images: string[];
  material: string;
  price: number;
  productInfo: string;
  title: string;
  type: string;
  uploaded: any;
  width: string;
}
