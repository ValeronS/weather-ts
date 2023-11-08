export const isNetworkError = (s: string) => {
  const errorClient = s?.match(/Network Error/) != null;
  const errorServer = s?.match(/EHOSTUNREACH/) != null;
  return errorClient || errorServer;
};
