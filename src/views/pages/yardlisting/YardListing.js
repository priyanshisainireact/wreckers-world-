import React from 'react';
import './yardlist.css';

class YardListing extends React.Component{
    render(){
        return(
            
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                    <h2 className="news-heading">Yard Listing</h2>  
                    <div className="searchbycity">
                    <input type="text" placeholder="Search By City" name="search">
      
      </input>
                    </div>
                    <div className="listing">
                    <div className="yardlogo">
                    <img src={'./avatars/samirtruck.png'} />
                    </div>
  
                   <div className="yarddetail">
                    <h2 className="yardname">Samir Truck Wreckers</h2>
                    <p className="email"><i class="fa fa-envelope" aria-hidden="true"></i> samircarremoval@gmail.com</p>
                    <p className="phone"><i class="fa fa-phone" aria-hidden="true"></i> 0402 639 249</p>
                    <p className="address"><i class="fa fa-location-arrow"></i> 1/48, Pendlebury Road, Cardiff, 2285, Newcastle, New South Wales</p>
                    <p className="link" >Read More</p>
                   </div>
                    </div>
                    </div>
                

<div className="col-lg-4">

</div>






                </div>
           
         




            </div>

        )
    }
}

export default YardListing;