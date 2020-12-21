import React from 'react';
import './Login.css';

const Logout = ({handleLogout})=>{
    return(
        <section>
            <div className="logout">
                <button className="logbtn" onClick={handleLogout}>Login</button>
                
            </div>
        </section>
    )
}
export default Logout;