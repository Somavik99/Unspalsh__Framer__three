import Card from "react-bootstrap/Card";
import "./Card.css";
import { BsInstagram } from "react-icons/bs";
import { motion, useAnimation, useInView } from "framer-motion";
import { ImageVariants } from "../ComponentVariants/ImageVariants";
import { useEffect, useRef } from "react";

const variants = {
  hidden: { opacity: 0, x: 75 },
  visible: { opacity: 1, x: 0 },
};

const Cards = ({ name, image, bio, url, instagram }) => {
  const ref = useRef(null);
  const IsInView = useInView(ref, { once: true });

  const scrollControl = useAnimation();
  const SlideControls = useAnimation();

  useEffect(() => {
    (() => {
      if (IsInView) {
        scrollControl.start("visible");
        SlideControls.start("visible");
      }
    })();
  }, [scrollControl, IsInView, SlideControls]);

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <motion.div
        style={{ position: "relative ", padding: "0.2%", marginTop: "50%" }}
        variants={variants}
        initial="hidden"
        animate={scrollControl}
        transition={{
          duration: 2,
          delay: 0.56,
          type: "spring",
          stiffness: 250,
        }}
      >
        <motion.img
          src={image}
          alt="unsplash"
          className="image__slash"
          animate={{ y: 10 }}
          initial={{ y: 0 }}
          variants={ImageVariants}
        />
        <div
          style={{
            width: "20vw",
            height: "30vh",
            // backdropFilter: "blur(10px)",
          }}
          className="Card__cont"
        >
          <Card.Body style={{ marginTop: "20px" }}>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle>{bio}</Card.Subtitle>

            <Card.Text>
              <div className="port__link">
                <a href={url}>{name}</a>
              </div>
              <div className="instagram__cont">
                <BsInstagram /> {instagram}
              </div>
            </Card.Text>
          </Card.Body>
        </div>
      </motion.div>
      <motion.div
        variants={{
          hidden: { right: 0 },
          visible: { right: "500%" },
        }}
        initial="hidden"
        animate={SlideControls}
        transition={{ duration: 1, ease: "easeIn" }}
        style={{
          position: "absolute",
          bottom: "11.5px",
          marginRight: "5%",
          background: "tomato",
          backgroundRepeat: "no-repeat",
          zIndex: "20",
          height: "35vh",
          width: "30vw",
        }}
      ></motion.div>
    </div>
  );
};

export default Cards;
