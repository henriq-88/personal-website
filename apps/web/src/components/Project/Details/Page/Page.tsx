import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { Container } from "@wassdahl/ui";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { api } from "../../../../pages/api";
import CategoryChip from "../../../CategoryChip/CategoryChip";
import Gallery from "../../../ImageGallery";
import { projectSlugToTitleSearch, useProjectSlug } from "./utils";
import ProjectDetailsBody from "./Body";

interface ProjectDetailsPageProps {}

const ProjectDetailsPage: React.FC<ProjectDetailsPageProps> = (props) => {
  const projectSlug = useProjectSlug();

  const { data: projectData } = api.project.byTitleSlug.useQuery(
    {
      projectSlug: projectSlugToTitleSearch(projectSlug ?? ``),
    },
    {
      enabled: !!projectSlug,
    },
  );

  if (!projectData) {
    return <></>;
  }

  return (
    <>
      <Head>
        <title>{projectData.name}</title>
        <meta name="og:title" content={projectData.name} />
        <meta name="og:image" content={projectData.banner} />
        <meta name="og:image:alt" content="Project image" />
      </Head>
      <div className="flex w-full flex-col">
        <div className="relative h-60 flex-shrink">
          <Fade>
            <Image
              alt="project backdrop"
              src={projectData.banner}
              fill
              className="!relative h-full w-full object-cover opacity-50 sm:!absolute sm:h-1/5"
            />
          </Fade>
        </div>
        <Container className="relative flex w-full flex-col">
          <div className="left-0 bg-violet-200 p-3 shadow-xl dark:bg-[#0C0417] sm:absolute sm:-top-20 sm:mx-3 sm:w-[calc(100%-1.5rem)] sm:rounded-xl sm:p-6">
            <div className="flex flex-row items-start">
              {projectData.logo && (
                <Image
                  alt="project logo"
                  src={projectData.logo}
                  width={96}
                  height={96}
                  className="h-16 w-16 rounded-xl object-cover ltr:mr-6 rtl:ml-6 sm:h-24 sm:w-24"
                />
              )}
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">
                {projectData.name}
              </h1>
            </div>
            <div className="my-6 flex">
              <CategoryChip category={projectData.category} size="medium" />
            </div>
            <div className="mt-3">
              {projectData.website && (
                <Link
                  href={projectData.website}
                  target="_blank"
                  className="inline-block text-gray-500 transition-transform ease-in-out hover:scale-105 hover:text-neutral-900 dark:text-gray-400 dark:hover:text-white"
                >
                  <span className="break-words">{projectData.website}</span>
                  <ArrowTopRightOnSquareIcon className="ml-2 mb-1 inline-block h-4 w-4" />
                </Link>
              )}
            </div>
            <div className="my-6">
              <Gallery medias={projectData.medias} />
            </div>
            <ProjectDetailsBody body={projectData.body} />
          </div>
        </Container>
      </div>
    </>
  );
};

export default ProjectDetailsPage;
