import React from "react";
import "./Title.css";

const Title = props => (
	<div className="navbar-fixed">
	  <nav>
	    <div className="nav-wrapper">
	      <a href="#" className="brand-logo right">POINTS: <span>{props.points}</span></a>
	      <ul id="nav-mobile" className="left hide-on-med-and-down">
	        <li><a href="#">DOGGO-LOGGO</a></li>
	      </ul>
	    </div>
	  </nav>
	</div>  
);  

export default Title;

