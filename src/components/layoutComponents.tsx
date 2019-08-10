import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

export const Holder = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  background-color: #eee;
`;
export const Header = styled.header`
  width: 100%;
  display: flex;
  background-color: black;
  height: 60px;

  line-height: 60px; /* vertically centre */
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 2rem;

  padding-left: 0.2rem;
`;
export const HeaderItem = styled(Link)`
  display: block;
  height: 100%;
  text-decoration-line: none;
  color: white;
  font-size: 1rem;
  margin-right: .5rem;
  &:first-child {
    margin-left: auto;
  }
`;
