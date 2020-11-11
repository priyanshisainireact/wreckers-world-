import React, { Component } from 'react';

class CityWreckers extends Component{
    render(){
        return(
<div class="col-lg-3 cities-card">
                              <div class="row">
                                  <div class="col-lg-6">
                                  <h4 className="city-name">Auckland</h4>
                                  <p className="yardcount">2 yards</p>
                                  </div>
                                  <div class="col-lg-6">
                                  <img src={'./avatars/m.png'} style={{height:'50px',width:'50px',padding:'10px'}} /> 
                                      </div>
                              </div>
                          </div>
        )
    }
}

export default CityWreckers;