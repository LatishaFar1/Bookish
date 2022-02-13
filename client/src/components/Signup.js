import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function Signup({setUser}) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    let navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        fetch("/api/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password 
          }),
        })
        .then((response) => {
          if (response.ok) {
            response.json().then((user) => setUser(user));
            navigate("/");
          }
        });
      }



  return <div style={{backgroundColor: "#1E1F24"}}>

<div className="login-container">
                  <div className="login-screen">
                    <form className="login-form" onSubmit={handleSubmit}>
                      <div className="login-info">
                        <input type="text" className="login-input" 
                        value={username} onChange={(e) => setUsername(e.target.value)} />
                        <label>username</label>
                      </div>
                      <div className="login-info">
                        <input type="password" className="login-input"
                        value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <label>password</label>
                      </div>
                      <button className='login-button' type="submit"> signup </button>
                    </form>
                  </div>


                </div>
        





  </div>
}
