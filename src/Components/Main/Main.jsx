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
        <img
          src="https://images.unsplash.com/photo-1680820364850-0064a0ae6d16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="mountains"
          style={{
            width: "68vw",
            height: "80vh",
            borderRadius: "20px",
            margin: "5%",
            boxShadow: "5px 5px 0.5rem 0.55rem rgba(0.5,0.5,0.5,0.4) ",
          }}
        
        />
      </div>
    </div>
  );
};

export default Main;
