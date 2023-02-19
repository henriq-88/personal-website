import { CardSkeleton } from "@wassdahl/ui";

interface ProjectDetailsBodyProps {
  isLoading: boolean;
  body?: string;
}

const ProjectDetailsBody: React.FC<ProjectDetailsBodyProps> = (props) => {
  if (props.isLoading) {
    return (
      <div className="my-3">
        <CardSkeleton className="h-5 w-32 rounded-md" />
        <div className="pb-1" />
        <CardSkeleton className="h-5 w-full rounded-md" />
        <div className="pb-1" />
        <CardSkeleton className="h-5 w-full rounded-md" />
        <div className="pb-1" />
        <CardSkeleton className="h-5 w-4/5 rounded-md" />
        <div className="pb-1" />
      </div>
    );
  }

  if (!props.body) {
    return <></>;
  }

  return (
    <p
      className="my-3 whitespace-pre-wrap"
      dangerouslySetInnerHTML={{
        __html: props.body,
      }}
    />
  );
};

export default ProjectDetailsBody;
