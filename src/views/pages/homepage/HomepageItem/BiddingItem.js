import React, { Component } from 'react'

class BiddingItem extends Component{
    render(){
        return(
<div class="col-lg-3">
                            <div className="bid-card">
                            <img src={'./avatars/bidcar.jpg'} style={{height:'100%',width:'100%'}} />
                            
                                <h2 className="bidtitle">Lorem Ipsum</h2>
                                
                                <div className="biddetails">
                                    <p><span>Current Price :</span> 200</p>
                                    <p><span>Bids Placed :</span> No bids placed</p>
                                    <p><span>Ending :</span> 1 day</p>
                                </div>
                            </div>
                          </div>
        )
    }
}

export default BiddingItem;