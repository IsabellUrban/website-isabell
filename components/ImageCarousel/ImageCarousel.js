import useEmblaCarousel from "embla-carousel-react";
import styled from "styled-components";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";
import ArrowLeft from "@/public/icons/Arrow-left.svg";
import ArrowRight from "@/public/icons/Arrow-right.svg";
import grafik from "@/public/images/grafik.png";
import web from "@/public/images/web.png";
import Image from "next/image";

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, 
    [Autoplay({delay: 5000})]);

      const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
      }, [emblaApi]);

      const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
      }, [emblaApi]);

  return (
    <div>
      <ViewportEmblaCarousel ref={emblaRef}>
        <ContentContainer>
          <StyledSlide>
            <Image src={grafik} alt="grafik" />
          </StyledSlide>
          <StyledSlide>
            <Image src={web} alt="web" />
          </StyledSlide>
        </ContentContainer>
      </ViewportEmblaCarousel>
      <ButtonContainer>
        <StyledButton onClick={scrollPrev}>
          <ArrowLeft />
        </StyledButton>
        <StyledButton onClick={scrollNext}>
          <ArrowRight />
        </StyledButton>
      </ButtonContainer>
    </div>
  );
}


const ViewportEmblaCarousel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  background-color: var(--black);
  padding: 20px;
  padding-top: 0;
  position: relative;
  height: 500px;

  @media (max-width: 768px) {
    height: 300px;
  }
`;
const ButtonContainer = styled.div`
  position: absolute;
  top: 250px;
  left: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 0 10px;
    top: 150px;
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
`;

const StyledSlide = styled.div`
  flex: 0 0 100%;
  min-width: 0;
  align-items: center;
`;

