import 'aframe';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <a-scene>
        <a-box 
            geometry="primitive: box"
            position="-1 0.5 -3"
            rotation="0 45 0"
            material="color: #4CC3D9"
            />

        <a-sphere 
            geometry="primitive: sphere; radius: 1.25;"
            position="0 1.25 -5"
            material="color: #EF2D5E" />

        <a-cylinder 
            geometry="primitive: cylinder; radius: 0.5, height: 1.5"
            position="1 0.75 -3"
            material="color: #FFC65D"/>

        <a-plane 
            geometry="primitive: plane; width: 4; height: 4"
            position="0 0 -4"
            rotation="-90 0 0"
            material="color: #7BC8A4"/>

        <a-dodecahedron 
            color="#FF926B"
            radius="5"
            position="0 -1 -30"></a-dodecahedron>
        
        <a-sky src={require('./img.jpg')} />
      </a-scene>
    );
  }
}

export default App;
