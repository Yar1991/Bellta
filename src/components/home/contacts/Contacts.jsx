import styled from "styled-components";
import { motion } from "framer-motion";
import MapImg from "../../../img/map.webp";
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";

const Contacts = ({ screenSize, contactsRef, contactsControls }) => {
  const animHideBox = {
    from: {
      x: "0%",
      transition: {
        duration: 1,
        ease: "circIn",
      },
    },
    to: {
      x: "-150%",
      transition: {
        duration: 3,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  const animBlock = {
    from: {
      scale: 0.6,
      transition: {
        duration: 1,
        ease: "circIn",
      },
    },
    to: {
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "circOut",
        delay: 0.3,
      },
    },
  };

  const animTextBlock = {
    from: {
      opacity: 0,
      scale: 0.6,
      x: "-200%",
      transition: {
        duration: 1,
        ease: "circIn",
      },
    },
    to: {
      opacity: 1,
      scale: 1,
      x: "0%",
      transition: {
        duration: 1.5,
        ease: "circOut",
        delay: 0.3,
      },
    },
  };

  const animSocials = {
    from: {
      opacity: 0,
      y: "200%",
      transition: {
        duration: 1,
        ease: "easeIn",
      },
    },
    to: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 1,
      },
    },
  };

  const animFooterText = {
    from: {
      opacity: 0,
      y: "200%",
      transition: {
        duration: 1,
        ease: "easeIn",
      },
    },
    to: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 1.5,
      },
    },
  };

  return (
    <MainSection id="contacts" ref={contactsRef}>
      <DarkBlock screenSize={screenSize} />
      <HideBlock variants={animHideBox} animate={contactsControls} />
      <InfoWrapper>
        <InfoBlock variants={animTextBlock} animate={contactsControls}>
          <InfoContacts>
            <Heading>Contacts</Heading>
            <Address>2776 Scott Street, NY</Address>
            <Email>bellta@gmail.com</Email>
            <Phone>845-536-5150</Phone>
          </InfoContacts>
          <MapBlock>
            <Map src={MapImg} alt="map" />
          </MapBlock>
        </InfoBlock>
        <Form variants={animBlock} animate={contactsControls}>
          <FormBlock>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormEmail type="email" name="email" id="email" required />
          </FormBlock>
          <FormBlock>
            <FormLabel htmlFor="message">Message</FormLabel>
            <FormMessage name="message" id="message" rows={10}></FormMessage>
          </FormBlock>
          <FormBtn type="submit">Send</FormBtn>
        </Form>
      </InfoWrapper>
      <Footer>
        <Icons variants={animSocials} animate={contactsControls}>
          <FooterLink
            href="https://facebook.com"
            title="facebook"
            target="_blank"
          >
            <FiFacebook />
          </FooterLink>
          <FooterLink
            href="https://instagram.com"
            title="instagram"
            target="_blank"
          >
            <FiInstagram />
          </FooterLink>
          <FooterLink
            href="https://twitter.com"
            title="twitter"
            target="_blank"
          >
            <FiTwitter />
          </FooterLink>
          <FooterLink
            href="https://youtube.com"
            title="youtube"
            target="_blank"
          >
            <FiYoutube />
          </FooterLink>
        </Icons>
        <FooterText variants={animFooterText} animate={contactsControls}>
          All rights reserved &copy; {new Date().getFullYear()}
        </FooterText>
      </Footer>
    </MainSection>
  );
};

export default Contacts;

const MainSection = styled(motion.section)`
  position: relative;
  overflow: hidden;
  background: var(--main-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  scroll-snap-align: start;

  @media (min-width: 1024px) {
    height: 100%;
  }
`;

const DarkBlock = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${({ screenSize }) => (screenSize === "desktop" ? "20%" : "0%")};
  background: var(--main-color);
  z-index: 1;
`;

const HideBlock = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  inset: 0;
  background: var(--main-color);
  z-index: 3;
`;

const InfoWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background: var(--lighter-color);

  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 1rem;
  }
`;

const InfoBlock = styled(motion.div)`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  will-change: transform;

  @media (min-width: 1024px) {
    flex: 1;
  }

  @media (min-width: 1200px) {
    align-items: center;
  }
`;

const InfoContacts = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-bottom: 1rem;

  @media (min-width: 1024px) {
    padding-top: 0;
  }

  @media (min-width: 1200px) {
    margin-left: 4rem;
  }
`;

const Heading = styled(motion.h2)`
  font-size: 2rem;
  margin-top: 2rem;
`;

const Address = styled(motion.h4)`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  transform: translateY(3rem);
`;

const Email = styled(motion.p)`
  font-weight: 500;
  font-size: 1.05rem;
  transform: translateY(3rem);
`;

const Phone = styled(motion.p)`
  font-weight: 500;
  font-size: 1.05rem;
  transform: translateY(3rem);
`;

const MapBlock = styled(motion.div)`
  position: relative;
  padding: 1rem;
  width: 100%;
  height: 20rem;
  overflow: hidden;
  margin-bottom: 3rem;
  margin-top: 2rem;

  @media (min-width: 760px) {
    width: 50%;
    height: 22rem;
  }

  @media (min-width: 1024px) {
    width: 80%;
    height: 20rem;
  }

  @media (min-width: 1200px) {
    width: 50%;
    top: 7rem;
    margin-top: 0;
  }
`;

const Map = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0 0 10px hsl(0 0% 0% / 0.4);
`;

const Form = styled(motion.form)`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 1rem;
  margin-bottom: 3rem;
  will-change: transform;

  @media (min-width: 1024px) {
    flex: 1;
    align-self: flex-end;
  }
`;

const FormBlock = styled(motion.div)`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 1rem;

  &:last-of-type {
    margin-bottom: 2rem;
  }

  @media (min-width: 1200px) {
    width: 80%;
    align-self: flex-start;
  }
`;

const FormLabel = styled(motion.label)`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const FormEmail = styled(motion.input)`
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 100%;
  border: none;
  border-radius: 0.5rem;
  padding: 0.3rem;
  font-size: inherit;
  font-family: inherit;
  box-shadow: 0 0 10px hsl(0 0% 0% / 0.3);
`;

const FormMessage = styled(motion.textarea)`
  -webkit-appearance: none;
  -moz-appearance: none;
  max-width: 100%;
  border: none;
  border-radius: 0.5rem;
  padding: 0.3rem;
  font-size: inherit;
  font-family: inherit;
  box-shadow: 0 0 10px hsl(0 0% 0% / 0.3);
`;

const FormBtn = styled(motion.button)`
  border: none;
  background: var(--main-color);
  color: var(--light-color);
  border-radius: 0.5rem;
  padding: 0.5rem 2.5rem;
  cursor: pointer;
  font-size: inherit;
  font-family: inherit;
  box-shadow: 2px 4px 2px hsl(0 0% 0% / 0.4);
  transition: box-shadow 0.2s ease, opacity 0.3s ease;
  align-self: flex-start;

  &:hover {
    opacity: 0.9;
  }
  &:active {
    box-shadow: 1px 1px 1px hsl(0 0% 0% / 0.4);
  }

  @media (min-width: 1200px) {
    align-self: flex-start;
  }
`;

const Footer = styled(motion.footer)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  padding-top: 2rem;

  @media (min-width: 1024px) {
    align-items: flex-end;
    margin-bottom: 4rem;
  }
`;

const Icons = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 2rem;
  overflow: hidden;
  padding: 0.5rem 0rem;

  & svg {
    color: var(--lighter-color);
    font-size: 2.5rem;
    stroke-width: 1px;
  }

  @media (min-width: 1024px) {
    justify-content: flex-end;
  }
`;

const FooterLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    margin-right: 2rem;
    transition: opacity 0.4s ease, transform 0.4s ease;
    will-change: transform;

    &:last-of-type {
      margin-right: 1rem;
    }

    &:hover {
      opacity: 0.9;
      transform: scale(1.2);
    }
  }
`;

const FooterText = styled(motion.a)`
  color: var(--light-color);
  font-size: 0.9rem;
  will-change: transform;

  @media (min-width: 1024px) {
    margin-right: 1rem;
  }
`;
