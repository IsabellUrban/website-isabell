import styled from "styled-components";
import Image from "next/image";

export default function WebCardSection({ webProjects }) {

if (!webProjects || webProjects.length === 0) {
  return <p>No projects available</p>;
}

  return (
    <StyledCardSection role="region" aria-label="Web Projects">
      {webProjects.map((webProject) => (
        <CardContentContainer
          key={webProject.id}
          $highlight={webProject.highlight}
          role="article"
        >
          <HeaderWrapper>
            <ImageWrapper>
              <StyledImage
                src={webProject.image}
                alt={`${webProject.title} project thumbnail`}
                fill
                sizes="100px"
              />
            </ImageWrapper>
            <TitleRoleWrapper>
              <StyledHeadline $highlight={webProject.highlight}>
                {webProject.title}
              </StyledHeadline>
              <StyledRole $highlight={webProject.highlight}>
                {webProject.role}
              </StyledRole>
            </TitleRoleWrapper>
          </HeaderWrapper>
          <ContentWrapper>
            <StyledToolsList>
              {webProject.tools.map((tool) => (
                <StyledTool key={tool}>{tool}</StyledTool>
              ))}
            </StyledToolsList>
            <StyledText>{webProject.text}</StyledText>
            <ButtonWrapper>
              <StyledButton
                href={webProject.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Project Website
              </StyledButton>
              <StyledButton
                href={webProject.repository}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </StyledButton>
            </ButtonWrapper>
          </ContentWrapper>
        </CardContentContainer>
      ))}
    </StyledCardSection>
  );
}

const StyledCardSection = styled.section`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: max-content;

  @media (min-width: 768px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

const CardContentContainer = styled.article`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem 2rem 1rem;
  gap: 1rem;
  border-radius: 0px 50px 0px 50px;
  grid-column: span 2;
  background-color: var(--light-grey);
  transition: transform 0.3s ease, box-shadow 0.3s ease;


  ${({ $highlight }) =>
    $highlight &&
    `
    background-color: var(--rosa);

    @media (min-width: 768px) {
    grid-column: span 4;
    }
  `}
`;


const HeaderWrapper = styled.header`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`;

const TitleRoleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.5rem 0 0 0;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ImageWrapper = styled.div`
  position: relative;
  align-self: center;
  width: 100px;
  height: 100px;
  flex-shrink: 0;
  background-color: var(--white);
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: fill;
  padding: 0.5rem;
  

  @media (min-width: 768px) {
    max-width: 100px;
  }
`;

const StyledHeadline = styled.h2`
  color: var(--black);
  font: var(--main-headline);
  font-size: 1.2rem;
  margin: 0;
  flex-grow: 1;
  overflow: hidden;

  ${({ $highlight }) =>
    $highlight &&
    `
    @media (min-width: 768px) {
    font-size: 1.75rem;
    }
  `}
`;

const StyledRole = styled.h3`
  font: var(--sub-headline);
  font-size: 0.9rem;
  margin: 0;
  margin-top: 0.5rem;
  flex-grow: 1;
  overflow: hidden;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  ${({ $highlight }) =>
    $highlight &&
    `
    @media (min-width: 768px) {
    font-size: 1.1rem;
    }
  `}
`;

const StyledToolsList = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 12px 0;
  display: flex;
  justify-content: flex-start;
  gap: 8px 8px;
`;

const StyledTool = styled.li`
  font: var(--text);
  font-size: 0.8rem;
  background-color: var(--yellow);
  border-radius: 10px;
  padding: 5px;
  text-align: center;
  color: var(--black);
  list-style: none;
`;

const StyledText = styled.p`
  font: var(--sub-headline);
  font-size: 0.9rem;
  margin: 0;
  margin-top: 0.5rem;
  flex-grow: 1;
  overflow: hidden;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const StyledButton = styled.a`
  padding: 0.5rem 1rem;
  background-color: var(--yellow);
  color: var(--black);
  text-decoration: none;
  border-radius: 4px;
  font: var(--text);
  font-weight: 500;
  font-size: 0.8rem;

  &:hover {
    background-color: var(--black);
    color: var(--yellow);
    font-weight: 700;
    transform: scale(1.05);
    transition: all 0.3s ease;
  }
`;



