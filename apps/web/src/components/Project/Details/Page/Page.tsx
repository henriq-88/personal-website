import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { Container } from "@wassdahl/ui";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useGetProject } from "../../../../api/queries/getProject";
import CategoryChip from "../../../CategoryChip/CategoryChip";
import Gallery from "../../../ImageGallery";

interface ProjectDetailsPageProps {}

const ProjectDetailsPage: React.FC<ProjectDetailsPageProps> = (props) => {
  const router = useRouter();
  const projectId = router.query.projectId as string;
  const { data: projectData } = useGetProject(projectId);

  if (!projectData) {
    return <></>;
  }

  return (
    <div className="flex w-full flex-col">
      <div className="relative h-60 flex-shrink">
        <Image
          alt="project backdrop"
          src={projectData.banner}
          fill
          className="!relative h-full w-full object-cover opacity-50 sm:!absolute sm:h-1/5"
        />
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
          <div className="mt-6 flex">
            <CategoryChip category={projectData.category} size="medium" />
          </div>
          <div className="mt-3">
            {projectData.website && (
              <Link
                href={projectData.website}
                target="_blank"
                className="inline-block text-gray-500 transition-transform ease-in-out hover:scale-105 dark:text-gray-400"
              >
                <span className="break-words">{projectData.website}</span>
                <ArrowTopRightOnSquareIcon className="ml-2 inline-block h-5 w-5" />
              </Link>
            )}
          </div>
          <div className="mt-6">
            <Gallery medias={projectData.medias} />
          </div>
          <p
            className="mt-3 whitespace-pre-wrap"
            dangerouslySetInnerHTML={{
              __html: projectData.body,
            }}
          />
        </div>
      </Container>
    </div>
  );
};

export default ProjectDetailsPage;
