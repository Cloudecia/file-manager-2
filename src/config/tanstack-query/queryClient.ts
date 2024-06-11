import { QueryClientConfig, MutationCache, QueryClient, QueryCache } from "@tanstack/react-query";

export const queryClientOptions: QueryClientConfig = {
  defaultOptions: {},
  queryCache: new QueryCache(),
  mutationCache: new MutationCache(),
};

export const queryClient = new QueryClient(queryClientOptions);
