import React, { Component } from 'react';
import './profile.css';

class CaruserProfile extends Component{
    render() {
        return (

        <div className="container">
            <div class="row"><h2 class="news-heading">Heading !</h2></div>
          <div className="row">
              <div className="col-lg-8">
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
                                    <button type="button" className="managebtn">Manage Detail</button>
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
                                    <button type="button" className="managebtn">Manage Detail</button>
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
                                    <button type="button" className="managebtn">Manage Detail</button>
                                </div> 
                                  </div>
                              </div>
               </div>
              </div>
              <div className="col-lg-4">
                  <div className="usercarlist">
                   <div className="profilename">
                   <img src={'./avatars/download.png'} className="circleimg"/>
                   <h2 className="username">User Name</h2>
                   </div>
                  

                  </div>
              </div>
          </div>
        </div>


        )
    }
}

export default CaruserProfile;