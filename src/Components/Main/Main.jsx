import Images from "../../Components/ComponentVariants/ImageData";

const Main = () => {
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
        {Images.map((img, i) => {
          return (
            <img
              key={i}
              src={img.image}
              alt="mountains"
              style={{
                width: "68vw",
                height: "80vh",
                borderRadius: "20px",
                margin: "5%",
                boxShadow: "5px 5px 0.5rem 0.55rem rgba(0.5,0.5,0.5,0.4) ",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Main;
