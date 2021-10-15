import React, {useEffect} from 'react';
import NavBar from './NavBar';
import GoTop from '../ScrollTopArrow/ScrollArrow';
import { Container } from './HeaderStyles';

const scrollToTop = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
  }), []
})};

const Header = () =>  (
  <Container>
      <NavBar />
      <GoTop />
  </Container>

);

export default Header;
