import { env } from "../../env.mjs";

interface VersionPageProps {}

const VersionPage: React.FC<VersionPageProps> = (props) => {
  return <pre>{JSON.stringify(env, null, 4)}</pre>;
};

export default VersionPage;
