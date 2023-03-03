import { env } from "../../env/client.mjs";

interface VersionPageProps {}

const VersionPage: React.FC<VersionPageProps> = (props) => {
  return <pre>{JSON.stringify(env, null, 4)}</pre>;
};

export default VersionPage;
