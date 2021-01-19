import React, { Component } from "react";
import './video.css';
class Video extends Component {
  render() {
    return (
      <section id="video">
        <div className="overlay">
          <div className="container-fluid video-padding">
            <div className="row ">
              <div className="col-lg-2"></div>
              <div className="col-lg-8  width-md">
                <h3 className="green-text">Latest</h3>
                <h2 className="white">Videos, tutorials and guidelines</h2>
                <div className="row videocard" >
                  <div className="col-lg-7">
                    <iframe
                      width="100%"
                      height="450"
                      src="https://www.youtube.com/embed/vXePDg9V6VA"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen=""
                    ></iframe>
                  </div>
                  <div className="col-lg-5">
                    <div className="row">
                      <div className="col-6">
                        <iframe
                          width="100%"
                          height="100"
                          src="https://www.youtube.com/embed/XEhZk_ZHwcs"
                          frameborder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen=""
                        ></iframe>
                      </div>
                      <div className="col-6">
                        <h5 className="white">
                          Cash For Cars Company in Daceyville
                        </h5>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <iframe
                          width="100%"
                          height="100"
                          src="https://www.youtube.com/embed/idGZFEKALHM"
                          frameborder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen=""
                        ></iframe>
                      </div>
                      <div className="col-6">
                        <h5 className="white">
                          Grande Wreckers Bankstown - Car Wreckers
                        </h5>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <iframe
                          width="100%"
                          height="100"
                          src="https://www.youtube.com/embed/23JrEe3cEhQ"
                          frameborder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen=""
                        ></iframe>
                      </div>
                      <div className="col-6">
                        <h5 className="white">
                          Cash For Car Williamtown |Samir Car Removals
                        </h5>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <iframe
                          width="100%"
                          height="100"
                          src="https://www.youtube.com/embed/r727H3rpNOI"
                          frameborder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen=""
                        ></iframe>
                      </div>
                      <div className="col-6">
                        <h5 className="white">
                          Cash For Cars Company in Hillsborough
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Video;
