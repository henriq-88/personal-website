import {
  type QueryKey,
  useQuery,
  type UseQueryOptions,
} from "@tanstack/react-query";
import { firestoreDb } from "../index";
import { doc, getDoc } from "firebase/firestore";
import { type Project } from "./all-projects";

type ProjectParamaters = {
  projectId: string;
};

type Response = Project;

export const QUERY_KEY = `projects`;

export const useGetProjectBtId = (
  params: ProjectParamaters,
  options?: Omit<
    UseQueryOptions<Response, unknown, Response, QueryKey>,
    `queryKey` | `queryFn`
  >,
) => {
  return useQuery({
    queryKey: [QUERY_KEY, params] as QueryKey,
    queryFn: async () => {
      const docRef = doc(firestoreDb, `projects/${params.projectId}`);

      const projectDoc = await getDoc(docRef);

      const data = projectDoc.data();
      const id = projectDoc.id;
      return {
        ...data,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        date: data?.date.toDate(),
        pageViews: (data?.pageViews as number) ?? 0,
        id,
      } as Project;
    },
    ...options,
  });
};
