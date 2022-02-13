import React from 'react';

export default function Home({user}) {

  if (user) {
    return  <h1 className='user-title'>Hi {user.username}! 
    <br/>
    Welcome to Bookish
    <br/>
    <br/>
    Check out our books!
    <br/>
      Here, you can buy used books from one of our many locations around NYC. 
      <br/>
      Check out the map below to find us!

     <img src="https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" 
     alt="pic of books"
     style={{height: "40%", width: "100%", marginLeft: "auto"}}/>

    <br/>
    </h1>
      } else{

  return <div style={{backgroundColor: "#060e10"}}>

<section>
      <h1 className='home-title'>BOOKISH</h1>
  <div className="home-body">
    <p className="subtitle">
      <span>
      Welcome to Bookish 
     
   </span>
    </p>
  </div>
</section>
                

  </div>;
}
}