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
      I've worked primarily with JavaScript and the MERN stack. I have also been working with WordPress for 10 years and have experience with HTML and CSS, as well as a good understanding of PHP.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='5rem' />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              JS, React.js, HTML, CSS.
            </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='5rem' />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              Node.js, Express and MongoDB
            </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDebian size='5rem' />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
            <ListParagraph>
              Experience with <br />
              tools like Figma, Adobe PS and AI.
            </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
