import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import GalleryList from '../Gallery List/GalleryList';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      galleryData: []
    }
  }

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

  updateGalleryImages(id) {
    Axios.put('/gallery/like/${id}')
      .then((response) => {
        console.log('response: ', response);
        this.getGalleryImages();
      })
  }
  
  clickLike = (event) => {
    const id = event.target.dataset.id;
    this.updateGalleryImages(id);
  }

  render() {
   return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <GalleryList
            galleryData={this.state.galleryData}
            clickLike={this.clickLike}
        />
      </div>
    );
  }
}

export default App;
