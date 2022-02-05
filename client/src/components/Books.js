import React from 'react';

export default function Books() {


  return <div style={{backgroundColor: "#10181a"}}>

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

<section className='books-section'>
  <div className='books-container'>
    <div className='books-row'>
      <div className='book-column'>
        <div className='book'>
          <div className='product'>
            <img className='book-img' src="https://images.unsplash.com/photo-1527176930608-09cb256ab504?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2348&q=80" alt="book img" />
              <div className='card-content'>
                <h3>book name</h3>
                  <h4 className='price'>price</h4>
              </div>

          </div>

        </div>

      </div>

    </div>


  </div>

</section>
  
            
   </div>     
  };
