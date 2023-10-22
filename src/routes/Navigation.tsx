import {
  NavLink,
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import logo from "../logo.svg";
import { routes } from "./routes";
import { Suspense } from "react";
function Root() {
  // eslint-disable-next-line no-lone-blocks
  {
    /*
        Hacer carga diferida de un componente o un módulo
    */
  }

  return (
    <div className="main-layout">
      <nav>
        <img src={logo} alt="React logo" />
        <ul>
          {routes.map(({ to, name }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: routes.map(({ path, Component }) => ({
      path,
      element: <Component />,
    })),
  },
  {
    path: "/*",
    element: <Navigate to={routes[0].to} replace />,
  },
]);

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};
