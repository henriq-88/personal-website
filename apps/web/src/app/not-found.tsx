import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-full flex-1 flex-col items-center justify-center gap-3 p-3">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="text-black/50 dark:text-white/50">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="text-violet-900 underline transition-colors hover:text-violet-700 dark:text-violet-500 dark:hover:text-violet-300"
      >
        Back to home
      </Link>
    </div>
  );
}
