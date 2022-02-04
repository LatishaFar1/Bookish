import React, {useState} from 'react';

export default function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


  return <div style={{backgroundColor: "#FED0BB", width: "50%", marginLeft: "auto", marginRight: "auto", display: "block"}}>

 <section className="vh-100" style={{backgroundColor: '#ddbd8a'}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card" style={{borderRadius: "1rem"}}>
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img
                src="https://images.unsplash.com/photo-1460467820054-c87ab43e9b59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1967&q=80"
                alt="login form"
                className="img-fluid" style={{borderRadius: "1rem 0 0 1rem"}}
              />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">

                <form>

                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i className="fas fa-cubes fa-2x me-3" style={{color: "#32485C"}}></i>
                   
                  </div>

                  <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: "1px"}}>Sign in:</h5>

                  <div className="form-outline mb-4">
                    <input type="text"  name="username"   id="form2Example17" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form2Example17">username</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="password" id="form2Example27" className="form-control form-control-lg" name="password" />
                    <label className="form-label" htmlFor="form2Example17">password</label>
                  </div>

                  <div className="pt-1 mb-4">
                    <button className="btn btn-dark btn-lg btn-block" type="submit">Login</button>
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
