import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";

interface ProjectDetailsBodyProps {
  source: string;
}

const components = {
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="my-3 whitespace-pre-wrap" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <Link
      className="underline transition-colors hover:text-violet-900 dark:hover:text-violet-300"
      target="_blank"
      href={props.href ?? ``}
      {...props}
    />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="my-3 list-disc pl-6" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="my-3 list-decimal pl-6" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="my-1" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="mt-6 mb-3 text-2xl font-bold" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="mt-6 mb-3 text-xl font-bold" {...props} />
  ),
};

const ProjectDetailsBody: React.FC<ProjectDetailsBodyProps> = (props) => {
  return (
    <div className="my-3">
      <MDXRemote source={props.source} components={components} />
    </div>
  );
};

export default ProjectDetailsBody;
