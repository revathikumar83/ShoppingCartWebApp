import React from 'react';
import './Login.css';

const Login = (props)=>{
    
const {email,password,setEmail, setPassword,
emailerror,passworderror,
hasAccount,sethasAccount,
handleLogin, handleSingup} = props;

    return(
        <div className="login">
       <div className="login__email">
           <label className="label__email">Email:</label>
           <input type="text" outofocus required value={email} onChange={(e)=> setEmail(e.target.value)}/>
           <p className="emailerr">{emailerror}</p>
           <label className="label">password:</label>
           <input type="text" outofocus required value={password} onChange={(e)=> setPassword(e.target.value)}/>
           <p className="emailerr">{passworderror}</p>
           <div>
               {
                   hasAccount ? (
                 <>
                 <button  className="sign" onClick={handleLogin}>
                     Sign in
                 </button>
                 <p>don't have an account? <span onClick={()=>sethasAccount(!hasAccount)}>sign up</span></p>
                 </>
                   ):(
                    <>
                 <button className="sign" onClick={handleSingup}>
                     Sign up
                 </button>
                 <p> Have an account? <span onClick={()=>sethasAccount(!hasAccount)}>sign in</span></p>
                 </>
                   )
               }
           </div>
       </div>
        </div>
    )
}
export default Login;