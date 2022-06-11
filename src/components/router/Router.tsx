import { lazy, Suspense, useState } from 'react';
import { Outlet, RouteObject, useRoutes, BrowserRouter } from 'react-router-dom';
import FullWidth from '@/components/template/FullWidth';

const Loading = () => <p className="p-4 w-full h-full text-center">Loading...</p>;

const DummyScreen = lazy(() => import('@/components/screens/Dummy'));
const Page404Screen = lazy(() => import('@/components/screens/404'));


export const Router = () => {
  return (
    <BrowserRouter>
      <InnerRouter />
    </BrowserRouter>
  );
};

const InnerRouter = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <FullWidth />,
      children: [
        {
          index: true,
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
