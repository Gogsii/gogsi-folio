import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents/index';
// import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
  <Section row nopadding >
    <LeftSection>
      <SectionTitle main center>
        Hello, I'm
          <br />
        Goran Dragutinović
      </SectionTitle>
      <SectionText>
        A digital entrepreneur and a Javascript enthusiast versed in React, Node, MongoDB and Express. 
      </SectionText>
      {/* <Button onClick={() => window.location ='#about'}>Learn More</Button> */}
    </LeftSection>
  </Section>
  </>
);

export default Hero;