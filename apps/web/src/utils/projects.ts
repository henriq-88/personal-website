export type CategoryId =
  | `ai`
  | `app`
  | `concept`
  | `model`
  | `package`
  | `web`;

export type TagId =
  | `android`
  | `design`
  | `firebase`
  | `flutter`
  | `java`
  | `npm`
  | `typescript`
  | `video`
  | `vue`;

export type Category = {
  id: CategoryId;
  name: string;
};

export type Tag = {
  id: TagId;
  name: string;
};

export const categories: Category[] = [
  { id: `ai`, name: `AI` },
  { id: `app`, name: `App` },
  { id: `concept`, name: `Concept` },
  { id: `model`, name: `Model` },
  { id: `package`, name: `Package` },
  { id: `web`, name: `Website` },
];

export const tags: Tag[] = [
  { id: `android`, name: `Android` },
  { id: `design`, name: `Design` },
  { id: `firebase`, name: `Firebase` },
  { id: `flutter`, name: `Flutter` },
  { id: `java`, name: `Java` },
  { id: `npm`, name: `Node Package Manager` },
  { id: `typescript`, name: `Typescript` },
  { id: `video`, name: `Video` },
  { id: `vue`, name: `Vue` },
];

export const getCategory = (id: string) =>
  categories.find((c) => c.id === id);

export const getTag = (id: string) => tags.find((t) => t.id === id);

export type ImageMedia = {
  type: `image`;
  url: string;
};

export type VideoMedia = {
  type: `video`;
  url: string;
};

export type Media = ImageMedia | VideoMedia;
export type MediaType = Media[`type`];

export type Project = {
  slug: string;
  name: string;
  date: string;
  category: Category | undefined;
  tags: Tag[];
  website?: string;
  banner?: string;
  logo?: string;
  medias: Media[];
};

export type SelectProjectsParameters = {
  sortBy: `date` | `name`;
  order: `asc` | `desc`;
  categoryId: string | undefined;
  tagIds: string[] | undefined;
  search: string;
};

export const selectProjects = (
  projects: Project[],
  params: SelectProjectsParameters,
) => {
  let filteredProjects = projects;
  if (params.search) {
    const search = params.search.toLowerCase();
    filteredProjects = filteredProjects.filter(
      (project) =>
        project.name.toLowerCase().includes(search) ||
        project.tags.some((tag) => tag.name.toLowerCase().includes(search)) ||
        project.category?.name.toLowerCase().includes(search),
    );
  }
  if (params.categoryId) {
    filteredProjects = filteredProjects.filter(
      (project) => project.category?.id === params.categoryId,
    );
  }
  if (params.tagIds) {
    filteredProjects = filteredProjects.filter((project) =>
      project.tags.some((tag) => params.tagIds?.includes(tag.id)),
    );
  }
  return filteredProjects.sort((a, b) => {
    if (params.sortBy === `date`) {
      const result = b.date.localeCompare(a.date);
      return params.order === `asc` ? -result : result;
    }
    if (params.sortBy === `name`) {
      const result = a.name.localeCompare(b.name);
      return params.order === `asc` ? result : -result;
    }
    return 0;
  });
};
