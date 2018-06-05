import React from 'react';
import img from '../assets/img/知园E2E3.jpg';
import web3D from '../components/web3D';

export default class E2E3 extends React.Component {
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
