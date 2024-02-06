import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

// layouts and pages
import RootLayout from './layouts/RootLayout';
import UserRegister from './pages/UserRegister';
import UserLogin from './pages/UserLogin';
import UserChangePassword from './pages/UserChangePassword';

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<UserLogin />} />
      <Route path="register" element={<UserRegister />} />
      <Route path="changePassword" element={<UserChangePassword />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
