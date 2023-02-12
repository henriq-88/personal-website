import Image from "next/image";
import Link from "next/link";
import MeImage from "../../../assets/images/me.jpg";

interface ProjectCardProps {}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  return (
    <Link
      href="#"
      className="group relative flex h-64 w-full items-center justify-center transition-all duration-300 ease-in-out hover:z-10 hover:scale-105"
    >
      <Image
        alt="picture of me"
        className="h-full w-full select-none rounded-xl opacity-75 grayscale transition-all duration-300 hover:opacity-100 hover:filter-none dark:opacity-50 dark:hover:opacity-100"
        src={MeImage}
        style={{
          objectFit: `cover`,
        }}
      />
      <div className="pointer-events-none absolute flex h-full w-full flex-col justify-between">
        <div className="rounded-xl bg-gradient-to-b from-black/80 to-black/0 p-3 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          AOA - 사뿐사뿐 (Like a Cat)
        </div>
        <div className="flex items-end justify-between rounded-xl bg-gradient-to-t from-black/80 to-black/0 p-3 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div>Nice</div>
          <div className="rounded-2xl bg-violet-900 px-3 py-1 text-xs">
            Model
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
