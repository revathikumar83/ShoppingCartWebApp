import React, {useState, useEffect} from 'react';
import fire from '../../fire';
import Login from './Login';
import Logout from './Logout';
import Modal from 'react-modal';

const Signup =(props)=> {
   
const [user, setUser]=useState('');
const [email, setEmail]=useState('');
const[password,setPassword]=useState('');
const[emailerror,setEmailerror]=useState('');
const[passworderror,setPassworderror]=useState('');
const[hasAccount,sethasAccount]=useState(false);

const clearInputs = ()=>{
    setEmail('');
    setPassword('');
}
const clearErrors = ()=>{
    setEmailerror('');
    setPassworderror('');
}

const handleLogin=()=>{
    clearErrors();
    fire
    .auth()
    .signInWithEmailAndPassword(email,password)
    .catch((err)=>{
        switch(err.code){
            case "auth/invalid-email":
            case "auth/user-disabled":
            case "auth/user-not-found":
              setEmailerror(err.message);
              break;
            case "auth/wrong-password":
               setEmailerror(err.message) ;
               break;   

        }
    })
}
const handleSingup=()=>{
    clearErrors();
    fire
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .catch((err)=>{
        switch(err.code){
            case "auth/email-already-in-use":
            case "auth/invalid-email":
            
              setEmailerror(err.message);
              break;
            case "auth/weak-password":
               setEmailerror(err.message) ;
               break;   

        }
    })
}

const handleLogout = ()=>{
    fire.auth().signOut()
}
const authListener = ()=>{
    fire.auth().onAuthStateChanged(user=>{
        if(user){
            clearInputs();
            setUser(user);
        }else{
            setUser("");
        }
    })
}

useEffect(()=>{
    authListener();
},[])

const{login,hidelogin}=props;

return(
    
    <div>
      { login && (   
    <Modal isOpen={true} onRequestClose={props.hidelogin}>
        <button className="closemodal" onClick={props.hidelogin} >
            x
        </button>
    <div>
        { user ? (<Logout handleLogout={handleLogout}/>) :
         (
 <Login email={email} password={password}
 setEmail={setEmail} setPassword={setPassword}
 emailerror={emailerror} passworderror={passworderror}
 hasAccount={hasAccount} sethasAccount={sethasAccount}
 handleLogin={handleLogin} handleSingup={handleSingup}
 />  
        )
        }
     
            
    </div>
    </Modal>
      )}
    </div>
)
}

export default Signup;