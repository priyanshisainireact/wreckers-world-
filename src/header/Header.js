import React, { Component } from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

class Header extends Component{
    render(){
        return(

            <section id="header">
            <div className="container">
                <div className="row headerbtn">
                <div className="btn-group">
        
                <Link to="/listyouryard"> <button className="subscription"> List Your Yard </button></Link>  
                <Link to="/bidform">  <button className="subscription" > List Your Car </button></Link>
      <Link to="/Login"><button className="subscription" > Login/Logout </button></Link>  
        </div>


                </div>
                <div className="row">
                <div className="logo">
<img src={'./avatars/WreckersLogo.png'} style={{height:'auto',width:'50%'}} />
</div>
                </div>
            </div>
        </section>

        )
    }
}

export default Header;


