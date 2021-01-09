import React, { Component } from 'react'

class BiddingItem extends Component{
    render(){
        return(
            <div className="row bidnow">
<div className="col-lg-6">
                            <div className="bid-card">
                            <img src={'./avatars/bidcar.jpg'} style={{height:'100%',width:'100%'}} />
                            
                                <h2 className="bidtitle">Lorem Ipsum</h2>
                                
                                <div className="biddetails">
                                    <p><span>Current Price :</span> 200</p>
                                    <p><span>Bids Placed :</span> No bids placed</p>
                                    <p><span>Ending :</span> 1 day</p>
                                    <p className="view">View More</p>
                                </div>
                            </div>
                          </div>
                      <div className="col-lg-6">
                              <div className="bidrow">
                                  <div class="bidcol-1">
                                  <img src={'./avatars/bidcar.jpg'} style={{height:'100%',width:'100%'}} />
                                  </div>
                                  <div class="bidcol-1">
                                  <div className="biddetailscol">
                                  <h2 className="bidtitlecol">Lorem Ipsum</h2>
                                    <p><span>Current Price :</span> 200</p>
                                    <p><span>Bids Placed :</span> No bids placed</p>
                                    <p><span>Ending :</span> 1 day</p>
                                    <p className="view">View More</p>
                                </div> 
                                  </div>
                              </div>
                              <div className="bidrow">
                                  <div class="bidcol-1">
                                  <img src={'./avatars/bidcar.jpg'} style={{height:'100%',width:'100%'}} />
                                  </div>
                                  <div class="bidcol-1">
                                  <div className="biddetailscol">
                                  <h2 className="bidtitlecol">Lorem Ipsum</h2>
                                    <p><span>Current Price :</span> 200</p>
                                    <p><span>Bids Placed :</span> No bids placed</p>
                                    <p><span>Ending :</span> 1 day</p>
                                    <p className="view">View More</p>
                                </div> 
                                  </div>
                              </div>
                              <div className="bidrow">
                                  <div class="bidcol-1">
                                  <img src={'./avatars/bidcar.jpg'} style={{height:'100%',width:'100%'}} />
                                  </div>
                                  <div class="bidcol-1">
                                  <div className="biddetailscol">
                                  <h2 className="bidtitlecol">Lorem Ipsum</h2>
                                    <p><span>Current Price :</span> 200</p>
                                    <p><span>Bids Placed :</span> No bids placed</p>
                                    <p><span>Ending :</span> 1 day</p>
                                    <p className="view">View More</p>
                                </div> 
                                  </div>
                              </div>
                      </div>  
            </div>
  
                          
                          
        )
    }
}

export default BiddingItem;