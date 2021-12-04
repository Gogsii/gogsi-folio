import React, {useEffect} from 'react';
import { AiFillGithub, AiFillCodepenCircle, AiFillLinkedin } from 'react-icons/ai';
import { DiYeoman } from 'react-icons/di';
import Link from 'next/link';
import { Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';


const scrollToTop = () => {
    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
    }), []
  })};

const NavBar = () => {
    return (
    <>
    <Div1>
        <Link href='/'>
          <a style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
            <DiYeoman size='3rem' />
          </a>
        </Link>
    </Div1>
    <Div2>
        <li>
          <Link href='#projects' onClick={scrollToTop()}>
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href='#tech'>
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        {/* <li>
          <Link href='#about' >
            <NavLink>About</NavLink>
          </Link>
        </li> */}
    </Div2>
    <Div3>
        <SocialIcons href='https://github.com/Gogsii'>
          <AiFillGithub size='3rem' />
        </SocialIcons>
        <SocialIcons href='https://www.linkedin.com/in/dragutinovic/'>
          <AiFillLinkedin size='3rem' />
        </SocialIcons>
        <SocialIcons href='https://codepen.io/gogsi'>
          <AiFillCodepenCircle size='3rem' />
        </SocialIcons>
    </Div3>
    </>
    )
}

export default NavBar;
