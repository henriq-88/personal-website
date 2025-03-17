import {
  type QueryKey,
  useQuery,
  type UseQueryOptions,
} from "@tanstack/react-query";
import { firestoreDb } from "../index";
import { collection, getDocs, query } from "firebase/firestore";

export type ImageMedia = {
  type: `image`;
  url: string;
};

export type VideoMedia = {
  type: `video`;
  url: string;
};

export type Media = ImageMedia | VideoMedia;
export type MediaType = Media["type"];

export type Project = {
  id: string;
  name: string;
  logo: string;
  date: Date;
  tags: string[];
  category: string;
  banner: string;
  website?: string;
  pageViews: number;
  medias: Media[];
  body: string;
};

type AllProjectsParamaters = {
  sortBy: `date` | `pageViews` | `name`;
  order: `asc` | `desc`;
  categoryId: string | undefined;
  tagIds: string[] | undefined;
  search: string;
};

type Response = Project[];

export const QUERY_KEY = `projects`;

export const selectAllProjects = (selectParams: AllProjectsParamaters) => {
  return (data: Response) => {
    let filteredDocs = data;
    if (selectParams.search) {
      filteredDocs = filteredDocs.filter(
        (doc) =>
          doc.name.toLowerCase().includes(selectParams.search.toLowerCase()) ||
          doc.tags.some((tag) =>
            tag.toLowerCase().includes(selectParams.search.toLowerCase()),
          ) ||
          doc.category
            .toLowerCase()
            .includes(selectParams.search.toLowerCase()),
      );
    }
    if (selectParams.categoryId) {
      filteredDocs = filteredDocs.filter(
        (doc) => doc.category === selectParams.categoryId,
      );
    }
    if (selectParams.tagIds) {
      filteredDocs = filteredDocs.filter((doc) =>
        doc.tags.some((tag) => selectParams.tagIds?.includes(tag)),
      );
    }
    return filteredDocs.sort((a, b) => {
      if (selectParams.sortBy === `date`) {
        return b.date.getTime() - a.date.getTime();
      }
      if (selectParams.sortBy === `pageViews`) {
        return a.pageViews - b.pageViews;
      }
      if (selectParams.sortBy === `name`) {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });
  };
};

export const useGetAllProjects = (
  options?: Omit<
    UseQueryOptions<Response, unknown, Response, QueryKey>,
    `queryKey` | `queryFn`
  >,
) => {
  return useQuery({
    queryKey: [QUERY_KEY] as QueryKey,
    queryFn: async () => {
      const collectionRef = collection(firestoreDb, "projects");
      const projectsQuery = query(collectionRef);
      const docs = await getDocs(projectsQuery);
      return docs.docs.map((doc) => {
        const data = doc.data();
        const id = doc.id;
        return {
          ...data,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
          date: data.date.toDate(),
          pageViews: (data.pageViews as number) ?? 0,
          id,
        } as Project;
      });
    },
    ...options,
  });
};
