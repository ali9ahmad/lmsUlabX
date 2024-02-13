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
import ForgetPassword from './pages/ForgetPassword';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<UserLogin />} />
      <Route path="userRegister" element={<UserRegisterLayout />}>
        <Route index element={<RegisterFirstStep />} />
        <Route path="secondStep" element={<RegisterSecondStep />} />
      </Route>
      <Route path="forgotPassword" element={<ForgetPassword />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
