import styled from "styled-components";
import { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import vitamins from "../../img/vitamins.webp";
import nutrition from "../../img/protein.webp";
import accessories from "../../img/accessories.webp";
import { VscArrowLeft } from "react-icons/vsc";

const Item = () => {
  const navigate = useNavigate();
  const itemControls = useAnimation();
  const location = useLocation().pathname;
  const itemCategory = location.split("/").at(-1);
  const images = [
    {
      category: "nutrition",
      src: nutrition,
    },
    {
      category: "vitamins",
      src: vitamins,
    },
    {
      category: "accessories",
      src: accessories,
    },
  ];

  useEffect(() => {
    itemControls.start("to");
  }, []);

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

  const animImg = {
    from: {
      x: "-200%",
      opacity: 0,
      scale: 0.6,
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
        duration: 1,
        ease: "circOut",
        delay: 0.5,
      },
    },
  };

  const animText = {
    from: {
      x: "200%",
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
        duration: 1,
        ease: "circOut",
        delay: 0.5,
      },
    },
  };

  const animArrow = {
    from: {
      x: "20rem",
      opacity: 0,
      transition: {
        duration: 1,
        ease: "circIn",
      },
    },
    to: {
      x: "0rem",
      opacity: 1,
      transition: {
        duration: 1,
        ease: "circOut",
        delay: 0.7,
      },
    },
  };

  const goBack = () => {
    itemControls.start("from");
    setTimeout(() => {
      navigate(-1);
    }, 1000);
  };

  const getImg = () => {
    let targetCategory = images.filter((img) => img.category === itemCategory);
    return targetCategory[0].src;
  };

  return (
    <MainSection>
      <Shape variants={animShape} animate={itemControls} initial="from" />
      <Heading variants={animHeading} animate={itemControls} initial="from">
        {itemCategory}
      </Heading>
      <ContentBox>
        <ItemImg
          src={getImg()}
          alt="product"
          variants={animImg}
          animate={itemControls}
          initial="from"
        />
        <TextBox>
          <Wrapper variants={animText} animate={itemControls} initial="from">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Text>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum. Sed omnis libero qui sunt dolor optio
              aliquam. Sit enim quia At dolorem consequuntur sed excepturi rerum
              et impedit labore. Qui quas excepturi est molestiae enim aut ipsam
              repellat? Eos mollitia molestiae ut labore distinctio eum itaque
              beatae nam dignissimos sint et aperiam similique. Sed omnis libero
              qui sunt dolor optio aliquam. Sit enim quia At dolorem
              consequuntur sed excepturi rerum et impedit labore. Qui quas
              excepturi est molestiae enim aut ipsam repellat? Eos mollitia
              molestiae ut labore distinctio eum itaque beatae nam dignissimos
              sint et aperiam similique.
            </Text>
          </Wrapper>
          <BtnWrapper
            variants={animArrow}
            animate={itemControls}
            initial="from"
          >
            <BackButton onClick={goBack}>
              <VscArrowLeft />
            </BackButton>
          </BtnWrapper>
        </TextBox>
      </ContentBox>
    </MainSection>
  );
};

export default Item;

const MainSection = styled(motion.section)`
  height: 100%;
  position: relative;
  overflow: hidden;
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
  z-index: 1;
`;

const Heading = styled(motion.h2)`
  position: relative;
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  text-transform: capitalize;
  margin-top: 2rem;
  margin-bottom: 3rem;
  will-change: transform;
  z-index: 3;
`;

const ContentBox = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  z-index: 3;
`;

const ItemImg = styled(motion.img)`
  height: 30rem;
  margin-bottom: 2rem;
  object-fit: contain;
  flex: 1;

  @media (max-width: 1300px) {
    height: 25rem;
  }
`;

const TextBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  flex: 1;

  @media (max-width: 1300px) {
    flex: 2;
  }
`;

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const Text = styled(motion.p)`
  width: 80%;
  text-align: left;
  margin-bottom: 1rem;
  line-height: 1.5;
`;

const BtnWrapper = styled(motion.div)`
  position: relative;
  top: 2.5rem;
`;

const BackButton = styled(motion.button)`
  cursor: pointer;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  will-change: transform;
  transition: transform 0.5s ease;
  transform-origin: center center;
  font-size: 3.5rem;

  &:hover {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(1);
    transition: 0.2s ease;
  }
`;
