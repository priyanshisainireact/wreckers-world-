import React, { Component } from 'react';
// import Feed from 'rss-to-json';
// class NewLaunch extends Component{
//     render(){
//         return(

//     <>
//     <h2 className="newlaunchtitle">Tesla ‘not a real automaker’ despite valuation: Toyoda</h2>
//     <img src={'./avatars/bidcar.jpg'} style={{height:'130px',width:'100%'}} />
  
//    </>

//         )
//     }
// }


class NewLaunch extends Component {
    constructor(props) {
      super(props);
      this.state = {
        recentBlogPost: {
          name: '',
          url: '',
          thumbnail:'',
        }
      }
    }
  
    NewLaunch() {
      var request = new XMLHttpRequest();
      request.onreadystatechange = () => {
        if (request.readyState == 4 && request.status == 200) {
          var myObj = JSON.parse(request.responseText);
          for (var i = 0; i < 1; i ++) {
            this.setState({
              recentBlogPost: {
                name: myObj.items[i].title,
                url: myObj.items[i].link,
                enclosure: myObj.items[i].enclosure.link,
                thumbnail: myObj.items[i].thumbnail
              }
            });
          }
        }
      }
      request.open("GET", this.props.url, true);
      request.send();
    }
  
    componentDidMount() {
      {this.NewLaunch()}
    }
  
    render() {
      return (
        <div>
         
            <a target="_blank" href={this.state.recentBlogPost.url}>{this.state.recentBlogPost.name}</a>
            <img src={this.state.recentBlogPost.thumbnail || this.state.recentBlogPost.enclosure}/>
        </div>
      );
    }
  }





export default NewLaunch;