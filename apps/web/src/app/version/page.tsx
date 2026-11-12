import { env } from "../../env.mjs";

export default function VersionPage() {
  return (
    <pre>
      {JSON.stringify(
        {
          NODE_ENV: env.NODE_ENV,
          NEXT_PUBLIC_GIT_HASH: env.NEXT_PUBLIC_GIT_HASH,
        },
        null,
        4,
      )}
    </pre>
  );
}
