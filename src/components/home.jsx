import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const logout = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/login')
  }
  const user = useSelector((state) => state.user.user);
    return (
      
    <div style={{backgroundImage:`url(images.jpeg)`,backgroundSize:"auto",height:"748px"}}>
     <center>
      <nav style={{fontFamily:"Times New Roman",fontSize:"30px",backgroundColor:"blanchedalmond ", }}><h1 style={{color:"maroon"}}>Home</h1></nav>
      
     <div style={{border:"5px solid maroon", gap:"10px",width:"400px", height:"300px",padding:"50px", borderRadius:"50px", borderColor:"maroon", backgroundColor:"white"}}><h2>Welcome, {user}!</h2>
     <br></br>
      <p>This is your home page.</p>
      <br></br>
      <button style={{height:"70px", width:"100px",borderBlockColor:"pink",borderRadius:"8px"}}onClick={logout}>logout</button>
      </div>
   
    </center>
    </div>
  );
};

export default Home;
