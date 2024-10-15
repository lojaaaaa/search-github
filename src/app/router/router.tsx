import { createBrowserRouter, Outlet } from 'react-router-dom';
import { ErrorPage } from '@/pages/error';
import { Favorites } from '@/pages/favorites';
import { Home } from '@/pages/home';
import { RepositoryDetails } from '@/pages/repository';
import { Header } from '@/widgets/header';

const MainLayout = () => (
  <>
    <div className="h-full">
      <Header />
      <main className="mx-auto max-w-screen-xl pt-10 px-2">
        <Outlet/>
      </main>
    </div>
  </>
);

const DetailsLayout = () => (
  <>
    <div className="h-full">
      <Header />
      <main className="mx-auto max-w-screen-lg pt-10 px-2">
        <Outlet/>
      </main>
    </div>
  </>
);

export const createRouter = () => createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    path: '/',
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'favorites',
        element: <Favorites />,
      },
    ],
  },
  {
    path: 'repo',
    element: <DetailsLayout />,
    children: [
      {
        path: ':id',
        element: <RepositoryDetails />,
      },
    ],
  },
]);