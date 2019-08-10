import React from 'react';
import { Holder, Header, HeaderItem } from '../components/layoutComponents';
import { ClassNames } from '@emotion/core';

const Layout: React.FC = ({ children }) => (
  <Holder>
    <Header>
      Basixblog
      <ClassNames>
        {({ css }) => (
          <HeaderItem to="/posts" activeClassName={css({ color: '#30bfef' })}>
            Posts
          </HeaderItem>
        )}
      </ClassNames>
    </Header>
    {children}
  </Holder>
);

export default Layout;
