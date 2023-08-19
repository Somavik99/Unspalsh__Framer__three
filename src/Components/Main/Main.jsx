import { useEffect, useState } from "react";
import {
  Heading,
  ImageStyles,
  Images,
  InnerContainerStyles,
} from "../ComponentVariants/ImageData";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { motion, useMotionValue } from "framer-motion";
import "./Main.css";

const Main = () => {
  //React Hook
  const [CurrentIndex, setCurrentIndex] = useState(0);
  const [ClickPrev, setClickPrev] = useState(false);
  const [ClickNext, setClickNext] = useState(false);

  //Custom Hook

  const { x, y, nX, rotateX, rotateY, willChange } = useMotionValue();

  //Functions and Conditions
  const ImageLength = Images.length;

  const PreviousImage = (prev) => {
    setCurrentIndex(CurrentIndex === 0 ? ImageLength - 1 : prev - 1);
    setClickPrev(!ClickPrev);
  };

  const NextImage = (next) => {
    setCurrentIndex(CurrentIndex === ImageLength - 1 ? 0 : next + 1);
    setClickNext(!ClickNext);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((n) => {
        return n > CurrentIndex
          ? Images[CurrentIndex]
          : n === Images.length - 1
          ? 0
          : n + 1;
      });
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [CurrentIndex]);

  if (!Array.isArray(Images) && ImageLength <= 0) {
    return null;
  }

  return (
    <div style={{ boxShadow: " 0 0 2rem  -2rem   tomato" }}>
      <h1 style={Heading}>Why Unsplash?</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          perspective: 1500,
        }}
      >
        <motion.div style={InnerContainerStyles}>
          <motion.button
            whileTap={{
              scale: 0.5,
            }}
            className="Prev__btn"
            onClick={() => PreviousImage(CurrentIndex)}
          >
            <BsArrowLeft style={{ marginBottom: "5px" }} />
          </motion.button>
          <div style={{ perspective: 2000 }}>
            {Images.map((img, index) => {
              return (
                <motion.div
                  key={index}
                  style={{ x, y, rotateX, rotateY, z: 100 }}
                  drag
                  dragElastic={0.18}
                  dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                  whileTap={{ cursor: "grabbing" }}
                >
                  {index === CurrentIndex ? (
                    <motion.img
                      initial={{
                        x: 0,
                        opacity: 0,
                      }}
                      animate={{
                        nX,
                        opacity: 1,
                      }}
                      translate="yes"
                      transition={{
                        type: "keyframes",
                        duration: 0.2,
                        delay: 0.1,
                      }}
                      src={img.image}
                      alt={img.id}
                      style={{
                        width: ImageStyles.width,
                        height: ImageStyles.height,
                        borderRadius: ImageStyles.borderRadius,
                        margin: ImageStyles.margin,
                        boxShadow: ImageStyles.boxShadow,
                        x,
                        y,
                        rotateX,
                        rotateY,
                        z: 100,
                        willChange,
                      }}
                      drag
                      dragElastic={0.18}
                      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                      whileTap={{ cursor: "grabbing" }}
                    />
                  ) : null}
                </motion.div>
              );
            })}
            <div className="progress__bar" style={{ margin: "auto" }}>
              <div />
            </div>
          </div>
          <motion.button
            whileTap={{
              scale: 0.5,
            }}
            className="Next__btn"
            onClick={() => NextImage(CurrentIndex)}
          >
            <BsArrowRight style={{ marginBottom: "5px" }} />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Main;
