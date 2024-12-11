import styled from "styled-components";
import Image from "next/image";
import { GridMain, GridItem } from "@/styles/grid";
import HeroSection from "@/components/HeroSection/HeroSection";
import CardSection from "@/components/CardSection/CardSection";
import Profilbild02 from "@/public/images/Profilbild02.jpg";
import hintergrund03 from "@/public/images/hintergrund03.jpg";
import macbook from "@/public/images/macbook.jpg";
import grafik from "@/public/images/grafik.png";
import web from "@/public/images/web.png";
import TextSection from "@/components/TextSection/TextSection";
import AnimatedBackground from "@/components/AnimatedBackground/AnimatedBackground";

import { motion } from "motion/react";

export default function HomePage() {
  return (
    <Layout>
      <AnimatedBackground />
      <GridMain>
        <GridItem
          $colSpan="1 / span 4"
          $colSpanMd="3 / span 5"
          $rowSpan="1"
          $rowSpanMd="1 / span 2"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <HeroSection
              image={Profilbild02}
              title="Hi I'm Isabell"
              subtitle="Frontend Web Developer and Graphic Designer with a passion for creating beautiful and functional designs."
            />
          </motion.div>
        </GridItem>

        <GridItem
          $colSpan="1 / span 4"
          $colSpanMd="1 / span 10"
          $rowSpan="4"
          $rowSpanMd="5 / span 2"
        >
          <TextSection
            image={macbook}
            title={`Nice to meet you!`}
            subheadline={`Something about me:`}
            text={`I'm an accomplished designer with over a decade of experience in the field. I've worked as a freelancer in both Wellington, New Zealand, and Vancouver, Canada.

I recently completed an intensive web development bootcamp at Neue Fische, where I learned to code and merged my creative and technical expertise.

My design background and eye for detail make me perfect for web development. 

I am excited to build user-friendly digital experiences that balance functionality with style.

Clean code, beautiful design and a seamless user experience are key. If you're looking for creative and tech-savvy, let's connect!`}
          />
        </GridItem>

        <GridItem
          $colSpan="1 / span 4"
          $colSpanMd="2 / span 4"
          $rowSpan="5"
          $rowSpanMd="7 / span 3"
        >
          <CardSection
            image={grafik}
            title="Graphic Design"
            subtitle="Dive into my graphic design portfolio to uncover creative projects!"
            href="/graphic"
          />
        </GridItem>
        <GridItem
          $colSpan="1 / span 4"
          $colSpanMd="6 / span 4"
          $rowSpan="6"
          $rowSpanMd="7 / span 3"
        >
          <CardSection
            image={web}
            title="Web Development"
            subtitle="Check out my portfolio to see examples of my web development work and coding skills."
            href="/webdevelopment"
          />
        </GridItem>
      </GridMain>
    </Layout>
  );
}

const Layout = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`;

const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;`

const StyledBackground = styled(Image)`
  visibility: hidden;
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    visibility: visible;
    object-fit: cover;
    opacity: 0.25;
    z-index: 1;
  }
`;

