import { useEffect, useState } from "react";

interface ProjectDetailsBodyProps {
  body: string;
}

const ProjectDetailsBody: React.FC<ProjectDetailsBodyProps> = (props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
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
