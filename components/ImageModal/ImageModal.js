import styled from "styled-components";
import Image from "next/image";
import X from "@/public/icons/X.svg";

export default function ImageModal({isOpen, onClose, project}) {
 if (!isOpen || !project) return null;

 return (
   <ModalOverlay onClick={onClose}>
     <ModalContent onClick={(event) => event.stopPropagation()}>
       <IconWrapper onClick={onClose}>
         <StyledCloseIcon />
       </IconWrapper>
         <StyledTextWrapper>
              <StyledHeadline>{project.title}</StyledHeadline>
              <StyledSubheadline>{project.agency}</StyledSubheadline>
              <StyledText>{project.description}</StyledText>
            </StyledTextWrapper>
       <ImageGrid>
         {project.images.map((image) => (
           <ImageWrapper
             key={image.id}
             className={
               image.id === 0
                 ? "large"
                 : image.id % 3 === 0
                    ? "extralarge"
                    : image.id % 4 === 0
                 ? "wide"
                 : image.id % 5 === 0
                    ? "extrawide"
                    : image.id % 2 === 0
                 ? "tall"
                 : ""
             }
           >
             <StyledImage
               src={image.src}
               alt={image.alt}
               fill
               sizes="(max-width: 768px) 100vw, 33vw"
             />
           </ImageWrapper>
         ))}
       </ImageGrid>
     </ModalContent>
   </ModalOverlay>
 );
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: var(--black);
  top: 9vh;
  padding: 20px;
  border-radius: 0 10px 0 10px;
  width: 90%;
  max-width: 1200px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  z-index: 35;
`;

const StyledCloseIcon = styled(X)`
  display: flex;
  margin-right: 10px;
  width: 22px;
  height: 22px;
  fill: var(--yellow);
`;

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0 1rem 0rem;
`;

const StyledHeadline = styled.h3`
  color: var(--yellow);
  font: var(--main-headline);
  margin: 0;
  flex-grow: 1;
  overflow: hidden;
  text-transform: uppercase;
`;

const StyledSubheadline = styled.p`
  font: var(--sub-headline);
  color: var(--white);
  margin: 0;
  margin-top: 0.5rem;
  flex-grow: 1;
  overflow: hidden;
`;

const StyledText = styled.p`
  font: var(--text);
  color: var(--white);
  text-align: center;
  font-size: 0.8rem;	
  margin: 0;
  margin-top: 0.5rem;
  flex-grow: 1;
  overflow: hidden;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
  gap: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  &.large {
    grid-column: span 2;
    grid-row: span 2;
  }

  &.wide {
    grid-column: span 2;
  }

  &.tall {
    grid-row: span 2;
  }

  @media (min-width: 768px) {
    &.extralarge {
      grid-column: span 4;
      grid-row: span 4;
    }

    &.extrawide {
      grid-column: span 4;
    }
  }
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;