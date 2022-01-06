import styled from "styled-components";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import Vitamins from "../../../img/vitamins.webp";
import Protein from "../../../img/protein.webp";
import Accessories from "../../../img/accessories.webp";

const Items = ({ screenSize, productsRef, productsControls }) => {
  const [slideDirection, setSlideDirection] = useState("");
  const [slideIndex, setSlideIndex] = useState(1);
  const controls = useAnimation();
  const slides = useRef(null);
  const item = useRef(null);
  const navigate = useNavigate();

  const moveItem = (e) => {
    let target = e.target;
    target.style.transform = "scale(0.9)";

    target.addEventListener("contextmenu", (e) => e.preventDefault());
    target.addEventListener("touchmove", (e) => {
      e.preventDefault();
      let targetX = e.touches[0].pageX;
      let middlePoint = (window.innerWidth / 2 - targetX) * -1;
      target.style.transform = `scale(0.9) translateX(${middlePoint}px)`;

      if (middlePoint < -100) {
        setSlideDirection("next");
        return;
      }
      if (middlePoint > 100) {
        setSlideDirection("previous");
        return;
      }
    });
  };

  const cancelTouch = (e) => {
    let target = e.target;
    target.style.transform = "scale(1)";
    if (slideDirection === "next") {
      if (slides.current && slideIndex === slides.current.children.length) {
        return;
      }
      controls.start({
        x: `-${100 * slideIndex}vw`,
        transition: {
          duration: 0.5,
          ease: "easeInOut",
        },
      });
      setSlideIndex((prev) => prev + 1);
      return;
    }

    if (slideDirection === "previous") {
      if (slides.current && slideIndex === 1) {
        return;
      }

      controls.start({
        x: `-${100 * (slideIndex - 2)}vw`,
        transition: {
          duration: 0.5,
          ease: "easeInOut",
        },
      });
      setSlideIndex((prev) => prev - 1);
      return;
    }
    setSlideDirection("");
    return;
  };

  const openProduct = (product) => {
    if (window.innerWidth > 1024) {
      productsControls.start("from");
      setTimeout(() => {
        navigate(`/products/${product}`);
      }, 1000);
    } else {
      return;
    }
  };

  const animShape = {
    from: {
      scale: 2,
      transition: {
        duration: 1,
        ease: "circIn",
      },
    },
    to: {
      scale: 1,
      x: "-20%",
      y: "-15%",
      transition: {
        duration: 1,
        ease: "circOut",
      },
    },
  };

  const animHeading = {
    from: {
      y: "-5rem",
      opacity: 0,
      transition: {
        duration: 1,
        ease: "circIn",
      },
    },
    to: {
      y: "0rem",
      opacity: 1,
      transition: {
        duration: 1,
        ease: "circOut",
        delay: 0.7,
      },
    },
  };

  const animItem = {
    from: {
      y: "100%",
      opacity: 0,
      transition: {
        duration: 1,
        ease: "circIn",
      },
    },
    to: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 1,
        ease: "circOut",
        delay: 0.7,
      },
    },
  };

  return (
    <MainSection id="products" ref={productsRef}>
      <Shape
        variants={animShape}
        animate={productsControls}
        initial="from"
      ></Shape>
      <Heading
        screenSize={screenSize}
        variants={screenSize === "desktop" ? animHeading : ""}
        animate={screenSize === "desktop" ? productsControls : ""}
      >
        Products
      </Heading>
      <ItemsBox animate={controls} ref={slides}>
        <Item variants={animItem} animate={productsControls} ref={item}>
          <Img
            src={Vitamins}
            alt="vitamins"
            onTouchStart={moveItem}
            onTouchEnd={cancelTouch}
            onTouchCancel={cancelTouch}
            className="small"
            onClick={() => openProduct("vitamins")}
          />
          <ItemHeading>Vitamins</ItemHeading>
          <ItemText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempo.
          </ItemText>
        </Item>
        <Item variants={animItem} animate={productsControls}>
          <Img
            src={Protein}
            alt="nutrition"
            onTouchStart={moveItem}
            onTouchEnd={cancelTouch}
            onTouchCancel={cancelTouch}
            onClick={() => openProduct("nutrition")}
          />
          <ItemHeading>Nutrition</ItemHeading>
          <ItemText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempo.
          </ItemText>
        </Item>
        <Item variants={animItem} animate={productsControls}>
          <Img
            src={Accessories}
            alt="accessories"
            onTouchStart={moveItem}
            onTouchEnd={cancelTouch}
            onTouchCancel={cancelTouch}
            className="small"
            onClick={() => openProduct("accessories")}
          />
          <ItemHeading>Accessories</ItemHeading>
          <ItemText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempo.
          </ItemText>
        </Item>
      </ItemsBox>
    </MainSection>
  );
};

export default Items;

const MainSection = styled(motion.section)`
  height: 100%;
  position: relative;
  overflow: hidden;
  scroll-snap-align: start;
`;

const Shape = styled(motion.div)`
  position: absolute;
  width: 160%;
  height: 130%;
  inset: 0;
  transform: translate(-20%, -15%);
  background: var(--lighter-color);
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  transform-origin: center center;
`;

const Heading = styled(motion.h2)`
  position: relative;
  display: ${({ screenSize }) => (screenSize === "desktop" ? "block" : "none")};
  text-align: center;
  font-size: 2rem;
  margin-top: 2rem;
  will-change: transform;
  z-index: 2;
`;

const ItemsBox = styled(motion.div)`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  min-width: 100%;
  padding-top: 6rem;

  @media (min-width: 760px) {
    padding-top: 10rem;
  }
  @media (min-width: 1024px) {
    max-width: 100%;
    min-width: 0%;
    padding-top: 0;
    padding-bottom: 2rem;
    justify-content: space-evenly;
    align-items: center;
  }

  @media (min-width: 1200px) {
    padding-top: 6rem;
    padding-bottom: 0;
    align-items: baseline;
  }
`;

const Item = styled(motion.div)`
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    max-width: 100vw;
    min-width: 0vw;
  }
`;

const Img = styled(motion.img)`
  height: 20rem;
  will-change: transform;
  transition: transform 0.4s ease, filter 0.4s ease;
  user-select: none;
  cursor: pointer;
  transform: scale(1);

  &:hover {
    transform: scale(1) translateY(-2rem) rotateZ(-10deg);
  }

  &:hover + h3 {
    transform: translateY(1rem);
  }
  &:active {
    transform: scale(0.9);
  }

  @media (min-width: 760px) {
    height: 24rem;
  }

  @media (min-width: 1023px) {
    height: 15rem;
  }

  @media (min-width: 1200px) {
    height: 20rem;

    &.small {
      height: 15rem;
    }
  }
`;

const ItemHeading = styled(motion.h3)`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  font-weight: 600;
  transition: transform 0.4s ease;
`;

const ItemText = styled(motion.p)`
  text-align: center;
  font-size: 1.05rem;
  max-width: 70%;
`;
