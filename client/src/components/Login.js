import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({setUser}) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    let navigate = useNavigate();
  
    function handleSubmit(e){
        e.preventDefault();
        fetch("api/login", {
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
            response.json().then((user) => setUser(user))
            navigate("/");
          }
         
        });
      }


  return <div style={{backgroundColor: "#735823"}}>

 <section className="vh-100" style={{backgroundColor: '#1e1f24'}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card" style={{borderRadius: "1rem"}}>
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img
                src="https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                alt="login form"
                className="img-fluid" 
                style={{height: "50%", width: "50%", marginLeft: "auto", marginRight: "auto", display: "block" }}
              />
            </div>
            <div style={{textAlign: "center"}}>
              <div>

                <form>
                  <h5 style={{letterSpacing: "1px"}}>Sign in:</h5>

                  <div>
                    <input type="text"  name="username" />
                    <label className="form-label" htmlFor="form2Example17">username</label>
                  </div>

                  <div>
                    <input type="password"  name="password" />
                    <label className="form-label" htmlFor="form2Example17">password</label>
                  </div>

                  <div>
                    <button type="submit">Login</button>
                  </div>

                 
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




  </div>;
}
