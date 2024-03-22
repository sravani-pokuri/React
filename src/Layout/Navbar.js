import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar() {
   
  return (
    

    <><nav className="navbar">
          <div className="container-fluid">
              <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTar8hVRnost1Rw5z7GZB2jlEq1fq39c4lPtYDiDlkkk9gEXpVzkh15AeYGYIk38VLlCWg&usqp=CAU"
                  alt="Thunders logo"
                  className="image" />
              <ul className="nav justify-content-end">
                  <li>
                      <Link to="/Aboutus">AboutUs</Link>
                  </li>
                  <li>
                      <Link to="/vehicle">Products</Link>
                  </li>
                  <li>
                      <Link to="/Claim">Claim</Link>
                  </li>
                  <li>
                      <Link to="/Contactus">Contactus</Link>
                  </li>
                  <li>
                      <Link to="/MyProfile">MyProfile</Link>
                  </li>
              </ul>
              <ul>
                  <li>
                      <Link to="/Signin">Sign In</Link>
                  </li>
                  <li>
                      <Link to="/SignUp">Sign Up</Link>
                  </li>
              </ul>
          </div>


      </nav><div className="box">
              <h1> We Are Providing</h1>
              <p>Car insurance or four wheeler insurance is an agreement between a car owner and the car insurance provider that offers protection for four wheelers in the case of financial losses due to unforeseen events like accidents and natural calamities. This contract more often than not,
                  is perceived as a piece of paper to be kept in the dashboard of the car and to be taken out only in case the traffic cops ever asks you for papers. But thats not all! This paper financially protects your four wheeler in case of damage or loss through an accident. When you’re on the road, no matter how careful, there are chances that you might meet with an accident & you can end up with hefty repair bills.</p>
          </div></>
    
  );
}

export default Navbar;
