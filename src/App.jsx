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
import UserForgotPassLayout from './layouts/UserForgotPassLayout';
import ForPasswordFirstSt from './components/userForgotPassword/ForPasswordFirstSt';
import ForPasswordSecondSt from './components/userForgotPassword/ForPasswordSecondSt';
import CreateNewPassword from './components/userForgotPassword/CreateNewPassword';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<UserLogin />} />
      <Route path="userRegister" element={<UserRegisterLayout />}>
        <Route index element={<RegisterFirstStep />} />
        <Route path="secondStep" element={<RegisterSecondStep />} />
      </Route>
      <Route path="forgotPassword" element={<UserForgotPassLayout />}>
        <Route index element={<ForPasswordFirstSt />} />
        <Route path="passwordConfirm" element={<ForPasswordSecondSt />} />
        <Route path="createNewPassword" element={<CreateNewPassword />} />
      </Route>
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
