import React from 'react';
import { AiFillGithub, AiFillCodepenCircle, AiFillLinkedin } from 'react-icons/ai';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, LinkTitleIcons, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Phone</LinkTitle>
          <LinkItem href='tel: 440-390-1912'>Call me</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:dragutinovic.g@gmail.com'>Email Me</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitleIcons>Follow</LinkTitleIcons>
          <SocialIconsContainer>
            {/* <CompanyContainer>
              <Slogan>Innovation one project at a time</Slogan>
            </CompanyContainer> */}
            <SocialContainer>
              <SocialIcons href='https://github.com/Gogsii'>
                <AiFillGithub size='3rem' />
              </SocialIcons>
              <SocialIcons href='https://www.linkedin.com/in/dragutinovic/'>
                <AiFillLinkedin size='3rem' />
              </SocialIcons>
              <SocialIcons href='https://codepen.io/gogsi'>
                <AiFillCodepenCircle size='3rem' />
              </SocialIcons>
            </SocialContainer>
          </SocialIconsContainer>
        </LinkColumn>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
