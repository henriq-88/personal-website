import {
  type QueryKey,
  useQuery,
  type UseQueryOptions,
} from "@tanstack/react-query";
import { firestoreDb } from "../index";
import { collection, getDocs, query } from "firebase/firestore";

export type Tag = {
  id: string;
  name: string;
};

export const QUERY_KEY = `tags`;

type Response = Tag[];

export const useGetAllTags = (
  options?: Omit<
    UseQueryOptions<Response, unknown, Response, QueryKey>,
    `queryKey` | `queryFn`
  >,
) =>
  useQuery({
    queryKey: [QUERY_KEY] as QueryKey,
    queryFn: async () => {
      const collectionRef = collection(firestoreDb, "tags");
      const tagsQuery = query(collectionRef);
      const docs = await getDocs(tagsQuery);
      return docs.docs.map((doc) => {
        const data = doc.data();
        const id = doc.id;
        return { ...data, id } as Tag;
      });
    },
    ...options,
  });
