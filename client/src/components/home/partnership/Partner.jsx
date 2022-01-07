import styled from "styled-components";
import { motion } from "framer-motion";
import Office from "../../../img/office.webp";

const Partner = ({ partnerControls, partnerRef }) => {
  const animText = {
    from: {
      x: "-200%",
      opacity: 0,
      transition: {
        duration: 1,
        ease: "circIn",
      },
    },
    to: {
      x: "0%",
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "circOut",
      },
    },
  };

  const animImg = {
    from: {
      x: "200%",
      opacity: 0,
      scale: 2,
      transition: {
        duration: 1,
        ease: "circIn",
      },
    },
    to: {
      x: "0%",
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "circOut",
      },
    },
  };

  return (
    <MainSection id="partnership" ref={partnerRef}>
      <TextBlock variants={animText} animate={partnerControls}>
        <Heading>Partnership</Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
          in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </TextBlock>
      <ImgBlock variants={animImg} animate={partnerControls}>
        <Img src={Office} alt="our office" />
      </ImgBlock>
    </MainSection>
  );
};

export default Partner;

const MainSection = styled(motion.section)`
  position: relative;
  overflow: hidden;
  background: var(--lighter-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  scroll-snap-align: start;

  @media (min-width: 1024px) {
    height: 100%;
    flex-direction: row;
  }
`;

const TextBlock = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  padding-top: 2rem;

  @media (min-width: 1024px) {
    flex: 1;
    height: 100%;
  }
`;

const Heading = styled(motion.h2)`
  font-size: 2rem;
  margin-bottom: 2rem;

  @media (min-width: 1024px) {
    text-align: center;
  }

  @media (min-width: 1200px) {
    margin-bottom: 3rem;
  }
`;

const Text = styled(motion.p)`
  margin-bottom: 2rem;
  line-height: 1.5;
  font-size: 1.1rem;

  &:last-of-type {
    margin-bottom: 2rem;
  }

  @media (min-width: 1024px) {
    font-size: 1rem;
  }

  @media (min-width: 1200px) {
    padding: 1rem;
  }
`;

const ImgBlock = styled(motion.div)`
  /* flex: 1; */
  height: 35rem;
  overflow: hidden;

  @media (min-width: 1024px) {
    flex: 1;
    height: 100%;
  }
`;

const Img = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
