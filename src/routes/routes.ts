import { lazy, LazyExoticComponent } from "react";
import { ShoppingPage } from "../02-component-patterns/pages/ShoppingPage";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent; //¿Por qué tener la c capitalizada?
  name: string;
}

const Lazy1 = lazy(() => import("../01-lazyload/pages/LazyPage1"));
const Lazy2 = lazy(() => import("../01-lazyload/pages/LazyPage2"));
const Lazy3 = lazy(() => import("../01-lazyload/pages/LazyPage3"));

export const routes: Route[] = [
  {
    to: "/",
    path: "/",
    Component: ShoppingPage,
    name: "Shopping",
  },
  {
    to: "/about",
    path: "about",
    Component: Lazy2,
    name: "About",
  },
  {
    to: "/users",
    path: "users",
    Component: Lazy3,
    name: "Users",
  },
];
