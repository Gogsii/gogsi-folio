import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id='projects'>
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({ id, image, title, description, source, tags, visit }) => (
        <BlogCard key={id}>
          {/* <Img src={image} /> */}
          <TitleContent>
            <HeaderThree>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent style={{marginTop: 15, color: '#9cc9e3' }}>Built using:</TitleContent>
            <TagList>
              {tags.map((tags, index) => (
                <Tag key={index}>{tags}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
                { visit ?
                  <ExternalLinks href={visit}>Demo</ExternalLinks>
                  : ''
                }
                {source ? 
                  <ExternalLinks href={source}>Code</ExternalLinks>
                  : ''
                }
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>

);

export default Projects;