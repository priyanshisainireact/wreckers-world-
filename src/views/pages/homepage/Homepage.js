import React, { Component } from 'react';
import './homepage.css';
import BiddingItem from './HomepageItem/BiddingItem';
import NewLaunch from './HomepageItem/Newlaunch';
import CityWreckers  from './HomepageItem/Citywreckers';
import LatestEvent from './HomepageItem/Latestevent';
import Process from './HomepageItem/Process';
import Contact from './HomepageItem/Contact';
class Homepage extends Component{
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-lg-2">
                    {/* <img src={'./avatars/Banner.png'} style={{height:'100%',width:'100%'}} /> */}
                    
                    </div>
                    <div class="col-lg-8">
                     <div class="row">
                     <div className="bidding">
                          <div class="row">
                          <h2 class="news-heading">Just Arrived For Wrecking - Bid Now</h2>
                          </div>
                        <div class="row">
                          <BiddingItem/>
                          <BiddingItem/>
                          <BiddingItem/>
                          <BiddingItem/>
                      </div>
                          
                          </div>
                           </div>
                  {/* New launch section */} 
<div class="row">
<div class="col-lg-6">
<h2 class="news-heading">New Launch</h2>
    <div className="newlaunch">
    <NewLaunch/>
    <div class="row">
        <div class="col-lg-6">
        <NewLaunch/>
        </div>
        <div class="col-lg-6">
        <NewLaunch/>
        </div>
    </div>
    </div>

    </div>
    <div class="col-lg-6">
<h2 class="news-heading">New Launch</h2>
    <div className="newlaunch">
    <NewLaunch/>
    <div class="row">
        <div class="col-lg-6">
        <NewLaunch/>
        </div>
        <div class="col-lg-6">
        <NewLaunch/>
        </div>
    </div>
    </div>

    </div>

</div>
{/* End of New launch section */}
  {/* Wreckers By City section */} 
  <div class="row">
  <h2 class="news-heading">Wreckers By City</h2>
  </div>
  <div class="row">
  



  <CityWreckers />
  <CityWreckers />
  <CityWreckers />
                         <CityWreckers />
                         <CityWreckers />
                         <CityWreckers />
                         <CityWreckers />
                         <CityWreckers />
                         <CityWreckers />
                          
</div>
  {/* End of Wreckers By City section */} 

 {/* Latest News section */} 
<div class="row">
    <div class="col-lg-4">
    <h2 class="news-heading">Latest News</h2> 
    <NewLaunch/>
    <NewLaunch/>
    </div>
    <div class="col-lg-4">
   
    <NewLaunch/>
   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.</p>
    </div>
    <div class="col-lg-4">
  
    <NewLaunch/>
    <NewLaunch/>
   
    </div>
</div>
  {/* End of Latest News section */} 
  {/* Latest Blog section */} 
<div class="row">
    <div class="col-lg-8">
    <h2 class="news-heading">Latest Blog</h2> 
    <NewLaunch/>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
    <div class="col-lg-4">
    <NewLaunch/>
    <NewLaunch/>
 
        </div>
</div>
    {/* End of Latest Blog section */} 
    
{/*  Latest Events section */} 

<div class="row">
    
    <div class="col-lg-4">
    <NewLaunch/>
    <NewLaunch/>
 
        </div>
        <div class="col-lg-8">
    <h2 className="news-heading">Latest Events</h2>
    <LatestEvent/>
    <LatestEvent/>
    
 </div>
</div>

{/* End of Latest Events section */} 
{/* Inside Wreckers section */} 
<div class="row">
    <div class="col-md-6">
    <Process />
    </div>
    <div class="col-md-6">
    <img src={'./avatars/ProcessCircle.png'} style={{height:'100%',width:'100%'}} />
    </div>
</div>


{/* End of Inside wreckers section */} 
{/* contact section */} 
<div class="row">
<Contact />
</div>


{/* End of contact section */} 



                </div>
                <div class="col-lg-2">
                    {/* <img src={'./avatars/Banner.png'} style={{height:'100%',width:'100%'}} /> */}
                    </div>
            </div>
            </div>
        )
    }
}

export default Homepage;