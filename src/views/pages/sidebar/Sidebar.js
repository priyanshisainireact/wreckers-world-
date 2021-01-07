import React from 'react';
import './sidebar.css';
import {Link} from 'react-router-dom';
class Sidebar extends React.Component{
    render(){
        return(
            
          <div className="sidebar">
              <h3 className="sidebar title">Yard Listing</h3>
              <li className="sidebarlist">Samir Truck Wreckers</li>
              <li className="sidebarlist">5B Car Removals Newcastle</li>
              <li className="sidebarlist">Viper Cash For Cars</li>
              <li className="sidebarlist">Grande Wreckers</li>
              <li className="sidebarlist">Samir Car Removals</li>
              
          </div>

        )
    }
}

export default Sidebar;