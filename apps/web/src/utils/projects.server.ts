import fs from "fs";
import path from "path";
import { cacheLife, cacheTag } from "next/cache";
import matter from "gray-matter";
import { z } from "zod";
import {
  getCategory,
  getTag,
  type Project,
  type Tag,
} from "./projects";

const projectsDir = path.join(process.cwd(), `content`, `projects`);

const frontmatterSchema = z.object({
  name: z.string(),
  date: z
    .union([z.string(), z.date()])
    .transform((date) =>
      typeof date === `string`
        ? date
        : date.toISOString().substring(0, 10),
    ),
  category: z.string(),
  tags: z.array(z.string()).default([]),
  website: z.string().optional(),
  banner: z.string().optional(),
  logo: z.string().optional(),
  medias: z
    .array(
      z.object({
        type: z.enum([`image`, `video`]),
        url: z.string(),
      }),
    )
    .default([]),
});

const getProjectFile = (slug: string) => {
  const filePath = path.join(projectsDir, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, `utf8`);
  const { data, content } = matter(source);
  const frontmatter = frontmatterSchema.parse(data);
  const project: Project = JSON.parse(
    JSON.stringify({
      slug,
      name: frontmatter.name,
      date: frontmatter.date,
      category: getCategory(frontmatter.category),
      tags: frontmatter.tags
        .map((tagId) => getTag(tagId))
        .filter((tag): tag is Tag => !!tag),
      website: frontmatter.website,
      banner: frontmatter.banner,
      logo: frontmatter.logo,
      medias: frontmatter.medias,
    }),
  ) as Project;
  return { project, content };
};

export const getProjectSlugs = () =>
  fs
    .readdirSync(projectsDir)
    .filter((file) => file.endsWith(`.mdx`))
    .map((file) => file.replace(/\.mdx$/, ``));

// eslint-disable-next-line @typescript-eslint/require-await -- "use cache" functions must be async
export const getAllProjects = async () => {
  "use cache";
  cacheTag(`projects`);
  cacheLife(`max`);
  return getProjectSlugs().map((slug) => getProjectFile(slug).project);
};

// eslint-disable-next-line @typescript-eslint/require-await -- "use cache" functions must be async
export const getProject = async (slug: string) => {
  "use cache";
  cacheTag(`projects`, `project-${slug}`);
  cacheLife(`max`);
  return getProjectFile(slug);
};
