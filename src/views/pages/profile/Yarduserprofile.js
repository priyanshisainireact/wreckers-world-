import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './profile.css';

class YarduserProfile extends Component{
    render() {
        return (

        <div className="container">
            <div class="row"><h2 class="news-heading">Yard User Profile !</h2></div>
          <div className="row">
          <div className="col-lg-4">
                  <div className="usercarlist">
                   <div className="profilename">
                   <img src={'./avatars/download.png'} className="circleimg"/>
                   <h2 className="username">User Name</h2>
                   </div>
                   <div className="Personaldetails">
                      <p className="details"><span className="boldtext">Email :</span>  admin@gmail.com</p>
                      <p className="details"><span className="boldtext">Phone Number :</span> 15457864</p>
                      <p className="details"><span className="boldtext">City :</span> Sydney</p>
                      <p className="details"><span className="boldtext">state :</span> NSW</p>
                      <p className="details"><span className="boldtext">Country :</span> Australia</p>
                      <p className="details"><span className="boldtext">Zip :</span> 3453</p>
                  </div>
                  <div className="Personaldetails">
                      <p className="details"><span className="boldtext">Bid Placed :</span> 3</p>
                      <p className="details"><span className="boldtext">Bid Expired :</span> 1</p>
                      <p className="details"><span className="boldtext">Bid  Active :</span> 2</p>
                      <p className="details"><span className="boldtext">Total Spent:</span> $450</p>
                  </div>
                  <div className="editprofile">
                      <p className="edit">Edit Profile <i class="fa fa-pencil-square-o" aria-hidden="true"></i></p>
                  </div>
                  </div>
              </div>
              <div className="col-lg-8">
               <div className="usercarlist">




               <ul class="nav nav-pills" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" data-toggle="pill" href="#home"> Bidding </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-toggle="pill" href="#menu1"> Yard Detail</a>
    </li>
   
  </ul>
  
  
  <div class="tab-content">
    <div id="home" class="container tab-pane active">
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
                               <Link to="./cardetail"><button type="button" className="managebtn">Manage Detail</button></Link>     
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
    <div id="menu1" class="container tab-pane fade">
    <div className="detailpictures">
                    <div className="yardlogo">
                    <img src={'./avatars/samirtruck.png'} />
                    </div>
  
                   <div className="yarddetail">
                   <h2 className="Detail-heading"> Samir Truck Wreckers</h2> 
                  
                   </div>
                    </div>
                    

  <div className="socialmedia">
                    <a href="#" class="fa fa-facebook"> Facebook</a>
                    <a href="#" class="fa fa-twitter"> Twitter</a>
                    <a href="#" class="fa fa-pinterest"> Pinterest</a>
                    <a href="#" class="fa fa-linkedin"> Linkedin</a>
                    </div>
                    <div className="listingdetails">
                    <ul className="formlist">
                     <li className="listcontent"><span>Contact Number:</span> 0402 639 249</li>
                     <li className="listcontent"><span>Email Address:</span>  samircarremoval@gmail.com</li>
                     <li className="listcontent"><span>Country :</span>  Australia</li>
                     <li className="listcontent"><span>City Name:</span> 0402 639 249</li>
                     <li className="listcontent"><span>Website link of the business:</span> 0402 639 249</li>
                     <li className="listcontent"><span>Services provided by the business:</span> Wreckers</li>
                     <li className="listcontent"><span>Additional Information:</span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li>
                     <li className="listcontent"><span>Picture of the yard:</span></li>
                     <div className="detailpictures">
                        <div className="pictureone">
                        <img src={'./avatars/yard.jpeg'} />
                        </div>
                        <div className="pictureone">
                        <img src={'./avatars/yard.jpeg'} /> 
                        </div>
                        <div className="pictureone">
                        <img src={'./avatars/yard.jpeg'} />
                        </div>
                        <div className="pictureone">
                        <img src={'./avatars/yard.jpeg'} />
                        </div>
                       
                    </div>
                    </ul>
  
                   
                    </div>
                    <div className="editprofile">
                      <p className="edit">Edit Yard Detail <i class="fa fa-pencil-square-o" aria-hidden="true"></i></p>
                  </div>
    </div>
   
  </div>

            











               
               </div>
              </div>
              
          </div>
        </div>


        )
    }
}

export default YarduserProfile;