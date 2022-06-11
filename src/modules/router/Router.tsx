import { lazy, Suspense, useState } from 'react';
import { RouteObject, useRoutes, BrowserRouter } from 'react-router-dom';
import FullWidth from '@/components/template/FullWidth';
import { Home } from '@/modules/root/Home';

const Loading = () => (
  <p className="p-4 w-full h-full text-center">Loading...</p>
);

const DummyScreen = lazy(() => import('@/components/screens/Dummy'));
const Page404Screen = lazy(() => import('@/components/screens/404'));

const InnerRouter = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <FullWidth />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'about',
          element: <DummyScreen />,
        },
        {
          path: '*',
          element: <Page404Screen />,
        },
      ],
    },
  ];
  const element = useRoutes(routes);
  return (
    <div>
      <Suspense fallback={<Loading />}>{element}</Suspense>
    </div>
  );
};

export const Router = () => {
  return (
    <BrowserRouter>
      <InnerRouter />
    </BrowserRouter>
  );
};
