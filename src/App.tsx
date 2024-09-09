import { Home } from './Home';
import { Main } from './Main';
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
  useSearchParams,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/*',
    element: <Main />,
  },
  {
    path: '/home',
    element: <Home />,
  },

  // {
  //   path: '/',
  //   element: <div>About</div>,
  // },
]);

export function App() {
  return <RouterProvider router={router} />;
}
