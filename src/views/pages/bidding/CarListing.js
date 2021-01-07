import React from 'react';
import './bidding.css';
import {Link} from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar'
class CarListing extends React.Component{
    render(){
        return(
            
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                        <h2 className="news-heading">Just Arrived For Wrecking – Bid Now</h2>  
                        </div>
                   
                    <div className="searchbycity">
                    <input type="text" placeholder="Search By City" name="search">
      
      </input>
                    </div>
                    <div className="usercarlist">
               <div className="caruserbidrow">
                                  <div class="caruserbidcol-1">
                                  <img src={'./avatars/bidcar.jpg'} style={{height:'100%',width:'100%'}} />
                                  </div>
                                  <div class="caruserbidcol-2">
                                  <div className="biddetailscol">
                                  <h2 className="bidtitlecol">Lorem Ipsum</h2>
                                    <p><span>Current Price :</span> 200</p>
                                    <p><span>Bids Placed :</span> No bids placed</p>
                                    <p><span>Ending :</span> 1 day</p>
                                    <button type="button" className="managebtn">Bid Now </button>
                                </div> 
                                  </div>
                              </div>
                              <div className="caruserbidrow">
                                  <div class="caruserbidcol-1">
                                  <img src={'./avatars/bidcar.jpg'} style={{height:'100%',width:'100%'}} />
                                  </div>
                                  <div class="caruserbidcol-2">
                                  <div className="biddetailscol">
                                  <h2 className="bidtitlecol">Lorem Ipsum</h2>
                                    <p><span>Current Price :</span> 200</p>
                                    <p><span>Bids Placed :</span> No bids placed</p>
                                    <p><span>Ending :</span> 1 day</p>
                                    <button type="button" className="managebtn">Bid Now </button>
                                </div> 
                                  </div>
                              </div>
                              <div className="caruserbidrow">
                                  <div class="caruserbidcol-1">
                                  <img src={'./avatars/bidcar.jpg'} style={{height:'100%',width:'100%'}} />
                                  </div>
                                  <div class="caruserbidcol-2">
                                  <div className="biddetailscol">
                                  <h2 className="bidtitlecol">Lorem Ipsum</h2>
                                    <p><span>Current Price :</span> 200</p>
                                    <p><span>Bids Placed :</span> No bids placed</p>
                                    <p><span>Ending :</span> 1 day</p>
                                    <button type="button" className="managebtn">Bid Now </button>
                                </div> 
                                  </div>
                              </div>
               </div>
                    </div>
                

<div className="col-lg-4">
<Sidebar/>
         <Sidebar/>
         <img src={'./avatars/Banner.png'} style={{height:'auto',width:'60%'}} />
</div>






                </div>
           
         




            </div>

        )
    }
}

export default CarListing;