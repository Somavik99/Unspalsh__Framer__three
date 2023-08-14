import { useEffect, useState } from "react";
import { Images } from "../ComponentVariants/ImageData";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import "./Main.css";

const Main = () => {
  const [CurrentIndex, setCurrentIndex] = useState(0);
  const [ClickPrev, setClickPrev] = useState(false);
  const [ClickNext, setClickNext] = useState(false);

  const ImageLength = Images.length;

  const PreviousImage = (prev) => {
    setCurrentIndex(CurrentIndex === 0 ? ImageLength - 1 : prev - 1);
    setClickPrev((pre) => !pre);
  };

  const NextImage = (next) => {
    setCurrentIndex(CurrentIndex === ImageLength - 1 ? 0 : next + 1);
    setClickNext((nex) => !nex);
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
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [CurrentIndex]);

  if (!Array.isArray(Images) && ImageLength <= 0) {
    return null;
  }

  return (
    <div style={{ boxShadow: " 0 0 2rem  -2rem   tomato" }}>
      <h1
        style={{
          marginTop: "-8%",
          textAlign: "center",
          color: "whitesmoke",
          fontWeight: "700",
          fontSize: "80px",
          fontStyle: "italic",
          textShadow: "0.8px 0.8px 3px 3px  rgba(0.9,0.9,0.9,0.5)",
          padding: "8px",
        }}
      >
        Why Unsplash?
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          className="Prev__btn"
          onClick={() => PreviousImage(CurrentIndex)}
        >
          <BsArrowLeft style={{ marginBottom: "5px" }} />
        </button>
        <div>
          {Images.map((img, index) => {
            return (
              <motion.div key={index}>
                {index === CurrentIndex ? (
                  <motion.img
                    // layout
                    initial={{
                      x: 0,
                      opacity: 0,
                    }}
                    animate={{
                      x: 0,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.5,
                    }}
                    src={img.image}
                    alt={img.id}
                    style={{
                      width: "68vw",
                      height: "80vh",
                      borderRadius: "20px",
                      margin: "5%",
                      boxShadow:
                        "5px 5px 0.5rem 0.55rem rgba(0.5,0.5,0.5,0.4) ",
                      transform: `${!ClickPrev}?scaleX(-100px):${!ClickNext}?scaleX(100px):scale(0)`,
                    }}
                  />
                ) : null}
              </motion.div>
            );
          })}
          <div className="progress__bar" style={{ margin: "auto" }} />
        </div>
        <button className="Next__btn" onClick={() => NextImage(CurrentIndex)}>
          <BsArrowRight style={{ marginBottom: "5px" }} />
        </button>
      </div>
    </div>
  );
};

export default Main;
