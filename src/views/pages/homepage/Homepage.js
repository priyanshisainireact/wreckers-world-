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
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-2">
                    <img src={'./avatars/Banner.png'} style={{height:'auto',width:'100%'}} />
                    <img src={'./avatars/grandebannerAd1.png'} style={{height:'auto',width:'100%'}} />
                    <img src={'./avatars/TahaAuto1.png'} style={{height:'auto',width:'100%'}} />
                    <img src={'./avatars/VicCarRemovalBanner1.png'} style={{height:'auto',width:'100%'}} />
                    <img src={'./avatars/viperbannerad1-1.png'} style={{height:'auto',width:'100%'}} />
                    <img src={'./avatars/Banner.png'} style={{height:'auto',width:'100%'}} />
                    <img src={'./avatars/Banner.png'} style={{height:'auto',width:'100%'}} />
                    
                    </div>
                    <div class="col-lg-8">
                     <div class="row">
                     <div className="bidding">
                          <div class="row">
                          <h2 class="news-heading">Just Arrived For Wrecking - Bid Now</h2>
                          </div>
                        
                          <BiddingItem/>
                         
                      
                          
                          </div>
                           </div>
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
                  {/* New launch section */} 
<div class="row newlaunchsection">
<div class="col-lg-6">
    <div className="row">
    <h2 class="news-heading">New Launch</h2>
    </div>

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
    <div className="row">
    <h2 class="news-heading">Vintage</h2>
    </div>
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
 
{/*  Latest Events section */} 

<div class="row eventsection">
    
    <div class="col-lg-4">
    <NewLaunch/>
    <NewLaunch/>
 
        </div>
        <div class="col-lg-8">
        <div className="row">
        <h2 className="news-heading">Latest Events</h2>
    </div>
   
    <LatestEvent/>
    <LatestEvent/>
    
 </div>
</div>

{/* End of Latest Events section */} 
 {/* Latest News section */} 
<div class="row newssection">
    <div class="col-lg-4">
        <div className="row">
        <h2 class="news-heading">Latest News</h2> 
        </div>
    
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
<div class="row blogsection">
    <div class="col-lg-8">
        <div className="row">
        <h2 class="news-heading">Latest Blog</h2> 
        </div>
    
    <NewLaunch/>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
    <div class="col-lg-4">
    <NewLaunch/>
    <NewLaunch/>
    <NewLaunch/>
        </div>
</div>
    {/* End of Latest Blog section */} 
    





                </div>
                <div class="col-lg-2">
                <img src={'./avatars/Banner.png'} style={{height:'auto',width:'100%'}} />
                    <img src={'./avatars/Banner.png'} style={{height:'auto',width:'100%'}} />
                    <img src={'./avatars/Banner.png'} style={{height:'auto',width:'100%'}} />
                    <img src={'./avatars/Banner.png'} style={{height:'auto',width:'100%'}} />
                    <img src={'./avatars/Banner.png'} style={{height:'auto',width:'100%'}} />
                    <img src={'./avatars/Banner.png'} style={{height:'auto',width:'100%'}} />
                    <img src={'./avatars/Banner.png'} style={{height:'auto',width:'100%'}} />
                    
                    </div>
            </div>
            {/* Inside Wreckers section */} 
            <div className="row processbg">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                <div class="row">
    <div class="col-md-6">
    <Process />
    </div>
    <div class="col-md-6">
    <img src={'./avatars/ProcessCircle.png'} style={{height:'100%',width:'100%'}} />
    </div>
</div>
                </div>
                <div className="col-lg-2"></div>
            </div>



{/* End of Inside wreckers section */} 
{/* contact section */} 
<div class="row">
    <div className="col-lg-2"></div>
    <div className="col-lg-8">
    <Contact />
    </div>
    <div className="col-lg-2"></div>

</div>


{/* End of contact section */} 
            </div>
        )
    }
}

export default Homepage;