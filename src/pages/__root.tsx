import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import NavigationProgress from '@/components/common/navigation-progress';
import NotFound from '@/components/common/not-found';

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootComponent() {
  return (
    <>
      <NavigationProgress />
      <Outlet />
      <TanStackRouterDevtools position="top-right" />
    </>
  );
}
