import styled from "styled-components";
import Image from "next/image";
import X from "@/public/icons/X.svg";
import { useState } from "react";
import { motion } from "motion/react";

export default function ImageModal({ isOpen, onClose, project }) {
  const [zoomedImage, setZoomedImage] = useState(null);

  if (!isOpen || !project) return null;

  function handleZoomImage(mediaItem) {
    setZoomedImage(mediaItem);
  }

  return (
    <ModalOverlay onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
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
            {project.media.map((media) => (
              <ImageWrapper
                key={media.id}
                className={media.layout}
                onClick={() => handleZoomImage(media)}
              >
                {media.type === "video" ? (
                  <StyledVideo controls loop muted autoPlay>
                    <source src={media.src} type="video/mp4" />
                    Dein Browser unterstützt dieses Videoformat nicht.
                  </StyledVideo>
                ) : (
                  <StyledImage
                    src={media.src}
                    alt={media.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                )}
              </ImageWrapper>
            ))}
          </ImageGrid>

          {zoomedImage && (
            <ZoomedImageOverlay>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, type: "tween"  }}
              >
                <ZoomedImageWrapper onClick={() => setZoomedImage(null)}>
                  {zoomedImage.type === "video" ? (
                    <StyledVideo controls loop muted autoPlay>
                      <source src={zoomedImage.src} type="video/mp4" />
                      Dein Browser unterstützt dieses Videoformat nicht.
                    </StyledVideo>
                  ) : (
                    <StyledZoomedImage
                      src={zoomedImage.src}
                      alt={zoomedImage.alt}
                      fill
                      sizes="90vw"
                    />
                  )}
                </ZoomedImageWrapper>
              </motion.div>
            </ZoomedImageOverlay>
          )}
        </ModalContent>
      </motion.div>
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
  cursor: pointer;
`;

const ModalContent = styled.div`
  background: var(--black);
  padding: 20px;
  top: 9vh;
  border-radius: 0 10px 0 10px;
  width: 90%;
  height: 90%;
  max-width: 1200px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;

  @media (min-width: 768px) {
    top: 9vh;
  }
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
  font-size: 1.5rem;
  text-align: center;
  margin: 0;
  flex-grow: 1;
  overflow: hidden;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const StyledSubheadline = styled.p`
  font: var(--sub-headline);
  color: var(--white);
  font-size: 1rem;
  text-align: center;
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
  padding: 20px 0px 0px 0px;
  flex-grow: 1;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 20px 50px 0px 50px;
    font-size: 1rem;
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 125px;
  gap: 20px;
  padding: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 200px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--white);

  &.wide {
    grid-column: span 2;
  }

  &.large {
    grid-column: span 2;
    grid-row: span 2;
  }

  &.tall {
    grid-row: span 2;
  }

  @media (min-width: 768px) {
    &.dektop-wide {
      grid-column: span 2;
    }

    &.dektop-large {
      grid-column: span 2;
      grid-row: span 2;
    }

    &.desktop-tall {
      grid-row: span 3;
    }
  }

  &:hover {
    transform: scale(1.05);
    transition: all 0.3s ease;
  }
`;

const StyledImage = styled(Image)`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ZoomedImageOverlay = styled(ModalOverlay)`
  background: rgba(0, 0, 0, 0.95);
  z-index: 1010;
`;

const ZoomedImageWrapper = styled.div`
  position: relative;
  display: flex;
  top: 9vh;
  align-items: center;
  justify-content: center;
  width: 80vw;
  height: 80vh;
  cursor: pointer;
`;

const StyledZoomedImage = styled(Image)`
  object-fit: contain;
`;