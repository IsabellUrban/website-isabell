import useEmblaCarousel from "embla-carousel-react";
import styled from "styled-components";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useState } from "react";
import ArrowLeft from "@/public/icons/Arrow-left.svg";
import ArrowRight from "@/public/icons/Arrow-right.svg";
import Image from "next/image";
import ImageModal from "../ImageModal/ImageModal";

export default function EmblaCarousel({projects}) {
const [emblaRef, emblaApi] = useEmblaCarousel(
  { loop: true, draggable: true, skipSnaps: false },
  [
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]
);

      const scrollPrev = useCallback((event) => {
        event.preventDefault();
        event.stopPropagation();
        if (emblaApi) emblaApi.scrollPrev();
      }, [emblaApi]);

      const scrollNext = useCallback((event) => {
        event.preventDefault();
        event.stopPropagation();
        if (emblaApi) emblaApi.scrollNext();
      }, [emblaApi]);

const [selectedProject, setSelectedProject] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false);


function handleProjectClick (project) {
  setSelectedProject(project);
  setIsModalOpen(true);
};

 if (!projects || projects.length === 0) {
   return <p>No projects available</p>;
 }

  return (
    <div>
      <ViewportEmblaCarousel ref={emblaRef}>
        <ContentContainer>
          {projects.map((project) => (
            <StyledSlide
              key={project.id}
              onClick={() => handleProjectClick(project)}
            >
              <StyledImage
                src={project.preview}
                alt={`${project.title} preview`}
                fill
                priority={project.id === 1}
              />
            </StyledSlide>
          ))}
        </ContentContainer>
        <ButtonContainer>
          <StyledButton onClick={scrollPrev}>
            <ArrowLeft />
          </StyledButton>
          <StyledButton onClick={scrollNext}>
            <ArrowRight />
          </StyledButton>
        </ButtonContainer>
      </ViewportEmblaCarousel>

      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </div>
  );
}


const ViewportEmblaCarousel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  background-color: var(--black);
  border-radius: 0px 30px 0px 30px;
  padding: 20px;
  position: relative;
  height: 300px;
  width: 100%;

  @media (min-width: 768px) {
    height: 500px;
  }
`;
const ButtonContainer = styled.div`
  position: absolute;
  left: 8px;
  right: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  pointer-events: none;

  @media (min-width: 768px) {
    left: 20px;
    right: 20px;
  }
`;

const StyledButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height:30px;
  background: var(--white);
  border-radius: 50%;
  border-style: none;
  cursor: pointer;
  pointer-events: auto;
  transition: all 0.2s ease;
  z-index: 3;

  &:hover {
    background: var(--yellow);
    opacity: 0.8;
    outline: none;
  }

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const ContentContainer = styled.div`
display: flex;
align-items: center;
height: 100%;
`;

const StyledSlide = styled.div`
  flex: 0 0 100%;
  min-width: 0;
  position: relative;
  height: 100%;
  padding: 20px;
    cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(0.98);
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: unset;
  object-fit: contain;
  object-position: center;
`;

