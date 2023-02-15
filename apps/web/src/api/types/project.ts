import { Category } from "./category";
import { Media } from "./media";

export interface Project {
  id: string;
  banner: string;
  name: string;
  body: string;
  category: Category;
  date: Date;
  logo?: string;
  medias: Media[];
  tags: string[];
  website: string;
}
