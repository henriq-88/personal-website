import { useQuery } from "@tanstack/react-query";
import { collection, query, getDocs } from "firebase/firestore";
import { firestore } from "../../firebase/config";

export const categories = {
  ai: `AI`,
  app: `App`,
  web: `Web`,
  model: `Model`,
  package: `Package`,
  concept: `Concept`,
} as const;

export type Category = keyof typeof categories;

interface Media {
  type: `video` | `image`;
  url: string;
}

interface Project {
  id: string;
  banner: string;
  name: string;
  body: string;
  category: Category;
  date: Date;
  logo: string;
  medias: Media[];
  tags: string[];
  website: string;
}

export const useGetProjects = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: async () =>
      (await getDocs(query(collection(firestore, `projects`)))).docs.map(
        (doc) => {
          const id = doc.id;
          const data = doc.data();
          const { date, ...restData } = data;
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
          const dateJSObject = date.toDate();
          return {
            id,
            ...restData,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            date: dateJSObject,
          } as Project;
        },
      ),
  });
};
