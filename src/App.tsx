import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { useEffect } from 'react';
import NotFound from './components/common/not-found';
import ServerError from './components/common/server-error';
import { ColorProvider } from './provider/color';
import { LangProvider } from './provider/lang';
import { ThemeProvider } from './provider/theme';
import { routeTree } from './routeTree.gen';
import { useUserStore } from './store/user';

// Create a client
const queryClient = new QueryClient();

// Set up a Router instance
const router = createRouter({
  routeTree,
  context: {
    queryClient,
    auth: useUserStore.getState(),
  },
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultNotFoundComponent: NotFound,
  defaultErrorComponent: ServerError,
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }

  /**
   * 路由静态数据
   */
  interface StaticDataRouteOption {
    /**
     * 路由标题
     */
    title?: string;

    /**
     * 国际化key
     */
    i18nKey?: string;

    // 扩展更多...
  }
}

function App() {
  useEffect(() => {
    const unsubscribe = useUserStore.subscribe(() => {
      void router.invalidate();
    });

    return () => unsubscribe();
  }, []);

  const userStore = useUserStore();

  return (
    <ThemeProvider>
      <ColorProvider>
        <LangProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} context={{ auth: userStore }} />
          </QueryClientProvider>
        </LangProvider>
      </ColorProvider>
    </ThemeProvider>
  );
}

export default App;
