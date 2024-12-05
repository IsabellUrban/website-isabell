import useEmblaCarousel from "embla-carousel-react";
import styled from "styled-components";
import Autoplay from "embla-carousel-autoplay";
import ClassNames from "embla-carousel-class-names";
import { useCallback, useState } from "react";
import ArrowLeft from "@/public/icons/Arrow-left.svg";
import ArrowRight from "@/public/icons/Arrow-right.svg";
import Image from "next/image";
import ImageModal from "../ImageModal/ImageModal";

export default function EmblaCarousel({images}) {
const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
  Autoplay({ delay: 4000 }),
  ClassNames(),
]);

      const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
      }, [emblaApi]);

      const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
      }, [emblaApi]);

const [selectedTitle, setSelectedTitle] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false);

const filteredImages = images.filter((image) => image.title === selectedTitle);

function handleImageClick (title) {
  setSelectedTitle(title);
  setIsModalOpen(true);
};



  return (
    <div>
      <ViewportEmblaCarousel ref={emblaRef}>
        <ContentContainer>
          {images.map((image) => (
            <StyledSlide key={image.id} onClick={() => handleImageClick(image.title)}>
              <StyledImage
                src={image.src}
                alt={image.alt}
                fill
                priority={image.id === 1}
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

      <ImageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} images={filteredImages} />
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
  height: 500px;
  width: 100%;

  @media (max-width: 768px) {
    height: 300px;
  }
`;
const ButtonContainer = styled.div`
  position: absolute;
  left: 8px;
  right: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const StyledButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--white);
  border-radius: 50%;
  border-style: none;
  cursor: pointer;
  pointer-events: auto;
  transition: all 0.2s ease;

  &:hover {
    background: var(--yellow);
    opacity: 0.8;
    outline: none;
  }

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
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

