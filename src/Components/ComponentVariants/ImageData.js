import {
    useMotionValue,
    useTransform,
    useWillChange,
}
 from "framer-motion";


 
 
 const Images = [
{id:'1',
    image:"https://images.unsplash.com/photo-1604114005871-c163692e652c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
},
{
    id:"2",
    image:"https://images.unsplash.com/photo-1634985308085-bc0faf31b24c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
},
{id:"3",
    image:"https://images.unsplash.com/photo-1688633880256-f3068f673382?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
},
{id:"4",
    image:"https://images.unsplash.com/photo-1616699344025-173cc7803b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
},
{id:"5",
    image:"https://images.unsplash.com/photo-1616526177998-c6337cb11b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
},
{id:"6",
    image:"https://images.unsplash.com/photo-1617904447324-c2037b5d5160?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
}
]

const ImageStyles = {
    width: "48vw",
    height: "50vh",
    borderRadius: "20px",
    margin: "5%",
    boxShadow:"5px 5px 0.5rem 0.55rem rgba(0.5,0.5,0.5,0.4) ",
}

const Heading = {
           marginTop: "-8%",
          textAlign: "center",
          color: "whitesmoke",
          fontWeight: "700",
          fontSize: "80px",
          fontStyle: "italic",
          textShadow: "0.8px 0.8px 3px 3px  rgba(0.9,0.9,0.9,0.5)",
          padding: "8px",
}

 

//Main.jsx-->
//Framer Hooks
const useMotionValues=()=>{

const x = useMotionValue(0);
const y = useMotionValue(0);
const nX = useMotionValue(100);
const rotateX = useTransform(y, [-100, 100], [30, -30]);
const rotateY = useTransform(x, [100, -100], [-30, 30]);
const willChange = useWillChange();
return {x,y,nX,rotateX,rotateY,willChange};
}



export  {useMotionValues,Images,ImageStyles,Heading};