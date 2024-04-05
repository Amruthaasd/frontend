import axios from "axios";
import{ useEffect, useState } from "react";
import{ useNavigate } from "react-router-dom";

function Forget(){
    const [email, setEmail] = useState('');
    const [newPassword, setPassword] = useState('');
    const navigator= useNavigate()
    useEffect(() => {
        console.log('email is:', email);
        console.log('password is:', newPassword);
    }, [email, newPassword])

    const handleSubmit = async () => {
        const response = await axios.post('http://localhost:2000/forget',{email, newPassword}) 
    if(response.data){
        navigator('/login')
    }
    }
    return(
        <center>
        <div>
            <h3>Forgot Password</h3>
            <div>Please enter the email address and new password</div>
            <br></br><br></br>
            <div><input type="email" name="email" placeholder="enter your email address"  style={{width:"500px"}} onChange={(e) => setEmail(e.target.value)}/></div>
            <br></br><br></br>
          <div><input type="password" name="new password" placeholder="enter your password" style={{width:"500px"}} onChange={(e) => setPassword(e.target.value)}/></div>
            <br></br><br></br>
            <br></br><br></br>
            <div><button onClick={handleSubmit}>Continue</button></div>
        </div>
        </center>
    )
}
export default Forget;