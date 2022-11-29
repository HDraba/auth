import { Fragment, PropsWithChildren } from 'react';

import MainNavigation from './MainNavigation';

const Layout = (props: PropsWithChildren) => {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
