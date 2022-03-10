import React from 'react';

export default function Home({user}) {

  if (user) {
    return <div>
     <div className='curtain'>
       <div className='invert'>
     <h1> Hi {user.username}! </h1>
     
    <br/>
     
     <h2 className='welcome'>  Welcome to Bookish 📚
  
    <br/>
    <br/>
      Here, you can buy used books from one of our many locations around NYC. 
      <br/>
      Check out the map below to find us!
      </h2>

    <br/>
  
    </div>
    </div>
     </div>
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