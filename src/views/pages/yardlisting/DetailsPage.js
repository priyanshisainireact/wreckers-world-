import React from 'react';
import './yardlist.css';

class DetailsPage extends React.Component{
    render(){
        return(
            
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">

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

<div className="relateditem">
<h5>Related Articles</h5>
<div className="detailpictures">
 
                        <div className="pictureone">
                        <img src={'./avatars/fiveb.png'} className="relatedimage"/>
                        <h3 className="relateditemheading">5B Car Removal</h3>
                        </div>
                        <div className="pictureone">
                        <img src={'./avatars/Viper.png'} className="relatedimage" /> 
                        <h3 className="relateditemheading">Viper Cash For Car</h3>
                        </div>
                         <div className="pictureone">
                        <img src={'./avatars/grande.png'} className="relatedimage" />
                        <h3 className="relateditemheading">Grande Wreckers</h3>
                        </div>
                        <div className="pictureone">
                        <img src={'./avatars/samirtruck.png'} className="relatedimage" />
                        <h3 className="relateditemheading">Samir Truck Wreckers</h3>
                        </div>
                       
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

export default DetailsPage;