import { Outlet, NavLink } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div>
      {/* <header>
        <nav>
          <NavLink to="userRegister">UserRegister</NavLink>
          <NavLink to="userLogin">UserLogin</NavLink>
        </nav>
      </header> */}
      <Outlet />
    </div>
  );
}
