import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import App from "../App";
import "../componentStyles/PreLoader.css"
import Home from "../screens/Home"
const PreLoader = () => {
  const [data, setData] = useState([]);
  const [done, setDone] = useState(undefined);

  useEffect(() => {
      setTimeout(()=>{
          setData(<Home/>);
          setDone(true);
        
      }, 3000)
    
  }, []);
  return (

    <>
   { !done ? (<div className="react-loader-div"> <div> <ReactLoading className="m-auto" type={"bars"} color={"green"} height={50} width={50} /></div></div>): (<Home/>)}
    
    {/* {
      !done ? (
        <div className="react-loader-div"> <div className="react-loader"> <ReactLoading className="m-auto" type={"bars"} color={"green"} height={50} width={50} /></div></div>
      ) : 
      
      (
        <ul>
          {data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}  */}
    </>
  );
};

  
export default PreLoader;
