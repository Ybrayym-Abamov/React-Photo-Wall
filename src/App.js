import React, { Component } from "react";
import "./App.css";

// This URL can be combined with a photo id to fetch a photo.
const PHOTO_URL = photoId => `https://picsum.photos/id/${photoId}/200/200`;
// This URL can be used to get an array of objects that contain information
// about various photos.
const PHOTO_LIST_URL = "https://picsum.photos/list";

class App extends Component {
  // 1. Declare a state object that will be used to track an array of photos
  state = {
    photos: []
  };
  // 2. Declare a life cycle method
  // This life cycle method should:
  //  - will be called after the component is initially rendered
  // - will fetch an array of photos
  // - will add that array of photos to state once received
  componentDidMount() {
    fetch(PHOTO_LIST_URL)
      .then(res => res.json())
      .then(
        result =>
          this.setState({
            photos: result
          })
      )
  }
  render() {
    const { photos = [] } = this.state;
    return (
      <React.Fragment>
        {console.log(photos)}
        <header>
          <h1>Photo Wall</h1>
        </header>
        <div className="collage">
          {/* We use map here because Array.prototype.map is an expression,
           * and for loops are not. You'll learn more about this soon!
           */}
          {photos.map(photo => (
            <img
              alt={/* 3. Fill me in with the photo's filename */ photo.filename}
              key={/* 4. Fill me in with the photo's id */ photo.id}
              src={/* 5. Fill me in with the photo's URL */ PHOTO_URL(photo.id)}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default App;





// https://gitlab.com/Ybrayym/assessment---react-photo-wall   -------> URL of the assessment!!!