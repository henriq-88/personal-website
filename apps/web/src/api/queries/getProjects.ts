import { useQuery } from "@tanstack/react-query";
import { collection, query, getDocs } from "firebase/firestore";
import { firestore } from "../../firebase/config";
import { Project } from "../types/project";

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
