import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ThemeProvider from "../../theme/Provider";

interface CompositeProviderProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Number.POSITIVE_INFINITY,
    },
  },
});

const CompositeProvider: React.FC<CompositeProviderProps> = (props) => (
  <QueryClientProvider client={queryClient}>
    <>
      <ThemeProvider>{props.children}</ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  </QueryClientProvider>
);

export default CompositeProvider;
