import React from 'react';
import { Holder, Header, HeaderItem } from '../components/layoutComponents';

const Layout: React.FC = ({ children }) => (
  <Holder>
    <Header>
      Basixblog
      <HeaderItem to="/posts">
        Posts
      </HeaderItem>
    </Header>
    {children}
  </Holder>
)

export default Layout