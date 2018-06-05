import React from 'react';
import img from '../assets/img/C区正门.jpg';
import web3D from '../components/web3D';

export default class Czheng extends React.Component {
  componentDidMount() {
    web3D(img)
  }

  render() {
    return (
      <div id="canvas-frame">
      </div>
    )
  }
}
