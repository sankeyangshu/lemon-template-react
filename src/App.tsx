import { createRouter, RouterProvider } from '@tanstack/react-router';
import NotFound from './components/common/not-found';
import ServerError from './components/common/server-error';
import { ThemeProvider } from './components/common/theme-provider';
import { routeTree } from './routeTree.gen';

// Set up a Router instance
const router = createRouter({
  routeTree,
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
}

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
