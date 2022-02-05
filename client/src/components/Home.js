import React from 'react';

export default function Home() {



  return <div>

<section className="hero is-large is-info">
  <div className="hero-body">
    <p className="title">
     <img src="https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" 
     alt="pic of books"
     style={{height: "50%", width: "50%", marginLeft: "auto", marginRight: "auto", display: "block"}}/>
    </p>
    <p className="subtitle">
      Large subtitle
    </p>
  </div>
</section>
                
<section className="section" style={{backgroundColor: "#B23A48"}}>
  <h1 className="title">Available Books:</h1>
  <h2 className="subtitle">
    ...
  </h2>
</section>



  </div>;
}
