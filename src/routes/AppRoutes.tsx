import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout, Loading } from '@components/ui';
import { ThemeButton } from '@components/ui/ThemeButton';
import { useTheme } from '@contexts/ThemeContext';

const Home = lazy(() => import('@pages/Home'));
const Room = lazy(() => import('@pages/Room'));
const NotFound = lazy(() => import('@pages/NotFound'));

const AppRoutes = () => {
  const { theme } = useTheme();

  return (
    <BrowserRouter>
      <div data-theme={theme}>
        <ThemeButton />
        <Layout>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/rooms/:roomId" element={<Room />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </div>
    </BrowserRouter>
  );
};

export default AppRoutes;
