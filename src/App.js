 import React, { Fragment } from 'react';
 import Navbar from "./Component/Navbar/Navbar";
 import './App.css';
 import { FooterContainer } from './container/footer' 
import { GlobalStyles } from './global-styles';
import { Container } from './Component/Footer/styles/footer';

function App() {
  return (
    <div className="App">  
    
    <Navbar/> 
      <div className="handleImage">      
        <img src={require("./images/school.jpg").default} />     
        <div className="figcaption">
          <h2 className="animate__animated animate__fadeInLeft">New Perspective of <br/>Better Building </h2>
        </div>
      </div>   

      <section className="section">
        <div className="container">
          <div className="row" className="bx-shad">
            <div className="col-md-12">
              <h3 className="main-heading">About Us</h3>
              {/* <div className="underline mx-auto"></div> */}
              <p className="">
              Based in North London and operating within the London, Greater London and surrounding areas, 
              we are a team of building surveyors who are able to deal with matters regarding The Party Wall
               Act 1996, building surveying, planning, structural surveying and engineering.With previous 
               experience of working with the local authority we are members of the Faculty of Party Wall 
               Surveyors (FPWS), the Chartered Association of Building Engineers (MCABE) and the Pyramus & 
               Thisbe Club (P&T) For further information please feel free to contact us at MD Designs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h3 className="main-heading">Services</h3> 
          <div className="row">          
            <div className="col-md-6">              
              <img src={require("./images/wall-bearing.jpg").default} className="img"/>
              <div className="contentt">
                <h1>Load Bearing Wall Removal</h1>
                <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque 
                   expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei.
                </p>     
            </div>
            </div>

            <div className="col-md-6">                
              <img src={require("./images/wall-bearing.jpg").default} className="img"/>
              <div className="contentt">
              <h1>Loft Conversion​</h1>
              <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque 
                expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei.</p>     
            </div>
            </div>

          </div>

          <div className="row">          
            <div className="col-md-6">              
              <img src={require("./images/wall-bearing.jpg").default} className="img"/>
              <div className="contentt">
                <h1>Extension</h1>
                <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque 
                   expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei.
                </p>     
            </div>
            </div>

            <div className="col-md-6">                
              <img src={require("./images/wall-bearing.jpg").default} className="img"/>
              <div className="contentt">
              <h1>New Build</h1>
              <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque 
                expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei.</p>     
            </div>
            </div>
            
          </div>

        </div>
     </section>  
  
      
    <FooterContainer/>   
   
    </div>
  );
}

export default App;
