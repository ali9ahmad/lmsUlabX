import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import UserLogin from './pages/UserLogin';
import RootLayout from './layouts/RootLayout';
import UserRegisterLayout from './layouts/UserRegisterLayout';
import RegisterFirstStep from './components/userRegister/RegisterFirstStep';
import RegisterSecondStep from './components/userRegister/RegisterSecondStep';
import ForgotPassword from './pages/ForgotPassword';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<UserLogin />} />
      <Route path="userRegister" element={<UserRegisterLayout />}>
        <Route index element={<RegisterFirstStep />} />
        <Route path="secondStep" element={<RegisterSecondStep />} />
      </Route>
      <Route path="forgotPassword" element={<ForgotPassword />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
