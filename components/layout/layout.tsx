import React from "react";
import { Fragment, ReactNode } from "react";
import MainNavigation from "./main-navigation";

type LayoutProps = {
  children: ReactNode;
};

function Layout(props: LayoutProps) {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
