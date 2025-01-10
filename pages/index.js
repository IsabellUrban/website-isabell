import styled from "styled-components";
import { GridMain, GridItem } from "@/styles/grid";
import HeroSection from "@/components/HeroSection/HeroSection";
import CardSection from "@/components/CardSection/CardSection";
import Profilbild02 from "@/public/images/Profilbild02.jpg";
import desk from "@/public/images/desk.jpg";
import grafik02 from "@/public/images/grafik02.jpg";
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
              title="Hey, I'm Isabell"
              subtitle="Frontend Web Developer and Graphic Designer with a passion for creating beautiful and functional designs."
              aria-label="Introduction"
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
            image={desk}
            title={`Nice to meet you!`}
            subheadline={`Something about me:`}
            text={`With over a decade of design experience, I've had the chance to work as a freelancer in Berlin (Germany), Wellington (New Zealand), and Vancouver (Canada).
              
I recently completed an intensive web development bootcamp at Neue Fische, where I learned to code and combined my creative skills with technical know-how.

My design background and attention to detail help me create user-friendly digital experiences that look great and work even better. I’m all about clean code, beautiful design, and seamless user experiences.

If you're looking for someone creative and tech-savvy, let's chat!`}
          />
        </GridItem>

        <GridItem
          $colSpan="1 / span 4"
          $colSpanMd="2 / span 4"
          $rowSpan="5"
          $rowSpanMd="7 / span 3"
        >
          <CardSection
            image={grafik02}
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

