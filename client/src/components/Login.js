import React from 'react';

export default function Login() {



  return <div style={{backgroundColor: "#FED0BB", width: "50%", marginLeft: "auto", marginRight: "auto", display: "block"}}>

<div className="field" style={{}} >
  <p className="control has-icons-left has-icons-right">
    <input className="input" type="username" placeholder="Username"/>
    <span className="icon is-small is-left">
      <i className="fas fa-envelope"></i>
    </span>
    <span className="icon is-small is-right">
      <i className="fas fa-check"></i>
    </span>
  </p>
</div>
<div className="field">
  <p className="control has-icons-left">
    <input className="input" type="password" placeholder="Password"/>
    <span className="icon is-small is-left">
      <i className="fas fa-lock"></i>
    </span>
  </p>
</div>


  </div>;
}
