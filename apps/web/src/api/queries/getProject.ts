import { useQuery } from "@tanstack/react-query";
import { getDoc, doc } from "firebase/firestore";
import { firestore } from "../../firebase/config";
import { Project } from "../types/project";

export const useGetProject = (id: string) => {
  return useQuery({
    queryKey: ["projects", id],
    queryFn: async () => {
      const document = await getDoc(doc(firestore, `projects/${id}`));
      const docId = document.id;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment
      const data = document.data() as any;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const { date, ...restData } = data;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      const dateJSObject = date.toDate();
      return {
        id: docId,
        ...restData,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        date: dateJSObject,
      } as Project;
    },
  });
};
