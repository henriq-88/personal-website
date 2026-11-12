import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { Container } from "@wassdahl/ui";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "react-awesome-reveal";
import CategoryChip from "../../../CategoryChip/CategoryChip";
import Gallery from "../../../ImageGallery";
import ProjectDetailsBody from "./Body";
import { type Project } from "../../../../utils/projects";

interface ProjectDetailsPageProps {
  project: Project;
  content: string;
}

const ProjectDetailsPage: React.FC<ProjectDetailsPageProps> = (props) => {
  const { project } = props;

  return (
    <>
      <div className="flex h-full w-full flex-col">
        <div className="relative h-1/3 flex-shrink">
          <Reveal from={{ opacity: 0 }} className="h-full">
            {project.banner && (
              <Image
                alt="project backdrop"
                src={project.banner}
                fill
                className="!relative h-full w-full object-cover opacity-50 sm:!absolute sm:h-1/5"
              />
            )}
          </Reveal>
        </div>
        <Container className="relative flex w-full flex-col">
          <div className="left-0 bg-violet-200 p-3 shadow-xl dark:bg-[#0C0417] sm:absolute sm:-top-20 sm:mx-3 sm:w-[calc(100%-1.5rem)] sm:rounded-xl sm:p-6">
            <div className="flex flex-row items-start">
              {project.logo && (
                <Image
                  alt="project logo"
                  src={project.logo}
                  width={96}
                  height={96}
                  className="h-16 w-16 rounded-xl object-cover ltr:mr-6 rtl:ml-6 sm:h-24 sm:w-24"
                />
              )}
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">
                {project.name}
              </h1>
            </div>
            <div className="my-6 flex">
              {project.category && (
                <CategoryChip category={project.category} size="medium" />
              )}
            </div>
            <div className="mt-3">
              {project.website && (
                <Link
                  href={project.website}
                  target="_blank"
                  className="inline-block text-gray-500 transition-transform ease-in-out hover:scale-105 hover:text-neutral-900 dark:text-gray-400 dark:hover:text-white"
                >
                  <span className="break-words">{project.website}</span>
                  <ArrowTopRightOnSquareIcon className="ml-2 mb-1 inline-block h-4 w-4" />
                </Link>
              )}
            </div>
            <div className="my-6">
              <Gallery medias={project.medias} />
            </div>
            <ProjectDetailsBody source={props.content} />
          </div>
        </Container>
      </div>
    </>
  );
};

export default ProjectDetailsPage;
