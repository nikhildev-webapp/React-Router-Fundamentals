import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div style={{display:'flex',justifyContent:'center',textAlign:'center',flexDirection:'column',border:'2px solid white',width:'400px',margin:'auto',marginTop:'50px',padding:'20px',borderRadius:'10px'}}>
        <h1>404- Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <button style={{width:'100px',borderRadius:'10px',margin:'15px auto', textDecoration:'none', backgroundColor:'blue',padding:'10px',borderColor:'blue'}}><Link to="/" style={{textDecoration:'none',background:'none'}}>Home</Link></button>
      </div>
    </>
  );
};

export default NotFound;
