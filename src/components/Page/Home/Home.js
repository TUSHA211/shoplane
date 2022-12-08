import React from 'react';
import Feed from '../Feed/Feed';
import Main from '../Main/Main';
import './Home.css';





function Home() {

  return(

   <div className='Home-Container'>

        <div className="Left-Container">
     <Main/>
        </div>
        <div className="Bottom-Container">
     <Feed/>
        </div>
   </div>

       
  )
}
export default Home;