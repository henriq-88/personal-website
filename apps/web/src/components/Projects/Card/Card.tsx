import { categories, Category } from "../../../api/queries/getProjects";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  id: string;
  name: string;
  tags: string[];
  category: Category;
  imageUrl: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  return (
    <Link
      href={`#/projects/${props.id}`}
      className={clsx(
        "group relative flex h-64 w-full items-center justify-center transition-transform duration-300 ease-in-out hover:z-10 hover:scale-105",
        props.className,
      )}
    >
      <Image
        alt={props.name}
        className="h-full w-full select-none rounded-xl opacity-75 grayscale transition-[filter,opacity] duration-300 hover:opacity-100 hover:filter-none dark:opacity-50 dark:hover:opacity-100"
        src={props.imageUrl}
        width={400}
        height={400}
        style={{
          objectFit: `cover`,
          borderRadius: `inherit`,
        }}
      />
      <div
        className="pointer-events-none absolute flex h-full w-full flex-col justify-between"
        style={{
          borderRadius: `inherit`,
        }}
      >
        <div
          className="rounded-xl bg-gradient-to-b from-black/80 to-black/0 p-3 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            borderTopRightRadius: `inherit`,
            borderTopLeftRadius: `inherit`,
          }}
        >
          {props.name}
        </div>
        <div
          className="flex items-end justify-between rounded-xl bg-gradient-to-t from-black/80 to-black/0 p-3 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            borderBottomRightRadius: `inherit`,
            borderBottomLeftRadius: `inherit`,
          }}
        >
          <div>{` ` ?? props.tags}</div>
          <div className="rounded-md bg-violet-900 px-2 py-1 text-xs capitalize">
            {categories[props.category]}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
