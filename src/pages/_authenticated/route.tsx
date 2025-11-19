import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';
import { isNil } from 'es-toolkit';

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: async ({ context, location }) => {
    const { auth } = context;

    if (isNil(auth.userInfo?.id)) {
      throw redirect({
        to: '/sign-in',
        search: { redirect: location.pathname },
      });
    }
  },
  component: Outlet,
});
