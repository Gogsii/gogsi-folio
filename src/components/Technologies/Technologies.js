import React from 'react';
import { DiFirebase, DiReact, DiDebian } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider divider />
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked primarily with JavaScript and the MERN stack. I have also been working with WordPress for 10 years and can read php.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              React.js, HTML, CSS.
            </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              Node.js and Databases
            </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDebian size='3rem' />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
            <ListParagraph>
              Experience with <br />
              tools like Figma, Adobe PSD and AI.
            </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
