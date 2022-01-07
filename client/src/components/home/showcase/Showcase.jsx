import styled from "styled-components";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import BackImg from "../../../img/bg.webp";
import LogoSvg from "../../../img/logo-btn.svg";
import { CgMenuRightAlt } from "react-icons/cg";
import { AiOutlineDoubleRight } from "react-icons/ai";

const Showcase = ({
  reference,
  inView,
  isOpen,
  setIsOpen,
  screenSize,
  wrapperRef,
  showcaseRef,
  contentShapeControls,
  mainBgControls,
}) => {
  useEffect(() => {
    if (inView && screenSize === "desktop") {
      setIsOpen(true);
    }
    if (!inView && screenSize === "desktop") {
      setIsOpen(false);
    }
  }, [inView]);

  const animLogo = {
    from: {
      opacity: 0,
      transition: {
        duration: 1,
        ease: "circIn",
      },
    },
    to: {
      opacity: 1,
      transition: {
        delay: 1,
        duration: 1,
        ease: "circOut",
      },
    },
  };

  const animLinks = {
    from: {
      opacity: 0,
      y: `${screenSize === "desktop" && inView ? "-20rem" : "0rem"}`,
      x: `${screenSize === "desktop" && inView ? "0rem" : "100%"}`,
      transition: {
        duration: 1,
        ease: "circIn",
      },
    },
    to: {
      opacity: 1,
      x: `0%`,
      y: `0rem`,
      transition: {
        duration: 1,
        ease: "circOut",
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const animLink = {
    from: {
      opacity: 0,
      x: "5rem",
      transition: {
        duration: 0.8,
        ease: "circIn",
      },
    },
    to: {
      opacity: 1,
      x: "0rem",
      transition: {
        duration: 0.8,
        ease: "circOut",
      },
    },
  };

  const animMenuBtn = {
    from: {
      rotateY: "0deg",
      transition: {
        duration: 0.4,
        ease: "circIn",
      },
    },
    to: {
      rotateY: "180deg",
      transition: {
        duration: 0.2,
        ease: "circOut",
      },
    },
  };

  const animContentShape = {
    from: {
      opacity: 0,
      x: "-150%",
      transition: {
        duration: 1,
        ease: "circIn",
      },
    },
    to: {
      opacity: 1,
      x: `${screenSize === "mobile" ? "-15%" : "0%"}`,
      transition: {
        duration: 1,
        ease: "circOut",
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const animContentChild = {
    from: {
      opacity: 0,
      x: "-100%",
      transition: {
        duration: 0.8,
        ease: "circIn",
      },
    },
    to: {
      opacity: 1,
      x: "0%",
      transition: {
        duration: 0.8,
        ease: "circOut",
      },
    },
  };

  const animMain = {
    from: {
      scale: 1.5,
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
      },
    },
  };

  const menuHandler = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <MainSection ref={showcaseRef}>
      <Wrapper ref={wrapperRef}>
        <BgImage variants={animMain} animate={mainBgControls} initial="from" />
        <Nav>
          <LogoBox
            ref={reference}
            variants={animLogo}
            animate="to"
            initial="from"
          >
            <LogoIcon src={LogoSvg} alt="Bellta logo" />
          </LogoBox>
          <LinksBox
            variants={animLinks}
            animate={isOpen ? "to" : "from"}
            inView={inView}
            initial="from"
          >
            <LinkLi variants={animLink}>
              <Link
                href="#products"
                title="products"
                onClick={closeMenu}
                inView={inView}
              >
                products
              </Link>
            </LinkLi>
            <LinkLi variants={animLink}>
              <Link
                href="#partnership"
                title="partnership"
                onClick={closeMenu}
                inView={inView}
              >
                partnership
              </Link>
            </LinkLi>
            <LinkLi variants={animLink}>
              <Link
                href="#contacts"
                title="contacts"
                onClick={closeMenu}
                inView={inView}
              >
                contacts
              </Link>
            </LinkLi>
          </LinksBox>
        </Nav>
        <MenuBtn
          onClick={menuHandler}
          variants={animMenuBtn}
          animate={isOpen && window.innerWidth > 1024 ? "to" : "from"}
          initial={"from"}
          inView={inView}
        >
          <CgMenuRightAlt />
        </MenuBtn>

        <ContentBox
          variants={animContentShape}
          animate={contentShapeControls}
          initial="from"
        >
          <ContentHeading variants={animContentChild}>
            Best performance
          </ContentHeading>
          <ContentText variants={animContentChild}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </ContentText>
          <BtnArrowBox variants={animContentChild}>
            <Btn href="#products" title="products">
              Products
            </Btn>
            <AiOutlineDoubleRight />
          </BtnArrowBox>
        </ContentBox>
      </Wrapper>
    </MainSection>
  );
};

export default Showcase;

const MainSection = styled(motion.section)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
`;

const Wrapper = styled(motion.div)`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

const BgImage = styled(motion.div)`
  position: absolute;
  background: url(${BackImg}) no-repeat center center/cover;
  width: 100%;
  height: 100%;
  inset: 0;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0;
    background: linear-gradient(
      to bottom,
      hsl(0 0% 0% / 0.8),
      hsl(0 0% 0% / 0.6),
      hsl(0 0% 0% / 0.5)
    );
  }
`;

const LogoBox = styled(motion.div)`
  width: 8rem;
  position: relative;
  margin-left: 2rem;
  z-index: 2;

  @media (min-width: 1200px) {
    margin-left: 3rem;
    width: 10rem;
  }
`;

const LogoIcon = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`;

const MenuBtn = styled(motion.button)`
  position: fixed;
  top: 1.5rem;
  right: 1rem;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 4rem;
  color: var(--accent-color);
  z-index: 100;
  will-change: transform;
  transition: opacity 0.4s ease, transform 0.4s ease;

  & svg {
    pointer-events: none;
  }

  @media (min-width: 1200px) {
    visibility: ${({ inView }) => (inView ? "hidden" : "visible")};

    &:hover {
      opacity: 0.8;
    }
  }
`;

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
`;

const LinksBox = styled(motion.ul)`
  position: fixed;
  top: 0;
  right: 0;
  background: #fff;
  padding-top: 7rem;
  display: flex;
  flex-direction: column;
  z-index: 99;
  box-shadow: 0 0 15px hsl(0 0% 0% / 0.4);
  will-change: transform;

  @media (min-width: 1200px) {
    clip-path: ${({ inView }) =>
      inView ? "polygon(100% 0, 50% 100%, 0 0)" : "none"};
    right: ${({ inView }) => (inView ? "1rem" : "0")};
    width: ${({ inView }) => (inView ? "40%" : "auto")};
    height: ${({ inView }) => (inView ? "60%" : "auto")};
    flex-direction: ${({ inView }) => (inView ? "row" : "column")};
    align-items: ${({ inView }) => (inView ? "flex-start" : "none")};
    justify-content: ${({ inView }) => (inView ? "center" : "none")};
    padding: ${({ inView }) => (inView ? "2.5rem 3rem 0 3rem" : "7rem 0 0 0")};
  }
`;

const LinkLi = styled(motion.li)`
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:last-of-type {
    margin-bottom: 0.5rem;
  }
`;

const Link = styled(motion.a)`
  width: 100%;
  color: var(--main-color);
  font-weight: 400;
  text-transform: uppercase;
  padding: 1rem 3rem;
  text-align: center;

  @media (min-width: 1200px) {
    padding: ${({ inView }) => (inView ? "1rem" : "1rem 3rem")};
    position: relative;

    &::before {
      position: absolute;
      content: "";
      width: 25%;
      height: 0.1rem;
      top: 0.5rem;
      left: 50%;
      transform: translate(-50%, -300%);
      opacity: 0;
      background: var(--main-color);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }

    &:hover::before {
      transform: translate(-50%, 0%);
      opacity: 1;
    }
  }
`;

const ContentBox = styled(motion.div)`
  position: relative;
  z-index: 1;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  background: var(--lighter-color);
  width: 140%;
  height: 70%;
  transform: translateX(-15%);
  filter: drop-shadow(0 0 10px hsl(0 0% 0% / 0.4));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 7rem;

  @media (min-width: 1200px) {
    width: 60%;
    height: 80%;
    transform: translateX(0%);
    padding-top: 10rem;
  }
`;

const ContentHeading = styled(motion.h3)`
  max-width: 50%;
  margin-bottom: 2.5rem;
  font-size: 2.2rem;
  text-align: center;
`;

const ContentText = styled(motion.p)`
  display: none;
  max-width: 40%;
  font-size: 1.05rem;
  margin-bottom: 2rem;
  text-align: center;

  @media (min-width: 760px) {
    display: block;
  }
`;

const BtnArrowBox = styled(motion.div)`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  background: none;
  border-radius: 0.5rem;

  & svg {
    font-size: 2.5rem;
    transform: translateX(-2rem);
    transition: transform 0.4s ease-in-out;
    will-change: transform;
  }
`;

const Btn = styled(motion.a)`
  border: none;
  background: var(--main-color);
  color: var(--light-color);
  border-radius: 0.5rem;
  padding: 0.5rem 2rem;
  transform: translateX(-1rem);
  cursor: pointer;
  font-size: inherit;
  font-family: inherit;
  box-shadow: 2px 4px 2px hsl(0 0% 0% / 0.4);
  transition: box-shadow 0.2s ease, opacity 0.3s ease;
  user-select: none;

  @media (min-width: 1200px) {
    &:hover {
      opacity: 0.9;
    }

    &:hover + svg {
      transform: translateX(-1rem);
    }
  }

  &:active {
    box-shadow: 1px 1px 1px hsl(0 0% 0% / 0.4);
  }
`;
