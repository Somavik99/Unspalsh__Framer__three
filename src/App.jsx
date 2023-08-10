
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";
import {motion} from "framer-motion"

const App = () => {
  return (
    <>
      <motion.div>
        <Home />
      </motion.div>
      <motion.div
        style={{
          height: "180vh",
          width: "100%",
          backgroundColor: "tomato",
          zIndex: "120",
          position: "sticky",
          transition: "all 0.3s ease",
          boxShadow:" 0 0 2rem  -2rem   tomato",
         border:"none",outline:"none"
        }}
      >
        <Main />
      </motion.div>
    </>
  );
};

export default App;
