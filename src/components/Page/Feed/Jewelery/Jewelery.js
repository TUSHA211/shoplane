import './Jewelery.css';
import ReactStars from "react-rating-stars-component";
import React, { useEffect, useState } from "react";






function Jewelery() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let url = "https://fakestoreapi.com/products/category/jewelery";
 fetch(url)
    .then((res) => res.json())
    .then((res) => {setData(res);
    })     
}, []);


  return (
    <div className="all_cards">
      {data.length>0?data.map((item,index) => {
        return (
          <div className="all_card" key={index}>
      
              <div className="heart_icon">
            
              
              </div>
               
              <div className="all_card_img">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg>
                <img
                  src={item.image}
                  alt="unavailable"
                  width={100}
                  height={100}
                  
                />
                <p>
                  
                {item.title.length < 22
                  ? item.title
                  : `${item.title.slice(0, 15)}...`}
              </p>
              <ReactStars
                count={5}
                size={24}
                value={item.rating.rate}
                color2={"#ffd700"}
            
              />
         <p>${item.price}</p>

              <button className="submit"> <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
      </svg>Add to cart</button>
             
              </div>
              
          
          </div>
        );
      }):''}
    </div>
  );
    }

export default Jewelery;