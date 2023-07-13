import { db } from "../firebase.config";
import {
  collection,
  serverTimestamp,
  getDocs,
  getDoc,
  query,
  doc,
  where,
  orderBy,
  limit,
} from "firebase/firestore";

import { IItem } from "../../models/items/IItem";

const collectionRef = collection(db, "items");

export const itemsServices = {
  getAllItems: async () => {
    await getDocs(collectionRef)
      .then((item) => {
        let data = item.docs.map((doc) => ({ ...doc.data() }));

        const convertType = data as IItem[];

        return convertType;
      })
      .catch((err) => console.log(err));
  },

  getItemById: async (id: string) => {
    const q = query(collectionRef, where("id", "==", id));
    const querySnapshot = await getDocs(q);
    let data = querySnapshot.docs.map((doc) => ({ ...doc.data() }));

    const convertType = data as IItem[];

    return convertType;
  },
  getNewItems: async (Limit: number) => {
    const q = query(collectionRef, orderBy("uploaded", "desc"), limit(Limit));

    const item = await getDocs(q).then((item) => {
      let data = item.docs.map((doc) => ({ ...doc.data() }));

      const convertType = data as IItem[];

      return convertType;
    });

    return item;
  },
  getItemByType: async (type: string) => {
    const q = query(collectionRef, where("type", "==", "furniture"));

    const querySnapshot = await getDocs(q);
    let data = querySnapshot.docs.map((doc) => ({ ...doc.data() }));

    const convertType = data as IItem[];
    return convertType;
  },
};
