import {
  type QueryKey,
  useQuery,
  type UseQueryOptions,
} from "@tanstack/react-query";
import { firestoreDb } from "../index";
import { collection, getDocs, query } from "firebase/firestore";

export type Category = {
  id: string;
  name: string;
};

type Response = Category[];

export const QUERY_KEY = `categories`;

export const useGetAllCategories = (
  options?: Omit<
    UseQueryOptions<Response, unknown, Response, QueryKey>,
    `queryKey` | `queryFn`
  >,
) =>
  useQuery({
    queryKey: [QUERY_KEY] as QueryKey,
    queryFn: async () => {
      const collectionRef = collection(firestoreDb, "categories");
      const categoriesQuery = query(collectionRef);
      const docs = await getDocs(categoriesQuery);
      return docs.docs.map((doc) => {
        const data = doc.data();
        const id = doc.id;
        return { ...data, id } as Category;
      });
    },
    ...options,
  });
