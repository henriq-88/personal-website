import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type FirebaseProviderProps = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();

const FirebaseProvider: React.FC<FirebaseProviderProps> = (props) => {
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  );
};

export default FirebaseProvider;
