import { useMemo } from 'react';
import { useLocation, useMatches, useRouteError } from 'react-router';

export const useRoute = <
  T = unknown,
  Q extends Record<string, string> | null = Record<string, string>,
  P extends Record<string, string | string[]> = Record<string, string | string[]>,
>() => {
  const matches = useMatches();

  const lastRoute = matches.at(-1) as App.Global.Route<T, Q, P>;

  const { hash, pathname, search } = useLocation();

  const fullPath = pathname + search + hash;

  const error = useRouteError() as Error | null;

  // TODO： 待扩展query,params
  return useMemo(
    () =>
      ({
        ...lastRoute,
        error,
        fullPath,
        matched: matches.slice(1) as App.Global.Route<T>[],
        hash,
        pathname,
        redirect: null,
        search,
      }) as App.Global.Route<T, Q, P>,
    [fullPath]
  );
};
