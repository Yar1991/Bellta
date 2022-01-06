import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import Showcase from "./showcase/Showcase";
import Items from "./items/Items";
import Partner from "./partnership/Partner";
import Contacts from "./contacts/Contacts";
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import useResizeObserver from "@react-hook/resize-observer";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [screenSize, setScreenSize] = useState("");
  const showcaseWrapper = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  // Showcase animaition controls
  const mainBgControls = useAnimation();
  const contentShapeControls = useAnimation();
  // Products animation controls
  const productsControls = useAnimation();
  // Partnership animation controls
  const partnerControls = useAnimation();
  // Contacts animation controls
  const contactsControls = useAnimation();

  const { inView, ref } = useInView({
    threshold: 0.1,
  });

  const [showcaseRef, showcaseInView] = useInView({
    threshold: 0.1,
  });

  const [productsRef, productsInView] = useInView({
    threshold: 0.1,
  });

  const [partnerRef, partnerInView] = useInView({
    threshold: 0.1,
  });

  const [contactsRef, contactsInView] = useInView({
    threshold: 0.1,
  });

  const checkResize = useResizeObserver(showcaseWrapper.current, (entry) => {
    if (entry.contentRect.width > 1200) {
      setScreenSize("desktop");
      setIsOpen(true);
    } else {
      setScreenSize("mobile");
      setIsOpen(false);
    }
  });

  useEffect(() => {
    if (window.innerWidth > 1200) {
      if (location.hash === "#products") {
        console.log(true);
        console.log(productsRef);
        window.scroll({
          top: 1000,
          left: 0,
          behavior: "smooth",
        });
      }
      return setScreenSize("desktop");
    } else {
      return setScreenSize("mobile");
    }
  }, []);

  useEffect(() => {
    if (showcaseInView) {
      contentShapeControls.start("to");
      mainBgControls.start("to");
    } else {
      contentShapeControls.start("from");
      mainBgControls.start("from");
    }
    if (productsInView) {
      productsControls.start("to");
    } else {
      productsControls.start("from");
    }
    if (partnerInView) {
      partnerControls.start("to");
    } else {
      partnerControls.start("from");
    }
    if (contactsInView) {
      contactsControls.start("to");
    } else {
      contactsControls.start("from");
    }
  }, [showcaseInView, productsInView, partnerInView, contactsInView]);

  return (
    <HomeWrapper>
      <Showcase
        reference={ref}
        showcaseRef={showcaseRef}
        inView={inView}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        screenSize={screenSize}
        setScreenSize={setScreenSize}
        wrapperRef={showcaseWrapper}
        contentShapeControls={contentShapeControls}
        mainBgControls={mainBgControls}
      />
      <Items
        screenSize={screenSize}
        productsRef={productsRef}
        productsControls={productsControls}
      />
      <Partner partnerControls={partnerControls} partnerRef={partnerRef} />
      <Contacts
        screenSize={screenSize}
        contactsRef={contactsRef}
        contactsControls={contactsControls}
      />
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled(motion.main)`
  height: 100%;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  overflow-y: auto;
`;
