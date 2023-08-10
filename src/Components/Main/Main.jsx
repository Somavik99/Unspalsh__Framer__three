import { useEffect, useState } from "react";
import Images from "../../Components/ComponentVariants/ImageData";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Main = () => {
  const [CurrentIndex, setCurrentIndex] = useState(0);

  const PreviousImage = (prev) => {
    setCurrentIndex(CurrentIndex === 0 ? Images.length - 1 : prev - 1);
  };

  const NextImage = (next) => {
    setCurrentIndex(CurrentIndex === Images.length - 1 ? 0 : next + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      return setCurrentIndex((n) => {
        n > CurrentIndex
          ? Images[CurrentIndex]
          : n === Images.length - 1
          ? 0
          : n + 1;
      });
    }, 2000);

    return () => {
      clearTimeout(interval);
    };
  }, [CurrentIndex]);

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
        <button onClick={PreviousImage}>
          <BsArrowLeft />
        </button>
        {Array.isArray(Images) &&
          Images.map((img, i) => {
            return (
              <div key={i}>
                {i === CurrentIndex && (
                  <img
                    src={img.image}
                    alt="mountains"
                    style={{
                      width: "68vw",
                      height: "80vh",
                      borderRadius: "20px",
                      margin: "5%",
                      boxShadow:
                        "5px 5px 0.5rem 0.55rem rgba(0.5,0.5,0.5,0.4) ",
                    }}
                  />
                )}
              </div>
            );
          })}
        <button onClick={NextImage}>
          <BsArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Main;
