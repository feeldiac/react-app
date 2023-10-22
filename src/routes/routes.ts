import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent; //¿Por qué tener la c capitalizada?
  name: string;
}

const LazyLayout = lazy(() => import("../01-lazyload/layout/LazyLayout"));
const Lazy1 = lazy(() => import("../01-lazyload/pages/LazyPage1"));
const Lazy2 = lazy(() => import("../01-lazyload/pages/LazyPage2"));
const Lazy3 = lazy(() => import("../01-lazyload/pages/LazyPage3"));

export const routes: Route[] = [
  //   {
  //     to: "/lazy1",
  //     path: "lazy1",
  //     Component: Lazy1,
  //     name: "Lazy 1",
  //   },
  //   {
  //     to: "/lazy2",
  //     path: "lazy2",
  //     Component: Lazy2,
  //     name: "Lazy 2",
  //   },
  //   {
  //     to: "/lazy3",
  //     path: "lazy3",
  //     Component: Lazy3,
  //     name: "Lazy 3",
  //   },
  {
    path: "/lazylayout/*",
    to: "/lazylayout/",
    Component: LazyLayout,
    name: "Lazy Layout",
  },
  {
    path: "no-lazy",
    to: "/no-lazy",
    Component: NoLazy,
    name: "Lazy 3",
  },
];
