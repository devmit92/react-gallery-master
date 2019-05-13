import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';

class App extends Component {
  state = {
    galleryItems: [],
  };

  componentDidMount() {
    this.getGalleryImages();
  }
  
  
  getGalleryImages() {
    Axios.get('/gallery')
      .then((response) => {
        console.log('response: ', response);
        this.setState({
          galleryItems: response.data,
        })
      })
  }

  updateGalleryImages = (event) => {
    const imageIndex = event.target.dataset.id;
    console.log(imageIndex);
    const imageID = this.state.galleryItems[imageIndex].id;
 

    Axios.put('/gallery/like/' + imageID)
      .then((response) => {
        console.log('response: ', response);
        this.getGalleryImages();
      })
  }
  

  render() {
    const pictureList = this.state.galleryItems.map((indvItem, index) => {

      const showLikes = true;
      let likeElement = <p>Likes: {indvItem.likes}</p>;

      if (!showLikes) {
        likeElement = <p></p>;
      }

      return ( <p key={index}>
          <img src={indvItem.path} alt={indvItem.description}/>
          <br/>
          {indvItem.description}
          <br/>
          {likeElement}
          <br/>
          <button data-id={index} onClick={this.updateGalleryImages}>Love It!</button>
        </p>
      )
    });
  

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
       {pictureList}
      </div>
    );
  }
}

export default App;
