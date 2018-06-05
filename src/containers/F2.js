import React from 'react';
import img from '../assets/img/仁园F2后门.jpg';
import web3D from '../components/web3D';

export default class F2 extends React.Component {
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
