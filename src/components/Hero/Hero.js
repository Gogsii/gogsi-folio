import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am a Javascript enthusiast versed in React, Node, Mongo DB and Express. I am looking for an entry-level soft dev role.
      </SectionText>
      <Button onClick={() => window.location ='#about'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;