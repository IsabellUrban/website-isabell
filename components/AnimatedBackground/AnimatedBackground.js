import styled from "styled-components";
import Image from "next/image";
import { motion } from "motion/react";

export default function AnimatedBackground() {
  return (
    <Wrapper>
      <AnimatedGraphic
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{ top: "50%", left: "75%" }}
      >
        <Image
          src="/icons/Graphic01.svg"
          alt="Decorative graphic"
          width={350}
          height={350}
        />
      </AnimatedGraphic>

      <AnimatedGraphic
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        style={{ top: "8%", left: "65%" }}
      >
        <Image
          src="/icons/Graphic04.svg"
          alt="Decorative graphic"
          width={200}
          height={200}
        />
      </AnimatedGraphic>

      <AnimatedGraphic
        initial={{ y: 200, opacity: 1 }}
        animate={{ y: 60, opacity: 0.25 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        style={{ bottom: "13%", left: "8%" }}
      >
        <Image
          src="/icons/Graphic06.svg"
          alt="Decorative graphic"
          width={400}
          height={400}
        />
      </AnimatedGraphic>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 9vh;
  left: 0;
  width: 100%;
  height: 600px;
  pointer-events: none;
  z-index: 1;
`;

const AnimatedGraphic = styled(motion.div)`
  position: absolute;
  z-index: 0;

    @media (max-width: 768px) {
        display: none;
        }
`;
